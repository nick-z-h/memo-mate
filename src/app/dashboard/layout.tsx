export default function DashboardLayout({
  children,
  modal,
}: Readonly<{ children: React.ReactNode; modal: React.ReactNode }>) {
  return (
    <div>
      {children}
      {modal}
      <div id="modal-root" />
    </div>
  );
}
