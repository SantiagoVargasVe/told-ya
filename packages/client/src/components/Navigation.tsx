import { Link, NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className=" sticky py-2 w-full bg-main_headline text-headline">
      <nav className="container h-full flex items-center justify-between content-center mx-auto">
        <h1 className="text-bold text-xl"> Told ya</h1>

        <div className="flex gap-5 font-light">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-highlight font-semibold" : "hover:font-normal"
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-highlight font-semibold" : "hover:font-normal"
            }
            to="/register"
          >
            Register
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
