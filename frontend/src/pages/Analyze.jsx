import { useState } from "react";
import Navbar from "../components/Navbar";
import BottomNav from "../components/BottomNav";
import axios from "axios";

function Analyze() {

    const [transactionId, setTransactionId] = useState("");
    const [amount, setAmount] = useState("");
    const [upiId, setUpiId] = useState("");

    const [senderBank, setSenderBank] = useState("");
    const [receiverBank, setReceiverBank] = useState("");
    const [issue, setIssue] = useState("");

    const [status, setStatus] = useState("FAILED");

    const [loading, setLoading] = useState(false);

    const [result, setResult] = useState(null);

    const issueToErrorCode = {
    BANK_SERVER_DOWN: "U16",
    TIMEOUT: "U17",
    INVALID_PIN: "U30",
    LIMIT_EXCEEDED: "U90",
    BENEFICIARY_ERROR: "U31",
    DEBIT_NO_CREDIT: "U16",
    OTHER: "U99"
};

    async function analyzePayment(e) {

        e.preventDefault();

        setLoading(true);

        setResult(null);

        try {

            const response = await axios.post(

                "https://secure-chainpay.onrender.com/analyze/",

                {

                    transaction_id: transactionId,

                    sender_bank: senderBank,

                    receiver_bank: receiverBank,

                    amount: Number(amount),

                    status: status,

                    error_code: issueToErrorCode[issue],

                }

            );

            setResult(response.data);

        }

        catch (err) {

            console.log(err);

            alert("Backend Connection Failed");

        }

        setLoading(false);

    }

    return (

        <>

            <Navbar />

            <div

                style={{

                    background:"#F8FAFC",

                    minHeight:"100vh",

                    padding:"40px",

                    paddingBottom:"120px"

                }}

            >

                <div

                    style={{

                        maxWidth:"850px",

                        margin:"auto",

                        background:"white",

                        borderRadius:"20px",

                        padding:"35px",

                        boxShadow:"0 5px 15px rgba(0,0,0,.08)"

                    }}

                >

                    <div

                        style={{

                            display:"flex",

                            justifyContent:"space-between",

                            alignItems:"center",

                            marginBottom:"30px"

                        }}

                    >

                        <div>

                            <h1

                                style={{

                                    color:"#1E3A8A"

                                }}

                            >

                                🧠 AI Payment Diagnosis

                            </h1>

                            <p

                                style={{

                                    color:"#64748B"

                                }}

                            >

                                Explain every payment using AI + Blockchain.

                            </p>

                        </div>

                        <div

                            style={{

                                background:"#DBEAFE",

                                padding:"15px",

                                borderRadius:"12px",

                                textAlign:"center"

                            }}

                        >

                            <b>🟢 AI Engine</b>

                            <br/>

                            Online

                        </div>

                    </div>

                    <form onSubmit={analyzePayment}>

    <label>Transaction ID</label>

    <input
        type="text"
        placeholder="TXN1001"
        value={transactionId}
        onChange={(e)=>setTransactionId(e.target.value)}
        style={inputStyle}
        required
    />

    <label>Amount (₹)</label>

    <input
        type="number"
        placeholder="25000"
        value={amount}
        onChange={(e)=>setAmount(e.target.value)}
        style={inputStyle}
        required
    />

    <label>UPI ID</label>

    <input
        type="text"
        placeholder="amit@ybl"
        value={upiId}
        onChange={(e)=>setUpiId(e.target.value)}
        style={inputStyle}
    />

    <label>Transaction Status</label>

    <select
        value={status}
        onChange={(e)=>setStatus(e.target.value)}
        style={inputStyle}
    >
        <option value="FAILED">FAILED</option>
        <option value="SUCCESS">SUCCESS</option>
        <option value="PENDING">PENDING</option>
    </select>

    <label>Sender Bank</label>

<select
    value={senderBank}
    onChange={(e) => setSenderBank(e.target.value)}
    style={inputStyle}
    required
>
    <option value="">Select Sender Bank</option>
    <option value="SBI">State Bank of India (SBI)</option>
    <option value="HDFC">HDFC Bank</option>
    <option value="ICICI">ICICI Bank</option>
    <option value="Axis">Axis Bank</option>
    <option value="PNB">Punjab National Bank</option>
    <option value="BOB">Bank of Baroda</option>
    <option value="Canara">Canara Bank</option>
    <option value="Kotak">Kotak Mahindra Bank</option>
</select>

    <label>Receiver Bank</label>

<select
    value={receiverBank}
    onChange={(e) => setReceiverBank(e.target.value)}
    style={inputStyle}
    required
>
    <option value="">Select Receiver Bank</option>
    <option value="SBI">State Bank of India (SBI)</option>
    <option value="HDFC">HDFC Bank</option>
    <option value="ICICI">ICICI Bank</option>
    <option value="Axis">Axis Bank</option>
    <option value="PNB">Punjab National Bank</option>
    <option value="BOB">Bank of Baroda</option>
    <option value="Canara">Canara Bank</option>
    <option value="Kotak">Kotak Mahindra Bank</option>
</select>

    <label>What happened?</label>

<select
    value={issue}
    onChange={(e) => setIssue(e.target.value)}
    style={inputStyle}
    required
>
    <option value="">Select Payment Issue</option>

    <option value="BANK_SERVER_DOWN">
        🏦 Bank server unavailable
    </option>

    <option value="TIMEOUT">
        ⏳ Transaction timed out
    </option>

    <option value="INVALID_PIN">
        🔐 Invalid UPI PIN
    </option>

    <option value="LIMIT_EXCEEDED">
        💳 Daily transaction limit exceeded
    </option>

    <option value="BENEFICIARY_ERROR">
        👤 Receiver account issue
    </option>

    <option value="DEBIT_NO_CREDIT">
        💸 Money debited but receiver didn't receive
    </option>

    <option value="OTHER">
        ❓ Other
    </option>
</select>

    <button
        type="submit"
        style={{
            width:"100%",
            padding:"18px",
            marginTop:"25px",
            border:"none",
            borderRadius:"12px",
            background:"linear-gradient(90deg,#2563EB,#1D4ED8)",
            color:"white",
            fontSize:"18px",
            fontWeight:"bold",
            cursor:"pointer"
        }}
    >
        🤖 Analyze Payment
    </button>

</form>

{/* AI Loading */}

{loading && (

<div
    style={{
        marginTop:"35px",
        background:"#EFF6FF",
        padding:"25px",
        borderRadius:"15px",
        border:"1px solid #BFDBFE"
    }}
>

<h2>🤖 AI Processing...</h2>

<p>✅ Reading Transaction Details</p>

<p>✅ Contacting Banking Engine</p>

<p>✅ Running Fraud Detection</p>

<p>✅ Verifying Blockchain</p>

<p>✅ Preparing AI Explanation</p>

</div>

)}

{/* AI Result */}

{result && (

<div
    style={{
        marginTop:"40px",
        background:"white",
        border:"2px solid #DBEAFE",
        borderRadius:"20px",
        padding:"30px",
        boxShadow:"0 5px 15px rgba(0,0,0,.08)"
    }}
>

    <div
        style={{
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center"
        }}
    >

        <h2>📄 AI Analysis Report</h2>

        <span
            style={{
                background:
                    result.status==="SUCCESS"
                    ? "#DCFCE7"
                    : "#FEE2E2",

                color:
                    result.status==="SUCCESS"
                    ? "#166534"
                    : "#991B1B",

                padding:"8px 18px",
                borderRadius:"30px",
                fontWeight:"bold"
            }}
        >
            {result.status}
        </span>

    </div>

    <hr />

    <p>

        <strong>🆔 Transaction ID</strong>

        <br />

        {result.transaction_id}

    </p>

    <hr />

    <p>

        <strong>⚠ Root Cause</strong>

        <br />

        {result.root_cause}

    </p>

    <hr />

    <p>

        <strong>🧠 AI Explanation</strong>

        <br />

        {result.ai_explanation}

    </p>

    <hr />

    <p>

        <strong>💡 Recommendation</strong>

        <br />

        {result.recommendation}

    </p>

    <hr />

    <h3>🛡 Fraud Risk</h3>

    <progress
        value={result.risk_score}
        max="100"
        style={{
            width:"100%",
            height:"20px"
        }}
    />

    <h2
        style={{
            color:
                result.risk_score>70
                ? "#DC2626"
                : "#16A34A"
        }}
    >
        {result.risk_score}%
    </h2>

    <hr />

    <h3>🔗 Blockchain Verification</h3>

    <p
        style={{
            color:"#16A34A",
            fontWeight:"bold"
        }}
    >
        ✅ Verified Successfully
    </p>

    <code
        style={{
            display:"block",
            background:"#F8FAFC",
            padding:"15px",
            borderRadius:"10px",
            wordBreak:"break-word",
            fontSize:"12px"
        }}
    >
        {result.blockchain_hash}
    </code>

    <div
        style={{
            display:"flex",
            gap:"15px",
            marginTop:"30px"
        }}
    >

        <button
            style={{
                flex:1,
                padding:"15px",
                background:"#2563EB",
                color:"white",
                border:"none",
                borderRadius:"10px",
                cursor:"pointer"
            }}
        >
            📄 Download Report
        </button>

        <button
            onClick={()=>{
                setResult(null);
                setTransactionId("");
                setAmount("");
                setUpiId("");
            }}
            style={{
                flex:1,
                padding:"15px",
                background:"#E2E8F0",
                border:"none",
                borderRadius:"10px",
                cursor:"pointer"
            }}
        >
            🔄 Analyze Another
        </button>

    </div>

</div>

)}

                </div>
            </div>

            <BottomNav />

        </>

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

export default Analyze;