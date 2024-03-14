import { on } from "events";

let guest_list: string[] = [`Dua`,`Shumaim`,`Ifra`];
for(let i=0; i<guest_list.length; i++){
    console.log(`dear sister ` + guest_list[i] + `,\nI invite you to my birthday party on tomorrow.\n\nThank you`)
}
export{guest_list};