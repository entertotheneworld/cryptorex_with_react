import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DarkMode from './data/DarkMode';
import Market from './pages//Market'
import Coin from './pages/Coin';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const handleDarkMode = () => {
    if(darkMode) {
      document.body.setAttribute("data-layout-mode", "");
      setDarkMode(false);
    } else {
      document.body.setAttribute("data-layout-mode", "dark");
      setDarkMode(true);
    }
    console.log(darkMode)
  }

  return (
    <DarkMode.Provider value={{ darkMode, handleDarkMode }}>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/market" element={<Market />} />
            <Route path="/coin/:coinSlug" element={<Coin />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </DarkMode.Provider>
  );
}

export default App;
