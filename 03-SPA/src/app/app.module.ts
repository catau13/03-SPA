import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerrosComponent } from './components/perros/perros.component';
import { GatosComponent } from './components/gatos/gatos.component';
import { RoedoresComponent } from './components/roedores/roedores.component';
import { PecesComponent } from './components/peces/peces.component';
import { NavbarComponent } from './components/compartidos/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    PerrosComponent,
    GatosComponent,
    RoedoresComponent,
    PecesComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
