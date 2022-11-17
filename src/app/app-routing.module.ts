import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { AuthGuard } from './shared/auth.guard';
import { AboutComponent } from './user/about/about.component';
import { AccessDeniedComponent } from './user/access-denied/access-denied.component';
import { ContactComponent } from './user/contact/contact.component';
import { FullReadComponent } from './user/full-read/full-read.component';
import { HomeComponent } from './user/home/home.component';
import { LoginComponent } from './user/login/login.component';
import { NotFoundComponent } from './user/not-found/not-found.component';
import { ReadComponent } from './user/read/read.component';
import { RegisterComponent } from './user/register/register.component';
import { WriterProfileComponent } from './user/writer-profile/writer-profile.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'read', component: ReadComponent },
  { path: 'full-read/:id', component: FullReadComponent },
  { path: 'writer-profile/:id', component: WriterProfileComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  { path: 'access-denied', component: AccessDeniedComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
