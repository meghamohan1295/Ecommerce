import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const {id, company, img, info, price, title, inCart} = value.detailProduct;
                    return (
                        <div className="container py-5">
                        <div className="row">
                        <div className="col-10 mx-auto text-center text-blue">
                        <h1>{title}</h1>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                        <img src={img} alt="images"/>
                        </div>
                        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                        <h2>model: {title}</h2>
                        <h4 className="mt-3 text-capitalize">made by: <span className="">{company}</span></h4>
                        <h4 className="text-capital">price :<span className="ml-2">$</span> {price}</h4>
                        <p className="text-capitalize  font-weight-bold mt-3 mb-0"> some info about the product</p>
                        <p className="text-muted lead">{info}</p>   
                        <div className="">
                        <Link to='/'>
                        <ButtonContainer>back to products</ButtonContainer>
                        </Link>
                        <ButtonContainer cart disabled={inCart? true:false} onClick={() => {
                            value.addtoCart(id);
                            value.openModal(id);
                        }}>
                            {inCart?'inCart': 'Add to Cart'}
                        </ButtonContainer>
                        </div>                    
                        </div>
                        </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}
