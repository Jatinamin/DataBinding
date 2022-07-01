import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  pageTitle:string="Data Binding In Angular";
  
  imageUrl:any = "https://thumbs.dreamstime.com/b/pink-wedding-blossom-website-header-wide-soft-focus-background-delicate-apple-right-hand-side-plenty-copy-space-51691229.jpg";
  btnStatus:boolean= false;
  constructor() { }

  ngOnInit() {
  }

}