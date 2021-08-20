import React from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import { useForm} from "react-hook-form";
import swal from 'sweetalert'

const MakeAdmin = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
     fetch('https://radiant-refuge-06037.herokuapp.com/makeAdmin',{
         method: 'POST',
         headers: {
             'Content-Type': 'application/json',
         },
         body: JSON.stringify(data),
     })
     .then(res=>res.json())
     .then(data=>{
         if(data){
             alert("Success")
         }
     })
    }
    return (
        <div className="makeAdmin">
        <Sidebar/>
        <section className="mt-5 p-4">
        <div className="fromSection mx-auto">
        <form className="" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group mt-5">
                <label className="form-label fs-4 fw-bold">Email</label>
                    <input type="email" 
                name="email" 
                className="form-control "
                placeholder="@gmail.com"
               {...register("email", {required: true, pattern: /^\S+@\S+$/i})}
 />
                </div>
                <div className="form-group ">
                    <button type="submit" className="btn bg-success text-white mt-3">Submit</button>
                </div>
            </form>
</div>
        </section>
     
    </div>
    );
};

export default MakeAdmin;