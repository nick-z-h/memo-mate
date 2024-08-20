import MarkdownFetcher from "~/components/markdown-fetcher";
import { getDocument } from "~/server/queries";

export default async function DocumentPage({
  params: { id: documentId },
}: {
  params: { id: string };
}) {
  const idNumber = Number(documentId);

  if (Number.isNaN(idNumber)) throw new Error("Invalid document id");

  const document = await getDocument(idNumber);
  return (
    <div className="flex flex-wrap justify-center gap-4 text-wrap p-4">
      <article className="prose overflow-auto py-4">
        <MarkdownFetcher url={document.url} />
      </article>
    </div>
  );
}
