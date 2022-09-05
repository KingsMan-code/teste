import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PrimeiroComponentComponent } from './components/primeiro-component/primeiro-component.component';
import { QuartoComponentComponent } from './components/quarto-component/quarto-component.component';
import { QuintoComponentComponent } from './components/quinto-component/quinto-component.component';
import { SegundoComponentComponent } from './components/segundo-component/segundo-component.component';
import { TerceiroComponentComponent } from './components/terceiro-component/terceiro-component.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'primeirocomponent', component: PrimeiroComponentComponent},
  {path: 'segundocomponent', component: SegundoComponentComponent},
  {path: 'terceirocomponent', component: TerceiroComponentComponent},
  {path: 'quartocomponent', component: QuartoComponentComponent},
  {path: 'quintocomponent', component: QuintoComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
