// Original guest list
let guestList: string[] = ["zainab", "zunaira", "laiba"];

//Inform about the bigger dinner table
console.log("Good news! We found a bigger dinner table!");

//Add new guests
let newGuests: string[] = ["dua", "mirha"];
guestList.unshift("sana"); // Add one new guest to the beginning
guestList.splice(Math.floor(guestList.length / 2), 0, ...newGuests); // Add one new guest to the middle

// Step 3: Use push to add one new guest to the end of the list
guestList.push("ifra");

// Step 4: Print new invitation messages
console.log("New invitations:");
for (let guest of guestList) {
    console.log(`Dear ${guest}, you are cordially invited to dinner. We would be honored to have your presence.`);
}
