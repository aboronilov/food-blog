import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailsPage from "./components/detailsPage/DetailsPage";

function App() {
  return (
    <>
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/details/:slug" element={<DetailsPage />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  );
}

export default App;
