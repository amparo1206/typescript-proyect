(() => {
  const calcTotal = (prices: number[]): number => {
    let total = 0;
    prices.forEach((item) => {
      total += item;
    })
    return total;
  }

  const rta = calcTotal([1, 2, 3, 4, 5])
  console.log(rta)
  //Aunque la funcion ya la reconozca como un number podemos tiparla para que de forma obligada nos de un
  //number

  const calcTotal2 = (prices: number[]): string => {
    let total = 0;
    prices.forEach((item) => {
      total += item;
    })
    return total.toString()
  }
  const rta2 = calcTotal2([1, 2, 3])
  console.log(rta2)

  //En esta ocasión la hemos forzado a que sea un string

  const printTotal = (prices: number[]): void => {
    const rta = calcTotal(prices);
    console.log(`El total es ${rta}`)
  }

  printTotal([1, 2, 3, 4, 5, 6, 7])

  //La función void es de anulación, también llamadas funciones de no devolución de valor.


})()
