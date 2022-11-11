(() => {
  let prices = [1, 45, 29, 23, 3]
  //prices.push('string')
  //prices.push(true)
  // prices.push({})
  //al definir la array con solo números esta solo soportará números
  prices.push(12345)

  let products = ['Hola', true];
  products.push(false)
  //como antes hemos puesto en el array un boolean sí nos lo admite ahora

  let mixed: (number | string | boolean | object)[] = ['hola', true];
  mixed.push(12)
  mixed.push('world')
  mixed.push(false)
  mixed.push({})
  mixed.push([])

  //al poner object incluye tanto el objeto como el array

  let numbers = [1, 2, 3, 4, 5, 69]
  numbers.map(item => item * 2)

})();

