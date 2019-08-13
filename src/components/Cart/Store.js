import React, { Component } from 'react';
import CartColumns from './cartColumns';
import EmptyCart  from './emptyCart';
import {ProductConsumer} from '../../context';
import CartList from './cartList';
import CartTotals from './cartTotals';


export default class Store extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {value => {
                        const {cart} = value;
                        if(cart.length >0) { 
                            return (
                            <div className="col-8 mx-auto col-md-6 col-lg-12 text-capitalize text-center">
                                <h2>my cart</h2>
                                <CartColumns/>
                                <CartList value={value}/>
                                <CartTotals value={value}/>
                            </div>
                            )
                        } else {
                            return (
                            <div className="col-8 mx-auto col-md-6 col-lg-12 text-capitalize text-center">
                                <EmptyCart/>
                            </div>
                            )
                        }
                    }}
                </ProductConsumer>
          
          
            </section>
           
        )
    }
}
