import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import BottomNav from "../components/BottomNav";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function History() {

    const navigate = useNavigate();

    const [transactions, setTransactions] = useState([]);

    const [search, setSearch] = useState("");

    const [loading, setLoading] = useState(true);

    useEffect(()=>{

        fetchHistory();

    },[]);

    async function fetchHistory(){

        try{

            const response = await axios.get(
                "https://secure-chainpay.onrender.com/history"
            );

            setTransactions(response.data);

        }

        catch(err){

            console.log(err);

        }

        setLoading(false);

    }

    return(

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

        📜 Payment History

        </h1>

        <p

        style={{

            color:"#64748B"

        }}

        >

        View all AI analyzed transactions.

        </p>

        </div>

        <div

        style={{

            background:"#DBEAFE",

            padding:"15px",

            borderRadius:"12px"

        }}

        >

        Total

        <br/>

        <b>{transactions.length}</b>

        </div>

        </div>

        <input

    type="text"

    placeholder="🔍 Search Transaction ID..."

    value={search}

    onChange={(e)=>setSearch(e.target.value)}

    style={{

        width:"100%",

        padding:"15px",

        borderRadius:"12px",

        border:"1px solid #CBD5E1",

        marginBottom:"30px",

        fontSize:"16px"

    }}

/>

{loading && (

<div

style={{

    background:"white",

    padding:"30px",

    borderRadius:"15px",

    textAlign:"center",

    boxShadow:"0 5px 15px rgba(0,0,0,.08)"

}}

>

<h2>⏳ Loading Transactions...</h2>

<p

style={{

    color:"#64748B"

}}

>

Fetching payment history from blockchain...

</p>

</div>

)}

{

transactions

.filter((tx)=>

tx.transaction_id

.toLowerCase()

.includes(

search.toLowerCase()

)

)

.map((tx)=>(

<div

key={tx.transaction_id}

style={{

    background:"white",

    padding:"25px",

    borderRadius:"18px",

    marginBottom:"20px",

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

<div>

<h2>

₹{tx.amount}

</h2>

<p>

{tx.transaction_id}

</p>

<p

style={{

color:"#64748B"

}}

>

{tx.sender_bank}

→

{tx.receiver_bank}

</p>

</div>

<div

style={{

textAlign:"right"

}}

>

<p

style={{

color:

tx.status==="SUCCESS"

? "#16A34A"

: tx.status==="FAILED"

? "#DC2626"

: "#D97706",

fontWeight:"bold",

fontSize:"18px"

}}

>

{tx.status}

</p>

<p

style={{

marginTop:"10px"

}}

>

🛡 Risk Score

<br/>

<b>

{tx.risk_score}%

</b>

</p>

<div

style={{

marginTop:"15px"

}}

>

<button

onClick={()=>navigate(`/transaction/${tx.transaction_id}`)}

style={{

background:"#2563EB",

color:"white",

border:"none",

padding:"10px 18px",

borderRadius:"10px",

cursor:"pointer",

fontWeight:"bold"

}}

>

View Details →

</button>

</div>

</div>

</div>

<hr

style={{

margin:"20px 0"

}}

/>

<div

style={{

display:"flex",

justifyContent:"space-between",

alignItems:"center",

fontSize:"14px",

color:"#64748B"

}}

>

<span>

🕒

{

new Date(

tx.created_at

).toLocaleString()

}

</span>

<span>

🔗 Blockchain Verified

</span>

</div>

</div>

))
}

{/* Empty State */}

{!loading && transactions.length === 0 && (

<div
style={{
background:"white",
padding:"40px",
borderRadius:"20px",
textAlign:"center",
boxShadow:"0 5px 15px rgba(0,0,0,.08)"
}}
>

<h2>📭 No Transactions Found</h2>

<p
style={{
color:"#64748B"
}}
>
Analyze your first payment to see it here.
</p>

<button

onClick={()=>navigate("/analyze")}

style={{
marginTop:"20px",
padding:"15px 30px",
background:"#2563EB",
color:"white",
border:"none",
borderRadius:"10px",
cursor:"pointer",
fontWeight:"bold"
}}
>

🧠 Analyze Payment

</button>

</div>

)}

</div>

<BottomNav />

</>

);

}

export default History;