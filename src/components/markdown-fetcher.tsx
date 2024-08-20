import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function MarkdownFetcher({ url }: { url: string }) {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error("Failed to fetch the markdown file");
    }

    const markdown = await res.text();

    return (
      <div className="wrapper">
        <MDXRemote source={markdown} />
      </div>
    );
  } catch (error) {
    console.error(`Error fetching markdown from ${url}:`, error);
    return <div>Failed to load content. Please try again later.</div>;
  }
}
