
import { Fragment } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import 'tailwindcss/tailwind.css';
import { Routes,Route, HashRouter} from "react-router-dom";



function App() {
  return (
   <HashRouter>
    <Routes>
    <Route path="/"element={
<Fragment>
<Navbar/>
    </Fragment>
      }></Route>
    </Routes>
   </HashRouter>
    
   
 
  
  );
}

export default App;
