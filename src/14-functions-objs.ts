(() => {
  const login = (data: { email: string, password: string }) => {
    console.log(data.email, data.password)
  }

  login({
    email: 'amparo@SVGMaskElement.de',
    password: 'El12eselmejor.'
  })

  type Sizes = 'S' | 'M' | 'L' | 'XL';

  const products: any[] = []

  const addProduct = (data: {
    tittle: string,
    createdAd: Date,
    stock: number,
    size?:Sizes
  }) => {
    products.push(data)
  }

  addProduct({
    tittle: "Blazer",
    createdAd: new Date,
    stock: 1409,
    size: 'M'
  })

  console.log(products)

})();

