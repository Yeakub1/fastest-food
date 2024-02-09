import { IoMenu } from "react-icons/io5";
import { NavLink, Outlet } from "react-router-dom";
import ActiveLink from "../components/utility/ActiveLink";
import { FaHome } from "react-icons/fa";
import logo from "../assets/images/nav-Logo.png";

const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className=" flex justify-center drawer-button lg:hidden"
        >
          <div className="btn bg-[#09867E] text-white text-2xl font-bold ">
            <IoMenu />
          </div>
        </label>
        <Outlet />
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-64 bg-[#09867E]  min-h-full text-white text-lg">
          {/* Sidebar content here */}
          <div className="flex justify-center items-center">
            <img className="h-16 w-16 " src={logo} alt="" />
          </div>
          <ActiveLink to="/dashboard/home">
            <li>
              <p>Dashboard</p>
            </li>
          </ActiveLink>
          <ActiveLink to="/dashboard/addproduct">
            <li>
              <p>Add Procucts</p>
            </li>
          </ActiveLink>
          <ActiveLink to="/dashboard/add-customer">
            <li>
              <p>Add Customer</p>
            </li>
          </ActiveLink>
          <ActiveLink to="/dashboard/customers">
            <li>
              <p>Customer List</p>
            </li>
          </ActiveLink>
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome /> Home
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
