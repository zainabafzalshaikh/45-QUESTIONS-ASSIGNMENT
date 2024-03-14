//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!
//• Remove all of the usernames from your array, and make sure the correct message is printed.
var users = ['user1', 'admin', 'user3'];
if (users.length > 0) {
    for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
        var user = users_1[_i];
        if (user === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(user, ", thank you for logging in again."));
        }
    }
}
else {
    console.log("We need to find some users!");
}
users = [];
if (users.length > 0) {
    for (var _a = 0, users_2 = users; _a < users_2.length; _a++) {
        var user = users_2[_a];
        if (user === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(user, ", thank you for logging in again."));
        }
    }
}
else {
    console.log("We need to find some users!");
}
