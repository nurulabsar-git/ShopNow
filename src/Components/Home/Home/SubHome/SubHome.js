import React from 'react';
import { useHistory } from 'react-router';
import './SubHome.css';
const SubHome = (props) => {
    // console.log(props);
    const {_id, price, weight, name, image} = props.datum;
    const history = useHistory();
   const handleClick = (id) => {
      history.push(`/product/${id}`)
   }
   return (
        <div className="sub-home" onClick={()=>{handleClick(_id)}}>
           <div>
            <img src={image} alt="" className="fluid w-20 rounded"/>
           </div>
            <h4>{name}</h4>
            <h4>{price}</h4>
            <h4>{weight}</h4>
          </div>
    );
};

export default SubHome;