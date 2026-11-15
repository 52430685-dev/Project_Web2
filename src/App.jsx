
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Book from "./pages/Book";
import Home from "./pages/Home";
function App() {
 const [cart, setCart] = useState([]);
return(
<BrowserRouter>
<Navbar/>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/Book"
 element={<Book cart={cart} setCart={setCart}/>}
 />
<Route path="/About" element={<About/>}/>
<Route path="/contact" element={<Contact/>}/>
<Route path="/cart"
 element={<Cart cart={cart} setCart={setCart}/>}
 />
</Routes>
</BrowserRouter>
);
}

export default App;