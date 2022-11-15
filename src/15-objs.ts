(() => {

  type Sizes = 'S' | 'M' | 'L' | 'XL';
  type Product = {
    tittle: string,
    createdAd: Date,
    stock: number,
    size?:Sizes
  }

  const products: Product[] = []

  const addProduct = (data: Product) => {
    products.push(data)
  }

  addProduct({
    tittle: "Cardigan",
    createdAd: new Date (11,11,2022),
    stock: 1409,
    size: 'M'
  })

  console.log(products)

  products.push({
    tittle: "Bufanda",
    createdAd: new Date (11,11,2022),
    stock: 134,
    size: 'L'
  })

  console.log(products)


})()

