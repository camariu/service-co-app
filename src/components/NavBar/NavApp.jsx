import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/FackeAuthContext";

export default function NavApp() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
    navigate("/");
  };

  function handleClick() {
    logout();
    navigate("/");
  }

  return (
    <nav className="p-5">
      <button
        onClick={handleGoBack}
        className="absolute top-0 left-0 mt-4 ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
      >
        Back
      </button>
      <button
        onClick={handleClick}
        className="absolute top-0 right-0 mt-4 mr-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
      >
        Logout
      </button>

      <ul className="text-stone-950  font-bold uppercase mt-[50px] sm:flex sm:gap-3  sm:justify-center sm:mt-4  ">
        <Link to="client">
          <li className="p-1  hover:text-slate-50">Cauta client</li>
        </Link>
        <Link to="inregistrare">
          <li className="p-1  hover:text-slate-50">Adauga client</li>
        </Link>
        <Link to="programare">
          <li className="p-1  hover:text-slate-50">Programari</li>
        </Link>
        <Link to="programari">
          <li className="p-1  hover:text-slate-50">Vezi programari</li>
        </Link>
        <Link to="istoric">
          <li className="p-1  hover:text-slate-50">Historic</li>
        </Link>
      </ul>
    </nav>
  );
}
