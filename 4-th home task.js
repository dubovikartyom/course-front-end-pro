const starWarCharacters = [
    {
        name: "Luke Skywalker",
        height: "172",
        mass: "77",
        hair_color: "blond",
        skin_color: "fair",
        eye_color: "blue",
        birth_year: "19BBY",
        gender: "male",
        films: ["2", "6", "3", "1", "7"]
    },
    {
        name: "C-3PO",
        height: "167",
        mass: "75",
        hair_color: "n/a",
        skin_color: "gold",
        eye_color: "yellow",
        birth_year: "112BBY",
        gender: "n/a",
        films: ["1", "2", "3", "4", "5", "6"]
    },
    {
        name: "Darth Vader",
        height: "202",
        mass: "136",
        hair_color: "none",
        skin_color: "white",
        eye_color: "yellow",
        birth_year: "41.9BBY",
        gender: "male",
        films: ["1", "2", "3", "6"]
    },
    {
        name: "Leia Organa",
        height: "150",
        mass: "49",
        hair_color: "brown",
        skin_color: "light",
        eye_color: "brown",
        birth_year: "19BBY",
        gender: "female",
        films: ["1", "2", "3", "6"]
    },
    {
        name: "Obi-Wan Kenobi",
        height: "182",
        mass: "77",
        hair_color: "auburn, white",
        skin_color: "fair",
        eye_color: "blue-gray",
        birth_year: "57BBY",
        gender: "male",
        films: ["1", "2", "3", "4", "5", "6"]
    }
];

//1.Вывести массив гендеров;
const allGender = starWarCharacters.map(x => x.gender);
console.log(allGender);

//2.Найти персонажа(жей) которые снялись в найбольшем количестве фильмов;
let mostAmountFilms = 0;
//find most amount films
starWarCharacters.forEach((x, index) => mostAmountFilms = mostAmountFilms <= x.films.length ? x.films.length : mostAmountFilms);
console.log(mostAmountFilms);
//find most popelar character
let popularCharacter = starWarCharacters.filter(x => x.films.length === mostAmountFilms).map(x => x.name);
console.log(popularCharacter.join(', '));

//3.Найти самого тяжелого по весу персонажа;
const mostWeightCharacter = starWarCharacters.reduce((accum, item) => {
    return Number(accum.mass) > Number(item.mass) ? accum : item;
});
console.log(mostWeightCharacter.name);

//4.Вывести фильмы в которых присутствовали все персонажи массива;

//5.Удалить всех персонажей из исходного массива сделав его пустым;