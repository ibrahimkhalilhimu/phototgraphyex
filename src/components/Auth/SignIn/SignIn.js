import React, { useContext } from 'react';
import './SignIn.css'
import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import Header from '../../Home/Navbar/Header';
import { createUserWithEmailAndPassword, initializeLoginInFrameWorker } from '../Firebase/LoggedInManager';
import { userContext } from '../../../App';




const SignIn = () => {

const [loggedInUser,setLoggedInUser] = useContext(userContext)
let history = useHistory();
let location = useLocation();
let { from } = location.state || { from: { pathname: "/" } };
initializeLoginInFrameWorker()
    const { register, handleSubmit, watch } = useForm();
    const onSubmit = data => {
        const loading = toast.loading('Please wait...');
        const {name,email,password} = data;
        createUserWithEmailAndPassword(name, email, password)
        .then(res=>{
            res.name = name;
           setLoggedInUser(res)
        toast.success('Successfully toasted!');
        history.replace(from)
            // handleResponse(res,true)
        })
        .catch(err => {
            toast.dismiss(loading);
            toast.error(err.message)
        });
    }
    // const handleResponse = (res, redirect) => {
    //     setLoggedInUser(res)
    //     if (redirect) {
    //       history.replace(from);
    //     }
    
    //   }
    return (
        <div className="signIn"> 
        <Header/>
             <div className="container mt-5 pt-5">
            <div className="signInBox ">
              <div className="signInText">
              <h4>SignIn</h4>
                <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
    <input type="text" name="name" className="form-control input"placeholder="Name" {...register("name", {required: true})} />
    <br/>
  </div>
         <div className="form-group">
    <input type="email" 
    name="email" 
    className="form-control input"
    placeholder="@gmail.com"
    {...register("email", {required: true,})}
     />
    <br/>
  </div>
  <div className="form-group">
    <input type="password" name="password" className="form-control input"placeholder="Password" {...register("password", {required: true})} />
    <br/>
  </div>
  <div className="form-group">
    <input type="password" name="Confirm_password" className="form-control input"placeholder="Confirm password" {...register("Confirm_password", {validate: (value) => value === watch('password') })} />
  </div>
<div className="d-grid gap-2">
<button style={{backgroundColor:"red"}} className="btn btn-block text-white mt-3" type='submit'>SignIn</button>

</div>
  <h6 className="text-center pt-2"><Link style={{color:"red"}} to="/login" >Already have an account</Link></h6>
                </form>
              </div>
            </div>
            </div>
        </div>
    );
};

export default SignIn;