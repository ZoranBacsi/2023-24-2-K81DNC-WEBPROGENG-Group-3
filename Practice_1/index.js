
const fruits = [["apple","orange",2,"pear","pineapple","coconut","mango"], ["strawberry", "raspberry"]]
let fruit = "grape"
/* 
fruits.forEach(f => {
    console.log(f)
});

for (let fruit of fruits) {
    console.log("second_" + fruit)
} 
*/

function myFunction(fruit) {
    console.log(fruit)
}

myFunction(fruit)

// console.log(fruits.every(d => typeof(d) === 'string'))
// console.log(fruits.some(d => typeof(d) === 'number'))

// console.log(fruits.filter(d => typeof(d) === "number"))
// console.log(fruits.map(d => typeof(d)))

let movies = [{
    "title": "Stargate",
    "length": "121",
    "year": 1994,
    "director": "Roland Emmerich",
    "actors": ["Kurt Russell","James Spades","Jaye Davidson","Viveca Lindfors"]
},{
    "title": "Stargate - The Ark of Truth",
    "length": "102",
    "year": 2008,
    "director": "Robert C. Cooper",
    "actors": ["Ben Bowder","Amanda Tapping", "Christopher Judge","Michael Shanks","Claudia Black","Beau Bridges"]
},{
    "title": "Stargate - Continuum",
    "length": "98",
    "year": 2008,
    "director": "Martin Wood",
    "actors": ["Ben Bowder","Amanda Tapping","Christopher Judge","Michael Shanks","Claudia Black","Beau Bridges","Richard Dean Anderson"]
},{
    "title": "Stargate - SG-1",
    "length": "0",
    "year": 1998,
    "director": "Brad Wright",
    "actors": ["Richard Dean Anderson","Michael Shanks","Amanda Tapping","Christopher Judge","Don S. Davis"]
}
]

//A) List of movies(title - year)
let movieList = []
movies.forEach(f => {
    movieList.push([f["title"],f["year"]])
})
console.log(movieList.join(" , "))
//B) Movie with Richard Dean Anderson
console.log(movies.filter(e => e["actors"].includes("Richard Dean Anderson")))
//C) Which is the longest movie
let longestMovie = movies[0]
movies.forEach(f => {
    if(f["length"] >> longestMovie["length"]) longestMovie = f
})
console.log(longestMovie)
