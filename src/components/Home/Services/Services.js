import React, { useEffect, useState } from 'react';
import './Services.css'
import ServicesCard from './ServicesCard';

const Services = () => {
    const [serviceData, setServiceData] = useState([])
    useEffect(() => {
        fetch('https://radiant-refuge-06037.herokuapp.com/services')
        .then((response) => response.json())
        .then((data) => setServiceData(data));
    },[])
    

    return (
        <div className="services mt-5">
            <div className=" container text-center">
            <h3 >Our Awesome <span style={{color: 'red'}}>Services</span> </h3>
            
             <div className="row justify-content-center mt-5">
                 {/* <div className="col-md-4"> */}
             {
            serviceData.map(data => <ServicesCard data={data} key={data._id}></ServicesCard>) 

            }
            {/* </div> */}
             </div>
             </div>
        </div>
    );
};

export default Services;