import Link from "next/link";
import { Suspense } from "react";
import MarkdownFetcher from "~/components/ui/markdown-fetcher";

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

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        <Suspense fallback={<>Loading...</>}>
          {mockDocuments.map((document) => (
            <article key={document.id} className="prose lg:prose-xl">
              <MarkdownFetcher url={document.url} />
            </article>
          ))}
        </Suspense>
      </div>
    </main>
  );
}
