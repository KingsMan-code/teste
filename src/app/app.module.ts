import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponentComponent } from './components/navbar-component/navbar-component.component';
import { PrimeiroComponentComponent } from './components/primeiro-component/primeiro-component.component';
import { SegundoComponentComponent } from './components/segundo-component/segundo-component.component';
import { TerceiroComponentComponent } from './components/terceiro-component/terceiro-component.component';
import { QuartoComponentComponent } from './components/quarto-component/quarto-component.component';
import { QuintoComponentComponent } from './components/quinto-component/quinto-component.component';
import {SidebarModule} from 'ng-sidebar';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponentComponent,
    PrimeiroComponentComponent,
    SegundoComponentComponent,
    TerceiroComponentComponent,
    QuartoComponentComponent,
    QuintoComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    SidebarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
