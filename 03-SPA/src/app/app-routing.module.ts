import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GatosComponent } from './components/gatos/gatos.component';
import { PecesComponent } from './components/peces/peces.component';
import { PerrosComponent } from './components/perros/perros.component';
import { RoedoresComponent } from './components/roedores/roedores.component';

const routes: Routes = [
  {path: "", redirectTo:'/perros', pathMatch:'full'},
  {path:'perros', component:PerrosComponent},
  {path:'gatos', component:GatosComponent},
  {path:'peces', component:PecesComponent},
  {path:'roedores', component:RoedoresComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
