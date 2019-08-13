"use strict";
import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';
import PropTypes from 'prop-types';

export default class Product extends Component {
    render() {
        const{id,title,img,price,inCart} = this.props.product;
        return (
           <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
           <div className="card">
           <ProductConsumer>
               {(value) => (
                   <div className="img-container p-5" onClick={() => value.handleDetails(id)}>
                   <Link to='/details'>
                   <img src={img} className = "card-img-top" alt='phones'/>
                   </Link>
                   <button className="cart-btn mt-4" disabled={inCart?true:false} onClick={()=>{
                        value.addtoCart(id);
                        value.openModal(id);
                   }}>
                   {inCart?(<p className="text-capitalize mb-0">in cart</p>) : (<i className="fa fa-cart-plus"/>)}
                   </button>
                   </div>
               )}
           </ProductConsumer>
           
           <div className="card-footer d-flex justify-content-between">
           <p className="mb-0">{title}</p>
           <h5 className="text-blue font-italic mb-0"><span className="mr-1">$</span>{price}</h5>
           </div>
           </div>

           </ProductWrapper>
        )
    }
}

/* Validation of props*/
Product.proptype = {
    product:PropTypes.shape({
        id: PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.string,
        price:PropTypes.number,
        inCart:PropTypes.bool
    }).isRequired
};
const ProductWrapper = styled.div `
.card {
    border-color: transparent;
}
.card-footer {
    background: transparent;
    border-top: transparent;
}
.img-container {
    position: relative;
    overflow:hidden;
   
}
.card-img-top  {
    transition: all 1s linear;
}
.img-container:hover .card-img-top {
    transform: scale(1.2)
}
.cart-btn {
    position: absolute;
    bottom:0;
    right:0;
    transform: translate(100%,100%);
    transition: all 1s linear;

    background-color: var(--lightBlue);
    color: var(--mainWhite);
    border: none;
}
.img-container:hover .cart-btn {
    transform: translate(0,0)
}
.cart-btn:hover {
    color: var(--mainBlue);
}
`
