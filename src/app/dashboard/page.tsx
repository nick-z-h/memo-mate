import { Suspense } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "~/components/ui/card";
import MarkdownFetcher from "~/components/markdown-fetcher";
import { Skeleton } from "~/components/ui/skeleton";
import React from "react";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getDocumentsForCurrentUser } from "~/server/queries";
import Link from "next/link";

// Page has dynamic data
// => We want to ensure it is dynamically rendered
export const dynamic = "force-dynamic";

async function Documents() {
  const documents = await getDocumentsForCurrentUser();
  return (
    <>
      {documents.map((document) => (
        <Card key={document.id} className="relative h-auto w-96">
          <Link
            className="after:absolute after:inset-0"
            href={`/dashboard/document/${document.id}`}
          />
          <CardHeader>
            <CardTitle>{document.title}</CardTitle>
            <CardDescription>
              {new Date(document.createdAt).toLocaleDateString()}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <article className="prose h-56 w-80 overflow-auto">
              <MarkdownFetcher url={document.url} />
            </article>
          </CardContent>
        </Card>
      ))}
    </>
  );
}

export default function DashboardPage() {
  return (
    <div className="flex flex-wrap justify-center gap-4 text-wrap p-4">
      <SignedIn>
        <Suspense fallback={<Skeleton className="h-80 w-96 rounded-xl" />}>
          <Documents />
        </Suspense>
      </SignedIn>
      <SignedOut>
        <div className="h-full w-full text-center text-3xl">
          Sign in to use the dashboard!
        </div>
      </SignedOut>
    </div>
  );
}
