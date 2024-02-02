import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Product from "./components/Product";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/:id" element={<Product />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </>
  );
}

export default App;
