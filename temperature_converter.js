function celsiusToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}

console.log(celsiusToFahrenheit(25)); // 77
console.log(fahrenheitToCelsius(77)); // 25
