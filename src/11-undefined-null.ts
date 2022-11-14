(() => {

  //INCORRECTO
  // let myNumber: number = undefined;
  // let myString: string = null;
  // Hay que tipar de forma correcta para poder realizar el undefined y el null.
  // En el caso de que no se haga lo puede tomar como un any.

  //CORRECTO
  let myNull: null = null;
  let myUndefined: undefined = undefined;

  let myNumber: number | null = null;
  myNumber = 12;

  let myString: string | undefined = undefined;
  myString = 'Este string comienza undefined';

  //Versión 1 ejemplo

  function welcome(name: string | null) {
    let hello = 'Hola ';
    if (name) {
      hello += name;
    } else {
      hello += 'nobody'
    }
    console.log(hello)
  }

  //Versión 2 ejemplo

  function hi(name: string | null) {
    let hello = 'Hola ';
    hello += name?.toLocaleLowerCase() || 'nobody'
    console.log(hello)
  }

  //De esta manera es más abreviado y gracias al ? nos ahorramos el if

  welcome('Amparo')
  welcome(null)


})();


