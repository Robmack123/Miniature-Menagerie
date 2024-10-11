import { useEffect, useState } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { Welcome } from "../components/welcome/Welcome";
import { NavBar } from "../components/nav/NavBar";
import { TheVault } from "../components/miniatures/TheVault";
import { Banner } from "../components/banner/Banner";
import { MiniatureDetails } from "../components/miniatures/MiniatureDetails";
import { EditMiniature } from "../components/forms/EditMiniature";
import { AddANewMiniature } from "../components/forms/AddANewMiniature";
import { BattleTracker } from "../components/tracker/BattleTracker";

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
        <Route path="vault">
          <Route index element={<TheVault currentUser={currentUser} />} />
          <Route path=":miniatureId" element={<MiniatureDetails />} />
          <Route path=":miniatureId/edit" element={<EditMiniature />} />
        </Route>
        <Route
          path="add"
          element={<AddANewMiniature currentUser={currentUser} />}
        />
        <Route
          path="battle"
          element={<BattleTracker currentUser={currentUser} />}
        />
      </Route>
    </Routes>
  );
};
