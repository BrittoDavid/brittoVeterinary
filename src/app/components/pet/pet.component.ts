import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
import { petDto } from 'src/app/models/petDto';
import { PetService } from 'src/app/services/pet.service';
import { VeterinaryService } from '../serviceComponents/veterinary.service';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {

  pets: petDto[];
  loading : boolean;
  query: boolean;
  urlImagen : String;
  showErrorData : boolean;
  showErrorHistory : boolean;
  modalPets : boolean;
  petSelectHistory : number;
  id : number;

  constructor(private _petService : PetService,private router: Router, private _veteService : VeterinaryService) {
    this.pets = [];
    this.loading = true;
    this.query = false;
    this.showErrorData = false;
    this.showErrorHistory = false;
    this.modalPets = true;
    this.petSelectHistory = 0;
    this.id = 0;
    this.urlImagen = 'https://www.segurmaniazurekin.eus/a/2020/11/segurmania_mascotas_destacada.jpg';
  }

  

  ngOnInit(): void {
    this.getPets();
  }

  getPets(){
    this.query = false;
    this.loading = true;
    setTimeout(()=>{
      this._petService.getPets().subscribe(data =>{
        this.pets = data;
        this.query = true;
        this.loading = false;
      },() =>{
        this.loading = false;
        this.error();
      });
    }, 1000)
  }


  error(){
    this.showErrorData = true;
    setTimeout(()=>{
      this.showErrorData = false;
      this.pets = [];
    }, 3000)
  }

  history(){
    if (this.petSelectHistory != 0){
      this._veteService.idHistory = this.petSelectHistory;
      this.modalPets = false;
      this.router.navigate(['/historyDetails']);
    }else{    
      this.showErrorHistory = true;
    }    
  }

  update(pet : petDto){
    alert("uff sorry- this options isn't available");
  }

  delete(){
    try {
      this._petService.deletePet(this.id).subscribe(data=>{
        if (data == 0) {
          alert("We cannot delete this pet because that has a history");
        } else {
          alert("Pet has been deleted with suceesfully");
          this.getPets();
        }

      })
    } catch (error) {
      alert("Sorry in this moment we can't do it");
    }
  }

  petId(id : number = 0){
    this.id = id;
  }

}
