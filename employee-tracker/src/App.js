import { BrowserRouter as Router, Route } from "react-router-dom";
// CSS
import "./App.css";
// COMPONENTS
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Container from "./components/Container";
import Footer from "./components/Footer";

// APP
function App() {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <Footer />
    </>
  );
}

// EXPORT
export default App;