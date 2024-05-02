import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar/NavApp";

export default function Admin() {
  return (
    <div className="h-screen w-screen">
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
}
