import "./App.css";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/About/About";
import Experiances from "./components/experiance/Experiance";
import Contect from "./components/Contect/Contect";
import Footer from "./components/footer/Footer";
// import Services from "./components/services/Services";
import Education from "./components/education/Education";
import Project from "./components/project/Project";

function App() {
  return (
    <>
      <div className="row-outer">
        <div className="wrapper">
          <span className="shape"></span>
          <span className="shape"></span>
          <span className="shape"></span>
          <span className="shape"></span>
          <span className="shape"></span>
          <span className="shape"></span>
          <span className="shape"></span>
          <span className="shape"></span>
          <span className="shape"></span>
          <span className="shape"></span>
        </div>
      </div>
      <Header />
      <Nav />
      <About />
      <Education />
      <Experiances />
      <Project />
      <Contect />
      <Footer />
    </>
  );
}

export default App;
