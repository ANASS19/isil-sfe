import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Cart from "./pages/Cart";
import CategoryPage from "./pages/CategoryPage";
import Contact from "./pages/Contact";
import Home0 from "./pages/Home0";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Mondesign from "./pages/Mondesign";
import ProductPage from "./pages/ProductPage";
import Register from "./pages/Register";
import Services from "./pages/Services";
import Shipping from "./pages/Shipping";
import Profile from "./pages/Profile";
import { useSelector } from "react-redux";
function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/catalogue" element={<CategoryPage />}>
          <Route path=":category" element={<CategoryPage />} />
        </Route>

        <Route path="/productpage" element={<ProductPage />} />
        <Route path="productpage/:id" element={<ProductPage />} />

        <Route path="/mondesign" element={<Mondesign />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Profile" element={<Profile />} />
        <Route
          path="/login"
          element={user ? <Navigate to="/" replace /> : <Login />}
        />
        <Route
          path="/register"
          element={user ? <Navigate to="/" replace /> : <Register />}
        />

        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
