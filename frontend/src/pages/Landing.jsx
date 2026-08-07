import { useNavigate } from "react-router-dom";

function Landing() {

    const navigate = useNavigate();

    return (

        <div
            style={{
                minHeight: "100vh",
                background: "linear-gradient(135deg,#1E3A8A,#2563EB)",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "40px"
            }}
        >

            <div
                style={{
                    maxWidth: "1100px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "60px"
                }}
            >

                <div>

                    <h1
                        style={{
                            fontSize: "56px",
                            marginBottom: "15px"
                        }}
                    >
                        🔐 SecureChainPay
                    </h1>

                    <h2
                        style={{
                            fontWeight: "400",
                            marginBottom: "25px"
                        }}
                    >
                        AI + Blockchain Powered
                        <br />
                        Payment Intelligence
                    </h2>

                    <p
                        style={{
                            fontSize: "20px",
                            lineHeight: "35px",
                            opacity: ".95"
                        }}
                    >
                        Understand every payment.
                        <br />
                        Trust every transaction.
                    </p>

                    <div
                        style={{
                            marginTop: "40px",
                            display: "flex",
                            gap: "20px"
                        }}
                    >

                        <button
                            onClick={() => navigate("/login")}
                            style={{
                                padding: "18px 35px",
                                borderRadius: "12px",
                                border: "none",
                                background: "white",
                                color: "#2563EB",
                                fontWeight: "bold",
                                cursor: "pointer",
                                fontSize: "17px"
                            }}
                        >
                            🚀 Get Started
                        </button>

                        <button
                            style={{
                                padding: "18px 35px",
                                borderRadius: "12px",
                                border: "2px solid white",
                                background: "transparent",
                                color: "white",
                                cursor: "pointer",
                                fontSize: "17px"
                            }}
                        >
                            ▶ Watch Demo
                        </button>

                    </div>

                </div>

                <div
                    style={{
                        background: "rgba(255,255,255,.12)",
                        padding: "35px",
                        borderRadius: "20px",
                        backdropFilter: "blur(15px)",
                        width: "380px"
                    }}
                >

                    <h2>✨ Features</h2>

                    <hr />

                    <p>🧠 AI Failure Diagnosis</p>

                    <p>🛡 Fraud Detection</p>

                    <p>🔗 Blockchain Verification</p>

                    <p>📄 Smart Recommendations</p>

                    <p>📊 Risk Analysis</p>

                    <p>⚡ Instant Reports</p>

                    <hr />

                    <h3>How It Works</h3>

                    <p>1️⃣ Enter Transaction</p>

                    <p>2️⃣ AI Analysis</p>

                    <p>3️⃣ Fraud Detection</p>

                    <p>4️⃣ Blockchain Verification</p>

                    <p>5️⃣ Download Report</p>

                </div>

            </div>

        </div>

    );

}

export default Landing;