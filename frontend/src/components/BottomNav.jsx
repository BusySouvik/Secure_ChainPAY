import { Link } from "react-router-dom";

function BottomNav() {
    return (

        <div
            style={{
                position: "fixed",
                bottom: 0,
                width: "100%",
                background: "#0F172A",
                color: "white",
                display: "flex",
                justifyContent: "space-around",
                padding: "15px"
            }}
        >

            <Link to="/home" style={{ color: "white", textDecoration: "none" }}>
                🏠 Home
            </Link>

            <Link to="/analyze" style={{ color: "white", textDecoration: "none" }}>
                🤖 Analyze
            </Link>

            <Link to="/history" style={{ color: "white", textDecoration: "none" }}>
                📜 History
            </Link>

            <Link to="/profile" style={{ color: "white", textDecoration: "none" }}>
                👤 Profile
            </Link>

        </div>

    );
}

export default BottomNav;