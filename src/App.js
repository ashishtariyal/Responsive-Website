import About from './About';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './App.css';
import Contact from './Contact';
import Home from './Home';
import Service from './Service';
import {BrowserRouter, Route, Routes,Link} from "react-router-dom";

function App() {
  return (
    <>
    
  
    <BrowserRouter>
    
    <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">

           
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link  className="navbar-brand" to="/"> The Tariyal</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className ="nav-item">
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link active='active' className="nav-link" to="/service">Services</Link>
        </li>
        <li className="nav-item">
          <Link active='active' className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link active='active' className="nav-link" to="/contact">Contact</Link>
        </li>
       
      </ul>
      
    </div>
  </div>
</nav>
</div>
          </div>
        </div>

    <Routes>
      <Route exact path="/" element = {<Home/>} ></Route>
      <Route exact path="/about" element={<About/>}></Route>
      <Route exact path="/service" element={<Service/>}></Route>
      <Route exact path="/contact" element={<Contact/>}></Route>
     
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
