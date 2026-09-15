function App() {
  const menu = [
    { name: "Iced Koppi", price: "950", desc: "Signature cold brew", emoji: "🧊", tag: "BEST SELLER" },
    { name: "Ceylon Latte", price: "1100", desc: "Single-origin", emoji: "☕", tag: null },
    { name: "Kopi Bun", price: "450", desc: "Freshly baked", emoji: "🍞", tag: null },
    { name: "Coconut Cold Brew", price: "1050", desc: "Tropical twist", emoji: "🥥", tag: null },
    { name: "Milo Dinosaur", price: "1200", desc: "Chocolate overload", emoji: "🦕", tag: "NEW" },
    { name: "Kaya Toast Set", price: "800", desc: "With eggs", emoji: "🍳", tag: null },
  ];

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", background: "#FFFBF5", color: "#111", minHeight: "100vh" }}>
      
      {/* NAVBAR - FULLY VISIBLE */}
      <nav style={{ background: "#FFFBF5", borderBottom: "1px solid #eee", position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "16px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2 style={{ fontWeight: 900, margin: 0, fontSize: "22px", color: "#111", letterSpacing: "1px" }}>KOPPI.</h2>
          <a href="https://wa.me/94700000000" style={{ background: "#111", color: "#fff", padding: "10px 20px", borderRadius: "100px", textDecoration: "none", fontWeight: 700, fontSize: "13px" }}>Order Now</a>
        </div>
      </nav>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        
        {/* HERO - 100% VISIBLE */}
        <div style={{ padding: "80px 0 60px", textAlign: "left" }}>
          <h1 style={{ fontSize: "clamp(42px, 7vw, 80px)", fontWeight: 900, lineHeight: 0.95, margin: 0, color: "#111" }}>
            Colombo's<br />Finest Brew.
          </h1>
          <p style={{ fontSize: "17px", color: "#555", marginTop: "20px", lineHeight: 1.6, maxWidth: "500px" }}>
            Hand-roasted beans, slow-brewed love. Freshly brewed every morning in Wellawatta.
          </p>
          <div style={{ marginTop: "32px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a href="https://wa.me/94700000000" style={{ background: "#111", color: "#fff", padding: "14px 28px", borderRadius: "100px", textDecoration: "none", fontWeight: 700, fontSize: "14px" }}>WhatsApp Order</a>
            <a href="#menu" style={{ border: "2px solid #111", padding: "14px 28px", borderRadius: "100px", background: "#fff", color: "#111", fontWeight: 700, fontSize: "14px", textDecoration: "none" }}>View Menu</a>
          </div>
        </div>

        {/* MENU - FIXED HIDING ISSUE */}
        <div id="menu" style={{ padding: "40px 0" }}>
          <h2 style={{ fontSize: "32px", fontWeight: 900, color: "#111", margin: "0 0 6px 0" }}>Our Menu</h2>
          <p style={{ color: "#777", margin: "0 0 24px 0", fontSize: "14px" }}>All prices in LKR - Freshly brewed</p>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "16px" }}>
            {menu.map((item) => (
              <div key={item.name} style={{ background: "#fff", borderRadius: "20px", border: "1px solid #eee", overflow: "hidden" }}>
                <div style={{ background: "#F5E6D3", height: "120px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "40px", position: "relative" }}>
                  {item.emoji}
                  {item.tag && <span style={{ position: "absolute", top: "10px", left: "10px", background: "#111", color: "#fff", fontSize: "9px", padding: "5px 9px", borderRadius: "100px", fontWeight: 800 }}>{item.tag}</span>}
                </div>
                <div style={{ padding: "16px 20px" }}>
                  <h3 style={{ margin: "0 0 4px 0", fontSize: "15px", fontWeight: 700, color: "#111" }}>{item.name}</h3>
                  <p style={{ margin: "0 0 8px 0", fontSize: "12px", color: "#888" }}>{item.desc}</p>
                  <p style={{ margin: 0, fontWeight: 800, fontSize: "14px", color: "#111" }}>Rs. {item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* STORY - SIMPLE */}
        <div style={{ marginTop: "60px", background: "#fff", borderRadius: "20px", padding: "32px", border: "1px solid #eee" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 900, color: "#111", margin: 0 }}>Our Story</h2>
          <p style={{ color: "#666", lineHeight: 1.7, marginTop: "12px", fontSize: "14px" }}>
            KOPPI started in a small kitchen in Colombo. We roast small batches, source from Ella highlands, and believe good coffee should never be rushed. This is a demo website - you can change all details.
          </p>
        </div>

        {/* VISIT - NO FAKE ADDRESS NOW */}
        <div style={{ marginTop: "20px", background: "#111", borderRadius: "20px", padding: "32px", color: "white" }}>
          <h2 style={{ fontSize: "20px", fontWeight: 800, margin: 0 }}>Visit Us</h2>
          <p style={{ color: "#aaa", fontSize: "13px", marginTop: "12px", lineHeight: 1.6 }}>
            📍 Your Location Here - Change this in code<br/>
            🕘 Hours: Change your hours here<br/>
            📞 Phone: Change your number here (wa.me link)
          </p>
          <p style={{ color: "#666", fontSize: "11px", marginTop: "16px" }}>
            To change: Open App.jsx and edit Visit Us section
          </p>
        </div>

        <div style={{ padding: "40px 0", textAlign: "center", color: "#aaa", fontSize: "12px" }}>
          © 2026 KOPPI. Demo Website
        </div>
      </div>
    </div>
  );
}
export default App;