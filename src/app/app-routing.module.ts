import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'evento', loadChildren: () => import('./pages/eventos/eventos.module').then(m => m.EventosModule) },

  { path: '', redirectTo: '/evento/new', pathMatch: 'full' },
  { path: 'evento', redirectTo: '/evento/new', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
