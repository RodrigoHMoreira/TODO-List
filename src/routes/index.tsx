import { Users } from "../pages/Users/index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserContext, UserContextProvider } from "../context/UserContext";
import { Assignment } from "../pages/Assignment";
import { useContext } from "react";

export const Routing = () => {
  const { id } = useContext(UserContext);

  return (
    <UserContextProvider>
      <Router>
        <Routes>
          <Route element={<Users />} path="/" />
          <Route element={<Assignment />} path="/assignment" />
        </Routes>
      </Router>
    </UserContextProvider>
  );
};
