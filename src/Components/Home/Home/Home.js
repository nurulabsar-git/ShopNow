import React, { useEffect, useState } from 'react';
import './Home.css';
import SubHome from './SubHome/SubHome';
const Home = () => {

  const [products, setProducts] = useState();

  useEffect(() => {
    fetch("http://localhost:9000/getProduct")
    .then(result => result.json())
    .then(data => {
      // console.log(data)
      setProducts(data)
    })
  }, [])

    return (
        <div className="home-page-container">
      
          {
            products?.map(datum => <SubHome id={datum?._id} datum={datum}></SubHome>)
          }
        </div>
    );
};

export default Home;