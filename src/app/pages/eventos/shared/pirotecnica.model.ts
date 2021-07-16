import { BaseResourceModel } from "../../../shared/models/base-resource.model";

export class Pirotecnia extends BaseResourceModel{
  constructor(
    public id?: number,
    public name?: string,
    public company?: string,
    public cnpj?: string,
    public cpf?: string,
    public address?: string,
    public phone?: string,
  ){
    super();
  }

  static fromJson(jsonData: any): Pirotecnia {
    return Object.assign(new Pirotecnia(), jsonData);
  }

}
