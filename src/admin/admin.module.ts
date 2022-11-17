import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { WriteComponent } from './write/write.component';
import { PostsComponent } from './posts/posts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SourcesComponent } from './sources/sources.component';
import { CategoriesComponent } from './categories/categories.component';
import { SourceComponent } from './source/source.component';
import { RegisterComponent } from './register/register.component';
import { NavComponent } from './nav/nav.component';


@NgModule({
  declarations: [
    DashboardComponent,
    UsersComponent,
    WriteComponent,
    PostsComponent,
    SourcesComponent,
    CategoriesComponent,
    SourceComponent,
    RegisterComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule {
  static forRoot(): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
    throw new Error('Method not implemented.');
  }
}
