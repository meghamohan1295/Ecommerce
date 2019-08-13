import React from 'react';

const cartColumns = () => {
    return (
        <div className="container-fluid d-none d-lg-block mt-4">
        <div className="row">
        <div className="col-10 mx-auto col-md-2 col-lg-2">
        <p className="text-uppercase">products</p>
        </div>
        <div className="col-10 mx-auto col-md-2 col-lg-2">
        <p className="text-uppercase">name of product</p>
        </div>
        <div className="col-10 mx-auto col-md-2 col-lg-2">
        <p className="text-uppercase">price</p>
        </div>
        <div className="col-10 mx-auto col-md-2 col-lg-2">
        <p className="text-uppercase">quantity</p>
        </div>
        <div className="col-10 mx-auto col-md-2 col-lg-2">
        <p className="text-uppercase">remove</p>
        </div>
        <div className="col-10 mx-auto col-md-2 col-lg-2">
        <p className="text-uppercase">total</p>
        </div>
        </div>
            
        </div>
    );
}

export default cartColumns;
