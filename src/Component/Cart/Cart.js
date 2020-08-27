import React from 'react';

const Cart = (props) => {
 
    const cart = props.cart;
   
    let total = cart.reduce( (total, cart) => total + cart.price , 0);
    let discount = 0;
    if(total >= 10000){
        discount =  total /20;
    }
    else{
        discount = 0;
    }
  

    
    return (
        <div  class="border border-danger align-self-center ">
        <h1 className= "border-bottom">Your Order</h1>
      <h3 className= "border-bottom">Course you Taken : {cart.length}</h3>
    <h3 className= "border-bottom" > The course Price : {total}</h3>
    <h3 className= "border-bottom">Discount : -{discount}</h3>
      <h2 className= "border-bottom"> the total is: {total - discount} </h2>
      <br/>
      <button type="button" class="btn btn-warning align-self-center">Confirm the Order</button>
        </div>
    );
};

export default Cart;