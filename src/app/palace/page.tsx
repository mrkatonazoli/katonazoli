export default function PalacePage() {
  return (
    <div style={{ position: "fixed", inset: 0, width: "100%", height: "100%" }}>
      <iframe
        src="/palace-app.html"
        style={{ width: "100%", height: "100%", border: "none", display: "block" }}
        title="Hotel Palace Hévíz – Dashboard 2026"
        allowFullScreen
      />
    </div>
  );
}
