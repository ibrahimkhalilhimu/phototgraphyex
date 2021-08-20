import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AiOutlineArrowRight } from "react-icons/ai";
import { userCardInfo, userContext } from '../../../App';


const ServicesCard = ({data}) => {
    const {img,_id,title,price,description,} = data;
    const [serviceCardInfo, setServiceCardInfo] = useContext(userCardInfo)
    const [loggedInUser,setLoggedInUser, isAdmin,setIsAdmin] = useContext(userContext)

    let history = useHistory();
    const handleUser=()=>{
        if(isAdmin === true) {
            history.push(`/orderList`)
          }else{
            history.push(`/checkOut`)
          }
       
    }
    const handleCardInfo = (img,title,price,description)=>{
        setServiceCardInfo({img,title,price,description })
      }
    return (
        <div 
   className="col-md-4">
     
 <div className="card">

     <img src={img} className=" mx-auto" alt="..."/>
   
       
   <div className="card-body">
       <h3 className="card-title">{title}</h3>
       < h4 style={{color: 'red'}}>${price}</h4>
       <p className="card-text">{description.slice(0,100)}</p>  
       <p style={{ cursor: "pointer"}}>
           <Link to={"/service/"+_id}>
           <AiOutlineArrowRight/> Read More</Link>
           </p>
    <button 
    onClick={()=>{handleCardInfo(img,title,price,description);
     handleUser()}}
    className="btn buy"
    >Buy 
    
    </button>
   </div>
      </div>
 </div>
    );
};

export default ServicesCard;


