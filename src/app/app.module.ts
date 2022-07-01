import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { DarkModeToggleComponent } from './home/dark-mode-toggle/dark-mode-toggle.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExperiencesComponent,
    ContactComponent,
    AboutComponent,
    DarkModeToggleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
