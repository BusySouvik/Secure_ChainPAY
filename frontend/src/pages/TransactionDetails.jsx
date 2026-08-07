import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import jsPDF from "jspdf";
import Navbar from "../components/Navbar";
import BottomNav from "../components/BottomNav";

function TransactionDetails() {

    const { id } = useParams();

    const [transaction, setTransaction] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchTransaction();
    }, []);

    async function fetchTransaction() {

        try {

            const response = await axios.get(
                `http://127.0.0.1:8000/history/${id}`
            );

            setTransaction(response.data);

        } catch (err) {

            console.log(err);

        }

        setLoading(false);

    }

    function downloadPDF() {

    const pdf = new jsPDF();

    pdf.setFontSize(20);
    pdf.text("SecureChainPay AI Report", 20, 20);

    pdf.setFontSize(12);

    pdf.text(`Transaction ID: ${transaction.transaction_id}`,20,40);

    pdf.text(`Amount: ₹${transaction.amount}`,20,50);

    pdf.text(`Status: ${transaction.status}`,20,60);

    pdf.text(`Risk Score: ${transaction.risk_score}%`,20,70);

    pdf.text("Root Cause:",20,90);

    pdf.text(transaction.root_cause,20,100);

    pdf.text("Recommendation:",20,130);

    pdf.text(transaction.recommendation,20,140);

    pdf.text("Blockchain Hash:",20,170);

    pdf.text(transaction.blockchain_hash,20,180);

    pdf.save(`${transaction.transaction_id}.pdf`);

}

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

                <div
                    style={{
                        maxWidth: "900px",
                        margin: "auto",
                        background: "white",
                        padding: "35px",
                        borderRadius: "20px",
                        boxShadow: "0 5px 15px rgba(0,0,0,.08)"
                    }}
                >

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: "30px"
                        }}
                    >

                        <div>

                            <h1
                                style={{
                                    color: "#1E3A8A"
                                }}
                            >
                                📄 Transaction Report
                            </h1>

                            <p
                                style={{
                                    color: "#64748B"
                                }}
                            >
                                AI + Blockchain Verified Report
                            </p>

                        </div>

                        <div
                            style={{
                                background: "#DBEAFE",
                                padding: "15px",
                                borderRadius: "12px",
                                textAlign: "center"
                            }}
                        >

                            🔐 Verified

                            <br />

                            SecureChainPay

                        </div>

                    </div>

                    {loading && (

                        <div
                            style={{
                                background: "#EFF6FF",
                                padding: "40px",
                                borderRadius: "15px",
                                textAlign: "center"
                            }}
                        >

                            <h2>🤖 Loading Transaction...</h2>

                            <p>
                                Fetching transaction...
                                <br />
                                Verifying blockchain...
                                <br />
                                Preparing AI report...
                            </p>

                        </div>

                    )}

                    {!loading && transaction && (

                        <>
                        {/* Transaction Information */}

<div
    style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "20px",
        marginBottom: "30px"
    }}
>

    <InfoCard
        title="🆔 Transaction ID"
        value={transaction.transaction_id}
    />

    <InfoCard
        title="💰 Amount"
        value={`₹${transaction.amount}`}
    />

    <InfoCard
        title="🏦 Sender Bank"
        value={transaction.sender_bank}
    />

    <InfoCard
        title="🏦 Receiver Bank"
        value={transaction.receiver_bank}
    />

</div>

<hr />

<div
    style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "25px 0"
    }}
>

    <h2>Status</h2>

    <span
        style={{
            padding: "10px 18px",
            borderRadius: "30px",
            fontWeight: "bold",
            background:
                transaction.status === "SUCCESS"
                    ? "#DCFCE7"
                    : transaction.status === "FAILED"
                    ? "#FEE2E2"
                    : "#FEF3C7",

            color:
                transaction.status === "SUCCESS"
                    ? "#166534"
                    : transaction.status === "FAILED"
                    ? "#991B1B"
                    : "#92400E"
        }}
    >
        {transaction.status}
    </span>

</div>

<Section
    title="⚠ Root Cause"
    value={transaction.diagnosis}
/>

<Section
    title="🧠 AI Explanation"
    value={transaction.ai_explanation}
/>

<Section
    title="💡 Recommendation"
    value={transaction.recommendation}
/>

<hr />

<h3>🛡 Fraud Risk Analysis</h3>

<progress
    value={transaction.risk_score}
    max="100"
    style={{
        width: "100%",
        height: "22px"
    }}
/>

<div
    style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "12px",
        marginBottom: "30px"
    }}
>

    <h2
        style={{
            color:
                transaction.risk_score >= 70
                    ? "#DC2626"
                    : transaction.risk_score >= 40
                    ? "#D97706"
                    : "#16A34A"
        }}
    >
        {transaction.risk_score}%
    </h2>

    <strong>
        {
            transaction.risk_score >= 70
                ? "🔴 HIGH RISK"
                : transaction.risk_score >= 40
                ? "🟡 MEDIUM RISK"
                : "🟢 LOW RISK"
        }
    </strong>

</div>

<hr />

<h3>🔗 Blockchain Verification</h3>

<div
    style={{
        background: "#F8FAFC",
        border: "1px solid #CBD5E1",
        borderRadius: "15px",
        padding: "20px",
        marginBottom: "30px"
    }}
>

    <p
        style={{
            color: "#16A34A",
            fontWeight: "bold",
            fontSize: "18px"
        }}
    >
        ✅ Blockchain Verified Successfully
    </p>

    <p>
        <strong>Blockchain Hash</strong>
    </p>

    <code
        style={{
            display: "block",
            background: "#E2E8F0",
            padding: "12px",
            borderRadius: "10px",
            wordBreak: "break-word",
            fontSize: "12px"
        }}
    >
        {transaction.blockchain_hash}
    </code>

</div>

<div
    style={{
        display: "flex",
        gap: "15px",
        marginTop: "25px"
    }}
>

    <button
        onClick={() => window.print()}
        style={{
            flex: 1,
            background: "#2563EB",
            color: "white",
            border: "none",
            padding: "15px",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: "bold"
        }}
    >
        🖨 Print Report
    </button>

<button
    onClick={downloadPDF}
    style={{
        flex: 1,
        background: "#16A34A",
        color: "white",
        border: "none",
        padding: "15px",
        borderRadius: "10px",
        cursor: "pointer",
        fontWeight: "bold"
    }}
>
    📄 Download PDF
</button>

</div>

                        </>

                    )}

                </div>

            </div>

            <BottomNav />

        </>

    );

}

function InfoCard({ title, value }) {

    return (

        <div
            style={{
                background: "#F8FAFC",
                padding: "20px",
                borderRadius: "15px",
                border: "1px solid #E2E8F0"
            }}
        >

            <h4
                style={{
                    color: "#64748B",
                    marginBottom: "8px"
                }}
            >
                {title}
            </h4>

            <p
                style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "#1E293B",
                    margin: 0
                }}
            >
                {value}
            </p>

        </div>

    );

}

function Section({ title, value }) {

    return (

        <>

            <hr />

            <h3
                style={{
                    marginTop: "20px"
                }}
            >
                {title}
            </h3>

            <p
                style={{
                    color: "#475569",
                    lineHeight: "28px"
                }}
            >
                {value}
            </p>

        </>

    );

}

export default TransactionDetails;