import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogoutComponentComponent } from './logout-component/logout-component.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { LoginComponent } from './login/login.component';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { UserPageComponent } from './user-page/user-page.component';
import { AddWordComponent } from './add-word/add-word.component';



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
    path: 'userpage',
    component: UserPageComponent,
  },

  {
    path: 'addcomment',
    component: AddCommentComponent,
  },
  {
    path: 'addword',
    component: AddWordComponent,
  }

  
];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
