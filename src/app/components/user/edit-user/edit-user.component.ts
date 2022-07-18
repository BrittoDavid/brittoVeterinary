import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userDTO } from 'src/app/models/userDTO';
import { UserService } from 'src/app/services/user.service';
import { VeterinaryService } from '../../serviceComponents/veterinary.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  status : any[];
  document_type : any[];
  sex : any[];
  user : userDTO = new userDTO;
  showError : boolean;

  constructor(private _userService : UserService,private router: Router, private _servi : VeterinaryService) {
    this.status = ["Choose...","Active","Inactivate"];
    this.document_type = ["Identification card","Passport","Card"];
    this.sex = ["Man","Woman"];
    this.showError = false;
    this.user = _servi.User;
  }

  ngOnInit(): void {
    this.showUser();
  }

  showUser(){
    if (!this._servi.User.id?.valueOf()) {
      this.router.navigate(["/users"]);
    }else{    
      this.user.id = this._servi.User.id;
      this.user.name = this._servi.User.name;
      this.user.last_name = this._servi.User.last_name;
      this.user.document_type = this._servi.User.document_type;
      this.user.identification_number = this._servi.User.identification_number;
      this.user.status = this._servi.User.status;
      this.user.sex = this._servi.User.sex;
    }
  }

  editUser(){
    console.log(this.user);
    return this._userService.updateUsuario(this.user).subscribe(()=>{
      alert("User has been updated with succesfull");
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
