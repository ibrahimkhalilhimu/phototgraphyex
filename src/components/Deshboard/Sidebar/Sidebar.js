import React, { useContext, useEffect } from 'react';
import './Sidebar.css'
import {  BiCart, BiListOl,  BiPlus, BiUserPlus, BiHomeAlt } from "react-icons/bi";
import { BsGridFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { userContext } from '../../../App';

const Sidebar = () => {
  const [loggedInUser,setLoggedInUser, isAdmin,setIsAdmin]= useContext(userContext)
 
  useEffect(()=>{
        
    fetch('https://radiant-refuge-06037.herokuapp.com/isAdmin',{
        method:'POST',
        headers:{'content-type':'application/json'},
        body:JSON.stringify({email:loggedInUser.email})
    })
    .then(res => res.json())
    .then(data=>{setIsAdmin(data)})
  },[])
  console.log(isAdmin)
    return (
        
    <div className="sidebar">
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
          <span className="navbar-toggler-icon" data-bs-target="#offcanvasExample"></span>
        </button>

        {/* {window.location.pathname.includes("checkOut") &&
          <Link className="navbar-brand me-auto ps-3 text-danger" to="/checkOut">
            CheckOut
          </Link>

        } */}

      {window.location.pathname === '/checkOut' &&
          <Link className="navbar-brand me-auto ps-3 text-danger " to="/bookingList">
           CheckOut
          </Link>

        }
        {window.location.pathname === '/checkOutList' &&
          <Link className="navbar-brand me-auto ps-3 text-danger " to="/bookingList">
           CheckOut List
          </Link>

        }
          {window.location.pathname === '/makeAdmin' &&
          <Link className="navbar-brand me-auto ps-3 text-danger" to="/makeAdmin">
           Make Admin
          </Link>

        }
          {window.location.pathname === '/orderList' &&
          <Link className="navbar-brand me-auto ps-3 text-danger" to="/orderList">
           Order List
          </Link>

        }
         {window.location.pathname === '/manageServices' &&
          <Link className="navbar-brand me-auto ps-3 text-danger fs-4" to="/manageServices">
          Manage Services
          </Link>

        }
          {window.location.pathname === '/addService' &&
          <Link className="navbar-brand me-auto ps-3 text-danger" to="/addService">
         ADD Service
          </Link>

        }
       
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="">
                {/* <img className="img-fluid rounded-circle" src={loggedInUser.photoURL || "https://i.ibb.co/2Kt6fqv/images.png"} alt="" /> */}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    {/* OffsNav */}


    <div className="offcanvas offcanvas-start sidebar-nav mt-1" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title ms-3 fw-bold" id="offcanvasExampleLabel">Dashboard</h5>
        <button type="button" className="btn-close text-reset closeBtn" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <nav className="navbar-dark">
          <ul className="navbar-nav">
        
          
          {
            isAdmin ?
            <>
            <li>
            <Link to="/orderList" className="nav-link ">
              <span className="me-2">
                <BiListOl
                  size="28px"
                />
              </span>
              <span>Order List</span>
            </Link>
          </li>
           
          
       
              <li>
              <Link to="/addService" className="nav-link ">
                <span className="me-2">
                  <BiPlus
                    size="28px"
                  />
                </span>
                <span>Add Service</span>
              </Link>
            </li>
      
            <li>
            <Link to="/makeAdmin" className="nav-link ">
              <span className="me-2">
                <BiUserPlus
                  size="28px"
                />
              </span>
              <span>Make Admin</span>
            </Link>
          </li>
       
            <li>
            <Link to="/manageServices" className="nav-link ">
              <span className="me-2">
                <BsGridFill
                  size="28px"
                />
              </span>
              <span>Manage Services</span>
            </Link>
          </li>
          </>:
            <>
            <li>
          <Link to="/checkOut" className="nav-link ">
            <span className="me-2">
              <BiCart
                size="28px"
              />
            </span>
            <span>CheckOut</span>
          </Link>
        </li>
      
             
           <li>
          <Link to="/checkOutList" className="nav-link ">
            <span className="me-2">
              <BiListOl
                size="28px"
              />
            </span>
            <span>CheckOut List</span>
          </Link>
        </li>
       
           </>
          }
            <li>
              <Link to="/" className="nav-link ">
                <span className="me-2">
                  <BiHomeAlt
                    size="28px"
                  />
                </span>
                <span>Home</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>



  </div>
    );
};

export default Sidebar;