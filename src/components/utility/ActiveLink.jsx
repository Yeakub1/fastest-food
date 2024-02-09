
import { NavLink } from "react-router-dom";



const ActiveLink = ({ to, children, ...rest }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? "text-orange-500 font-semibold" : "")}
      {...rest}
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
