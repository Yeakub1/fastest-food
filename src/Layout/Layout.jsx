import { useEffect, useState } from "react";
import Footer from "../components/Shared/Footer";
import Navbar from "../components/Shared/Navbar";
import { Outlet } from "react-router-dom";
import Loding from "../components/utility/Loding";


const Layout = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      const loadingTimeout = setTimeout(() => {
        setLoading(false);
      }, 2000);
      return () => {
        clearTimeout(loadingTimeout);
      };
    }, []);
  return (
    <div>
      {loading ? (
        <>
          <Loding />
        </>
      ) : (
        <>
          <Navbar />
          <Outlet />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Layout;
