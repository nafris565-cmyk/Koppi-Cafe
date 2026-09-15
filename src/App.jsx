function App() {
  return (
    <div style={{fontFamily: 'sans-serif', background: '#FFFBF5', minHeight: '100vh'}}>
      <nav style={{display: 'flex', justifyContent: 'space-between', padding: '20px 40px'}}>
        <h2 style={{fontWeight: 'bold', fontSize: '24px'}}>KOPPI.</h2>
        <button style={{background: 'black', color: 'white', padding: '10px 20px', borderRadius: '20px'}}>Order Now</button>
      </nav>

      <div style={{padding: '40px', maxWidth: '1200px', margin: 'auto'}}>
        <h1 style={{fontSize: '70px', fontWeight: 'bold', lineHeight: '1'}}>Colombo's<br/>Finest Brew.</h1>
        <p style={{fontSize: '18px', color: '#666', marginTop: '20px'}}>Hand-roasted beans, slow-brewed love. Visit us at Wellawatta.</p>
        
        <div style={{marginTop: '40px', display: 'flex', gap: '20px'}}>
          <a href="https://wa.me/94771234567" style={{background: 'black', color: 'white', padding: '15px 30px', borderRadius: '30px', textDecoration: 'none'}}>WhatsApp Order</a>
          <button style={{border: '1px solid black', padding: '15px 30px', borderRadius: '30px'}}>View Menu</button>
        </div>

        <div style={{marginTop: '60px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px'}}>
          <div style={{background: 'white', padding: '30px', borderRadius: '20px'}}><h3>Iced Koppi</h3><p>Rs. 950</p></div>
          <div style={{background: 'white', padding: '30px', borderRadius: '20px'}}><h3>Ceylon Latte</h3><p>Rs. 1100</p></div>
          <div style={{background: 'black', color: 'white', padding: '30px', borderRadius: '20px'}}><h3>Kopi Bun</h3><p>Rs. 450</p></div>
        </div>
      </div>
    </div>
  )
}
export default App