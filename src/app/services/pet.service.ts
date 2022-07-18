import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { petDto } from '../models/petDto';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private httpClient: HttpClient) { }

  public getPets(): Observable<any>{          
    return this.httpClient.get(environment.api + '/pets/getPets');     
  }

  public addPets(pet : petDto): Observable<any>{  
    return this.httpClient.post<petDto>(environment.api + '/pets/createPet',pet);     
  }

  deletePet(id : Number) {
    return this.httpClient.delete<Number>(environment.api + "/pets/"+id);
  }
}
