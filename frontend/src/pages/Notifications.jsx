import Navbar from "../components/Navbar";
import BottomNav from "../components/BottomNav";

const notifications = [
  {
    title: "Payment Analysis Completed",
    message: "Your transaction TXN1001 has been analyzed successfully.",
    time: "2 minutes ago"
  },
  {
    title: "Fraud Alert",
    message: "A high-risk payment was detected. Please verify before retrying.",
    time: "1 hour ago"
  },
  {
    title: "Blockchain Verified",
    message: "Your payment report has been securely recorded.",
    time: "Yesterday"
  }
];

function Notifications() {
  return (
    <>
      <Navbar />

      <div
        style={{
          background: "#F8FAFC",
          minHeight: "100vh",
          padding: "40px",
          paddingBottom: "120px"
        }}
      >
        <h1>🔔 Notifications</h1>

        {notifications.map((item, index) => (
          <div
            key={index}
            style={{
              background: "white",
              marginTop: "20px",
              padding: "20px",
              borderRadius: "15px",
              boxShadow: "0 4px 12px rgba(0,0,0,.08)"
            }}
          >
            <h3>{item.title}</h3>
            <p>{item.message}</p>
            <small style={{ color: "#64748B" }}>{item.time}</small>
          </div>
        ))}
      </div>

      <BottomNav />
    </>
  );
}

export default Notifications;