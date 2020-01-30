import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogoutComponentComponent } from './logout-component/logout-component.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { LoginComponent } from './login/login.component';
import { AddCommentComponent } from './add-comment/add-comment.component';



const routes: Routes = [
  {
    path: 'logout',
    component: LogoutComponentComponent,
  },

  {
    path: 'search-bar',
    component: SearchBarComponent,
  },

  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: 'addcomment',
    component: AddCommentComponent,
  }
  
];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
