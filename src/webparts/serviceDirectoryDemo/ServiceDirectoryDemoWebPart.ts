import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'ServiceDirectoryDemoWebPartStrings';
import ServiceDirectoryDemo from './components/ServiceDirectoryDemo';
import { IServiceDirectoryDemoProps } from './components/IServiceDirectoryDemoProps';

export interface IServiceDirectoryDemoWebPartProps {
  ID: string;
  Title: string;
  Description: string;
  ServiceType:string;
  Phone:string;
  Status:string;
  Image:string
}

export default class ServiceDirectoryDemoWebPart extends BaseClientSideWebPart <IServiceDirectoryDemoWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IServiceDirectoryDemoProps> = React.createElement(
      ServiceDirectoryDemo,
      {
      ID: this.properties.ID,
      Title: this.properties.Title,
      Description: this.properties.Description,
      ServiceType: this.properties.ServiceType,
      Phone: this.properties.Phone,
      Status:this.properties.Status,
      Image: this.properties.Image,
      context: this.context
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
