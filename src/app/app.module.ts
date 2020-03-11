import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnlineLessionListComponent } from './online-lession-list/online-lession-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LessionCardComponent } from './lession-card/lession-card.component';
import { ChannelService } from './services/channel.service';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    OnlineLessionListComponent,
    PageNotFoundComponent,
    LessionCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ChannelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
