'use strict'
class Product1{
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        this.price = this.price - (this.price * 25 / 100);
    }
}

let goods1 = new Product1('Продукт', 900);
goods1.make25PercentDiscount();

console.log(goods1);