import { BaseResourceModel } from "../../../shared/models/base-resource.model";

export class Responsavel extends BaseResourceModel{
  constructor(
    public id?: number,
    public name?: string,
    public cpf_cnpj?: string,
    public identity?: string,
    public email?: string,
    public phone?: string,
    public celphone?: string,
    public address?: string,
    public procurador?: string,
    public cpf_cnpj_procurador?: string,
    public identiy_procurador?: string,
    public address_procurador?: string,
    public phone_procurador?: string,
    public celphone_procurador?: string,
  ){
    super();
  }

  static fromJson(jsonData: any): Responsavel {
    return Object.assign(new Responsavel(), jsonData);
  }

}
