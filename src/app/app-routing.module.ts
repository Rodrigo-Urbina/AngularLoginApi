import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Local imports
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RecoverPasswordComponent } from './components/recover-password/recover-password.component';
import { RegisterComponent } from './components/register/register.component';
import { TermsComponent } from './components/terms/terms.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'aboutUs', component: AboutusComponent},
  {path: 'termsAndConditions', component: TermsComponent},
  {path: 'recoverPassword', component: RecoverPasswordComponent},
  {path: 'register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
