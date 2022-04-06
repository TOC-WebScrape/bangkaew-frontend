import "./App.css";
import { ExchangeCard, LandingCard, SearchBox } from "./components";

import { EXCHANGE_CARD, LANDING_CARD } from "./MockData";
import { Navbar } from "./components";

function App() {
  return (
    <>
      <Navbar />
      <SearchBox />
      <div
        style={{
          paddingTop: "10px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <LandingCard {...LANDING_CARD} />
        <LandingCard {...LANDING_CARD} />
        <LandingCard {...LANDING_CARD} />
      </div>
    </>
  );
}

export default App;
