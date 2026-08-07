import Navbar from "../components/Navbar";
import StatsCards from "../components/StatsCards";

function Dashboard() {
  return (
    <>
      <Navbar />

      <div
        style={{
          padding: "40px",
          background: "#F1F5F9",
          minHeight: "100vh"
        }}
      >
        <h1
          style={{
            color: "#1E3A8A",
            marginBottom: "10px"
          }}
        >
          SecureChainPay Dashboard
        </h1>

        <p
          style={{
            color: "#475569",
            marginBottom: "30px"
          }}
        >
          AI-powered payment diagnostics with fraud detection and blockchain-backed verification.
        </p>

        <StatsCards />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "30px"
          }}
        >
          <div
            style={{
              background: "white",
              padding: "25px",
              borderRadius: "15px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
            }}
          >
            <h2>📝 Transaction Details</h2>

            <p style={{ marginTop: "20px", color: "#64748B" }}>
              Transaction form will be added here.
            </p>
          </div>

          <div
            style={{
              background: "white",
              padding: "25px",
              borderRadius: "15px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
            }}
          >
            <h2>🤖 AI Analysis</h2>

            <p style={{ marginTop: "20px", color: "#64748B" }}>
              AI results will appear here.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;