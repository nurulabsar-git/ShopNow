import React from 'react';

const OrderDetails = (props) => {
    const {name, image, weight, price, _id} = props.pd;
    // console.log(props);
    return (
        <main>

          <section className="d-flex justify-around m-20">
          <div>
          <h4>{name}</h4>
          <h4>{price}</h4>
          <h4>{weight}</h4>
          </div>
          <div>
              <img src={image} alt="" className="fluid w-11"/>
          </div>
          </section>
        </main>
    );
};

export default OrderDetails;