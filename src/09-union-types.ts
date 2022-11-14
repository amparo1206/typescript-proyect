(() => {
  let userId: string | number;
  userId = 12;
  userId = 'hello'

  function greeting(myText: string | number) {
    if (typeof myText === "string") {
      console.log(`string ${myText.toLocaleLowerCase()}`)
    } else {
      console.log(`number ${myText.toFixed(2)}`)
    }
  }

  greeting('Hola mundo')
  greeting(12)
 })();
