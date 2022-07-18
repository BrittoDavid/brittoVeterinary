import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { userDTO } from 'src/app/models/userDTO';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  status : any[];
  document_type : any[];
  sex : any[];
  user : userDTO = new userDTO;
  showError : boolean;

  constructor(private _userService : UserService,private router: Router) {
    this.status = ["Choose...","Active","Inactivate"];
    this.document_type = ["Identification card","Passport","Card"];
    this.sex = ["Man","Woman"];
    this.showError = false;
  }

  ngOnInit(): void {

  }

  addUser(){
    console.log(this.user);
    return this._userService.addUsers(this.user).subscribe(()=>{
      alert("User has been created with succesfull");
      this.router.navigate(["/users"]);
    },error =>{
      console.log(error);
      this.showError = true;
    });
  }

  cancel(){
    this.router.navigate(["/users"]);
  }


}
