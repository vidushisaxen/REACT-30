import logo from './logo.svg';
import './App.css';
import Hero from './Main/Hero';
import Music from './Main/Music';
import Clock from './Main/Clock';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={[<Hero/>]}/>
      <Route path="/Music" element={[<Music/>]}/>
      <Route path="/Clock"element={[<Clock/>]}/>
        </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
