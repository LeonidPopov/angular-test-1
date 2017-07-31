import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { HttpModule }       from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent }     from './app.component';
import { AlbumsComponent }     from './albums.component';
import { UserService }      from './user.service';
import { Router }           from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
