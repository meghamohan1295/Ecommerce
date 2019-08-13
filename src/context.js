import React, { Component } from 'react';
import {storeProducts, detailProduct} from './data';


const ProductContext = React.createContext();
//Provider
//Consumer


class ProductProvider extends Component {
    state = {
        products:[],
        detailProduct:detailProduct,
        cart:[],
        modalOpen: false,
        modalProduct: detailProduct,
        cartTotal: 0,
        cartSubTotal:0,
        cartTax:0
    }
    componentDidMount () {
        this.setProducts();
    }
    addtoCart = (id) => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        let product = tempProducts[index];
        product.count = 1;
        product.inCart = true;
        product.total = product.price;
        console.log('hi');
        this.setState(() => {
            return {products: tempProducts, cart: [...this.state.cart, product]}
        }, () => {
            this.addTotal();
        })
    }
    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
           const singleItem = {...item};
            // console.log("singleItem", singleItem);
            tempProducts = [...tempProducts, singleItem]; //similar to array push ie,tempProducts.push(singleItem)
        })
        this.setState(() => {
            return {products: tempProducts}
        });
        console.log('After state setting', tempProducts);
    }
    getItem = (id) => {
        const product = this.state.products.find(item => {
            if(item.id === id) {
                return item;
            }
        })
        return product;
    }
    handleDetails = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return {detailProduct: product}
        })
    }
    openModal= (id) => {
        let product = this.getItem(id);
        this.setState(() => {
            return {
                modalProduct : product,
                modalOpen: true
            }
        });
    }
    closeModal = () => {
        this.setState(() => {
            return {
                modalOpen: false
            }
        })
    }
    increment = (id) => {
        
        let tempCart = [...this.state.cart];
        let selectedItem = tempCart.find(item => item.id == id)
        selectedItem.count +=1;
        selectedItem.total = selectedItem.price * selectedItem.count;
        console.log('hi', tempCart);
        // const index = tempCart.indexOf(selectedItem);
        // let product = tempCart[index];
        // product.count += 1;
        // product.total = product.price * product.count;
        this.setState(()=> {
            return {
                cart: [...tempCart]
            }
        },() => {
            this.addTotal();
        })

    }
    decrement = (id) => {
         
        let tempCart = [...this.state.cart];
        let selectedItem = tempCart.find(item => item.id == id)
        // const index = tempCart.indexOf(selectedItem);
        // let product = tempCart[index];
        selectedItem.count -= 1;
        if(selectedItem.count == 0) {
            this.removeItem(id)
        } else {
            selectedItem.total = selectedItem.price * selectedItem.count;
            this.setState(()=> {
                return {
                    cart: [...tempCart]
                }
            },() => {
                this.addTotal();
            })
        }
       
    }
    removeItem = (id) => {
       let tempProducts = [...this.state.products];
       let tempCart = [...this.state.cart];
       tempCart = tempCart.filter(item => item.id !== id);
       const index = tempProducts.indexOf(this.getItem(id));
       let removedProduct = tempProducts[index];
       removedProduct.inCart = false;
       removedProduct.count = removedProduct.total = 0;
       this.setState({
           cart: [...tempCart],
           products: [...tempProducts]
       }, () => {
           this.addTotal();
       })
    }
    clearCart = () => {
       this.setState(() => { 
           return {
           cart:[]
        }
    }, () => {
        this.setProducts();
        this.addTotal();
    })
    }   
    addTotal = () => {
        let subTotal = 0;
        this.state.cart.map(item => {
            subTotal += item.total;
        });
        const tempTax = subTotal * 0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax;
        this.setState( () => {
            return {
                cartSubTotal : subTotal,
                cartTax: tax,
                cartTotal: total
         } })
    }
    render() {
        return (
            <ProductContext.Provider value={{
            ...this.state,
            handleDetails: this.handleDetails,
            addtoCart: this.addtoCart,
            openModal: this.openModal,
            closeModal: this.closeModal,
            increment: this.increment,
            decrement: this.decrement,
            removeItem: this.removeItem,
            clearCart: this.clearCart,
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}
const ProductConsumer = ProductContext.Consumer;
export{ProductProvider,ProductConsumer};