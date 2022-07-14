import { GlobalStyle } from "./styles/global";
import { Routing } from "./routes";
import { Header } from "./templates/Header";
import { useContext } from "react";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routing />
    </>
  );
}

export default App;
