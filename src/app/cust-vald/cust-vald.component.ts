import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-cust-vald',
  templateUrl: './cust-vald.component.html',
  styleUrls: ['./cust-vald.component.css']
})
export class CustValdComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
	userform = new FormGroup ({
	    pwd: new FormControl("",[Validators.minLength(4)])
	  });
	
}
