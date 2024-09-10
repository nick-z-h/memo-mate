import { auth } from "@clerk/nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { db } from "~/server/db";
import { documents } from "~/server/db/schema";
import { ratelimit } from "~/server/ratelimit";

const f = createUploadthing();

export const ourFileRouter = {
  documentUploader: f({
    "text/markdown": { maxFileSize: "4MB", maxFileCount: 50 },
  })
    .middleware(async () => {
      // Middleware runs on server BEFORE upload
      const user = auth();

      // Reject user-upload if unauthorized
      if (!user.userId) throw new UploadThingError("Unauthorized");

      const { success } = await ratelimit.limit(user.userId);

      if (!success) throw new UploadThingError("Ratelimited");

      // Whatever is returned here is accessible in onUploadComplete as `metadata`
      return { userId: user.userId };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      // Runs on the server AFTER upload
      console.log("Upload complete for userId:", metadata.userId);

      await db.insert(documents).values({
        userId: metadata.userId,
        url: file.url,
        title: file.name,
      });

      console.log("file url", file.url);

      // Returned value is accessible clientside through the `onClientUploadComplete` callback
      return { uploadedBy: metadata.userId };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
