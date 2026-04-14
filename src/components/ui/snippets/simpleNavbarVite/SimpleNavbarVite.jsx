export default function SimpleNavbarVite() {
  return (
    <nav style={{
      backgroundColor: '#000000',
      height: '46px',
      width: '100%',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 50,
      display: 'flex',
      alignItems: 'center',
      borderBottom: '1px solid rgba(255,255,255,0.1)',
      padding: '0 24px'
    }}>
      {/* Contenedor del Logo */}
      <div style={{ width: '66px', height: '66px', marginRight: '16px' }}>
        <img 
          src="/images/logo.png" 
          alt="Logo" 
          style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
        />
      </div>
      
      {/* Texto Blanco */}
      <h1 style={{ 
        color: 'white', 
        fontSize: '20px', 
        fontWeight: 'bold', 
        textTransform: 'uppercase', 
        letterSpacing: '2px',
        margin: 0 
      }}>
        Simulador de Crédito
      </h1>
    </nav>
  );
}