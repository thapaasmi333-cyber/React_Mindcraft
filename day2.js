// print from 1 to 10 using for loops

const players = ["Messi", "Ronaldo", "Nemyar", "Halland", "Mbappe"];
let size = players.length;
players.length = 2; //length

console.log(players.length);

//Array to String
let myList = players.toString();
console.log(players.toString);

//Array at()
const anime = ["One Piece", "Bleach", "Naruto", "Fairy Tail"];
let animee = anime.at(3);

console.log(anime.at(3));

//pop()
const toppers = ["Asmi", "Sudeshna", "Sangu", "Anshu"];
toppers.pop();

console.log(toppers);

//sort
console.log(toppers.sort());

//reverse
console.log(anime.reverse());

//tosorted
const months = ["Jan", "Feb", "Mar", "Apr"];

const sorted = months.toSorted();
console.log(months.toSorted());
