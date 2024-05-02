import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col items-center mx-auto px-5 text-center ">
      <h1 className="text-[25px] sm:text-[55px] font-bold text-stone-50 mb-4 mt-[150px] m ">
        Bine ați venit pe pagina de gestionare Service.Co
      </h1>
      <p className=" text-sm text-red-600 mt-3 font-semibold">
        Accesul este permis doar persoanelor autorizate
      </p>
      <Link to="login">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 mt-8 rounded">
          Logare
        </button>
      </Link>
    </div>
  );
}
