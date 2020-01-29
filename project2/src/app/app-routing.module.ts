import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogoutComponentComponent } from './logout-component/logout-component.component';
import { SearchBarComponent } from './search-bar/search-bar.component';



const routes: Routes = [
  {
    path: 'logout',
    component: LogoutComponentComponent,
  },

  {
    path: 'search-bar',
    component: SearchBarComponent,
  },
  
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
