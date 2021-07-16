import { BaseResourceModel } from "../../../shared/models/base-resource.model";

export class ProgMusical extends BaseResourceModel{
  constructor(
    public id?: number,
    public name?: string
  ){
    super();
  }

  static fromJson(jsonData: any): ProgMusical {
    return Object.assign(new ProgMusical(), jsonData);
  }

}
