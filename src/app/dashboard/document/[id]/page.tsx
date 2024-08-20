import MarkdownFetcher from "~/components/markdown-fetcher";
import { Modal } from "~/components/modal";
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
    <article className="prose overflow-auto py-4">
      <MarkdownFetcher url={document.url} />
    </article>
  );
}
