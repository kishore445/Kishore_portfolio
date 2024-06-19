
import { Fragment } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import 'tailwindcss/tailwind.css';
import { Routes,Route, HashRouter} from "react-router-dom";



function App() {
  return (
   <HashRouter>
    <Routes>
    <Route path="/"element={
<Fragment>
<Navbar/>
<Home/>
    </Fragment>
      }></Route>
    </Routes>
   </HashRouter>
    
   
 
  
  );
}

export default App;
