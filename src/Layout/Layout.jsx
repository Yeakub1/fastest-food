import Footer from "../components/Shared/Footer";
import Navbar from "../components/Shared/Navbar";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
