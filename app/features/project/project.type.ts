import { Guid } from "guid-typescript";

export interface IProject {
  id: Guid;
  name?: string;
  tenancy?: number;
  isBroadcast?: boolean;
  isLab?: boolean;
  client?: string;
  createdBy?: string;
  modifiedBy?: string;
  dateCreated: Date;
  dateModified: Date;
}
