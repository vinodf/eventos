import { Injectable, Injector } from '@angular/core';
import { Evento } from './evento.model';

import { BaseResourceService } from "../../../shared/services/base-resource.service";

@Injectable({
  providedIn: 'root'
})
export class EventoService extends BaseResourceService<Evento> {

  constructor(protected injector: Injector) {
    super("api/evento", injector, Evento.fromJson);
  }

}
