function App() {
  const WA = "94743470005";
  const waLink = `https://wa.me/${WA}?text=Hi%20Nafris!%20KOPPI%20Template%20Saw`;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;800;900&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { overflow-x: hidden; }
      `}</style>

      <div style={{ fontFamily: "Outfit, sans-serif", background: "#FFFEFB", color: "#111", width: "100%", overflowX: "hidden" }}>
        
        {/* TOP BAR */}
        <div style={{ background: "#0A0A0A", color: "#fff", textAlign: "center", padding: "12px 16px", fontSize: "13px", fontWeight: 600 }}>
          TEMPLATE FOR SALE - Need similar website? <a href={waLink} style={{ color: "#fff", fontWeight: 800, marginLeft: "8px" }}>Contact Developer</a>
        </div>

        {/* NAV */}
        <div style={{ width: "100%", borderBottom: "1px solid #F0EDE8", background: "#FFFEFB", position: "sticky", top: 0, zIndex: 50 }}>
          <div style={{ maxWidth: "1120px", margin: "0 auto", padding: "18px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ fontWeight: 900, fontSize: "26px", letterSpacing: "-1px" }}>KOPPI.</div>
            <a href={waLink} style={{ background: "#111", color: "#fff", padding: "10px 20px", borderRadius: "100px", textDecoration: "none", fontWeight: 700, fontSize: "13px" }}>Order Now</a>
          </div>
        </div>

        {/* MAIN CONTAINER - NO HIDE GUARANTEE */}
        <div style={{ maxWidth: "1120px", margin: "0 auto", padding: "0 20px", width: "100%" }}>

          {/* HERO - FIXED */}
          <div style={{ padding: "60px 0 50px", width: "100%" }}>
            <h1 style={{ fontSize: "clamp(36px, 9vw, 82px)", fontWeight: 900, lineHeight: "0.9", letterSpacing: "-2px", color: "#111", wordBreak: "break-word" }}>
              Colombo's<br />Finest Brew.
            </h1>
            <p style={{ fontSize: "16px", color: "#6B6B6B", marginTop: "20px", lineHeight: "1.6", maxWidth: "440px" }}>
              Hand-roasted beans, slow-brewed love. Premium cafe template built for modern businesses.
            </p>
            <div style={{ marginTop: "28px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href={waLink} style={{ background: "#111", color: "#fff", padding: "14px 26px", borderRadius: "100px", textDecoration: "none", fontWeight: 700, fontSize: "14px" }}>Get This Website</a>
              <a href="#menu" style={{ background: "#fff", border: "2px solid #111", color: "#111", padding: "14px 26px", borderRadius: "100px", textDecoration: "none", fontWeight: 700, fontSize: "14px" }}>View Menu</a>
            </div>
          </div>

          {/* MENU - SIMPLE GRID NO OVERFLOW */}
          <div id="menu" style={{ padding: "20px 0 40px", width: "100%" }}>
            <h2 style={{ fontSize: "28px", fontWeight: 800, color: "#111" }}>Our Menu</h2>
            <p style={{ color: "#999", fontSize: "13px", marginTop: "6px", marginBottom: "20px", fontWeight: 600 }}>DEMO - FULLY CUSTOMIZABLE</p>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "16px", width: "100%" }}>
              {[
                { n: "Iced Koppi", p: "Rs. 950", e: "🧊", t: "BEST SELLER" },
                { n: "Ceylon Latte", p: "Rs. 1100", e: "☕", t: null },
                { n: "Kopi Bun", p: "Rs. 450", e: "🥐", t: null },
                { n: "Coconut Brew", p: "Rs. 1050", e: "🥥", t: null },
                { n: "Milo Dinosaur", p: "Rs. 1200", e: "🍫", t: "NEW" },
                { n: "Kaya Toast", p: "Rs. 800", e: "🍳", t: null },
              ].map((m) => (
                <div key={m.n} style={{ background: "#fff", border: "1px solid #F0EDE8", borderRadius: "20px", padding: "18px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
                    <div style={{ width: "48px", height: "48px", background: "#FFF3E0", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px" }}>{m.e}</div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: "15px", color: "#111" }}>{m.n} {m.t && <span style={{ fontSize: "9px", background: "#111", color: "#fff", padding: "3px 7px", borderRadius: "20px", marginLeft: "6px", verticalAlign: "middle" }}>{m.t}</span>}</div>
                      <div style={{ fontSize: "13px", color: "#888", marginTop: "2px" }}>{m.p}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DEVELOPER - ALL DETAILS */}
          <div style={{ marginTop: "50px", marginBottom: "40px", background: "#111", borderRadius: "24px", padding: "36px 24px", textAlign: "center", color: "white", width: "100%" }}>
            <div style={{ fontSize: "10px", letterSpacing: "3px", color: "#777", fontWeight: 700 }}>DESIGNED & DEVELOPED BY</div>
            <div style={{ fontSize: "32px", fontWeight: 900, marginTop: "12px", letterSpacing: "-1px" }}>Nafris. JM</div>
            <div style={{ color: "#aaa", fontSize: "14px", marginTop: "8px" }}>Sammanthurai, Ampara District, Sri Lanka</div>
            <div style={{ color: "#aaa", fontSize: "14px", marginTop: "4px" }}>WhatsApp: 0743470005</div>
            <div style={{ color: "#ccc", fontSize: "14px", maxWidth: "460px", margin: "18px auto 0 auto", lineHeight: 1.6 }}>
              I build fast, modern websites for cafes, shops & small businesses. Starting from Rs. 25,000.
            </div>
            <a href={waLink} style={{ display: "inline-block", marginTop: "22px", background: "#25D366", color: "white", padding: "14px 32px", borderRadius: "100px", textDecoration: "none", fontWeight: 800, fontSize: "14px" }}>Contact on WhatsApp</a>
          </div>

          <div style={{ textAlign: "center", padding: "20px 0 40px", color: "#bbb", fontSize: "11px" }}>
            © 2026 KOPPI Template • Built by Nafris. JM
          </div>
        </div>
      </div>
    </>
  );
}
export default App;