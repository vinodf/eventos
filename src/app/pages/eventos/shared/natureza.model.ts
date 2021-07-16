import { BaseResourceModel } from "../../../shared/models/base-resource.model";

export class Nature extends BaseResourceModel {
  constructor(
    public id?:number,
    public name?: string
  ){
    super();
  }


  static fromJson(jsonData: any): Nature {
    return Object.assign(new Nature(), jsonData);
  }
}
