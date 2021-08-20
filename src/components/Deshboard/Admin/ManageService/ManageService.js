import React, { useEffect, useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import ManageServiceCard from './ManageServiceCard';

const ManageService = () => {
    const [manageService,setManageService] = useState([])

   
    useEffect(()=>{
        fetch('https://radiant-refuge-06037.herokuapp.com/services')
        .then(res => res.json())
        .then(data=>{
            setManageService(data)
  
        })
      },[])
    return (
        <div className="manageServices">
        <Sidebar></Sidebar>
        <section className="mt-5 p-4">
        <div className="fromSection table-responsive w-100">
  
            
            <table className="table  table-hover table-borderless responsive">
<thead class="table-light">
<tr>
  <th scope="col">Service</th>
  <th scope="col">Description</th>
  <th scope="col">Price</th>
  <th scope="col">Action</th>
</tr>
</thead>
<tbody>
{
manageService.map(data=><ManageServiceCard data={data} key={data.id}></ManageServiceCard> )
}


</tbody>
</table>
           
    
  
        </div>
        </section>
    </div>
    );
};

export default ManageService;