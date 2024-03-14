function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_album("paul", "Car");
var album2 = make_album("tom", "stunt", 12);
var album3 = make_album("lisa", "money", 4);
console.log(album1);
console.log(album2);
console.log(album3);
