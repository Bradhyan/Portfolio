export const NavbarViteCode = `
import { useState, useEffect } from 'react';

export default function NavbarVite() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Controlar el cambio de tamaño de pantalla
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navStyle = {
    backgroundColor: '#000000',
    height: '60px', // Un poco más alta para que luzca mejor
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
    padding: '0 24px',
    boxSizing: 'border-box'
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    cursor: 'pointer'
  };

  const mobileMenuStyle = {
    position: 'fixed',
    top: '60px',
    left: 0,
    width: '100%',
    backgroundColor: '#000000',
    display: isOpen ? 'flex' : 'none',
    flexDirection: 'column',
    gap: '20px',
    padding: '24px',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
    zIndex: 99
  };

  return (
    <>
      <nav style={navStyle}>
        {/* Lado Izquierdo: Logo y Título */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ width: '40px', height: '40px', marginRight: '12px' }}>
            <img 
              src="/images/logo.png" 
              alt="Logo" 
              style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
            />
          </div>
          <h1 style={{ 
            color: 'white', 
            fontSize: '18px', 
            fontWeight: 'bold', 
            textTransform: 'uppercase', 
            letterSpacing: '1px',
            margin: 0 
          }}>
            Simulador de Crédito
          </h1>
        </div>

        {/* Desktop Menu */}
        {!isMobile && (
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <a href="#inicio" style={linkStyle}>Inicio</a>
            <a href="#about" style={linkStyle}>About</a>
            <a href="#login" style={{...linkStyle, backgroundColor: '#333', padding: '8px 16px', borderRadius: '4px'}}>Login</a>
          </div>
        )}

        {/* Mobile Toggle Button */}
        {isMobile && (
          <button 
            onClick={() => setIsOpen(!isOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: 'white',
              fontSize: '24px',
              cursor: 'pointer'
            }}
          >
            {isOpen ? '✕' : '☰'}
          </button>
        )}
      </nav>

      {/* Menú Desplegable Móvil */}
      {isMobile && (
        <div style={mobileMenuStyle}>
          <a href="#inicio" onClick={() => setIsOpen(false)} style={linkStyle}>Inicio</a>
          <a href="#about" onClick={() => setIsOpen(false)} style={linkStyle}>About</a>
          <a href="#login" onClick={() => setIsOpen(false)} style={linkStyle}>Login</a>
        </div>
      )}

      {/* Espaciador para que el contenido no quede debajo de la nav */}
      <div style={{ height: '60px' }}></div>
    </>
  );
} 
`;