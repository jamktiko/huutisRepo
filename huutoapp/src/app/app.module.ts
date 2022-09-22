import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EtusivuComponent } from './etusivu/etusivu.component';
import { CreationComponent } from './creation/creation.component';
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { VoteComponent } from './vote/vote.component';
import { UsernameComponent } from './username/username.component'; 


@NgModule({
  declarations: [
    AppComponent,
    EtusivuComponent,
    CreationComponent,
    VoteComponent,
    UsernameComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
