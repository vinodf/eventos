import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventosRoutingModule } from './eventos-routing.module';
import { EventoFormComponent } from './evento-form/evento-form.component';
import { EventoEditComponent } from './evento-edit/evento-edit.component';


@NgModule({
  declarations: [
    EventoFormComponent,
    EventoEditComponent
  ],
  imports: [
    CommonModule,
    EventosRoutingModule
  ]
})
export class EventosModule { }
