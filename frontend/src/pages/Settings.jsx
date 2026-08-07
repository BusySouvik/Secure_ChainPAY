import Navbar from "../components/Navbar";
import BottomNav from "../components/BottomNav";

function Settings() {
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
        <h1>⚙️ Settings</h1>

        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "15px",
            marginTop: "25px"
          }}
        >
          <h3>Preferences</h3>

          <p>🔔 Notifications</p>

          <p>🌙 Dark Mode</p>

          <p>🌐 Language</p>

          <p>🔒 Privacy & Security</p>

          <p>ℹ️ About SecureChainPay</p>
        </div>
      </div>

      <BottomNav />
    </>
  );
}

export default Settings;