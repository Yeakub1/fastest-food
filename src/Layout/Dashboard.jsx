import { IoMenu } from "react-icons/io5";
import { Outlet } from "react-router-dom";
import ActiveLink from "../components/utility/ActiveLink";
const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
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
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
       
          <ActiveLink to="/dashboard/home">
            <li>
              <p>Home</p>
            </li>
          </ActiveLink>
          <ActiveLink to="/dashboard/addproduct">
            <li>
              <p>Add Procucts</p>
            </li>
          </ActiveLink>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
