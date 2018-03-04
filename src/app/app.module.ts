import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CustValdComponent } from './cust-vald/cust-vald.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { SpecialComponent } from './special/special.component';
import { DefaultComponent } from './default/default.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MoviesService } from './movies.service';
import { MovieDetailsComponent } from './movie-details/movie-details.component';


@NgModule({
  declarations: [
    AppComponent,
    CustValdComponent,
    FirstComponent,
    SecondComponent,
    SpecialComponent,
    DefaultComponent,
    PagenotfoundComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule,
    RouterModule.forRoot([
      {path:"abc",component:FirstComponent,children:[
        {path:":name",component:MovieDetailsComponent}
      ]},
      {path:"xyz",component:SecondComponent},
      {path:"",component:DefaultComponent},
      {path:"moviedetails",component:MovieDetailsComponent},
      {path:"moviedetails/:name",component:MovieDetailsComponent},
      {path:"**",component:PagenotfoundComponent}
     
    ])
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
