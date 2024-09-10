import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";

// MarkdownFetcher fetches Markdown content and converts it into a JSX element.
// Markdown styling is automatically handled using Tailwind Prose.
export default async function MarkdownFetcher({ url }: { url: string }) {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error("Failed to fetch the markdown file");
    }

    const markdown = await res.text();

    try {
      const result = await MDXRemote({
        source: markdown,
      });

      return <div className="wrapper">{result}</div>;
    } catch (error) {
      console.error(`Error compiling markdown from ${url}:`, error);
      return (
        <div>
          Failed to load content, compilation failed. Please try again later.
        </div>
      );
    }
  } catch (error) {
    console.error(`Error fetching markdown from ${url}:`, error);
    return (
      <div>Failed to load content, fetch failed. Please try again later.</div>
    );
  }
}
