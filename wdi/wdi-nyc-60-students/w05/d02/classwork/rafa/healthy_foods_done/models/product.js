'use strict';

class Products {
  constructor() {
    this.products = [
      {
        name: 'banana',
        expired: false
      },
      {
        name: 'taco',
        expired: true
      },
      {
        name: 'lemon',
        expired: false
      },
      {
        name: 'milk',
        expired: true
      }
    ];
  }

  getProducts() {
    return this.products;
  }

  getExpiredProducts() {
    const expiredItems = [];
    this.products.forEach((item) => {
      if (item.expired) {
        expiredItems.push(item);
      }
    });
    return expiredItems;
  }
}

module.exports = Products;
