import Navbar from "../components/Navbar";
import BottomNav from "../components/BottomNav";
import { useState } from "react";
import axios from "axios";

function AIAssistant() {

    const [question, setQuestion] = useState("");

    const [messages, setMessages] = useState([
        {
            sender: "AI",
            text: "👋 Hello! I'm Secure AI. Ask me anything about your payment."
        }
    ]);

    const [loading, setLoading] = useState(false);

    async function sendMessage() {

        if (question.trim() === "") return;

        const userMessage = question;

        setMessages(prev => [
            ...prev,
            {
                sender: "You",
                text: userMessage
            }
        ]);

        setQuestion("");

        setLoading(true);

        try {

            const response = await axios.post(
                "https://secure-chainpay.onrender.com/chat/",
                {
                    message: userMessage
                }
            );

            setMessages(prev => [
                ...prev,
                {
                    sender: "AI",
                    text: response.data.reply
                }
            ]);

        }

        catch (err) {

            console.log(err);

            setMessages(prev => [
                ...prev,
                {
                    sender: "AI",
                    text: "❌ Unable to connect to Gemini."
                }
            ]);

        }

        setLoading(false);

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

                <h1
                    style={{
                        color: "#1E3A8A"
                    }}
                >
                    🤖 Secure AI Assistant
                </h1>

                <div
                    style={{
                        background: "white",
                        padding: "20px",
                        borderRadius: "18px",
                        marginTop: "30px",
                        minHeight: "500px",
                        boxShadow: "0 5px 15px rgba(0,0,0,.08)",
                        overflowY: "auto"
                    }}
                >

                    {messages.map((msg, index) => (

                        <div
                            key={index}
                            style={{
                                display: "flex",
                                justifyContent:
                                    msg.sender === "You"
                                        ? "flex-end"
                                        : "flex-start",
                                marginBottom: "18px"
                            }}
                        >

                            <div
                                style={{
                                    maxWidth: "75%",
                                    background:
                                        msg.sender === "You"
                                            ? "#2563EB"
                                            : "#E2E8F0",

                                    color:
                                        msg.sender === "You"
                                            ? "white"
                                            : "#1E293B",

                                    padding: "14px",
                                    borderRadius: "18px"
                                }}
                            >

                                <strong>{msg.sender}</strong>

                                <p
                                    style={{
                                        marginTop: "8px",
                                        marginBottom: 0,
                                        whiteSpace: "pre-wrap"
                                    }}
                                >
                                    {msg.text}
                                </p>

                            </div>

                        </div>

                    ))}

                    {loading && (

                        <div
                            style={{
                                display: "flex",
                                justifyContent: "flex-start",
                                marginTop: "15px"
                            }}
                        >

                            <div
                                style={{
                                    background: "#E2E8F0",
                                    padding: "14px",
                                    borderRadius: "18px",
                                    color: "#2563EB",
                                    fontWeight: "bold"
                                }}
                            >
                                🤖 Secure AI is thinking...
                            </div>

                        </div>

                    )}

                </div>

                <div
                    style={{
                        display: "flex",
                        gap: "10px",
                        marginTop: "20px"
                    }}
                >

                    <input
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                sendMessage();
                            }
                        }}
                        placeholder="Ask Secure AI..."
                        style={{
                            flex: 1,
                            padding: "15px",
                            borderRadius: "12px",
                            border: "1px solid #CBD5E1",
                            fontSize: "16px"
                        }}
                    />

                    <button
                        onClick={sendMessage}
                        disabled={loading}
                        style={{
                            background: "#2563EB",
                            color: "white",
                            border: "none",
                            padding: "15px 28px",
                            borderRadius: "12px",
                            cursor: loading ? "not-allowed" : "pointer",
                            fontWeight: "bold",
                            opacity: loading ? 0.7 : 1
                        }}
                    >
                        Send
                    </button>

                </div>

            </div>

            <BottomNav />

        </>

    );

}

export default AIAssistant;