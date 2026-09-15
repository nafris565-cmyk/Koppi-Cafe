import React from 'react'

export default function App() {
  const wa = "https://wa.me/94743470005?text=Hi%20Nafris!%20I%20need%20a%20website"
  return (
    <div style={{fontFamily:'Outfit, sans-serif', background:'#FFFEFB', color:'#111', minHeight:'100vh'}}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@600;800&display=swap'); *{box-sizing:border-box} body{margin:0}`}</style>
      
      <nav style={{maxWidth:'1120px', margin:'0 auto', padding:'18px 20px', display:'flex', justifyContent:'space-between', borderBottom:'1px solid #eee'}}>
        <b>NAFRIS.</b>
        <a href={wa} style={{background:'#111', color:'#fff', padding:'10px 20px', borderRadius:'100px', textDecoration:'none', fontSize:'13px', fontWeight:700}}>Contact</a>
      </nav>

      <div style={{maxWidth:'1120px', margin:'0 auto', padding:'50px 20px'}}>
        <h1 style={{fontSize:'52px', fontWeight:800, lineHeight:'0.9'}}>Websites that<br/>get you customers.</h1>
        <p style={{color:'#666', marginTop:'14px', maxWidth:'500px'}}>I build fast websites for cafes, shops and small businesses. Based in Sammanthurai.</p>
        
        <div style={{marginTop:'30px', background:'#fff', border:'1px solid #eee', borderRadius:'20px', padding:'22px'}}>
          <h3 style={{margin:0}}>Featured Project: KOPPI Cafe</h3>
          <p style={{color:'#888', fontSize:'14px'}}>Premium cafe template - Menu, WhatsApp ordering</p>
          <div style={{marginTop:'14px', display:'flex', gap:'10px'}}>
            <a href="https://koppi-cafe.vercel.app" target="_blank" style={{background:'#111', color:'#fff', padding:'10px 18px', borderRadius:'100px', textDecoration:'none', fontSize:'13px'}}>View Live</a>
            <a href={wa} style={{border:'2px solid #111', padding:'10px 18px', borderRadius:'100px', textDecoration:'none', color:'#111', fontSize:'13px', fontWeight:700}}>Get Similar Website</a>
          </div>
        </div>

        <div style={{marginTop:'40px', background:'#111', color:'#fff', borderRadius:'24px', padding:'30px', textAlign:'center'}}>
          <h2 style={{margin:0}}>Nafris. JM</h2>
          <p style={{color:'#aaa', fontSize:'14px'}}>Sammanthurai, Ampara - 0743470005</p>
          <p style={{marginTop:'10px', color:'#ccc'}}>Starting from Rs. 25,000 - 3 Days Delivery</p>
          <a href={wa} style={{display:'inline-block', marginTop:'16px', background:'#25D366', color:'#fff', padding:'12px 28px', borderRadius:'100px', textDecoration:'none', fontWeight:700}}>WhatsApp Me</a>
        </div>
      </div>
    </div>
  )
}