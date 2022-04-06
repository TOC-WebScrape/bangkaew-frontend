import "./App.css";
import { LandingPage, SearchPage, AboutPage } from "./components";
import { Navbar } from "./components";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route
          path='*'
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </>
  );
}

export default App;
