import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Admin from "./pages/Admin/Admin";
import { AuthProvider } from "./contexts/FackeAuthContext";
import ProtectedRoute from "./pages/ProtectedRoute/ProtectedRoute";
import { ClientsProvider } from "./contexts/UserContext";
import SearchUser from "./components/SearchUser/SearchUser";
import CreateClient from "./components/CreateClient/CreateClient";
import ScheduleClient from "./components/ScheduleClient/ScheduleClient";
import History from "./components/History/History";
import RealizedSchedule from "./components/RealizedSchedule/RealizedSchedule";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

export default function App() {
  return (
    <div className=" bg-stone-400">
      <AuthProvider>
        <ClientsProvider>
          <BrowserRouter>
            <Routes>
              <Route index element={<Home></Home>}></Route>
              <Route path="login" element={<Login></Login>}></Route>
              <Route
                path="admin"
                element={
                  <ProtectedRoute>
                    <Admin></Admin>
                  </ProtectedRoute>
                }
              >
                <Route
                  path="client"
                  element={<SearchUser></SearchUser>}
                ></Route>
                <Route
                  path="inregistrare"
                  element={<CreateClient></CreateClient>}
                ></Route>
                <Route
                  path="programare"
                  element={<ScheduleClient></ScheduleClient>}
                ></Route>
                <Route
                  path="programari"
                  element={<RealizedSchedule></RealizedSchedule>}
                ></Route>
                <Route path="istoric" element={<History></History>}></Route>
              </Route>
              <Route path="*" element={<PageNotFound />}></Route>
            </Routes>
          </BrowserRouter>
        </ClientsProvider>
      </AuthProvider>
    </div>
  );
}
