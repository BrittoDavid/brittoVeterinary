import { HttpClient, HttpClientModule, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { userDTO } from '../models/userDTO';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  public getUsers(): Observable<any>{          
    return this.httpClient.get(environment.api + '/users/getUsers');     
  }

  public addUsers(user : userDTO): Observable<any>{  
    return this.httpClient.post<userDTO>(environment.api + '/users/createUsers',user);     
  }

  updateUsuario(user : userDTO) {
    return this.httpClient.put<userDTO>(environment.api + '/users/updateUsers',user);
  }

  deleteUsuario(id : Number) {
    return this.httpClient.delete<Number>(environment.api + "/users/"+id);
  }
}
