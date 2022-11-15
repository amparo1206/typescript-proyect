(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL'

  function createProdcutToJson(
    tittle: string,
    createdAt: Date,
    stock: number,
    size: Sizes
  ) {
    return {
      tittle,
      createdAt,
      stock,
      size
    }
  }

  const product1 = createProdcutToJson('Jeans', new Date, 1212, 'M')
  console.log(product1)
  console.log(product1.tittle)
  console.log(product1.createdAt)
  console.log(product1.stock)
  console.log(product1.size)

//Recordando la estructura de una arrow function () => {}

  const createProdcutToJsonV2 = (
    tittle: string,
    createdAt: Date,
    stock: number,
    size?: Sizes //Poniendo el ? hacemos que esta variable sea opcional
    //Puede ser Sizes y undefined de esa manera
  ) => {
    return {
      tittle,
      createdAt,
      stock,
      size
    }
  }

  const product2 = createProdcutToJsonV2('Rings', new Date, 1212)
  console.log(product2)
  console.log(product2.tittle)
  console.log(product2.createdAt)
  console.log(product2.stock)
  console.log(product2.size)

})();

