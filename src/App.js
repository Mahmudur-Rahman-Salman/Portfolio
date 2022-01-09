import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About/About';
import Menubar from './components/Menubar/Menubar';
import Contact from './components/Contact/Contact';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menubar></Menubar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/skills" element={<Skills></Skills>}></Route>
          <Route path="/projects" element={<Projects></Projects>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
