import React from 'react';
 import './Banner.css'

const Banner = () => {
    return (
        <div className="banner container">
            <div className="row " >
                <div className="col-md-6 mt-5">
                <h2>Hello I'm <br/><span style={{color:'red'}}> Ibrahim Khalil</span></h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> <span style={{color:'#f73e7b'}}> Dolorum itaque</span> nemo repellat deserunt tempora dolore, <br/> nam perspiciatis, <span style={{color:'#f73e7b'}}>sapiente ut nobis </span>enim explicabo veniam<br/>  beatae! Maiores fuga modi a eos delectus.</p>
        <button >Hire Us</button>
                </div>
                <div className="col-md-6">
                <img className="img-fluid" src="https://i.ibb.co/G27KN84/photo-1542038784456-1ea8e935640e.jpg" alt="photography img" />
                </div>
            </div>
        </div>
    );
};

export default Banner;