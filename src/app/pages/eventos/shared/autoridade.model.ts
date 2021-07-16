import { BaseResourceModel } from "../../../shared/models/base-resource.model";

export class Autoridade extends BaseResourceModel{
  constructor(
    public id?: number,
    public name?: string,
    public type?: string
  ){
    super();
  }

  static fromJson(jsonData: any): Autoridade {
    return Object.assign(new Autoridade(), jsonData);
  }

}
