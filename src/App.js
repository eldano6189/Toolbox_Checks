import { Route, Routes } from "react-router-dom";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";

import Background from "./components/background/background";
import HompePage from "./pages/home-page/homePage";
import ContactPage from "./pages/contact-page/contactPage";

const App = () => {
  return (
    <div className="App dark">
      <Background />

      <Header />
      <main>
        <Routes>
          <Route exact path="/" element={<HompePage />} />
          <Route exact path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
