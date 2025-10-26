import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import ProductListPage from "./pages/ProductListPage";
import LoginPage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";
import ShippingPage from "./pages/ShippingPage";
import CheckoutSuccessPage from "./pages/CheckoutSuccessPage";
import CheckoutPaymentPage from "./pages/CheckoutPaymentPage";

function App() {
  return (
    <>
      <Navbar />
      {/* <HomePage /> */}
      {/* <ProductListPage/> */}
      {/* <LoginPage/> */}
      {/* <CartPage /> */}
      {/* <ShippingPage /> */}
      {/* <CheckoutSuccessPage/> */}
      <CheckoutPaymentPage />
      <Footer />
    </>
  );
}

export default App;
