
let userName = prompt("What's your name?");

function userNamefun() {

    if (userName) {
        alert('HELLO')
    }
    console.log(userName);
}

userNamefun();



let movieFan = prompt("Are you a movie fan? : yes or no ");

function movieFanfun() {

    while (movieFan != "yes" && movieFan != "no") {
        movieFan = prompt("Are you a movie fan? : yes or no ? ");
    }

    if (movieFan == "yes") {
        alert('nice to meet you movie fan')
    } else if (movieFan == "no") {
        alert('thats okay im sure in future you will be a movie fan')
    }
    console.log(movieFan);

}

movieFanfun();



let favoriteMovie = prompt("What's your favorite movie?");

function favoriteMoviefun() {

    if (favoriteMovie) {
        alert('wow i like this movie')
    }
    console.log(favoriteMovie);
}

favoriteMoviefun();



let moviesOneweek = prompt("How many movies do you watch in one week?");
console.log(moviesOneweek);

let moviesinweek = 3;
if (moviesOneweek <= 3) {
    alert("OH PERFECT")
} else {
    alert("WOW COOL")
}


