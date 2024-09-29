import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import Pizza from './pages/pizza/Pizza';
import NotFound from './components/notfound/NotFound';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Profile from './components/profile/Profile';

function App() {
  return (
 <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/:id" element={<Pizza />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </>
  );
}

export default App;

