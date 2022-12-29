// import logo from './logo.svg';
import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
// import NavbarMain from './components/Navbar/Navbar';
import About from "./components/About/About";
import FrontPage from "./components/FrontPage/FrontPage";
import Footer from "./components/Footer/Footer";
import Program from "./components/Program/Program";
import Trainer from "./components/Trainers/Trainer";


function App() {
  return (
    <React.Fragment>


      <Header />
      <FrontPage />
      <About/>
      <Program/>
      <Trainer/>
      <Footer/>



    </React.Fragment>
  );
}

export default App;
