import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  movies;
  constructor(private moviesService:MoviesService) {
    this.movies=moviesService.getMovies();
  } 
  ngOnInit() {
  }

}
