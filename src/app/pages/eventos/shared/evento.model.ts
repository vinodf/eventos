import { BaseResourceModel } from "../../../shared/models/base-resource.model";

import { Pirotecnia } from "./pirotecnica.model";
import { SegPrivada } from "./segPrivada.model";
import { Brigadista } from "./brigadista.model";
import { PreHospitalar } from "./prehospitalar.model";
import { Responsavel } from './responsavel.model';

export class Evento extends BaseResourceModel {
  constructor(
    public id?:number,
    public name?: string,
    public email?: string,
    public site?: string,
    public address?: string,
    public city?: string,
    public dateI?: string,
    public dateF?: string,
    public horaI?: string,
    public horaF?: string,
    public publicMax?: number,
    public ageMin?: number,
    public ticket?: boolean,
    public amount?: string,
    public description?: string,
    public nature?: string,
    public localInterno?: [],
    public localExterno?: [],
    public estrutura?: boolean,
    public estruturas?: [],
    public alimentacao?: boolean,
    public alimentacaoAmount?: string,
    public alimentacaoList?: [],
    public musical?: boolean,
    public musicalEstilo?: string,
    public musicalAtracao?: string,
    public musicalExecucao?: string,
    public autoridade?: boolean,
    public autoridadeType?: string,
    public autoridadeNome?: [],
    public pirotecnica?: boolean,
    public pirotecnicadados?: Pirotecnia,
    public segurancaPrivada?: boolean,
    public segurancaPrivadaDados?: SegPrivada,
    public brigadista?: boolean,
    public brigadistaDados?: Brigadista,
    public preHospitalar?: boolean,
    public preHospitalarDados?: PreHospitalar,
    public Responsavel?: Responsavel
  ){
    super();
  }


  static fromJson(jsonData: any): Evento {
    return Object.assign(new Evento(), jsonData);
  }
}
