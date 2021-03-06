import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  constructor(private movieService:MoviesService, private activatedRoute:ActivatedRoute) { }
  d;
  ngOnInit() {
    this.activatedRoute.params
    .subscribe((d)=>{
      this.d=this.movieService.getMovieDetails(d.name);
    });
    
  }

}
