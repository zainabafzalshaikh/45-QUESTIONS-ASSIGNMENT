//Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function carInfo(manufacturer, modelName) {
    var extras = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extras[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        modelName: modelName,
        extras: {}
    };
    extras.forEach(function (extra) {
        var key = Object.keys(extra)[0];
        car.extras[key] = extra[key];
    });
    return car;
}
var myCar = carInfo("Toyota", "Corolla", { color: "blue" }, { year: 2020 });
console.log(myCar);
