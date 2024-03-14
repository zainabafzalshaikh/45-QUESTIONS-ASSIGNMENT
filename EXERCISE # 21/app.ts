interface item{
    name:string
    price:number
    category:string
}
//create 3 objects
const pen: item={
    name:'pen' 
    ,price:50
    ,category:'stationary'
} 
const laptop: item={
    name:'laptop'
    ,price:35000
    ,category:'electronic'
}
const pizza: item={
    name:'pizza'
    ,price:1200
    ,category:'food'    
}
console.log(`name:${pen.name},price:${pen.price},category:${pen.category}`);
console.log(`name:${laptop.name},price:${laptop.price},category:${laptop.category}`);
console.log(`name:${pizza.name},price:${pizza.price},category:${pizza.category}`);