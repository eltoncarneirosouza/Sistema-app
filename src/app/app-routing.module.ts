import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RefeicaoComponent } from './views/refeicao/refeicao.component';

const routes: Routes = [
  {path:'',component:RefeicaoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
