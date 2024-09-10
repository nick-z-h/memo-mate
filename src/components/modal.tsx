"use client"; // ensures client-side rendering instead of SSR or SSG

import { type ElementRef, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  // When the modal closes, navigate back to the previous URL.
  // This approach handles scenarios where users share previews with others gracefully.
  function onDismiss() {
    router.back();
  }

  function handleBackdropClick(event: React.MouseEvent) {
    // Ensure that the backdrop click is outside the modal
    if (event.target === dialogRef.current) {
      onDismiss();
    }
  }

  return createPortal(
    <div className="cursor-pointer" onClick={handleBackdropClick}>
      <dialog ref={dialogRef} className="cursor-auto" onClose={onDismiss}>
        <button onClick={onDismiss} className="close-button" />
        {children}
      </dialog>
    </div>,
    document.getElementById("modal-root")!,
  );
}
