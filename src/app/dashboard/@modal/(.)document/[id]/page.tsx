import MarkdownFetcher from "~/components/markdown-fetcher";
import { Modal } from "~/components/modal";
import { getDocument } from "~/server/queries";

export default async function DocumentModal({
  params: { id: documentId },
}: {
  params: { id: string };
}) {
  const idNumber = Number(documentId);

  if (Number.isNaN(idNumber)) throw new Error("Invalid document id");

  const document = await getDocument(idNumber);
  return (
    <Modal>
      <article className="prose overflow-auto px-8 py-4">
        <MarkdownFetcher url={document.url} />
      </article>
    </Modal>
  );
}
