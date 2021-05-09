import { Link } from 'react-router-dom';
import AppRoutes from 'services/routes/AppRoutes';

function App() {
  return (
    <div className="App">
      <Link to="/" style={{ fontSize: '20px', display: 'block' }}>
        Login
      </Link>
      <Link to="/home" style={{ fontSize: '20px', display: 'block' }}>
        Home
      </Link>
      <AppRoutes isLoggedIn={true} />
    </div>
  );
}

export default App;
