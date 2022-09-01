
import getElement from './src/getElement.js';
import fetchProducts from './src/fetchProducts.js';
import renderProducts from './src/renderProducts.js';

"use strict";


const URL = './mockdata/data.json';
const form = getElement('.input-form');
const searchInput = getElement('.search-input');
let productFetched = [];


window.addEventListener('DOMContentLoaded', async () => {
    let products = await fetchProducts(URL);
    products = products ? products : [..._products];
    productFetched = [...products];
    renderProducts(products);
});


//Handle search event
let timeout = null;
form.addEventListener('keyup', () => {
    clearTimeout(timeout);
    const inputValue = searchInput.value;

    timeout = setTimeout(() => {
        const productFilterd = searchProducts(inputValue?.toLowerCase());
        renderProducts(productFilterd);
    }, 3000);
});


//handle search products
const searchProducts = (searchKeyword) => {
    if (searchKeyword && searchKeyword.isEmptyAfterTrim()) {
        return productFetched;
    }
    return productFetched.filter(product => product.Title?.toLowerCase().includes(searchKeyword) || product.Description?.toLowerCase().includes(searchKeyword))
}










