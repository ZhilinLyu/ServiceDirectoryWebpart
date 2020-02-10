import * as React from 'react';
import { IServiceProps } from './IServiceProps';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';






export default class Service extends React.Component<IServiceProps>{
    constructor(props: IServiceProps) {
        super(props);
    }

    public render(): React.ReactElement<IServiceProps> {
        return (

            <div className="card">
                <div className="card-body" >
                    <div className="p-content">
                        <div>
                            <figure >
                                <img src={this.props.Image} />
                            </figure>
                        </div>
                        <p className="p-tags">{this.props.Status}</p>
                        <p className="p-name">{this.props.Title}</p>
                        <p >{this.props.ServiceType}</p>
                        <p >{this.props.Description}</p>
                        <p>{this.props.Region}</p>
                    </div>
                </div>
            </div>
        );
    }
}

