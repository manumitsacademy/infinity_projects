import { Injectable } from '@angular/core';

@Injectable()
export class MoviesService {

  constructor() { }
  movies=[{"name":"DDLJ","year":"1994","director":"Yash Chopra","cast":"SRK,Kazole"},
          {"name":"GoW","year":"2012","director":"Anurag Kashyap","cast":"NSQ,Huma"} ];

  getMovies(){
    return this.movies;
  }
  getMovieDetails(moviename){
    for(let i=0;i<this.movies.length;i++){
      if(moviename==this.movies[i].name){
        return this.movies[i];
      }
    }
  }
}
