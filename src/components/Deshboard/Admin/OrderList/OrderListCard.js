import React, { useState } from 'react';
import { AiOutlineDelete } from "react-icons/ai";
import swal from 'sweetalert';

const OrderListCard = ({serviceCardInfo,OrderStatus,_id,data}) => {
    const {Name,Email,Text} = data;

     const [status,setStatus] = useState(OrderStatus)
     console.log(status);

    const handleClickDelete= (e,_id)=>{
        swal({
          title: "Are you sure?",
          text: "Are you sure that you want to leave this page?",
          icon: "warning",
          dangerMode: true,
        })
        .then(willDelete => {
          if (willDelete) {
            fetch(`https://radiant-refuge-06037.herokuapp.com/deleteOrder/${_id}`,{
              method:'DELETE',
          })
          .then(res => res.json())
          .then(result =>{
              console.log(result);
              swal("Deleted!", "Your imaginary file has been deleted!", "success");
              // alert('delete success')
              e.target.parentNode.parentNode.style.display = 'none'
              console.log( e.target.parentNode.parentNode);
          })
          }
        });
  
      }

      const handleChangeStatus=(status) => {
        setStatus(status)
        fetch(`https://radiant-refuge-06037.herokuapp.com/statusUpdate/${_id}`,{
                        method:'PATCH',
                        headers: {'Content-Type': 'application/json'},
                        body:JSON.stringify({status})
                    })
                    .then(res => res.json())
                    .then( result => {
                        console.log(result);
                        if (result) {
                            console.log(' status updated successfully')
                        
                        }
                    })
                    .catch(err => console.log('status error',err))



      }


    return (
        <>
               <tr>
       <td>{Name}</td>
       <td>{Email}</td>
       <td>{Text}</td>
       <td>
       <select
       className={status === "Pending" ? "btn btnPending" : status === "Done" ? "btn btnDone" : "btn btnOnGoing " }
       onChange={(e)=>handleChangeStatus(e.target.value)}
       defaultValue={status}
 >
 <option className="bg-white text-muted ">Pending</option>
 <option className="bg-white text-muted">On going</option>
 <option className="bg-white text-muted">Done</option>
 </select>
 
       </td>
       <td>
         <AiOutlineDelete  onClick={(e) =>handleClickDelete(e,_id)} color="red" size="35px" cursor="pointer"/>
       </td>
     </tr>  
        </>
    );
};

export default OrderListCard;