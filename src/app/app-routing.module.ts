import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  
  {path:'forget',component:ForgetpasswordComponent},
  {path:'home',canActivate:[AuthGuard], loadChildren:()=>import('./modules/home/home-module/home-module.module').then(mod=>mod.HomeModuleModule)},
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
