'use strict'

function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function () {
    this.price = this.price - (this.price * 25 / 100);
};

let goods = new Product("Продукт", 900);                  
goods.make25PercentDiscount();

console.log(goods);
