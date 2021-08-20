import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../../App';
import './Header.css'

const Header = () => {
  const [loggedInUser,setLoggedInUser] = useContext(userContext)
    return (
        <div className="header container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-light">
  <div className="container-fluid">
    <Link style={{ fontSize: "25px" }}  className="navbar-brand" to="/">
    <span ><b>P</b>hoto<b>G</b>raphyex</span>
        
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/checkOutList">Dashboard</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Contact</a>
        </li>
        <li className="nav-item">
          {
            loggedInUser.email ?  <a className="nav-link" href="/">{loggedInUser.name}</a>:
            <Link className="nav-link login" to="/login">Login</Link>
          }
     
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;