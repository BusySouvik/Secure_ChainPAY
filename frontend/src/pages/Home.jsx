import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import BottomNav from "../components/BottomNav";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Home() {
  const navigate = useNavigate();
  const hour = new Date().getHours();

const greeting =
    hour < 12
        ? "Good Morning"
        : hour < 18
        ? "Good Afternoon"
        : "Good Evening";
  const [stats, setStats] = useState({

    total_transactions: 0,

    successful: 0,

    failed: 0,

    pending: 0,

    fraud_alerts: 0

});

const [recentPayments, setRecentPayments] = useState([]);

useEffect(() => {

    fetchDashboard();

    fetchRecentPayments();

}, []);

async function fetchDashboard() {

    try {

        const response = await axios.get(

            "https://secure-chainpay.onrender.com/history/dashboard/stats"

        );

        setStats(response.data);

    }

    catch(err){

        console.log(err);

    }

}


async function fetchRecentPayments() {

    try {

        const response = await axios.get(
            "http://127.0.0.1:8000/history/"
        );

        setRecentPayments(response.data.slice(0, 5));

    } catch (err) {

        console.log(err);

    }

}

  

  return (
    <>
      <Navbar />

      <div
        style={{
          background: "#F8FAFC",
          minHeight: "100vh",
          padding: "35px",
          paddingBottom: "120px",
        }}
      >
        {/* Welcome */}

        <h1
          style={{
            color: "#1E3A8A",
            marginBottom: "10px",
          }}
        >
          👋 {greeting}, Souvik
        </h1>

        <p
          style={{
            color: "#64748B",
            fontSize: "18px",
          }}
        >
          Need help with a payment today?
        </p>

        <button
          onClick={() => navigate("/analyze")}
          style={{
            marginTop: "25px",
            background: "#2563EB",
            color: "white",
            border: "none",
            borderRadius: "12px",
            padding: "16px 28px",
            cursor: "pointer",
            fontSize: "17px",
            fontWeight: "bold",
          }}
        >
          ✨ Explain My Payment
        </button>

        {/* Summary */}

        <h2
          style={{
            marginTop: "45px",
            marginBottom: "20px",
            color: "#1E293B",
          }}
        >
          📈 Today's Summary
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: "20px",
          }}
        >
          <StatCard
    value={stats.total_transactions}
    title="Payments Analyzed"
    color="#2563EB"
/>

<StatCard
    value={stats.successful}
    title="Successful"
    color="#16A34A"
/>

<StatCard
    value={stats.fraud_alerts}
    title="Fraud Alerts"
    color="#DC2626"
/>

<StatCard
    value={stats.failed}
    title="Failed Payments"
    color="#7C3AED"
/>
        </div>

        {/* Quick Actions */}

        <h2
          style={{
            marginTop: "45px",
            marginBottom: "20px",
          }}
        >
          ⚡ Quick Actions
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: "20px",
          }}
        >
          <ActionCard
            emoji="🧠"
            title="Analyze"
            onClick={() => navigate("/analyze")}
          />

          <ActionCard
            emoji="📜"
            title="History"
            onClick={() => navigate("/history")}
          />

          <ActionCard
            emoji="🤖"
            title="AI Assistant"
            onClick={() => navigate("/assistant")}
          />

          <ActionCard
            emoji="👤"
            title="Profile"
            onClick={() => navigate("/profile")}
          />
        </div>

        {/* Recent Payments */}

        <h2
          style={{
            marginTop: "45px",
            marginBottom: "20px",
          }}
        >
          💳 Recent Payments
        </h2>

        {recentPayments.map((payment) => (
          <div
            key={payment.id}
            style={{
              background: "white",
              borderRadius: "15px",
              padding: "20px",
              marginBottom: "15px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              boxShadow: "0 5px 12px rgba(0,0,0,.07)",
            }}
          >
            <div>
              <h3>₹{payment.amount}</h3>

              <p style={{ color: "#64748B" }}>{payment.transaction_id}</p>

              <small>
    {new Date(payment.created_at).toLocaleString()}
</small>
            </div>

            <div style={{ textAlign: "right" }}>
              <p
                style={{
                  color:
                    payment.status === "FAILED"
                      ? "#DC2626"
                      : "#16A34A",
                  fontWeight: "bold",
                }}
              >
                {payment.status}
              </p>

              <button
                onClick={() => navigate("/history")}
                style={{
                  background: "#2563EB",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  padding: "8px 15px",
                  cursor: "pointer",
                }}
              >
                View
              </button>
            </div>
          </div>
        ))}

        {/* AI Tip */}

        <div
          style={{
            marginTop: "45px",
            background: "#DBEAFE",
            padding: "25px",
            borderRadius: "15px",
          }}
        >
          <h2>🧠 AI Tip</h2>

          <p
            style={{
              fontSize: "17px",
              color: "#334155",
            }}
          >
            Never share your UPI PIN or OTP with anyone—even if they claim to
            be from your bank. SecureChainPay will never ask for confidential
            banking credentials.
          </p>
        </div>
      </div>

      <BottomNav />
    </>
  );
}

function StatCard({ value, title, color }) {
  return (
    <div
      style={{
        background: "white",
        padding: "25px",
        borderRadius: "15px",
        textAlign: "center",
        boxShadow: "0 5px 12px rgba(0,0,0,.07)",
      }}
    >
      <h1
        style={{
          color: color,
          marginBottom: "10px",
        }}
      >
        {value}
      </h1>

      <p>{title}</p>
    </div>
  );
}

function ActionCard({ emoji, title, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        background: "white",
        padding: "25px",
        borderRadius: "15px",
        textAlign: "center",
        cursor: "pointer",
        boxShadow: "0 5px 12px rgba(0,0,0,.07)",
        transition: ".3s",
      }}
    >
      <h1>{emoji}</h1>

      <h3>{title}</h3>
    </div>
  );
}

export default Home;