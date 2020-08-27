import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCreditCard } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
  
    const {name,teacher,time,img,price} = props.product;
    return (
        <div className="product border-bottom">
         <div>
           <img src={img} className="img-fluid ro float-left border-right"  alt=""/>
         </div>
         <div className='product-info '>
         <h3>{name}</h3>
         <br/>
    <h4>${price}</h4>
    <p>By:{teacher}</p>
    <br/>
    <p>Time:{time}</p>
    <button type="button" class="btn btn-primary btn-sm" onClick={() => props.addCourseHandler(props.product)}> <FontAwesomeIcon icon={faCreditCard} /> Add to Cart</button>
    



         </div>
            
        </div>
    );
};

export default Product;