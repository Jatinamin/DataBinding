import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  pageTitle:string="Data Binding In Angular";
  
  imageUrl:any = "app/images/original.jpg" ;
  btnStatus:boolean= false;
  constructor() { }

  ngOnInit() {
  }

}