function Layout({ children }) {
  return (
    <div style={{
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto',
      minHeight: '100vh', 
      display: 'flex',
      flexDirection: 'column',
    }}>
      <main style={{ flex: '1' }}>
        {children}
      </main>
    </div>
  );
}

export default Layout;
