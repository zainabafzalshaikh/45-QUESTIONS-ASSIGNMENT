let guest_list: string[] =[`Dua`,`Shumaim`,`Ifra`,`Zainab`];
//for(let i=0; i<guest_list.length; i++){
//    console.log(`dear sister ` + guest_list[i] + `,\nI invited you to my birthday party on tomorrow.\n\nThank you`);
//}
let absent_guest: string=`Zainab`;
let new_guest: string=`Bisma Maroof`;
guest_list[3] = new_guest;
//for(let i=0; i<guest_list.length; i++){
//    console.log(`dear sister ` + guest_list[i] + `,\nI invited you to my birthday party on tomorrow.\n\nThank you`);
//}
console.log(`sister ${absent_guest} will not coming on tomorrow party`);
guest_list.unshift(`Duaa`,`Zunaira`,`Sana`);
//for(let i=0; i<guest_list.length; i++){
//    console.log(`dear sister ` + guest_list[i] + `,\nI invited you to my birthday party on tomorrow.\n\nThank you`);
//}
console.log(`\n sorry, we cannot arrange big table, only two people allow for party.`)
while(guest_list.length>2){
    let remove_guest = guest_list.pop();
    console.log(`sorry sister, ${remove_guest} you are not invited for birthday party`);
}
for(let i=0; i<guest_list.length; i++){
    console.log(`dear sister ` + guest_list[i] + `,\n you are still invited on tomorrow's birthday party.\n\nThank you`);
}
guest_list.splice(0,2);
console.log(guest_list);