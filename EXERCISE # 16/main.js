var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Original guest list
var guestList = ["zainab", "zunaira", "laiba"];
//Inform about the bigger dinner table
console.log("Good news! We found a bigger dinner table!");
//Add new guests
var newGuests = ["dua", "mirha"];
guestList.unshift("sana"); // Add one new guest to the beginning
guestList.splice.apply(// Add one new guest to the beginning
guestList, __spreadArray([Math.floor(guestList.length / 2), 0], newGuests, false)); // Add one new guest to the middle
// Step 3: Use push to add one new guest to the end of the list
guestList.push("ifra");
// Step 4: Print new invitation messages
console.log("New invitations:");
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var guest = guestList_1[_i];
    console.log("Dear ".concat(guest, ", you are cordially invited to dinner. We would be honored to have your presence."));
}
