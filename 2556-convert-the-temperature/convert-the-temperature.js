var convertTemperature = function (celsius) {
    let Kelvin = (Celsius) => Celsius + 273.15
    let Fahrenheit = (Celsius) => Celsius * 1.80 + 32.00  
    return [Kelvin(celsius), Fahrenheit(celsius)]
};