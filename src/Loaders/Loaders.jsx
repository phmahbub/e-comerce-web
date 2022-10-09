import React from 'react';
import { getCartFromLocalStorage } from '../utilities/LoacalStorage';

const Loaders = async() => {
    const productsData = await fetch('products.json')
    const products = await productsData.json()

    const savedCart = getCartFromLocalStorage()
    const initialCart = []
    for(const id in savedCart){
        const foundProduct = products.find(product => product.id === id)
        if(foundProduct){
            const quantity = savedCart[id]
            foundProduct.quantity = quantity
            initialCart.push(foundProduct)

        }
    }

    return {products, initialCart}
};

export default Loaders;