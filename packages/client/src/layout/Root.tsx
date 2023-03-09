import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
function Root() {
  return (
    <div className="h-full flex flex-col">
      <Navigation />
      <div className="container flex flex-col mx-auto h-full">
        <Outlet />
      </div>
    </div>
  );
}

export default Root;
