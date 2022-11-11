(() => {
  let productTitle = 'My amazing product';
  productTitle = 'My amazing product change'
  console.log('productTitle', productTitle)

  const productDescription = "Esta es la descripción de mi prodcuto"
  console.log('productDescription', productDescription);

  let productPrice = 100;
  let isNew: boolean = false;

  const summary = `
  tittle: ${productTitle}
  description: ${productDescription}
  price: ${productPrice}
  isNew: ${isNew}
  `;
  console.log(summary);

  const myString: string = "Pongo comillas dobles porque con las simples en ingles de complica por el apostrofe"
  console.log(myString)

})();

