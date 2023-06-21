import { Route, Routes } from "react-router-dom";
import "./App.css";
import AllPokemon from "./pages/AllPokemon";
import Search from "./pages/Search";
import Bookmark from "./pages/Bookmarks";
import Navigation from "./components/bottom-navigation/Navigation";

function App() {
  return (
    <div>
      <Navigation />

      <div className="app">
        <Routes>
          <Route path="/" element={<AllPokemon />} />
          <Route path="/home" element={<AllPokemon />} />
          <Route path="/search" element={<Search />} />
          <Route path="/favorites" element={<Bookmark />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
