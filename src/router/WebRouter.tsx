import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductListPage from "../pages/ProductListPage";
import LoginPage from "../pages/LoginPage";
import CartPage from "../pages/CartPage";
import CheckoutSuccessPage from "../pages/CheckoutSuccessPage";
import CheckoutPage from "../pages/CheckoutPage";

const WebRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductListPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/login" element={<LoginPage />} />

      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/success" element={<CheckoutSuccessPage />} />
    </Routes>
  );
};
export default WebRouter;
