import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  pageTitle:string="Data Binding In Angular";
  
  imageUrl:any = "https://data.whicdn.com/images/338854401/original.jpg" ;
  btnStatus:boolean= false;
  constructor() { }

  ngOnInit() {
  }

}