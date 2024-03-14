//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large 
//shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I LOVE CODING"; }
    console.log("Shirt size: ".concat(size));
    console.log("Message: ".concat(message));
    console.log("Printing shirt summary...");
}
make_shirt();
make_shirt("Medium");
make_shirt("Small", "I ❤️ TYPESCRIPT");
