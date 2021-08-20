import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
           
<div className="container-fluid">
<div className="row text-white">
  <div className="col-md-4">
<p style={{fontSize:"20px"}}>We provide a reputable and profes- sional service that aims to give you the confidence to pass your test and drive safely on the roads.</p>
  </div>
  <div className="col-md-8">
    <div className="row">
  <div className="col-md-4">
<ul className="list">
  <h3>Information</h3>
  <li>FAQ </li>
  <li>Locations</li>
  <li>Testimonials</li>
  <li>Partners</li>
</ul>
  </div>
  <div className="col-md-4">
  
    <ul className="list">
      <h3>Our Service</h3>
      <li>Wedding Photography  </li>
      <li>Event Photography</li>
      <li> Portrait Photography</li>
      <li>Product Photography</li>
      <li>Fine Art Photography</li>
    </ul>
  </div>
  <div className="col-md-4">
    <ul className="list">
      <h3>Cutomer Service</h3>
      <li>Search Terms </li>
      <li>Site Map</li>
      <li>Privacy</li>
      <li>Terms of Use</li>
      <li>Contact Us</li>
    </ul>
  </div>
</div>
</div>
</div>
<div  className="text-center pt-5">
  <small className="text-white">Copyright © 2021 Ibrahim Khalil Himu</small> 
 </div>

</div>
</div>
    );
};

export default Footer;