
//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!
//• Remove all of the usernames from your array, and make sure the correct message is printed.
let users= ['user1', 'admin', 'user3']; 

if (users.length > 0) {
    for (let user of users) {
        if (user === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log(`Hello ${user}, thank you for logging in again.`);
        }
    }
} else {
    console.log("We need to find some users!");
}
users = [];

if (users.length > 0) {
    for (let user of users) {
        if (user === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log(`Hello ${user}, thank you for logging in again.`);
        }
    }
} else {
    console.log("We need to find some users!");
}    

