
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Cart from "./pages/Cart";
import CategoryPage from "./pages/CategoryPage";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductPage from "./pages/ProductPage";
import Register from "./pages/Register";
import Services from "./pages/Services";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<Home />}/>
        <Route path="/catalogue"  element={<CategoryPage />}/>
        <Route path="/login"  element={<Login />}/>
        <Route path="/cart"  element={<Cart />}/>
        <Route path="/services"  element={<Services />}/>
        <Route path="/contact"  element={<Contact />}/>
        <Route path="/register"  element={<Register />}/>
        <Route path="/productpage"  element={<ProductPage />}/>
        <Route path="*"  element={<Home />}/>
      </Routes>
    </Router>
  );
}

export default App;
