//Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.

import { reverse } from "dns";

//• Print your array in its original order.
let my_places : string[]= [`Makkah`,`Jurong`,`Istanbul`,`Dubai`,`Bern`];
console.log(`originol :`+ my_places);
//• Print your array in alphabetical order without modifying the actual list.
//console.log(`copy` + [...places].sort());

//• Show that your array is still in its original order by printing it.
//console.log(`originol :`+ places);
//• Print your array in reverse alphabetical order without changing the order of the original list.
console.log(`copy` + [... my_places].sort().reverse());

//• Show that your array is still in its original order by printing it again.
console.log(`copy` + [... my_places].sort().reverse());
//• Reverse the order of your list. Print the array to show that its order has changed.
console.log(`originol :` + my_places.sort());
//• Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log(`copy` + [... my_places].sort().reverse());
//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log(`originol :` + my_places.sort());
//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has chang.
my_places.sort().reverse();
console.log(my_places);

























