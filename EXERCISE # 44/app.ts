//Sandwiches: Write a function that accepts a array of items a person wants on a 
//sandwich. The function should have one parameter that collects as many items as 
//the function call provides, and it should print a summary of the sandwich that is
// being ordered.
// Call the function three times, using a different number of arguments each time.
function make_sandwich(...ingredients: string[]): void {
    console.log("Making a sandwich with the following ingredients:");
    for (let ingredient of ingredients) {
        console.log("- " + ingredient);
    }
    console.log("Sandwich is ready!\n");
}
make_sandwich("Bread", "Ham", "Cheese");
make_sandwich("Bread", "Peanut Butter", "Jelly");
make_sandwich("Bread", "Turkey", "Lettuce", "Tomato", "Mayonnaise");