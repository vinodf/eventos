import { BaseResourceModel } from "../../../shared/models/base-resource.model";

export class Estrutura extends BaseResourceModel{
  constructor(
    public id?: number,
    public type?: string,
    public name?: string
  ){
    super();
  }

  static fromJson(jsonData: any): Estrutura {
    return Object.assign(new Estrutura(), jsonData);
  }

}
