function App() {
  const myNumber = "94743470005"; // உன் நம்பர் 0743470005
  const waLink = `https://wa.me/${myNumber}?text=Hi%20Nafris!%20KOPPI%20website%20paathen,%20enakku%20or%20website%20venum`;

  const menu = [
    { name: "Iced Koppi", price: "950", desc: "Signature cold brew", emoji: "🧊", tag: "BEST SELLER" },
    { name: "Ceylon Latte", price: "1100", desc: "Single-origin", emoji: "☕", tag: null },
    { name: "Kopi Bun", price: "450", desc: "Freshly baked", emoji: "🍞", tag: null },
    { name: "Coconut Cold Brew", price: "1050", desc: "Tropical twist", emoji: "🥥", tag: null },
    { name: "Milo Dinosaur", price: "1200", desc: "Chocolate overload", emoji: "🦕", tag: "NEW" },
    { name: "Kaya Toast Set", price: "800", desc: "With eggs", emoji: "🍳", tag: null },
  ];

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", background: "#FFFBF5", color: "#111" }}>
      <div style={{ background: "#111", color: "white", textAlign: "center", padding: "10px", fontSize: "12px" }}>
        🚀 This Cafe Template is for Sale • உங்க கடைக்கும் இதே மாதிரி வெப்சைட் வேணுமா? <a href={waLink} style={{ color: "#fff", fontWeight: 800, textDecoration: "underline" }}>Nafris-ஐ தொடர்பு கொள்ளவும் →</a>
      </div>

      <nav style={{ background: "#FFFBF5", borderBottom: "1px solid #eee", position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "16px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2 style={{ fontWeight: 900, margin: 0, fontSize: "22px" }}>KOPPI.</h2>
          <a href={waLink} style={{ background: "#111", color: "#fff", padding: "10px 20px", borderRadius: "100px", textDecoration: "none", fontWeight: 700, fontSize: "13px" }}>Order Demo</a>
        </div>
      </nav>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ padding: "80px 0 60px" }}>
          <h1 style={{ fontSize: "clamp(42px, 7vw, 80px)", fontWeight: 900, lineHeight: 0.95, margin: 0 }}>Colombo's<br />Finest Brew.</h1>
          <p style={{ fontSize: "17px", color: "#555", marginTop: "20px", maxWidth: "500px" }}>This is a demo cafe website designed by Nafris. Fully customizable for your business.</p>
          <div style={{ marginTop: "32px", display: "flex", gap: "12px" }}>
            <a href={waLink} style={{ background: "#111", color: "#fff", padding: "14px 28px", borderRadius: "100px", textDecoration: "none", fontWeight: 700, fontSize: "14px" }}>Get This Website</a>
            <a href="#menu" style={{ border: "2px solid #111", padding: "14px 28px", borderRadius: "100px", background: "#fff", color: "#111", fontWeight: 700, fontSize: "14px", textDecoration: "none" }}>View Menu</a>
          </div>
        </div>

        <div id="menu" style={{ padding: "40px 0" }}>
          <h2 style={{ fontSize: "32px", fontWeight: 900, margin: 0 }}>Our Menu</h2>
          <p style={{ color: "#777", margin: "6px 0 24px 0", fontSize: "14px" }}>Demo Menu - You can change items & prices</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "16px" }}>
            {menu.map((item) => (
              <div key={item.name} style={{ background: "#fff", borderRadius: "20px", border: "1px solid #eee", overflow: "hidden" }}>
                <div style={{ background: "#F5E6D3", height: "120px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "40px", position: "relative" }}>
                  {item.emoji}
                  {item.tag && <span style={{ position: "absolute", top: "10px", left: "10px", background: "#111", color: "#fff", fontSize: "9px", padding: "5px 9px", borderRadius: "100px", fontWeight: 800 }}>{item.tag}</span>}
                </div>
                <div style={{ padding: "16px 20px" }}>
                  <h3 style={{ margin: 0, fontSize: "15px", fontWeight: 700 }}>{item.name}</h3>
                  <p style={{ margin: 0, fontWeight: 800, fontSize: "14px" }}>Rs. {item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* NAFRIS CONTACT - CLIENT-க்கு தெரியும் */}
        <div style={{ marginTop: "80px", background: "#111", borderRadius: "24px", padding: "40px", color: "white", textAlign: "center" }}>
          <p style={{ margin: 0, fontSize: "11px", letterSpacing: "2px", color: "#888", fontWeight: 700 }}>DESIGNED & DEVELOPED BY</p>
          <h2 style={{ fontSize: "36px", fontWeight: 900, margin: "12px 0" }}>Nafris. JM</h2>
          <p style={{ color: "#aaa", fontSize: "14px", margin: 0 }}>📍 Sammanthurai, Ampara District, Sri Lanka</p>
          <p style={{ color: "#aaa", fontSize: "14px", margin: "8px 0 0 0" }}>📱 WhatsApp: 0743470005</p>
          
          <p style={{ color: "#ccc", fontSize: "14px", maxWidth: "500px", margin: "20px auto 0 auto", lineHeight: 1.6 }}>
            நான் சம்மாந்துறையை சேர்ந்த Web Designer. கஃபே, கடைகள், சிறு தொழில்களுக்கு வேகமான, நவீன வெப்சைட் செய்து தருகிறேன்.
          </p>

          <div style={{ marginTop: "28px", display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href={waLink} style={{ background: "#25D366", color: "white", padding: "14px 28px", borderRadius: "100px", textDecoration: "none", fontWeight: 800, fontSize: "14px" }}>💬 WhatsApp-ல் தொடர்பு கொள்க</a>
          </div>
          
          <p style={{ marginTop: "20px", fontSize: "12px", color: "#666" }}>✅ Starting from Rs. 25,000 • 3 நாட்களில் Delivery • Free Hosting</p>
        </div>

        <div style={{ padding: "40px 0", textAlign: "center", color: "#aaa", fontSize: "11px" }}>
          © 2026 KOPPI Cafe Template • Made with ❤️ by <b style={{ color: "#111" }}>Nafris. JM</b> from Sammanthurai
        </div>
      </div>
    </div>
  );
}
export default App;