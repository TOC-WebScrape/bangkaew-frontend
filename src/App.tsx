import "./App.css";
import { ExchangeCard } from "./components";

import { EXCHANGE_CARD } from "./MockData";

function App() {
  return (
    <>
      <div className='w-4/5'>
        <ExchangeCard {...EXCHANGE_CARD} />
      </div>
    </>
  );
}

export default App;
