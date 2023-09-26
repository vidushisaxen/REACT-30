import logo from './logo.svg';
import './App.css';
import Hero from './Main/Hero';
import Music from './Main/Music';
import Clock from './Main/Clock';
import Editpictures from './Main/Editpictures';
import Wallpaper from './Main/Wallpaper';
import Flexgallery from './Main/Flexgallery';
import Cities from './Main/Cities';
import Stickynav from './Main/Stickynav';
// import Shades from './Main/Shades';
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
      <Route path="/flexgallery"element={[<Flexgallery />]}/>
      <Route path="/cities"element={[<Cities />]}/>
      <Route path="/Stickynav"element={[<Stickynav/>]}/>
      {/* <Route path="/Shades"element={[<Shades/>]}/> */}
        </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
