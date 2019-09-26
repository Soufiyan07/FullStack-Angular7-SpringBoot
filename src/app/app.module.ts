import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { StudentUpdateComponent } from './student-update/student-update.component';
import { StudentNotesComponent } from './student-notes/student-notes.component';
import { SignUpComponentComponent } from './sign-up-component/sign-up-component.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { LessonComponent } from './lesson/lesson.component';
import { SharingEmailComponent } from './sharing-email/sharing-email.component';
import { SignUpSuccessComponentComponent } from './sign-up-success-component/sign-up-success-component.component';
import { LessonAddComponent } from './lesson-add/lesson-add.component';
import { HttpInterceptorService } from './service/http/http-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ErrorComponent,
    ListTodosComponent,
    MenuComponent,
    FooterComponent,
    LogoutComponent,
    StudentUpdateComponent,
    StudentNotesComponent,
    SignUpComponentComponent,
    StudentAddComponent,
    LessonComponent,
    SharingEmailComponent,
    SignUpSuccessComponentComponent,
    LessonAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
