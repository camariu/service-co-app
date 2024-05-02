import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/FackeAuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");

  const navigate = useNavigate();

  const { login, isAuthenticated } = useAuth();

  function handleSubmit(e) {
    e.preventDefault();
    if (email && password) login(email, password);
  }

  const handleGoBack = () => {
    navigate(-1);
  };

  useEffect(
    function () {
      if (isAuthenticated) navigate("/admin", { replace: true });
    },
    [isAuthenticated, navigate]
  );

  return (
    <div className="min-h-screen flex justify-center   px-4  ">
      <button
        onClick={handleGoBack}
        className="absolute top-0 left-0 mt-4 ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
      >
        Back
      </button>
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className=" mt-[90px] text-center  text-[30px] sm:text-[50px] font-extrabold text-stone-50 ">
            Logare
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <button
              type="submit"
              className="   group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Conectare
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
