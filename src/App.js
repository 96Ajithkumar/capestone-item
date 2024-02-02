import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Product from "./components/Product";
import Cart from "./components/Cart";
import { baseUrl } from "./components/Const/Constants";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path={`${baseUrl}/`} element={<Home />}></Route>
        <Route path={`${baseUrl}/products`} element={<Products />}></Route>
        <Route path={`${baseUrl}/products/:id`} element={<Product />}></Route>
        <Route path={`${baseUrl}/cart`} element={<Cart />}></Route>
      </Routes>
    </>
  );
}

export default App;
