import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { histoDetailDto } from 'src/app/models/histoDetailDto';
import { HistoryService } from 'src/app/services/history.service';
import { VeterinaryService } from '../serviceComponents/veterinary.service';

@Component({
  selector: 'app-history-details',
  templateUrl: './history-details.component.html',
  styleUrls: ['./history-details.component.css']
})
export class HistoryDetailsComponent implements OnInit {


  historyDetail: histoDetailDto[];
  loading : boolean;
  query: boolean;
  urlImagen : String;
  showError : boolean;
  id : number;

  constructor(private _historyService : HistoryService,private router: Router, private _servi : VeterinaryService) { 
    this.historyDetail = [];
    this.loading = true;
    this.query = false;
    this.showError = false;
    this.urlImagen = 'https://luciamonterorodriguez.com/wp-content/uploads/2021/03/computer-1331579_640.png';
    this.id = 0;
  }

  ngOnInit(): void {
    this.gethistoryDetail();
  }

  gethistoryDetail(){
    this.query = false;
    this.loading = true;
    setTimeout(()=>{
      this._historyService.getHistoryDetail().subscribe(data =>{
        this.historyDetail = data;
        this.query = true;
        this.loading = false;
      },() =>{
        this.loading = false;
        this.error();
      });
    }, 1000)
  }


  error(){
    this.showError = true;
    setTimeout(()=>{
      this.showError = false;
      this.historyDetail = [];
    }, 3000)
  }

  historyId(id : number = 0){
    this.id = id;
  }

  delete(){
    this._historyService.deleteHistoryDetail(this.id).subscribe(data=>{      
        this.gethistoryDetail();
        alert("Details has been deleted with succesfull");
    },() =>{
      this.loading = false;
      this.error();
    });
  }

  update(histo : histoDetailDto){ 
    this._servi.HistoryDetails.id = histo.id;
    this._servi.HistoryDetails.temperature = histo.temperature;
    this._servi.HistoryDetails.weight = histo.weight;
    this._servi.HistoryDetails.heart_rate = histo.heart_rate;
    this._servi.HistoryDetails.breathing_frequency = histo.breathing_frequency;
    this._servi.HistoryDetails.date_time = histo.date_time;
    this._servi.HistoryDetails.feeding = histo.feeding;
    this._servi.HistoryDetails.habitat = histo.habitat;
    this._servi.HistoryDetails.observacion = histo.observacion;
    this._servi.HistoryDetails.employee_id = histo.employee_id;
    this._servi.HistoryDetails.history_id = histo.history_id;    
    this.router.navigate(["/historyDetails/update"]);
  }
  

}
