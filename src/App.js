import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from './components/navbar';
import AppRoutes from './components/AllRoutes';
import Footer from './components/footer';

function App() {
  const location = useLocation();
  const isProPage = location.pathname === "/products";

  return (
    <div className="App">

      {isProPage ? null : <Navbar/>}
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
