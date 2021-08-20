import React, { useContext, useEffect, useState } from 'react';
import './CheckOutList.css'
import { userContext } from '../../../../App';
import Sidebar from '../../Sidebar/Sidebar';

const CheckOutList = () => {

    const [order,setOrder] = useState([])
    const [loggedInUser,setLoggedInUser] =useContext(userContext)
    useEffect(()=>{
      fetch('https://radiant-refuge-06037.herokuapp.com/orders?email='+loggedInUser.email)
      .then(res => res.json())
      .then(data=> setOrder(data))
  },[])
  console.log(order);
    return (
        <div className="checkOutList">
        <Sidebar/>
                    <section className="mt-5 pt-4">
                <div className="container-fluid">
                <div className="row">

                {
                order.map(data=>
                <div key={data._id} className="col-md-4">
                <div className="card">
                <div className="d-flex justify-content-between  ">
                <div className="">
              
                <img src={data.serviceCardInfo.img} className="rounded-circle" alt="..."/>
                
                </div>

                <div className="mt-4 p-1">
                <button className={data.OrderStatus === "Pending" ? "btn bookPending" : data.OrderStatus === "Done" ? "btn bookDone" : "btn bookOnGoing "}>{data.OrderStatus}</button>
                </div>
                </div>

                <div className="card-body">
                <h5 className="card-title">{data.serviceCardInfo.title}</h5>
                <p className="card-text">{data.serviceCardInfo.description.slice(0,100)}</p>
                </div>
                </div>
                </div>
                )
                }



                
                </div>
                </div>
                </section>
</div>
    );
};

export default CheckOutList;