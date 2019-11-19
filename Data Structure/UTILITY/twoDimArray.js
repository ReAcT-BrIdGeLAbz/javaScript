  let twodarray = [];
  let onedarray = [];
  /* find prime.takes num as argumnet checks from the given num is prime arenot
  if retruns true,else false*/
  let findprime = (num) => {
      let j = 2;
      if (num % 2 !== 0) {
          while (j < num) {
              if (num % j == 0)
                  return false;
              j = j + 1;
          }
          return true;
      }
      return false;
  }

  /*Take no arguments adds the prime number to two d array,
  each rom conatins prime value lesser then 100,200..etc;*/
  let checktwodarray = () => {
      let count = 0
      let k = 2
      for (let i = 1; i <= 10; i++) {
          for (let j = k + 1; j < (i * 100); j++) {
              if (findprime(j) == true) {
                  onedarray.push(j)

              } else
                  count++
              //console.log(count)
          }
          k = onedarray[onedarray.length - 1]
          twodarray.push(onedarray)
          onedarray = []
      }
      //printArray()
      return twodarray
  }
  let printArray = () => {
      twodarray.forEach(Element => {
          console.log(Element);
      })
      return;

  }
  module.exports = {
      findprime,
      checktwodarray
  }