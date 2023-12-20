
function App() {
  return (
    <div className="app-container" style={styles.appContainer}>
      <div className="curriculo-container" style={styles.container}>
        <h1 style={styles.title}>Lucas Nogueira de Carvalho Bezerra</h1>
        <p style={styles.subtitle}>Desenvolvedor Web</p>
        <div className="divider" style={styles.divider}></div>
        <p style={styles.text}>Idade: 23 anos</p>
        <p style={styles.text}>Naturalidade: Carius</p>
        <p style={styles.text}>Curso: Bacharelado em Sistemas de Informação</p>
        <p style={styles.text}>Instituição: IFCE Campus Cedro</p>
      </div>
    </div>
  );
}

const styles = {
  appContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: 'rgba(224, 247, 250, 0.9)',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    width: '300px',
    textAlign: 'center',
  },
  title: {
    color: '#004d40',
    fontSize: '1.5rem',
    marginBottom: '5px',
  },
  subtitle: {
    color: '#00695c',
    fontSize: '1rem',
    marginBottom: '10px',
  },
  divider: {
    height: '1px',
    backgroundColor: '#004d40',
    margin: '10px 0',
  },
  text: {
    color: '#004d40',
    margin: '8px 0',
  },
};

export default App;
