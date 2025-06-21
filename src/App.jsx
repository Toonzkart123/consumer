import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import StoreDetails from "./pages/StoreDetails";
import CartPage from "./pages/CartPage";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import ProfilePage from "./pages/ProfilePage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import StoresPage from "./pages/StoresPage";
import OrderSuccessPage from "./pages/OrderSuccessPage";
import DeleteAccountPage from "./pages/DeletePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/store/:id" element={<StoreDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/about" element={<AboutUsPage />} />
      <Route path="/contact" element={<ContactUsPage />} />
      <Route path="/stores" element={<StoresPage />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password/:token" element={<ResetPassword />} />
      <Route path="/order-success" element={<OrderSuccessPage />} />
      <Route path="/delete-account" element={<DeleteAccountPage />} />
      <Route path="/privacy-policy" element={<DeleteAccountPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
}

export default App;
