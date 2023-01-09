import logo from './logo.svg';
import './App.css';
import Hero from './Main/Hero';
import Music from './Main/Music';
import Clock from './Main/Clock';
import Editpictures from './Main/Editpictures';
import Wallpaper from './Main/Wallpaper';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={[<Hero/>]}/>
      <Route path="/Music" element={[<Music/>]}/>
      <Route path="/Clock"element={[<Clock/>]}/>
      <Route path="/Editpictures"element={[<Editpictures/>]}/>
      <Route path="/Wallpaper"element={[<Wallpaper/>]}/>
        </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
