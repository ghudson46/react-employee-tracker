import { BrowserRouter as Router, Route } from "react-router-dom";
// CSS
import "./App.css";
// COMPONENTS
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import MainPage from "./containers/MainPage";
import Footer from "./components/Footer";

// APP
function App() {
  return (
    <Router basename={process.env.PUBLIC_URL + '/'}>
      <Navbar />
      <Jumbotron />
      <Route exact path="/" component={MainPage} />
      <Footer />
    </Router>
  );
}

// EXPORT
export default App;