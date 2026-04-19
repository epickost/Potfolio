import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About Me/About';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route> 
        <Route path="/about" element={<About />}></Route> 
      </Routes> 
    </Router>
  );
}

export default App;

