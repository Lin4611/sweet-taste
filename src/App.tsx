import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WebRouter from "./router/WebRouter";
import LoadingOverlay from "./components/LoadingOverlay";
function App() {
  return (
    <>
      <Navbar />
      <LoadingOverlay/>
      <WebRouter />
      <Footer />
    </>
  );
}

export default App;
