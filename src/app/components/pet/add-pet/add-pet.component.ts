import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { petDto } from 'src/app/models/petDto';
import { userDTO } from 'src/app/models/userDTO';
import { PetService } from 'src/app/services/pet.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent implements OnInit {

  race : any[];
  sex : any[];
  pet : petDto = new petDto;
  showError : boolean;
  users: userDTO[];

  constructor(private _petService : PetService,private router: Router, private _userService : UserService) {   
    this.race = ["Affenpinscher","Afgano","Beagle","Basenji","Bloodhound","Bergamasco","Beauceron","Bóxer","Pitbull","Dálmata","Criollo","Bull Terrier","Bulldog","Bullmastiff","Carlino","Chihuahua","Dóberman","Golden","Gran danés","Husky siberiano"];
    this.sex = ["Male","Female"];
    this.showError = false;
    this.users =[];
   }

  ngOnInit(): void {
    this.getUsers();
  }

  addPet(){    
    return this._petService.addPets(this.pet).subscribe(()=>{
      alert("Pets has been created with succesfull");
      this.router.navigate(["/pets"]);
    },error =>{
      console.log(error);
      this.showError = true;
    });
  }

  getUsers(){
    try {
      this._userService.getUsers().subscribe(data =>{
        this.users = data;
        if (this.users.length == 0) {
          alert("You don't have any clients, please add one");
          this.router.navigate(["/users"]);
        }        
      }); 
    } catch (error) {
      
      
    }    
  }

  cancel(){
    this.router.navigate(["/pets"]);
  }

}
