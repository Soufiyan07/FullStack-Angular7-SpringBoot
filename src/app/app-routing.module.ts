import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { StudentUpdateComponent } from './student-update/student-update.component';
import { StudentNotesComponent } from './student-notes/student-notes.component';
import { SignUpComponentComponent } from './sign-up-component/sign-up-component.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { LessonComponent } from './lesson/lesson.component';
import { SharingEmailComponent } from './sharing-email/sharing-email.component';
import { SignUpSuccessComponentComponent } from './sign-up-success-component/sign-up-success-component.component';
import { LessonAddComponent } from './lesson-add/lesson-add.component';

const routes: Routes = [
  //Routes :
  {path : '' , component : WelcomeComponent},
  {path : 'welcome/:name' , component : WelcomeComponent , canActivate: [RouteGuardService]},
  {path: 'student/:idStudent',component: StudentNotesComponent,canActivate: [RouteGuardService]},
  {path: 'Student/SignUp' , component: SignUpComponentComponent}  ,
  {path: 'sign-up/success' , component: SignUpSuccessComponentComponent}  ,
  {path: 'Student/Add',component: StudentAddComponent ,canActivate: [RouteGuardService]},
  {path: 'Student/lesson/list',component: LessonComponent ,canActivate: [RouteGuardService]},
  {path: 'Student/lesson/add',component: LessonAddComponent ,canActivate: [RouteGuardService]},
  {path: 'Sharing/email',component: SharingEmailComponent ,canActivate: [RouteGuardService]},
  {path: 'login' , component: LoginComponent } ,
  {path: 'todos' , component: ListTodosComponent, canActivate: [RouteGuardService]}  ,
  {path: 'logout',component: LogoutComponent ,canActivate: [RouteGuardService]},
  {path: 'student/update/:idStudent',component: StudentUpdateComponent,canActivate: [RouteGuardService]},
  {path: '**' , component: ErrorComponent}
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
