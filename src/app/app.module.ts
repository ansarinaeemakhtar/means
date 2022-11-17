import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './user/contact/contact.component';
import { HomeComponent } from './user/home/home.component';
import { AboutComponent } from './user/about/about.component';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { LogoutComponent } from './user/logout/logout.component';
import { ReadComponent } from './user/read/read.component';
import { FullReadComponent } from './user/full-read/full-read.component';
import { WriterComponent } from './user/writer/writer.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { WriterProfileComponent } from './user/writer-profile/writer-profile.component';
import { SpinnerComponent } from './common/spinner/spinner.component';
import { InterceptorService } from './shared/interceptor.service';
import { AccessDeniedComponent } from './user/access-denied/access-denied.component';
import { NotFoundComponent } from './user/not-found/not-found.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    ContactComponent,
    ReadComponent,
    FullReadComponent,
    WriterComponent,
    WriterProfileComponent,
    SpinnerComponent,
    AccessDeniedComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    ToastrModule.forRoot(), // ToastrModule added
  ],
  exports: [WriterComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
