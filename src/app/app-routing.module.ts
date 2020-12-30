import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './user/users/users.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import { RegisterComponent } from './user/register/register.component';

const routes: Routes = [{path:'user',component:UsersComponent},{path:'userUpdate/:id',component:UpdateUserComponent},{path:'userReg',component:RegisterComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
