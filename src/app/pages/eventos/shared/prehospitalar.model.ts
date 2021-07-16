import { BaseResourceModel } from "../../../shared/models/base-resource.model";

export class PreHospitalar extends BaseResourceModel{
  constructor(
    public id?: number,
    public ambulance?: boolean,
    public ambulanceAmount?: string,
    public postomedico?: boolean,
    public postoMedicoAmount?: string,
    public company?: string,
    public cnpj?: string,
    public address?: string,
    public phone?: string,
  ){
    super();
  }

  static fromJson(jsonData: any): PreHospitalar {
    return Object.assign(new PreHospitalar(), jsonData);
  }

}
