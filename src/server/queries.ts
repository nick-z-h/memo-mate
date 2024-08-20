import "server-only";
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";

export async function getDocumentsForCurrentUser() {
  const user = auth();

  // if the user is not logged in/ has not identifier
  if (!user.userId) throw new Error("Unauthorized");

  const documents = await db.query.documents.findMany({
    where: (model, { eq }) => eq(model.userId, user.userId),
    orderBy: (model, { desc }) => desc(model.id),
  });

  return documents;
}
