import "./App.css";
import { ExchangeCard } from "./components";

import { EXCHANGE_CARD } from "./MockData";
import { Navbar } from "./components";

function App() {
  return (
    <>
      <Navbar/>
      <ExchangeCard {...EXCHANGE_CARD} />
    </>
  );
}

export default App;
