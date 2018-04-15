import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
// Routing Module
import { AppRoutingModule } from './app.routing';
import { FullLayoutComponent } from './layouts/full-layout.component';
import { StorageService } from './services/storage.service';

// Layouts



@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
     ],
  declarations: [
    AppComponent,
    FullLayoutComponent
  ],
  providers: [ StorageService,
    {
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  },
    ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
