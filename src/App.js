import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import Signup from './components/Signup';

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> | <Link to="/signup">Signup</Link>
      </nav>

      <Routes>
        <Route path="/*" element={<NoPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
