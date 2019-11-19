  /*
   * @description: anagram for prime numbers
   * @purpose: to check the passed array of elements are anagram or not
   * @param {data}, which has the information about number read from user and passed from prime 
   */
  let anaGram = (arr) => {
      try {
          let l = 0;
          let m = 0;
          let anarray = [];
          while (l < arr.length - 1) {
              m = l + 1;
              while (m < arr.length) {
                  if (isAana(arr[l].toString(), arr[m].toString())) {
                      let b = true;
                      anarray.forEach(element => {
                          if (element.includes(arr[l])) {
                              b = false;
                              if (!element.includes(arr[m])) element.push(arr[m]);
                          }
                      });
                      if (b == true) anarray.push([arr[l], arr[m]]);
                  }
                  m += 1;

              }
              l += 1;
          }
      } catch (e) {
          console.log(e)
      }

      return anarray;
  }
  /*
   * @description: anagram for prime numbers
   * @purpose: two numbers are passed from anagram that are compared 
   * @param {data}, which has the information about two prime numbers passed from anagram  
   */
  let isAana = (str1, str2) => {
      let sortedstr = (str) => str.split('').sort().join('')
      if (sortedstr(str1) === sortedstr(str2)) {
          return true
      }
      return false
  }

  let printArray = (anaArray) => {
      anaArray.forEach(element => {
          console.log(element)
      });
      return
  }
  module.exports = {
      anaGram
  }