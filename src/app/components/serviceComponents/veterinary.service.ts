import { Injectable } from '@angular/core';
import { histoDetailDto } from 'src/app/models/histoDetailDto';
import { historyDto } from 'src/app/models/historyDto';
import { userDTO } from 'src/app/models/userDTO';

@Injectable({
  providedIn: 'root'
})
export class VeterinaryService {

  idHistory: number; 
  User: userDTO = new userDTO;
  History: historyDto = new historyDto;
  HistoryDetails: histoDetailDto = new histoDetailDto;
  
  constructor() { 
    this.idHistory = 0;
  }
}
