import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailsPage from "./components/detailsPage/DetailsPage";
import CategoryDetails from "./components/categories/CategoryDetails";

function App() {
  return (
    <>
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/details/:slug" element={<DetailsPage />} />
          <Route path="/category/:pk" element={<CategoryDetails />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  );
}

export default App;
