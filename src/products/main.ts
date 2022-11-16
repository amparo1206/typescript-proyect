import { addProduct, calcStock, products } from "./product.service";

addProduct({
  tittle: 'Pro1',
  createdAd: new Date(1993, 1, 1),
  stock: 5
});

addProduct({
  tittle: 'Pro2',
  createdAd: new Date(1993, 1, 1),
  stock: 6,
  size: "XL"
})

console.log(products)

const total = calcStock();
console.log(total)


