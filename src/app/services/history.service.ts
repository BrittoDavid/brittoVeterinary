import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { histoDetailDto } from '../models/histoDetailDto';
import { historyDto } from '../models/historyDto';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(private httpClient: HttpClient) { }

  //History
  public getHistory(): Observable<any>{          
    return this.httpClient.get(environment.api + '/history/getHistory');     
  }

  public createHistory(histo : historyDto): Observable<any>{  
    return this.httpClient.post<historyDto>(environment.api + '/history/createHistory',histo);     
  }

  updateHistory(histo : historyDto ):Observable<any> {
    return this.httpClient.put<historyDto>(environment.api + '/history/updateHistory',histo);
  }

  deleteHistory(id : Number) {
    return this.httpClient.delete<Number>(environment.api + "/history/"+id);
  }

  //********************************************History Detail***************************************************************

  public getHistoryDetail(): Observable<any>{          
    return this.httpClient.get(environment.api + '/historyDetail/getHistoryDetail');     
  }

  public createHistoryDetail(histo : histoDetailDto): Observable<any>{  
    return this.httpClient.post<historyDto>(environment.api + '/historyDetail/createHistoryDetail',histo);     
  }

  updateHistoryDetail(histo : histoDetailDto): Observable<any> {
    return this.httpClient.put<historyDto>(environment.api + '/historyDetail/updateHistoryDetail',histo);
  }

  public getHistoryDetailById(id:Number): Observable<any> {
    return this.httpClient.get(environment.api + '/historyDetail/'+id);
  }

  deleteHistoryDetail(id : Number) {
    return this.httpClient.delete<Number>(environment.api + "/historyDetail/"+id);
  }
}
