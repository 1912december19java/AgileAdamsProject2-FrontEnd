import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TagCloudModule } from 'angular-tag-cloud-module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { LogoutComponentComponent } from './logout-component/logout-component.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { LoginComponent } from './login/login.component';
import { TrainerHomeComponent } from './trainer-home/trainer-home.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { CloudComponentComponent } from './cloud-component/cloud-component.component';
import { TrainerHomepageComponent } from './trainer-homepage/trainer-homepage.component';
import { CommentContainerComponent } from './comment-container/comment-container.component';
import { CommentComponent } from './comments/comment-component/comment.component';
import { TrainersListComponent } from './trainers-list/trainers-list.component';
import { TrainerCardComponent } from './trainer-card/trainer-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LogoutComponentComponent,
    SearchBarComponent,
    LoginComponent,
    TrainerHomeComponent,
    UserHomeComponent,
    CloudComponentComponent,
    TrainerHomepageComponent,
    CommentContainerComponent,
    CommentComponent,
    TrainersListComponent,
    TrainerCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TagCloudModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
