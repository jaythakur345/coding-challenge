import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignUp from './components/Signup/SignUp';
import Login from './components/Login/Login';
import Menu from './components/Menu/Menu';
import FoodState from './context/FoodState';
import CheckOut from './components/checkout/CheckOut';

function App() {
  const user = JSON.parse(localStorage.getItem('user'));
  return (
    <BrowserRouter>
      <>
        <FoodState>
          <Header />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<SignUp />} />
            <Route path="/home" element={user ? <Home /> : <Login />} />
            <Route path="/menu" element={user ? <Menu /> : <Login />} />
            <Route path="/checkout" element={user ? <CheckOut /> : <Login />} />

          </Routes>
        </FoodState>
      </>
    </BrowserRouter>
  );
}

export default App;
