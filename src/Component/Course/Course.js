import React from 'react';
import { useState } from 'react';
import Data from '../fakedata/fakedata';
import './Course.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';


const Course = () => {
   const [data,setData ] = useState(Data);
   const [cart,setCart] = useState([]);
  
  
   const addCourseHandler = (course) =>{

const newCart= [...cart,course];
setCart(newCart);

   }
;
    return (
        <div className='all-container '>
        <div className='course-container border-right'>
               
                {

data.map(data => <Product addCourseHandler={addCourseHandler} product={data}></Product>)
    }

                
         
            </div>
            <div className="cart-container">

                  <Cart cart={cart}></Cart>
            </div>
            </div>
    );
};

export default Course;