import { IoMenu } from "react-icons/io5";
import { Outlet } from "react-router-dom";
import ActiveLink from "../components/utility/ActiveLink";
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
