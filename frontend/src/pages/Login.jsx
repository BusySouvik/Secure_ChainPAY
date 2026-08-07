import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    if (
      email === "admin@securechainpay.com" &&
      password === "admin123"
    ) {
      navigate("/home");
    } else {
      alert("Invalid Email or Password");
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg,#1E3A8A,#2563EB)"
      }}
    >
      <div
        style={{
          width: "430px",
          background: "white",
          borderRadius: "20px",
          padding: "40px",
          boxShadow: "0 20px 40px rgba(0,0,0,.2)"
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "35px"
          }}
        >
          <h1
            style={{
              color: "#1E3A8A",
              marginBottom: "10px"
            }}
          >
            🔐 SecureChainPay
          </h1>

          <p
            style={{
              color: "#64748B"
            }}
          >
            AI Powered Payment Intelligence
          </p>
        </div>

        <form onSubmit={handleLogin}>

          <label>Email</label>

          <input
            type="email"
            placeholder="admin@securechainpay.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "20px",
              fontSize: "14px"
            }}
          >
            <label>
              <input type="checkbox" /> Remember Me
            </label>

            <span
              style={{
                color: "#2563EB",
                cursor: "pointer"
              }}
            >
              Forgot Password?
            </span>
          </div>

          <button
            style={{
              width: "100%",
              padding: "15px",
              background: "#2563EB",
              color: "white",
              border: "none",
              borderRadius: "12px",
              fontSize: "17px",
              fontWeight: "bold",
              cursor: "pointer"
            }}
          >
            Login
          </button>

        </form>

        <hr style={{ margin: "30px 0" }} />

        <div
          style={{
            background: "#EFF6FF",
            padding: "15px",
            borderRadius: "10px",
            fontSize: "14px"
          }}
        >
          <b>Demo Credentials</b>

          <br /><br />

          Email:
          <br />
          admin@securechainpay.com

          <br /><br />

          Password:
          <br />
          admin123
        </div>

      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "14px",
  marginTop: "8px",
  marginBottom: "20px",
  borderRadius: "10px",
  border: "1px solid #CBD5E1",
  fontSize: "16px",
  boxSizing: "border-box"
};

export default Login;