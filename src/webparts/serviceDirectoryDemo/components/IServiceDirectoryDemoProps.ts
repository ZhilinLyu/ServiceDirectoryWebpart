import { Context } from "react";
import { WebPartContext } from "@microsoft/sp-webpart-base";

export interface IServiceDirectoryDemoProps {
  ID: string;
  Title: string;
  Description: string;
  ServiceType:string;
  Phone:string;
  Status:string;
  Image:string;
  context: WebPartContext

}
