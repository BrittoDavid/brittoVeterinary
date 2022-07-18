import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddEmployeeComponent } from './components/employee/add-employee/add-employee.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { AddDetailsComponent } from './components/history-details/add-details/add-details.component';
import { EditDetailsComponent } from './components/history-details/edit-details/edit-details.component';
import { HistoryDetailsComponent } from './components/history-details/history-details.component';
import { HistoryComponent } from './components/history/history.component';
import { AddPetComponent } from './components/pet/add-pet/add-pet.component';
import { PetComponent } from './components/pet/pet.component';
import { AddUserComponent } from './components/user/add-user/add-user.component';
import { EditUserComponent } from './components/user/edit-user/edit-user.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {path: '', redirectTo: 'users',pathMatch: 'full' },
  {path: 'users', component: UserComponent},
  {path: 'users/add', component: AddUserComponent},
  {path: 'users/update', component: EditUserComponent},
  {path: 'pets', component: PetComponent},
  {path: 'pets/add', component: AddPetComponent},
  {path: 'employee', component: EmployeeComponent},
  {path: 'employee/add', component: AddEmployeeComponent},
  {path: 'history', component: HistoryComponent},  
  {path: 'historyDetails', component: HistoryDetailsComponent},
  {path: 'historyDetails/add', component: AddDetailsComponent},
  {path: 'historyDetails/update', component: EditDetailsComponent},
  {path: '**', redirectTo: 'users', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
