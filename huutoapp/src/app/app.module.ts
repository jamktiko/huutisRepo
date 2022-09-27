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
import { ResultComponent } from './result/result.component';
import { WebsocketService } from './websocket.service'; 


@NgModule({
  declarations: [
    AppComponent,
    EtusivuComponent,
    CreationComponent,
    VoteComponent,
    UsernameComponent,
    ResultComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [WebsocketService],
  bootstrap: [AppComponent],
})
export class AppModule {}
