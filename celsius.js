function celsiusToFahrenheit(celsius) {
    farrenheit =(celsius * 9/5) + 32;
    return farrenheit;
  }

console.log(celsiusToFahrenheit(0));
console.log(celsiusToFahrenheit(25));

function isEven(n) {
    n = Number(n);
    return n === 0 || !!(n && !(n%2));
  }
  console.log(isEven(4));
  console.log(isEven(7));

  function sum(a, b) {
    c = a + b;
    return c;
  }
  console.log(sum(3, 4));
  console.log(sum(10, 20));

  
  