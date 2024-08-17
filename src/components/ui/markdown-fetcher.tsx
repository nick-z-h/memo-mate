import React from "react";

import { MDXRemote } from "next-mdx-remote/rsc";

export default async function MarkdownFetcher({ url }: { url: string }) {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch the markdown file");
  }

  const markdown = await res.text();

  return <MDXRemote source={markdown} />;
}
