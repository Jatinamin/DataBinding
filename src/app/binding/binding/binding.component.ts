import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  pageTitle:string="Data Binding In Angular";
  
  imageUrl:any = "https://media.istockphoto.com/vectors/coniferous-forest-silhouette-template-vector-id543350246?k=20&m=543350246&s=612x612&w=0&h=G4tsv-5HHDcZR1-otpxk9IBtg-cbB795-Xl2NyZDHck=";
  btnStatus:boolean= false;
  constructor() { }

  ngOnInit() {
  }

}