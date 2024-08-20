"use client";

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
    <div
      className="modal-backdrop cursor-pointer"
      onClick={handleBackdropClick}
    >
      <dialog ref={dialogRef} className="modal cursor-auto" onClose={onDismiss}>
        <button onClick={onDismiss} className="close-button" />
        {children}
      </dialog>
    </div>,
    document.getElementById("modal-root")!,
  );
}
