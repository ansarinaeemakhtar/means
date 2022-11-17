import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { SourcesComponent } from './sources/sources.component';
import { UsersComponent } from './users/users.component';
import { WriteComponent } from './write/write.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, data: {title: 'Dashboard', active: 'active'} },
  { path: 'users', component: UsersComponent, data: {title: 'Users', active: 'active'} },
  { path: 'write', component: WriteComponent, data: {title: 'Write a psot', active: 'active'} },
  { path: 'register-user', component: RegisterComponent, data: {title: 'Register a user', active: 'active'} },
  { path: 'create-category', component: CategoriesComponent, data: {title: 'Register a category', active: 'active'} },
  { path: 'create-source', component: SourcesComponent, data: {title: 'Register a source', active: 'active'} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
