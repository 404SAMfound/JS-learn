const marvel_heros = ["ironman", "spiderman", "thor", "hulk"];
const dc_heros = ["superman", "batman", "flash"];

marvel_heros.push(dc_heros)

console.log(marvel_heros);
console.log(marvel_heros[4][1]);

const all_heros = marvel_heros.concat(dc_heros);           // works same as push
// console.log(all_heros)

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros)