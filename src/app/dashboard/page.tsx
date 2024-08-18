import { Suspense } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "~/components/ui/card";
import { db } from "~/server/db";

import MarkdownFetcher from "~/components/markdown-fetcher";

import { Skeleton } from "~/components/ui/skeleton";
import React from "react";

// Page has dynamic data
// => We want to ensure it is dynamically rendered
export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/3b264d81-4160-495c-ba00-62b29f52479a-w1l1jd.mdx",
  "https://utfs.io/f/6e6833eb-104c-4ef6-9ec8-3f2f7ab42b62-w1l1jc.mdx",
  "https://utfs.io/f/72dfa17e-e39b-439f-b69c-065861c56255-w1l1jb.mdx",
  "https://utfs.io/f/03933592-e1c1-4abc-94fa-01dc8f40ecd4-fgnuj6.mdx",
];

const mockDocuments = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function DashboardPage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);
  return (
    <div className="flex flex-wrap gap-4 text-wrap p-4">
      <Suspense fallback={<Skeleton className="h-80 w-96 rounded-xl" />}>
        {mockDocuments.map((document) => (
          <Card key={document.id} className="h-80 w-96">
            <CardHeader>
              <CardTitle>Title</CardTitle>
              <article className="prose lg:prose-xl h-64 w-80 overflow-auto">
                <MarkdownFetcher url={document.url} />
              </article>
            </CardHeader>
            <CardContent></CardContent>
          </Card>
        ))}
      </Suspense>
    </div>
  );
}
