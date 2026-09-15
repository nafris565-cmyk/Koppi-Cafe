function App() {
  const myNumber = "94743470005";
  const waLink = `https://wa.me/${myNumber}?text=Hi%20Nafris!%20I%20saw%20your%20KOPPI%20template`;

  const menu = [
    { name: "Iced Koppi", price: "Rs. 950", tag: "BEST SELLER", emoji: "🧊" },
    { name: "Ceylon Latte", price: "Rs. 1100", tag: null, emoji: "☕" },
    { name: "Kopi Bun", price: "Rs. 450", tag: null, emoji: "🥐" },
    { name: "Coconut Cold Brew", price: "Rs. 1050", tag: null, emoji: "🥥" },
    { name: "Milo Dinosaur", price: "Rs. 1200", tag: "NEW", emoji: "🍫" },
    { name: "Kaya Toast Set", price: "Rs. 800", tag: null, emoji: "🍳" },
  ];

  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700&family=Inter:wght@400;600;700&display=swap');`}</style>
      
      <div style={{ fontFamily: "Inter, sans-serif", background: "#FFFDF9", color: "#111111", minHeight: "100vh" }}>
        
        {/* TOP BANNER */}
        <div style={{ background: "#111111", color: "white", textAlign: "center", padding: "12px", fontSize: "13px", fontWeight: 600, letterSpacing: "0.3px" }}>
          Template for Sale - Need a similar website? <a href={waLink} style={{ color: "#fff", fontWeight: 800, textDecoration: "underline", marginLeft: "6px" }}>Contact Developer</a>
        </div>

        {/* NAV */}
        <nav style={{ background: "#FFFDF9", borderBottom: "1px solid #EAEAEA", position: "sticky", top: 0, zIndex: 100 }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h2 style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 700, margin: 0, fontSize: "24px", letterSpacing: "-1px" }}>KOPPI.</h2>
            <a href={waLink} style={{ background: "#111111", color: "#fff", padding: "11px 22px", borderRadius: "100px", textDecoration: "none", fontWeight: 700, fontSize: "13px" }}>Order Demo</a>
          </div>
        </nav>

        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
          
          {/* HERO - 100% VISIBLE FIXED */}
          <div style={{ padding: "90px 0 70px" }}>
            <h1 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(44px, 8vw, 84px)", fontWeight: 700, lineHeight: 0.9, margin: 0, color: "#111111", letterSpacing: "-3px" }}>
              Colombo's<br />Finest Brew.
            </h1>
            <p style={{ fontSize: "18px", color: "#666666", marginTop: "24px", lineHeight: 1.6, maxWidth: "460px", fontWeight: 400 }}>
              Hand-roasted beans, slow-brewed love. This is a premium cafe template designed for modern businesses.
            </p>
            <div style={{ marginTop: "36px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href={waLink} style={{ background: "#111111", color: "#fff", padding: "15px 30px", borderRadius: "100px", textDecoration: "none", fontWeight: 700, fontSize: "14px" }}>Get This Website</a>
              <a href="#menu" style={{ border: "2px solid #111111", padding: "15px 30px", borderRadius: "100px", background: "#fff", color: "#111111", fontWeight: 700, fontSize: "14px", textDecoration: "none" }}>View Menu</a>
            </div>
          </div>

          {/* MENU */}
          <div id="menu" style={{ padding: "20px 0 40px" }}>
            <h2 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "36px", fontWeight: 700, color: "#111111", margin: "0 0 8px 0", letterSpacing: "-1px" }}>Our Menu</h2>
            <p style={{ color: "#999999", margin: "0 0 32px 0", fontSize: "14px", fontWeight: 600 }}>DEMO MENU - FULLY CUSTOMIZABLE</p>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
              {menu.map((item) => (
                <div key={item.name} style={{ background: "#FFFFFF", borderRadius: "24px", border: "1px solid #EAEAEA", overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.03)" }}>
                  <div style={{ background: "#F7EEDD", height: "140px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "48px", position: "relative" }}>
                    {item.emoji}
                    {item.tag && <span style={{ position: "absolute", top: "14px", left: "14px", background: "#111111", color: "#fff", fontSize: "10px", padding: "6px 12px", borderRadius: "100px", fontWeight: 800, letterSpacing: "0.5px" }}>{item.tag}</span>}
                  </div>
                  <div style={{ padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <h3 style={{ margin: "0 0 4px 0", fontSize: "16px", fontWeight: 700, color: "#111111" }}>{item.name}</h3>
                      <p style={{ margin: 0, fontWeight: 700, fontSize: "14px", color: "#111111" }}>{item.price}</p>
                    </div>
                    <div style={{ width: "36px", height: "36px", background: "#111111", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 700 }}>+</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DEVELOPER CARD - PROFESSIONAL ENGLISH ONLY */}
          <div style={{ marginTop: "90px", background: "#111111", borderRadius: "28px", padding: "50px 32px", color: "white", textAlign: "center" }}>
            <p style={{ margin: 0, fontSize: "11px", letterSpacing: "3px", color: "#888888", fontWeight: 700 }}>DESIGNED & DEVELOPED BY</p>
            <h2 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "40px", fontWeight: 700, margin: "16px 0 8px 0", letterSpacing: "-1px" }}>Nafris. JM</h2>
            <p style={{ color: "#AAAAAA", fontSize: "15px", margin: 0, fontWeight: 600 }}>Web Designer from Sammanthurai, Ampara District</p>
            <p style={{ color: "#AAAAAA", fontSize: "15px", margin: "6px 0 0 0", fontWeight: 600 }}>WhatsApp: 0743470005 | Sri Lanka</p>
            
            <p style={{ color: "#CCCCCC", fontSize: "15px", maxWidth: "520px", margin: "28px auto 0 auto", lineHeight: 1.7, fontWeight: 400 }}>
              I build fast, modern, professional websites for cafes, shops and small businesses. 
              This KOPPI template is 100% customizable for your brand.
            </p>

            <div style={{ marginTop: "32px" }}>
              <a href={waLink} style={{ background: "#25D366", color: "white", padding: "16px 36px", borderRadius: "100px", textDecoration: "none", fontWeight: 800, fontSize: "15px", display: "inline-block" }}>Contact on WhatsApp</a>
            </div>
            
            <div style={{ marginTop: "24px", display: "flex", gap: "20px", justifyContent: "center", color: "#666666", fontSize: "12px", fontWeight: 600, flexWrap: "wrap" }}>
              <span>STARTING FROM Rs. 25,000</span>
              <span>•</span>
              <span>3 DAYS DELIVERY</span>
              <span>•</span>
              <span>FREE HOSTING</span>
            </div>
          </div>

          <div style={{ padding: "50px 0", textAlign: "center", color: "#BBBBBB", fontSize: "12px", fontWeight: 600, letterSpacing: "0.5px" }}>
            © 2026 KOPPI Cafe Template • Built by <span style={{ color: "#111111" }}>Nafris. JM</span> • Sammanthurai, Ampara
          </div>
        </div>
      </div>
    </>
  );
}
export default App;