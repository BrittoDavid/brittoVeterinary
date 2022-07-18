import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userDTO } from 'src/app/models/userDTO';
import { UserService } from 'src/app/services/user.service';
import { VeterinaryService } from '../serviceComponents/veterinary.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: userDTO[];
  loading : boolean;
  query: boolean;
  urlImagen : String;
  showError : boolean;
  id : number;

  constructor(private _userService : UserService,private router: Router, private _servi : VeterinaryService) {
    this.users = [];
    this.loading = true;
    this.query = false;
    this.showError = false;
    this.urlImagen = 'https://luciamonterorodriguez.com/wp-content/uploads/2021/03/computer-1331579_640.png';
    this.id = 0;
   }

  
  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.query = false;
    this.loading = true;
    setTimeout(()=>{
      this._userService.getUsers().subscribe(data =>{
        this.users = data;
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
      this.users = [];
    }, 3000)
  }

  update(user : userDTO){ 
    this._servi.User.id = user.id;
    this._servi.User.name = user.name;
    this._servi.User.last_name = user.last_name;
    this._servi.User.document_type = user.document_type;
    this._servi.User.identification_number = user.identification_number;
    this._servi.User.status = user.status;
    this._servi.User.sex = user.sex;
    this.router.navigate(["/users/update"]);
  }

  delete(){
    this._userService.deleteUsuario(this.id).subscribe(data=>{
      console.log(data);
      if(data == 0){
        alert("We cannot delete this user because has a pet");
      }else{
        this.getUsers();
        alert("User has been deleted with succesfull");
      }
    },() =>{
      this.loading = false;
      this.error();
    });
  }

  userId(id : number = 0){
    this.id = id;
  }
}

