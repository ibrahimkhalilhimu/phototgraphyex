import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { userContext } from '../../../App';
import Header from '../../Home/Navbar/Header';
import { initializeLoginInFrameWorker, signInWithEmailAndPassword } from '../Firebase/LoggedInManager';
import './LogIn.css'


const LogIn = () => {

  const [loggedInUser,setLoggedInUser] = useContext(userContext)
  let history = useHistory();
let location = useLocation();
let { from } = location.state || { from: { pathname: "/" } };
  initializeLoginInFrameWorker()
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = data => {
      const loading = toast.loading('Please wait...')

      const {email,password} = data;
      signInWithEmailAndPassword(email,password)
        .then(res => {
          toast.dismiss(loading);
          setLoggedInUser(res)
          history.replace(from);
        }).catch(err => {
          console.log(err);
          toast.dismiss(loading);
          toast.error(err.message)
        })
    }



    
    return (
        <div className="logIn">
        <Header />
  
        <div className="container mt-5 pt-5">
          <div className="logInBox">
            <div className="logInText">
              <h4>Login</h4>
              <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                  <input type="email"
                    name="email"
                    // defaultValue="test@admin.com"
                    className="form-control input"
                    placeholder="@gmail.com"
                    {...register("email", { required: true })}
                  />
                  <br />
                </div>
                <div className="form-group ">
                  <input type="password"
                   name="password"
                  //  defaultValue="123456"
                   className="form-control input" 
                   placeholder="Password"
                    {...register("password", { required: true })} />
  
                </div>
                <div className="d-flex justify-content-between ">
                 
                </div>
                <div className="d-grid gap-2">
                  <button style={{ backgroundColor: "red" }} className="btn btn-block text-white mt-4" type='submit'>Login</button>
                </div>
                <h6 className="text-center pt-2">Don't have an account?<Link style={{ color: "red" }} to="/signIn" >Create an account</Link></h6>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default LogIn;