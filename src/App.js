import React, { useContext } from "react";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Graduation from "./components/Graduation/Graduation";
import Skills from "./components/Services/Services";
import Achievements from "./components/Achievements/Achievements";
import "./App.css";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { themeContext } from "./Context";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      <Graduation />
      <Skills />
      <Works />
      <Portfolio />
      <Achievements id="achievements" />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
