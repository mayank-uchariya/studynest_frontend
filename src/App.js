import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.js";
import Footer from "./components/Footer/Footer.js";
import Home from "./containers/Home/Home.js";
import Property from "./containers/Property/Property.js";
import Service from "./containers/Service/Service.js";
import PropertyDetail from "./containers/Property/PropertyDetail/PropertyDetail.js";
import Profile from "./containers/Profile/Profile.js";
import WhastappIcon from "./components/WhatsappIcon/WhatsappIcon.js";
import Admin from "./containers/Admin/Admin.js";
import { jwtDecode } from "jwt-decode";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState({});

  const decodeToken = (token) => {
    try {
      const decoded = jwtDecode(token);
      console.log("Decoded Token:", decoded);
      setUser(decoded);
      return decoded;
    } catch (error) {
      console.error("Invalid token", error);
    }
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Navbar />
      <WhastappIcon />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Property" element={<Property />} />
        <Route path="/Services" element={<Service />} />
        <Route path="/Property/:PropertyId" element={<PropertyDetail />} />
        <Route path="/Profile" element={<Profile decodeToken={decodeToken} />} />
        <Route path="/Admin" element={<Admin/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
