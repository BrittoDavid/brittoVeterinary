import { Component, OnInit } from '@angular/core';
import { employeeDto } from 'src/app/models/employeeDto';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: employeeDto[];
  loading : boolean;
  query: boolean;
  urlImagen : String;
  showError : boolean;
  id : number;

  constructor(private _emploService: EmployeeService) {    
    this.employees = [];
    this.loading = true;
    this.query = false;
    this.showError = false;
    this.id = 0;
    this.urlImagen = 'https://assets-global.website-files.com/61766c42e8e50c99a04fbd4b/61799eaf4b05a17ba8d10e5b_shutterstock_1357446050.jpeg';

   }

  ngOnInit(): void {
    this.getEmployee();
  }


  getEmployee(){
    this.query = false;
    this.loading = true;
    setTimeout(()=>{
      this._emploService.getEmployee().subscribe(data =>{
        this.employees = data;
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
      this.employees = [];
    }, 3000)
  }

  update(employee : employeeDto){ 
    alert("uff sorry- this options isn't available");
  }

  delete(){
    try {
      this._emploService.deleteEmployee(this.id).subscribe(data=>{
        if (data == 0) {
          alert("We cannot delete this employee because that has an historyDetail");
        } else {
          alert("Employee has been deleted with succesfull");
          this.getEmployee();
        }
      })
    } catch (error) {
      
    }
  }

  employeeId(id : number = 0){
    this.id = id;
  }

}
