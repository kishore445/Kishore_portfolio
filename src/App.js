

import { Fragment } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import 'tailwindcss/tailwind.css';
import { Routes,Route, HashRouter} from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Projects from './components/Projects';



function App() {
  return (
   <HashRouter>
    <Routes>
    <Route path="/"element={ <Fragment> <Navbar/> <Home/> </Fragment> }/>
      <Route path="/About" element={ <Fragment><Navbar/> <About/> </Fragment> }/>
      <Route path="/Projects" element={<Fragment> <Navbar/>  <Projects/> </Fragment>  }/>
      <Route path="/Contact" element={<Fragment> <Navbar/>  <Contact/> </Fragment>  }/>
      <Route path="/Resume" element={<Fragment> <Navbar/>  <Resume/> </Fragment>  }/>
    
    </Routes>
   </HashRouter>
    
  );
}

export default App;
