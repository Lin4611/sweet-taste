import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import ProductListPage from "./pages/ProductListPage";
import LoginPage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";
import ShippingPage from "./pages/ShippingPage";

function App() {
  return (
    <>
      <Navbar />
      {/* <HomePage /> */}
      {/* <ProductListPage/> */}
      {/* <LoginPage/> */}
      {/* <CartPage /> */}
      <ShippingPage />
      <Footer />
    </>
  );
}

export default App;
