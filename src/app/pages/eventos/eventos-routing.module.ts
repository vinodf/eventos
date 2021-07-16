import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EventoFormComponent } from './evento-form/evento-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/evento/new', pathMatch: 'full' },
  { path: 'new', component: EventoFormComponent },
  //{ path: ':id/edit', component: EventoFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventosRoutingModule { }
