import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {

  constructor() { }

  urlImagen : String = 'https://cdn-icons-png.flaticon.com/512/1116/1116453.png';

  ngOnInit(): void {
  }

}