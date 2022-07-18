import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { employeeDto } from '../models/employeeDto';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) { }

  public getEmployee(): Observable<any>{          
    return this.httpClient.get(environment.api + '/employee/getEmployee');     
  }

  public addEmployee(employee : employeeDto): Observable<any>{  
    return this.httpClient.post<employeeDto>(environment.api + '/employee/createEmployee',employee);
  }

  public deleteEmployee(id : number): Observable<any>{  
    return this.httpClient.delete<Number>(environment.api + "/employee/"+id);
  }
}
