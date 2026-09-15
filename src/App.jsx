function App() {
  return (
    <div style={{ 
      fontFamily: "'Inter', system-ui, sans-serif", 
      background: '#FFFBF5', 
      minHeight: '100vh',
      color: '#111'
    }}>
      <nav style={{
        display: 'flex', justifyContent: 'space-between', 
        alignItems: 'center', padding: '24px 40px',
        maxWidth: '1200px', margin: '0 auto'
      }}>
        <h2 style={{fontWeight: '900', fontSize: '24px', letterSpacing: '2px', margin: 0}}>KOPPI.</h2>
        <button style={{
          background: 'black', color: 'white', padding: '10px 22px', 
          borderRadius: '24px', border: 'none', fontWeight: '600'
        }}>Order Now</button>
      </nav>

      <div style={{padding: '20px 40px 80px', maxWidth: '1200px', margin: '0 auto'}}>
        <div style={{maxWidth: '700px'}}>
          <h1 style={{
            fontSize: 'clamp(48px, 8vw, 88px)', fontWeight: '900', 
            lineHeight: '0.9', color: '#111111', margin: '40px 0 0 0',
            letterSpacing: '-2px'
          }}>
            Colombo's<br/>Finest Brew.
          </h1>
          <p style={{fontSize: '18px', color: '#6B6B6B', marginTop: '24px', lineHeight: '1.6'}}>
            Hand-roasted beans, slow-brewed love. Visit us at Wellawatta for the perfect cup, every time.
          </p>
          
          <div style={{marginTop: '36px', display: 'flex', gap: '16px'}}>
            <a href="https://wa.me/94771234567" target="_blank"
              style={{
                background: '#111', color: 'white', padding: '16px 32px', 
                borderRadius: '100px', textDecoration: 'none', fontWeight: '700'
              }}>
              WhatsApp Order
            </a>
            <button style={{
              border: '1.5px solid #111', padding: '16px 32px', borderRadius: '100px',
              background: '#FFFFFF', color: '#111111', fontWeight: '700', cursor: 'pointer'
            }}>
              View Menu
            </button>
          </div>
        </div>

        <div style={{
          marginTop: '72px', display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px'
        }}>
          <div style={{background: 'white', padding: '32px', borderRadius: '24px', boxShadow: '0 8px 30px rgba(0,0,0,0.04)'}}>
            <h3 style={{margin: '0 0 8px 0'}}>Iced Koppi</h3>
            <p style={{margin: 0, color: '#6B6B6B'}}>Rs. 950</p>
          </div>
          <div style={{background: 'white', padding: '32px', borderRadius: '24px', boxShadow: '0 8px 30px rgba(0,0,0,0.04)'}}>
            <h3 style={{margin: '0 0 8px 0'}}>Ceylon Latte</h3>
            <p style={{margin: 0, color: '#6B6B6B'}}>Rs. 1100</p>
          </div>
          <div style={{background: '#111', color: 'white', padding: '32px', borderRadius: '24px'}}>
            <h3 style={{margin: '0 0 8px 0'}}>Kopi Bun</h3>
            <p style={{margin: 0, color: '#AAA'}}>Rs. 450</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default App