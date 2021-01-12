import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ElementRef, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { MaincontentComponent } from './components/main-content/maincontent/maincontent.component';
import { UserService } from './service/user.service';
import { ActivateGuard } from './guard/activate.guard'
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { NgxMatFileInputModule } from '@angular-material-components/file-input';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SuperAdminDialogComponent } from './components/main-content/super-admin-dialog/super-admin-dialog.component';
import { AdminDialogComponent } from './components/main-content/admin-dialog/admin-dialog.component';
import { MainSideNavComponent } from './components/main-content/main-side-nav/main-side-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    MaincontentComponent,
    SuperAdminDialogComponent,
    AdminDialogComponent,
    HeaderComponent,
    MainSideNavComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
   NgxMatFileInputModule,
   HttpClientModule
  ],
  providers: [UserService,
    ActivateGuard,
    
  ],
  bootstrap: [AppComponent],
})
export class AppModule { 
}
