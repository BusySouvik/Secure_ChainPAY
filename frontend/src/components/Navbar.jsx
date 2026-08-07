import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();
  const location = useLocation();

  const menus = [
    { name: "Home", path: "/home", icon: "🏠" },
    { name: "Analyze", path: "/analyze", icon: "🧠" },
    { name: "History", path: "/history", icon: "📜" },
    { name: "Assistant", path: "/assistant", icon: "🤖" },
    { name: "Profile", path: "/profile", icon: "👤" }
  ];

  return (
    <nav
      style={{
        height: "70px",
        background: "#1E3A8A",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 35px",
        boxShadow: "0 5px 15px rgba(0,0,0,.15)"
      }}
    >

      <h2
        style={{
          cursor: "pointer",
          margin: 0
        }}
        onClick={() => navigate("/home")}
      >
        🔐 SecureChainPay
      </h2>

      <div
        style={{
          display: "flex",
          gap: "25px",
          alignItems: "center"
        }}
      >

        {menus.map((menu) => (

          <div
            key={menu.path}
            onClick={() => navigate(menu.path)}
            style={{
              cursor: "pointer",
              padding: "8px 15px",
              borderRadius: "8px",
              background:
                location.pathname === menu.path
                  ? "rgba(255,255,255,.2)"
                  : "transparent",
              transition: ".3s"
            }}
          >
            {menu.icon} {menu.name}
          </div>

        ))}

        <div
          onClick={() => navigate("/notifications")}
          style={{
            cursor: "pointer",
            fontSize: "22px"
          }}
        >
          🔔
        </div>

      </div>

    </nav>
  );
}

export default Navbar;