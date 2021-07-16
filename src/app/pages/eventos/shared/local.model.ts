import { BaseResourceModel } from "../../../shared/models/base-resource.model";

export class Local extends BaseResourceModel{
  constructor(
    public id?: number,
    public type?: string,
    public names?: []
  ){
    super();
  }

  static fromJson(jsonData: any): Local {
    return Object.assign(new Local(), jsonData);
  }

}
