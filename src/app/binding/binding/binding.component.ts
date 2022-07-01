import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  pageTitle:string="Data Binding In Angular";
  
  imageUrl:any = "https://www.freewebheaders.com/wp-content/gallery/artistic-abstract-hero-headers/thumbs/thumbs_colorful-butterflies-flowers-abstract-art-vector-design.jpg" ;
  btnStatus:boolean= false;
  constructor() { }

  ngOnInit() {
  }

}