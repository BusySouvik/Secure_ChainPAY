function StatsCards() {
  const stats = [
    {
      title: "Transactions Today",
      value: "152",
      color: "#2563EB",
      icon: "💳",
    },
    {
      title: "Fraud Alerts",
      value: "12",
      color: "#DC2626",
      icon: "🛡",
    },
    {
      title: "Blockchain Verified",
      value: "152",
      color: "#16A34A",
      icon: "🔗",
    },
    {
      title: "AI Accuracy",
      value: "98.7%",
      color: "#7C3AED",
      icon: "🤖",
    },
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        gap: "20px",
        marginBottom: "35px",
      }}
    >
      {stats.map((card, index) => (
        <div
          key={index}
          style={{
            background: "white",
            borderRadius: "15px",
            padding: "22px",
            boxShadow: "0 5px 15px rgba(0,0,0,.08)",
          }}
        >
          <div
            style={{
              fontSize: "32px",
              marginBottom: "10px",
            }}
          >
            {card.icon}
          </div>

          <div
            style={{
              color: "#64748B",
              fontSize: "15px",
            }}
          >
            {card.title}
          </div>

          <h2
            style={{
              color: card.color,
              marginTop: "10px",
            }}
          >
            {card.value}
          </h2>
        </div>
      ))}
    </div>
  );
}

export default StatsCards;