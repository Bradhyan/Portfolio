export default function FooterVite() {
  return (
    <footer style={{
      backgroundColor: '#000000',
      height: '46px', // Misma altura que el navbar
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center', // Centrado horizontal
      borderTop: '1px solid rgba(255,255,255,0.1)',
      marginTop: 'auto' // Empuja al final si usas Flex en el contenedor padre
    }}>
      <p style={{ 
        color: 'white', 
        fontSize: '17px', 
        letterSpacing: '1px',
        margin: 0,
        opacity: 0.8 
      }}>
        © {new Date().getFullYear()} — Bradhyan Giraldo Arenas
      </p>
    </footer>
  );
}