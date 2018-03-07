import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {routeNew} from './app.route';
import {RouterModule} from '@angular/router';
import {YoutubeService} from './youtube.service';
import {HttpClientModule} from '@angular/common/http';
import { YoutubeVideoListComponent } from './home/youtube-video-list/youtube-video-list.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    YoutubeVideoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routeNew),
    HttpClientModule
  ],
  providers: [YoutubeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
