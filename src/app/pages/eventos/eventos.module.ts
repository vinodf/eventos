import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventosRoutingModule } from './eventos-routing.module';
import { EventoFormComponent } from './evento-form/evento-form.component';

import { Calenda }


@NgModule({
  declarations: [
    EventoFormComponent,
  ],
  imports: [
    CommonModule,
    EventosRoutingModule
  ]
})
export class EventosModule { }
