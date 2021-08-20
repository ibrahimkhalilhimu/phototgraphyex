import React, { useEffect, useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import OrderListCard from './OrderListCard';

const OrderList = () => {
    const [orderList,setOderList] = useState([])

    useEffect(()=>{
        fetch('https://radiant-refuge-06037.herokuapp.com/order')
        .then(res => res.json())
        .then(data=>{
          setOderList(data)
        })
      },[])
    return (
        <div className="orderList">
        <Sidebar></Sidebar>
        <section className=" mt-5 p-4">
<div className="fromSection  table-responsive w-100">
 
<table className="table  table-hover table-borderless">
<thead className="table-light">
 <tr>
   <th scope="col">Name</th>
   <th scope="col">Email ID</th>
   <th scope="col">Course</th>
   <th scope="col">Status</th>
   <th scope="col">Action</th>
 </tr>
</thead>
<tbody>
{
 orderList.map(data=> <OrderListCard {...data} key={data._id}></OrderListCard>    )
}


 </tbody>
 </table>

</div>
        </section>
    </div>
    );
};

export default OrderList;