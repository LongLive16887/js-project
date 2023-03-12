"use strict"

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,

    start: function(){
        numberOfFilms.count = +prompt("Сколько фильмов вы уже посматрели?",'');
        while(numberOfFilms.count == '' || numberOfFilms.count == null || isNaN(numberOfFilms.count)){
            numberOfFilms.count = +prompt("Сколько фильмов вы уже посматрели?",'');
        }
    },

    rememberMyFilms: function(){
        for(let i = 0;i<2;i++){
            let a = prompt("Один из последних просмотренных фильмов?",'').trim(), b = +prompt("На сколько оцените его?",'');
            if(a != null && b != null && a != '' && b != '' && a.length<50){
                personalMovieDB.movies[a] = b;
                console.log("done");
            } 
            else{
                console.log("error");b
                i--;
            }
        }
    },

    detectPersonallevel: function(){
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
    },

    showMyDB: function(hidden){
        if(!hidden){
            console.log(personalMovieDB);
        }
    },
    
    writeYourGenres: function(){
        for(let i = 1;i<4;i++){
            personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
        }
    }
    
};









