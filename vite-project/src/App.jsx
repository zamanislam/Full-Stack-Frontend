import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Cart from "./components/cart";
import Home from "./components/Home";
import Product from "./components/ProductPage";


function App() {
  return (
    <>
      <div>
        <Header />
        <Navbar />
       
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product" element={<Product/>}/>
        </Routes>
        
      </div>
    </>
  );
}

export default App;
