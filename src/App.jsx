import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite_services/auth.js";
import { login, logout } from "./store/authSlice";
import "./App.css";
import { Header, Footer } from "./components/index.js";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, SetLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(false);
        }
      })
      .finally(() => SetLoading(false));
  }, []);

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-600F">
      <div className="w-full block">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
