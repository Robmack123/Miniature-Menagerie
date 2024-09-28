import { useEffect, useState } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { Welcome } from "../components/welcome/Welcome";
import { NavBar } from "../components/nav/NavBar";
import { TheVault } from "../components/miniatures/TheVault";
import { Banner } from "../components/banner/Banner";

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
            <Banner />
            <NavBar />
            <Outlet />
          </>
        }
      >
        <Route index element={<Welcome />} />
        <Route path="vault" element={<TheVault currentUser={currentUser} />} />
        <Route path="add" element={<>Add a miniature</>} />
      </Route>
    </Routes>
  );
};
