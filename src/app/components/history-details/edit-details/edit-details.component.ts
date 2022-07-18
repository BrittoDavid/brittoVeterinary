import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { employeeDto } from 'src/app/models/employeeDto';
import { histoDetailDto } from 'src/app/models/histoDetailDto';
import { historyDto } from 'src/app/models/historyDto';
import { EmployeeService } from 'src/app/services/employee.service';
import { HistoryService } from 'src/app/services/history.service';
import { VeterinaryService } from '../../serviceComponents/veterinary.service';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.css']
})
export class EditDetailsComponent implements OnInit {

  historyDetail : histoDetailDto = new histoDetailDto;
  showError : boolean;
  employees : employeeDto[];
  history: historyDto[];

  constructor(private _histoService : HistoryService, private _emploService : EmployeeService, private router : Router, private _servi : VeterinaryService) {
    this.showError = false;
    this.employees = [];
    this.history = [];
   }

  ngOnInit(): void {
    this.showDetail();
    this.getEmployee();
    this.getHistory();
  }

  showDetail(){
    if (!this._servi.HistoryDetails.id?.valueOf()) {
      this.router.navigate(["/historyDetails"]);
    }else{       
    this.historyDetail.id = this._servi.HistoryDetails.id;
    this.historyDetail.temperature = this._servi.HistoryDetails.temperature;
    this.historyDetail.weight = this._servi.HistoryDetails.weight;
    this.historyDetail.heart_rate = this._servi.HistoryDetails.heart_rate;
    this.historyDetail.breathing_frequency = this._servi.HistoryDetails.breathing_frequency;
    this.historyDetail.date_time = this._servi.HistoryDetails.date_time;
    this.historyDetail.feeding = this._servi.HistoryDetails.feeding;
    this.historyDetail.habitat = this._servi.HistoryDetails.habitat;
    this.historyDetail.observacion = this._servi.HistoryDetails.observacion;
    this.historyDetail.employee_id = this._servi.HistoryDetails.employee_id;
    this.historyDetail.history_id = this._servi.HistoryDetails.history_id;          
    }
  }

  getEmployee(){
    try {
      this._emploService.getEmployee().subscribe(data =>{
        this.employees = data;
      });
    } catch (error) {
      console.log(error);
    }
  }

  getHistory(){
    try {
      this._histoService.getHistory().subscribe(data=>{          
        this.history = data;
      })
    } catch (error) {
      console.log(error);
    }
  }

  updateDetail(){    
    return this._histoService.updateHistoryDetail(this.historyDetail).subscribe(()=>{
      alert("Details has been updated with succesfull");
      this.router.navigate(["/historyDetails"]);
    },error =>{
      console.log(error);
      this.showError = true;
    });
  }

  cancel(){
    this.router.navigate(["/historyDetails"]);
  }

}
