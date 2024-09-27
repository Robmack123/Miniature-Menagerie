import { useEffect, useState } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { Welcome } from "../components/welcome/Welcome";
import { NavBar } from "../components/nav/NavBar";

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const localMiniUser = localStorage.getItem("mini_user");
    const miniUserObject = JSON.parse(localMiniUser);

    setCurrentUser(miniUserObject);
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Outlet />
          </>
        }
      >
        <Route index element={<Welcome />} />
        <Route path="vault" element={<>The Vault</>} />
      </Route>
    </Routes>
  );
};
