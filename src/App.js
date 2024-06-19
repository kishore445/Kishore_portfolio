
import { Fragment } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import 'tailwindcss/tailwind.css';
import { Routes,Route, HashRouter} from "react-router-dom";
import About from './components/About';



function App() {
  return (
   <HashRouter>
    <Routes>
    <Route path="/"element={
<Fragment>
<Navbar/>
<Home/>
    </Fragment>
      }/>

      <Route path="/About" element={
         <Fragment>
          <Navbar/>
        <About/>
     </Fragment>
    }
     />
    </Routes>
   </HashRouter>
    
  );
}

export default App;
