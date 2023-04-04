import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user/user.component';
import { LoginComponent } from './user/login/login.component';

const routes: Routes = [
  {path: '', component : LoginComponent},
  {path: 'userInfo', component : UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
