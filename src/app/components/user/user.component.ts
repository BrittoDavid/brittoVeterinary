import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  urlImagen : String = 'https://cdn-icons-png.flaticon.com/512/1116/1116453.png';

  ngOnInit(): void {
  }

}
