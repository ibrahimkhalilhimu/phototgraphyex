import React, { useContext } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import './CheckOut.css'
import { useForm } from "react-hook-form";
import { userCardInfo, userContext } from '../../../../App';
import swal from 'sweetalert';

const CheckOut = () => {

    const [serviceCardInfo, setServiceCardInfo] = useContext(userCardInfo)
    const [loggedInUser,setLoggedInUser] = useContext(userContext)

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
       const newOrder ={...loggedInUser,serviceCardInfo,data, OrderStatus: "Pending",}
        fetch(`https://radiant-refuge-06037.herokuapp.com/addOrder`,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newOrder),
  })
  .then(res=>res.json())
  .then(data => {

      swal("Order!", "Your Order Successfully!", "success");
    
  })
  .catch(error => {
    
    swal("Failed!", error.message, "error");
  })
    
    };

    return (
        <div>
            <Sidebar/>
            <section className="checkOut mt-5 pt-4">
      <div className="container-fluid ">
        <div className="row">
            <div className="col-md-12">
            <div className="fromSection">
     <form className="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group pt-5">
                    <input type="text" 
                        name="name" 
                        className="form-control "
                        placeholder="Your Name"
                        defaultValue={loggedInUser.name}
                        {...register("Name", {required: true})}
                        />
                        <br/>
                    </div>
                    <div className="form-group">
                    <input type="email" 
                    name="email" 
                    defaultValue={loggedInUser.email}
                    className="form-control "
                    placeholder="@gmail.com"
                   {...register("Email", {required: true, pattern: /^\S+@\S+$/i})}
     />
      <br/>
                    </div>
                    <div className="form-group">
                    <input type="number" className="form-control " placeholder="Phone Number" {...register("Number", {required: true})} />
                    <br/>
                    </div>
                    <div className="form-group">
                    <input type="text" 
                        name="address" 
                        className="form-control "
                        placeholder="Address"
                        {...register("Address", {required: true})}
                        />
                         <br/>
                    </div>
                    <div className="form-group">
                    <input type="text" 
                        name="text" 
                        defaultValue={serviceCardInfo.title}
                        className="form-control"
                        placeholder="Service Name"
                        {...register("Text", {required: true})}
                        />
                         <br/>
                    </div>
                   
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <button type="submit" className="btn bg-info text-white">Send</button>
                    </div>
                </form>
                <br/>
               
               
     </div>
            </div>
        </div>

      </div>
      </section>
        </div>
    );
};

export default CheckOut;