import "./App.css";
import { ExchangeCard } from "./components";

import { EXCHANGE_CARD } from "./MockData";

function App() {
  return (
    <>
      <div>
        <ExchangeCard {...EXCHANGE_CARD} />
      </div>
    </>
  );
}

export default App;
