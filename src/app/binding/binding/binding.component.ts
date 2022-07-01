import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  pageTitle:string="Data Binding In Angular";
  
  imageUrl:any = "https://th.bing.com/th/id/R.17320966d681d03c2e2a79ba6c3776f2?rik=22PtZOqy46yHCw&riu=http%3a%2f%2fblog.entheosweb.com%2fwp-content%2fuploads%2f2012%2f01%2fpink_header_s.jpg&ehk=1uAXrGaPEqsLayRuQ3jF4Dpvehyf9hR7Gh89Xczk69o%3d&risl=&pid=ImgRaw&r=0" ;
  btnStatus:boolean= false;
  constructor() { }

  ngOnInit() {
  }

}