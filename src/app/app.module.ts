import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { PetComponent } from './components/pet/pet.component';
import { HistoryComponent } from './components/history/history.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HistoryDetailsComponent } from './components/history-details/history-details.component';
import { AddUserComponent } from './components/user/add-user/add-user.component';
import { EditUserComponent } from './components/user/edit-user/edit-user.component';
import { AddPetComponent } from './components/pet/add-pet/add-pet.component';
import { EditPetComponent } from './components/pet/edit-pet/edit-pet.component';
import { EditEmployeeComponent } from './components/employee/edit-employee/edit-employee.component';
import { AddEmployeeComponent } from './components/employee/add-employee/add-employee.component';
import { AddDetailsComponent } from './components/history-details/add-details/add-details.component';
import { EditDetailsComponent } from './components/history-details/edit-details/edit-details.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PetComponent,
    HistoryComponent,
    EmployeeComponent,
    DashboardComponent,
    NavbarComponent,
    HistoryDetailsComponent,
    AddUserComponent,
    EditUserComponent,
    AddPetComponent,
    EditPetComponent,
    EditEmployeeComponent,
    AddEmployeeComponent,
    AddDetailsComponent,
    EditDetailsComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
