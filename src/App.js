import React from "react";
import CheckIn from "./components/check-in/check-in";
import Navbar from "./components/navbar/navbar";
import Icons from "./components/icons-section/icons"
import MainSection from "./components/title&currency/main";
import Card from "./components/cards/cards";



function App() {
  return (
    <div>
       <Navbar />
       <CheckIn />
       <Icons />
       <MainSection />
       <Card />
    </div>
  );
}

export default App;
