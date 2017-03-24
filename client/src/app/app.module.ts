import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { ResourcesComponent } from './resources/resources.component';
import { VisualizationsComponent } from './visualizations/visualizations.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    ResourcesComponent,
    VisualizationsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }