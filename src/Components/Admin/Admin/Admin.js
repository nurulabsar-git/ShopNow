import axios from 'axios';
import React, { useState } from 'react';
import {useForm} from 'react-hook-form';
import './Admin.css';
const Admin = () => {
    const { register, handleSubmit } = useForm();
    const [imageURL, setImageURL] = useState(null);
    
    
    const onSubmit = (data, e) => {
        e.target.reset();
        const eventData = {
            name: data.productName,
            weight: data.productWeight,
            price: data.productPrice,
            made: data.productMadeBy,
            image: imageURL
        };
        const url = `http://localhost:9000/addProductInMongoDb`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
        .then(res => console.log("My server response"))
    };

    const handleDataUpload = event => {
        const imgData = new FormData();
        imgData.set('key','24e5ab1aa7c1296bdc49719a134641d0');
        imgData.append('image', event.target.files[0]);

        axios.post("https://api.imgbb.com/1/upload", imgData)
        .then(function(response){
            console.log(response.data.data.display_url);
            setImageURL(response.data.data.display_url);
        })
        .catch(function(error){
            console.log(error)
        });
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="admin-section">
                <input type="text" name="productName" {...register("productName", {required: true})} placeholder="Product Name"/> <br/>
                <input type="text" name="productWeight" {...register("productWeight", {required: true})} placeholder="Product Wight"/><br/>
                <input type="text" name="productPrice" {...register("productPrice", {required: true})} placeholder="Product Price"/><br/>
                <input type="text" name="productMadeBy" {...register("productMadeBy", {required: true})} placeholder="Made By"/><br/>
               <input type="file" onChange={handleDataUpload}/>
               <input type="submit" />
            </form>
        </div>
    );
};

export default Admin;