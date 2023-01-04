import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./router/home/Home";
import Login from "./router/login/Login";
import Product from "./router/product-wrapper/Product";
import SinglePage from "./router/single-page/SinglePage";
import BattlePass from "./router/battle_pass/BattlePass";
import VBucks from "./components/v-bucks/VBucks";
import News from "./router/news/News";
import Cosplay from "./router/cosplay/Cosplay";
import Help from "./router/help/Help";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  if (isSidebarOpen) {
    document.body.style = "overflow: hidden";
  } else {
    document.body.style = "overflow: auto";
  }

  return (
    <div className="app">
      <Navbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product" element={<Product />} />
        <Route path="/product/:id" element={<SinglePage />} />
        <Route path="/battle-pass" element={<BattlePass />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cosplay" element={<Cosplay />} />
        <Route path="/help" element={<Help />} />
        <Route path="/vbucks" element={<VBucks />} />
        <Route path="/news" element={<News />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
