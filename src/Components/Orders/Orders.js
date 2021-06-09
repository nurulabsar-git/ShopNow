import React, { useEffect, useState } from 'react';
import OrderDetails from './OrderDetails/OrderDetails';

const Orders = () => {

  const [orderData, setOrderData] = useState([]);
  
  useEffect(() => {
  fetch("http://localhost:9000/getOrder")
  .then(result => result.json())
  .then(data =>{
       setOrderData(data)
       console.log(data);
    })

    .catch(err => console.log(err))

  }, [])
    return (
        <div>
            <p>{orderData?.length}</p>
            {
                orderData?.map(pd => <OrderDetails orderData={orderData} pd={pd}></OrderDetails>)
            }
        </div>
    );
};

export default Orders;