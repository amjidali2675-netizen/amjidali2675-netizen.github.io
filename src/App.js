import React from "react";

export default function App() {

  const copyIP = () => {
    navigator.clipboard.writeText("LUNARMC.COM");
    alert("IP Copied! LUNARMC.COM");
  };

  return (
    <div>

      {/* NAVBAR */}
      <div style={{
        position: "sticky",
        top: 0,
        padding: "20px",
        backdropFilter: "blur(20px)",
        background: "rgba(5,5,10,0.6)",
        borderBottom: "1px solid rgba(255,255,255,0.1)"
      }}>
        <h2>LunarMC</h2>
      </div>

      {/* HERO */}
      <section style={{
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
      }}>
        <h1 style={{
          fontSize: "60px",
          background: "linear-gradient(to right, #00E5FF, #3D5CFF, #8A2BE2)",
          WebkitBackgroundClip: "text",
          color: "transparent"
        }}>
          LunarMC Server
        </h1>

        <button onClick={copyIP} style={{
          marginTop: "20px",
          padding: "15px 30px",
          borderRadius: "999px",
          background: "#3D5CFF",
          color: "white",
          border: "none"
        }}>
          Copy IP
        </button>
      </section>

      {/* SHOP */}
      <section style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        padding: "50px"
      }}>

        <div style={cardStyle("#E0E0E0")}>VIP</div>
        <div style={cardStyle("#FFD700")}>ORO</div>
        <div style={cardStyle("#00E5FF")}>DIAMOND</div>

      </section>

    </div>
  );
}

const cardStyle = (color) => ({
  background: "#0C0C16",
  padding: "40px",
  borderRadius: "15px",
  border: `1px solid ${color}`,
  boxShadow: `0 0 20px ${color}33`
});
