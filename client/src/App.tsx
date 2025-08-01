export default function App() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#EAEEF4', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center' 
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ 
          fontSize: '48px', 
          fontWeight: 'bold', 
          color: '#1A1B1D', 
          marginBottom: '16px' 
        }}>
          React App is Working!
        </h1>
        <p style={{ fontSize: '20px', color: '#848DAB' }}>
          Migration successful - Tailwind may be loading...
        </p>
      </div>
    </div>
  );
}