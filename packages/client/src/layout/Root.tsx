import { Outlet } from "react-router-dom";
function Root() {
  return (
    <div className="container flex flex-col mx-auto h-full">
      <h1 className="bg-slate-500">Text</h1>
      <Outlet />
    </div>
  );
}

export default Root;
