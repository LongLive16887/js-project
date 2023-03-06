"use strict"
let numberOfFilms;
function start(){
    numberOfFilms = +prompt("Сколько фильмов вы уже посматрели?",'');
    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов вы уже посматрели?",'');
    }
}

// start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function rememberMyFilms(){
    for(let i = 0;i<2;i++){
        let a = prompt("Один из последних просмотренных фильмов?",''), b = +prompt("На сколько оцените его?",'');
        if(a != null && b != null && a != '' && b != '' && a.length<50){
            personalMovieDB.movies[a] = b;
            console.log("done");
        } 
        else{
            console.log("error");b
            i--;
        }
    }
}

// rememberMyFilms();

function detectPersonallevel(){
    if(personalMovieDB.count < 10){
        console.log("Просмотрено довольно мало фильмов");
    }
    else if(10 <= personalMovieDB.count <= 30){
        console.log("Вы класический зритель");
    }
    else if(personalMovieDB.count > 30){
        console.log("Вы киноман");
    }
    else{
        console.log("Произошла ошибка");
    }
}

// detectPersonallevel();

function showMyDB(hidden){
    if(!hidden){
        console.log(personalMovieDB);
    }
}

// showMyDB(personalMovieDB.privat);

function writeYourGenres(){
    for(let i = 1;i<4;i++){
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

// writeYourGenres();






