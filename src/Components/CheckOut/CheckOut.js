import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CheckOut = () => {
    const {paramId} = useParams();
    const [singleData, setSingleData] = useState({});

    useEffect(()=> {
    fetch(`http://localhost:9000/getCertainProduct/${paramId}`)
    .then(result=> result.json())
    .then(data =>  setSingleData(data))
    
    }, [paramId])
 const {_id, name, weight, price, image} = singleData;
 const handleCheckOut = () => {
     const orderInfo = {
         id: _id,
         price: price,
         weight: weight,
         name: name,
         image: image
         
     }
     fetch(`http://localhost:9000/addOrders`, {
         method: "POST",
         headers: {
             'Content-Type': 'application/json'
         },
         body: JSON.stringify(orderInfo)
     })

     .then(data => {
         console.log(data);
        // alert('Order Complete');
        

     })

     .catch(err => {
         console.log(err);
     })
 };


    return (
        <div style={{margin: '150px 10px 10px 10px'}}>
           <h4>{singleData?._id}</h4> 
           <h4>{singleData?.name}</h4>
           <h4>{singleData?.weight}</h4>
           <button onClick={()=>handleCheckOut()}>Check out</button>
        </div>
    );
};

export default CheckOut;