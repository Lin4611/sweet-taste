import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductListPage from "../pages/ProductListPage";
import LoginPage from "../pages/LoginPage";
import CartPage from "../pages/CartPage";
import ShippingPage from "../pages/ShippingPage";
import CheckoutSuccessPage from "../pages/CheckoutSuccessPage";
import CheckoutPaymentPage from "../pages/CheckoutPaymentPage";
import CheckoutInvoicePage from "../pages/CheckoutInvoicePage";

const WebRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductListPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/login" element={<LoginPage />} />

      <Route path="/checkout/shipping" element={<ShippingPage />} />
      <Route path="/checkout/payment" element={<CheckoutPaymentPage />} />
      <Route path="/checkout/invoice" element={<CheckoutInvoicePage />} />
      <Route path="/checkout/success" element={<CheckoutSuccessPage />} />
    </Routes>
  );
};
export default WebRouter;
