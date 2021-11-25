let faveFilms = [
    "The Matrix",
    "A Cinderella Story",
    "Avatar"
];
faveFilms.push("Bridesmaids", "Midsommar");
// pop deletes the last element
faveFilms.pop();

for(let i = 0; i < faveFilms.length; i++){
    console.log(faveFilms[i]);
}

