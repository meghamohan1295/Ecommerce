import React from 'react';
import CartItem from './cartItem';

const cartList = ({value}) => {
    const {cart} = value;
    console.log('cartList', value);
    console.log('cart', cart);

    return (
        <div className="container-fluid">
        {cart.map(item=> {
            return <CartItem key={item.id} item = {item} value={value}/>
        })}
        </div>
    );
}

export default cartList;
