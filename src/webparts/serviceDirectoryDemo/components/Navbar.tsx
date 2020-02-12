import * as React from 'react';
import { Label } from 'office-ui-fabric-react/lib/Label';
import './style.scss';
import 'bulma/css/bulma.css';
import {INavbarProps} from './INavbarProps';


export default class Navbar extends React.Component <INavbarProps>{

    public handleFilterLetter = e =>{
        
    }

    public render() {

        return (
            <div className="columns is-multiline is-mobile">
               

                <div className="column is-2" >
                    <div className="filterLabel" >
                        A
                   </div>
                </div>
                <div className="column is-2">
                    <div className="filterLabel">
                        A-B
                   </div>
                </div>
                <div className="column is-2">
                    <div className="filterLabel">
                        A-B
                   </div>
                </div>
                <div className="column is-2">
                    <div className="filterLabel">
                        A-B
                   </div>
                </div>
                <div className="column is-2">
                    <div className="filterLabel">
                        A-B
                   </div>
                </div>
                <div className="column is-2">
                    <div className="filterLabel">
                        A-B
                   </div>
                </div>
            </div>
        )
    }


}