function App() {
  const waNumber = "94771234567";
  const orderLink = (item) => `https://wa.me/${waNumber}?text=Hi%20KOPPI!%20I%20want%20to%20order%20${encodeURIComponent(item)}`;

  const menu = [
    { name: "Iced Koppi", price: "950", desc: "Signature cold brew", emoji: "🧊", tag: "BEST SELLER" },
    { name: "Ceylon Latte", price: "1100", desc: "Single-origin delight", emoji: "☕", tag: null },
    { name: "Kopi Bun", price: "450", desc: "Freshly baked daily", emoji: "🍞", tag: null },
    { name: "Coconut Cold Brew", price: "1050", desc: "Tropical twist", emoji: "🥥", tag: null },
    { name: "Milo Dinosaur Koppi", price: "1200", desc: "Chocolate overload", emoji: "🦕", tag: "NEW" },
    { name: "Kaya Toast Set", price: "800", desc: "With soft-boiled eggs", emoji: "🍳", tag: null },
  ];

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", background: "#FFFBF5", color: "#111", minHeight: "100vh" }}>
      
      {/* NAVBAR */}
      <nav style={{ position: "sticky", top: 0, background: "rgba(255,251,245,0.9)", backdropFilter: "blur(10px)", zIndex: 10, borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "18px 40px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2 style={{ fontWeight: 900, letterSpacing: "2px", margin: 0, fontSize: "22px" }}>KOPPI.</h2>
          <div style={{ display: "flex", gap: "28px", fontSize: "14px", fontWeight: 600 }}>
            <a href="#menu" style={{ textDecoration: "none", color: "#111" }}>Menu</a>
            <a href="#story" style={{ textDecoration: "none", color: "#111" }}>Our Story</a>
            <a href="#visit" style={{ textDecoration: "none", color: "#111" }}>Visit</a>
          </div>
          <a href={orderLink("")} style={{ background: "#111", color: "white", padding: "10px 20px", borderRadius: "100px", textDecoration: "none", fontWeight: 700, fontSize: "13px" }}>Order Now</a>
        </div>
      </nav>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px 40px 60px" }}>
        
        {/* HERO */}
        <div style={{ padding: "60px 0 80px", maxWidth: "700px" }}>
          <h1 style={{ fontSize: "clamp(48px, 8vw, 88px)", fontWeight: 900, lineHeight: 0.9, letterSpacing: "-2px", margin: 0, color: "#111" }}>
            Colombo's<br />Finest Brew.
          </h1>
          <p style={{ fontSize: "18px", color: "#6B6B6B", marginTop: "24px", lineHeight: 1.6, maxWidth: "480px" }}>
            Hand-roasted beans, slow-brewed love. Visit us at Wellawatta for the perfect cup, every time.
          </p>
          <div style={{ marginTop: "36px", display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <a href={orderLink("your best coffee")} style={{ background: "#111", color: "white", padding: "16px 32px", borderRadius: "100px", textDecoration: "none", fontWeight: 700 }}>WhatsApp Order</a>
            <a href="#menu" style={{ border: "1.5px solid #111", padding: "16px 32px", borderRadius: "100px", background: "#fff", color: "#111", fontWeight: 700, textDecoration: "none" }}>View Menu</a>
          </div>
        </div>

        {/* MENU */}
        <div id="menu" style={{ paddingTop: "40px" }}>
          <h2 style={{ fontSize: "42px", fontWeight: 900, margin: "0 0 8px 0" }}>Our Menu</h2>
          <p style={{ color: "#888", marginBottom: "32px" }}>Freshly brewed every morning in Wellawatta</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
            {menu.map((item) => (
              <div key={item.name} style={{ background: "white", borderRadius: "24px", overflow: "hidden", border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 8px 30px rgba(0,0,0,0.04)" }}>
                <div style={{ background: "#F5E6D3", height: "140px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "48px", position: "relative" }}>
                  {item.emoji}
                  {item.tag && <span style={{ position: "absolute", top: "12px", left: "12px", background: "#111", color: "white", fontSize: "10px", padding: "6px 10px", borderRadius: "100px", fontWeight: 800, letterSpacing: "0.5px" }}>{item.tag}</span>}
                </div>
                <div style={{ padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                  <div>
                    <h3 style={{ margin: "0 0 4px 0", fontSize: "16px", fontWeight: 700 }}>{item.name}</h3>
                    <p style={{ margin: "0 0 4px 0", fontSize: "13px", color: "#999" }}>{item.desc}</p>
                    <p style={{ margin: 0, fontWeight: 700, fontSize: "14px" }}>Rs. {item.price}</p>
                  </div>
                  <a href={orderLink(`${item.name} - Rs.${item.price}`)} target="_blank" style={{ background: "#111", color: "white", width: "36px", height: "36px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", fontWeight: 700 }}>+</a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* STORY */}
        <div id="story" style={{ marginTop: "100px", display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "40px", alignItems: "center" }}>
          <div>
            <h2 style={{ fontSize: "36px", fontWeight: 900, lineHeight: 1.1, margin: 0 }}>Slow Brew,<br />No Rush.</h2>
            <p style={{ color: "#666", lineHeight: 1.7, marginTop: "20px" }}>
              KOPPI started in a small kitchen in Wellawatta in 2023. We roast our beans in small batches, source from Ella highlands, and believe a good coffee should never be rushed. Come for the brew, stay for the vibe.
            </p>
          </div>
          <div style={{ background: "#111", color: "white", borderRadius: "24px", padding: "40px", fontSize: "20px", fontWeight: 700, lineHeight: 1.4 }}>
            "We don't just serve coffee. We serve 5 minutes of peace in busy Colombo."
            <div style={{ marginTop: "20px", fontSize: "13px", color: "#888", fontWeight: 400 }}>- Nafri, Founder</div>
          </div>
        </div>

        {/* VISIT */}
        <div id="visit" style={{ marginTop: "100px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", background: "white", borderRadius: "24px", padding: "40px", border: "1px solid rgba(0,0,0,0.06)" }}>
          <div>
            <h2 style={{ fontSize: "28px", fontWeight: 900, margin: 0 }}>Visit Us</h2>
            <div style={{ marginTop: "24px", lineHeight: 1.8, color: "#555", fontSize: "15px" }}>
              <p style={{ margin: 0 }}><b style={{ color: "#111" }}>Address:</b><br />12/A Galle Road, Wellawatta<br />Colombo 06</p>
              <p style={{ margin: "16px 0 0 0" }}><b style={{ color: "#111" }}>Hours:</b><br />Everyday 7AM - 10PM</p>
              <p style={{ margin: "16px 0 0 0" }}><b style={{ color: "#111" }}>Phone:</b> +94 77 123 4567</p>
            </div>
            <div style={{ marginTop: "28px", display: "flex", gap: "12px" }}>
              <a href="https://maps.google.com/?q=Wellawatta+Colombo" target="_blank" style={{ background: "#111", color: "white", padding: "12px 22px", borderRadius: "100px", textDecoration: "none", fontWeight: 700, fontSize: "13px" }}>Get Directions</a>
              <a href={orderLink("")} style={{ border: "1.5px solid #111", padding: "12px 22px", borderRadius: "100px", background: "white", color: "#111", fontWeight: 700, fontSize: "13px", textDecoration: "none" }}>WhatsApp</a>
            </div>
          </div>
          <div style={{ background: "#F5E6D3", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "10px", minHeight: "240px" }}>
            <div style={{ fontSize: "40px" }}>📍</div>
            <div style={{ fontWeight: 700 }}>Wellawatta, Colombo</div>
            <div style={{ fontSize: "12px", color: "#888" }}>Map Preview</div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div style={{ background: "#111", color: "white", marginTop: "80px", padding: "40px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px" }}>
          <h2 style={{ fontSize: "32px", fontWeight: 900, letterSpacing: "2px", margin: 0 }}>KOPPI.</h2>
          <div style={{ fontSize: "13px", color: "#888" }}>© 2026 KOPPI. Colombo's Finest Brew. Made with love in Wellawatta.</div>
        </div>
      </div>
    </div>
  );
}
export default App;