(() => {
  let myDinamicVar: any;
  myDinamicVar = 200;
  myDinamicVar = null;
  myDinamicVar = {};
  myDinamicVar = '';
  //Any te permite realizar cambios en cualquier momento, se recomienda no usarlo para evitar errores.

  myDinamicVar = 'Hola';
  const rta = (myDinamicVar as string).toLocaleLowerCase();
  console.log(rta)

  myDinamicVar = 122;
  const rta2 = (<number>myDinamicVar).toFixed();
  console.log(rta2)

})();
