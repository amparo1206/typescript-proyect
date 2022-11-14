(() => {
  type UserID = string | number | boolean;
  //El type siempre en Mayúsculas
  let userId: UserID;

  //Literal types
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  let shirtSize: Sizes;
  shirtSize = 'S';
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'XL';
  //ejemplo shirtShize 's' no serviría porque tiene que ser el valor exacto pasado por el type

  function greeting(userId: UserID, shirtSize: Sizes) {
    if (typeof userId === 'string') {
      console.log(`string ${userId.toLocaleLowerCase()}` , `string ${shirtSize.toLocaleLowerCase()}`)
    }
  }
  greeting(12, 'L');


})();
