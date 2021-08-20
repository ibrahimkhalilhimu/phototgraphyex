import React from 'react';
import swal from 'sweetalert';

const ManageServiceCard = ({data}) => {


    const handleClickDelete= (e,_id)=>{
        swal({
          title: "Are you sure?",
          text: "Are you sure that you want to leave this page?",
          icon: "warning",
          dangerMode: true,
        })
        .then(willDelete => {
          if (willDelete) {
            fetch(`https://radiant-refuge-06037.herokuapp.com/deleteService/${_id}`,{
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
    return (
        <>
               
        <tr>
        
        <td >{data.title}</td>
        <td >{data.description.slice(0,50)}..</td>
        <td>${data.price}</td>
        <td>
        
  <button onClick={(e) =>handleClickDelete(e,data._id)} className="btn btn-danger">Delete</button>
  
        </td>
      </tr> 
        </>
    );
};

export default ManageServiceCard;