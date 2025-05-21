export default function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
        404 - Page Not Found
      </h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
}
