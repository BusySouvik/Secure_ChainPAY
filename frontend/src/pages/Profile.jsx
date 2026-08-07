import Navbar from "../components/Navbar";
import BottomNav from "../components/BottomNav";

function Profile() {
  return (
    <>
      <Navbar />

      <div
        style={{
          padding: "40px",
          background: "#F8FAFC",
          minHeight: "100vh"
        }}
      >
        <div
          style={{
            background: "white",
            maxWidth: "700px",
            margin: "auto",
            padding: "35px",
            borderRadius: "20px",
            boxShadow: "0 4px 15px rgba(0,0,0,.08)"
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                width: "110px",
                height: "110px",
                borderRadius: "50%",
                background: "#2563EB",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "42px",
                margin: "auto"
              }}
            >
              👤
            </div>

            <h2 style={{ marginTop: "20px" }}>
              Souvik Maji
            </h2>

            <p style={{ color: "#64748B" }}>
              Premium User
            </p>
          </div>

          <hr style={{ margin: "30px 0" }} />

          <h3>Account Details</h3>

          <p>
            📧 <strong>Email:</strong> souvik@example.com
          </p>

          <p>
            📱 <strong>Phone:</strong> +91 XXXXX XXXXX
          </p>

          <p>
            🏦 <strong>Primary Bank:</strong> State Bank of India
          </p>

          <p>
            💳 <strong>Payments Analyzed:</strong> 24
          </p>

          <p>
            🛡 <strong>Fraud Alerts Received:</strong> 2
          </p>

          <p>
            🔗 <strong>Blockchain Verified:</strong> 24
          </p>

          <hr style={{ margin: "30px 0" }} />

          <button
            style={{
              width: "100%",
              background: "#2563EB",
              color: "white",
              border: "none",
              padding: "15px",
              borderRadius: "10px",
              marginBottom: "15px",
              cursor: "pointer"
            }}
          >
            ⚙ Account Settings
          </button>

          <button
            style={{
              width: "100%",
              background: "#DC2626",
              color: "white",
              border: "none",
              padding: "15px",
              borderRadius: "10px",
              cursor: "pointer"
            }}
          >
            Logout
          </button>
        </div>
      </div>

      <BottomNav />
    </>
  );
}

export default Profile;