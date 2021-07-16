import { BaseResourceModel } from "../../../shared/models/base-resource.model";

export class Brigadista extends BaseResourceModel{
  constructor(
    public id?: number,
    public amount?: string,
    public company?: string,
    public cnpj?: string,
    public address?: string,
    public phone?: string,
  ){
    super();
  }

  static fromJson(jsonData: any): Brigadista {
    return Object.assign(new Brigadista(), jsonData);
  }

}
