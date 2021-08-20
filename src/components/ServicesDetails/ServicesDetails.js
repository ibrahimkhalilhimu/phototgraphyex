import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../Home/Navbar/Header';
import { ImCross } from "react-icons/im";
import './ServiceDetalis.css'

const ServicesDetails = () => {
    const {id}= useParams();
    const [details,setDetails] = useState({})
    useEffect(() => {
        fetch(`https://radiant-refuge-06037.herokuapp.com/service/${id}`)
        .then((response) => response.json())
        .then((data) => setDetails(data));
    },[id])
    return (
        <div>
        <Header/>
         <div className="container mt-5 pt-5">
             <div className="homeDetails pt-5 boxShadow">
               <div className="text-center">
                   <Link to="/">
                   <ImCross 
                   size="50"
                   />
                   </Link>
                
               </div>
               <div className="row p-5">
                   <div className="col-md-6 mt-5">
                   <h1><b>{details.title}</b></h1>
                 <p>{details.description}</p>
                <div className="text-center ">
                <h3 style={{color: 'red'}}><b>${details.price}</b></h3>
                </div>
                   </div>
                   <div className="col-md-6 mt-4">
                       <img  className="img-fluid details-image" src={details.img} alt=""/>
                   </div>
               </div>
             </div>
         </div>
     </div>
    
    );
};

export default ServicesDetails;