import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { employeeDto } from 'src/app/models/employeeDto';
import { histoDetailDto } from 'src/app/models/histoDetailDto';
import { historyDto } from 'src/app/models/historyDto';
import { EmployeeService } from 'src/app/services/employee.service';
import { HistoryService } from 'src/app/services/history.service';

@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.css']
})
export class AddDetailsComponent implements OnInit {

  historyDetail : histoDetailDto = new histoDetailDto;
  showError : boolean;
  employees : employeeDto[];
  history: historyDto[];

  constructor(private _histoService : HistoryService, private _emploService : EmployeeService, private router : Router) {    
    this.showError = false;
    this.employees = [];
    this.history = [];
  }

  ngOnInit(): void {
    this.getEmployee();
    this.getHistory();
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

  addDetail(){    
    return this._histoService.createHistoryDetail(this.historyDetail).subscribe(()=>{
      alert("Details has been created with succesfull");
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
