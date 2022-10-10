import { Users } from "../pages/Users/index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DataUsers } from "../pages/DataUsers";
import { useState } from "react";
import { Home } from "../pages/Home";

export const Routing = () => {
  const [modalAdd, setModalAdd] = useState(false);
  const [toastSucess, setToastSucess] = useState(false);

  const toggleModalAdd = () => {
    setModalAdd(!modalAdd);
    console.log(modalAdd);
  };

  const toggleToastSucess = () => {
    setToastSucess(!toastSucess);
    setTimeout(() => {
      setToastSucess(false);
    }, 2000);
  };

  return (
    <Router>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route
          element={
            <Users
              modalAdd={modalAdd}
              toggleModalAdd={toggleModalAdd}
              toastSucess={toastSucess}
              toggleToastSucess={toggleToastSucess}
            />
          }
          path="/users"
        />
        <Route element={<DataUsers />} path="/datausers/:id" />
      </Routes>
    </Router>
  );
};
