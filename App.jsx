
import './App.css'
import Home from './screens/Home'
import Login from './screens/Login'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/js/dist/carousel/carousel.js';

import { 
  BrowserRouter,
   Routes, 
   Route
  } from "react-router-dom";


function App() {
 

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" element={<Home></Home>}></Route>
          <Route exact path="/login" element={<Login></Login>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
