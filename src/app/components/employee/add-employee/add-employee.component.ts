import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { employeeDto } from 'src/app/models/employeeDto';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  status : any[];
  document_type : any[];
  position : any[];
  specialy : any[];
  employee : employeeDto = new employeeDto;
  showError : boolean;

  constructor(private _employeeService : EmployeeService, private router : Router) { 
    this.status = ["Choose...","Active","Inactivate"];
    this.document_type = ["C.C","Pass","T.D"];
    this.position = ["Doctor","Technical","Promoter","Veterinary", "Receptionist"];
    this.specialy = ["Veterinary Anesthesiology","veterinary cardiology","Veterinary or Animal Sciences", "Nothing"];
    this.showError = false;
  }

  ngOnInit(): void {
  }

  addEmployee(){
    console.log(this.employee);    
    return this._employeeService.addEmployee(this.employee).subscribe(()=>{
      alert("Employee has been created with succesfull");
      this.router.navigate(["/employee"]);
    },error =>{
      console.log(error);
      this.showError = true;
    });
  }
  
  cancel(){
    this.router.navigate(["/employee"]);
  }

}
