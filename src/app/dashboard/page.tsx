import { Suspense } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "~/components/ui/card";
import { db } from "~/server/db";

import MarkdownFetcher from "~/components/markdown-fetcher";

import { Skeleton } from "~/components/ui/skeleton";
import React from "react";

// Page has dynamic data
// => We want to ensure it is dynamically rendered
export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const documents = await db.query.documents.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });
  return (
    <div className="flex flex-wrap gap-4 text-wrap p-4">
      <Suspense fallback={<Skeleton className="h-80 w-96 rounded-xl" />}>
        {documents.map((document) => (
          <Card key={document.id} className="h-80 w-96">
            <CardHeader>
              <CardTitle>{document.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <article className="prose h-56 w-80 overflow-auto">
                <MarkdownFetcher url={document.url} />
              </article>
            </CardContent>
          </Card>
        ))}
      </Suspense>
    </div>
  );
}
