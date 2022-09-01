import getElement from './getElement.js';

//render products
const renderProducts = (products) => {
    let productsContainer = getElement('.products');

    if (!products || !products?.length) {
        productsContainer.innerHTML = '<h2>No products matched your search</h2>';
        return;
    }

    productsContainer.innerHTML = products
        .map((product) => {
            const {ImageUrl, Title, Description, Price } = product;
            return `<div class="product-item">
                <div>
                    <div  class="product-img"><img src="${ImageUrl}" alt="product"></div>
                    <div class="title flex-center">${Title}</div>
                </div>
                <div class="description">${Description}</div>
                <div class="wrap-button">
                    <button>View Product</button>
                    <div class="price">${Price}</div>
                </div>
                
            </div>`;
        })
        .join('');
    return productsContainer;
};

export default renderProducts;
