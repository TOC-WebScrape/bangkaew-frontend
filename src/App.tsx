import "./App.css";
import { ExchangeCard, SearchBox } from "./components";

import { EXCHANGE_CARD } from "./MockData";
import { Navbar } from "./components";

function App() {
  return (
    <>
      <Navbar/>
      <SearchBox/>
      <ExchangeCard {...EXCHANGE_CARD} />
    </>
  );
}

export default App;
