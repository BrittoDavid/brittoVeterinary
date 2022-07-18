import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { histoDetailDto } from 'src/app/models/histoDetailDto';
import { historyDto } from 'src/app/models/historyDto';
import { petDto } from 'src/app/models/petDto';
import { HistoryService } from 'src/app/services/history.service';
import { PetService } from 'src/app/services/pet.service';
import { VeterinaryService } from '../serviceComponents/veterinary.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  // Variables que usaremos
  history: historyDto[];
  pets: petDto[];
  historyUpdate: historyDto = new historyDto;
  historyCreate: historyDto = new historyDto;
  loading : boolean;
  query: boolean;
  urlImagen : String;
  showErrorData : boolean;
  showErrorHistory : boolean;  
  loadingModal : boolean;
  showDetail : boolean;
  idPet : number;
  id : Number;

  constructor(private _historyService : HistoryService, private router : Router, private _servi : VeterinaryService, private _petService : PetService) {
    this.history = [];    
    this.loading = true;
    this.query = false;
    this.showErrorData = false;
    this.showErrorHistory = false;
    this.loadingModal = false;
    this.showDetail = false;
    this.pets = [];
    this.idPet = 0;
    this.id = 0;
    this.urlImagen = 'https://www.segurmaniazurekin.eus/a/2020/11/segurmania_mascotas_destacada.jpg';
   }

  ngOnInit(): void {
    this.getHistory();
    this.getPets();  
  }

  //Traer las historias
  getHistory(){

    this.query = false;
    this.loading = true;
    try {
      //Damos el intervalo de un minuto 
      setTimeout(()=>{
          this._historyService.getHistory().subscribe(data=>{          
          this.history = data;
          this.query = true;
          this.loading = false;
        })
      },1000)      
    } catch (error) {
      this.loading = false;
      this.showErrorHistory = true;
      setTimeout(()=>{
        this.showErrorHistory = false;
        this.history = [];
      }, 2000);
    }
  }

  //Traer las mascotas
  getPets(){
    this._petService.getPets().subscribe(data =>{      
      this.pets = data;
      if (this.pets.length == 0) {
        alert('You do not have any pets, please create which one');
      }
    });    
  }

  //mostramos el modal para actualizar
  showUpdate(historyUpdate : historyDto){
    try {
      this.loadingModal = true;
      this.showDetail = false;
      setTimeout(()=>{
        this.historyUpdate.id = historyUpdate.id;
        this.historyUpdate.pet_id = historyUpdate.pet_id;
        this.historyUpdate.date_creation = historyUpdate.date_creation;
        this.historyUpdate.name = historyUpdate.name;
        this.loadingModal = false;
        this.showDetail = true;
      },1000)
    } catch (error) {
      this.loadingModal = false;
      this.showDetail = false;
      setTimeout(()=>{
        this.showErrorHistory = false;        
      }, 2000);
    }
  }

  //actualizamos
  update(id : Number = 0){
    try {
      if(this.historyUpdate.pet_id == this.idPet){
        alert("Same pet");
      }else{
        this.historyUpdate.pet_id = this.idPet;
        this._historyService.updateHistory(this.historyUpdate).subscribe(()=>{
          alert("History has been updated successful");
          this.getHistory();
        })
      }      
    } catch (error) {
      alert("Uff we've problems while updating the history");
    }
  }

  //Creamos
  create(){    
    this.historyCreate.pet_id = this.idPet;
    try {
      this._historyService.createHistory(this.historyCreate).subscribe(()=>{
        alert("History has been created successful");
        this.getHistory();
      })
    } catch (error) {
      alert("Uff we've problems while updating the history");
    }    
  }

  //Eliminamos
  delete(){    
    try {
      this._historyService.deleteHistory(this.id).subscribe(data=>{
        if (data == 0) {
          alert("We cannot delete this history because that has a details");
        }else{
          this.getHistory();
          alert("History has been deleted with succesfull");
        }
      })
    } catch (error) {
      alert("Sorry in this moment we can't do it");
    }
  }

  //
  showDetailView(){
    this.router.navigate(["/historyDetails"]);
  }

  historyId(id : Number = 0){
    this.id = id;
  }

}
