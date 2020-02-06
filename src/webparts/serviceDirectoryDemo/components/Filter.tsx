import * as React from 'react';
import { IFilterProps } from './IFilterProps';
import 'office-ui-fabric-react';
import { Dropdown, IDropdownOption } from 'office-ui-fabric-react';

export default class Filter extends React.Component<IFilterProps>{
    public state = {
        //   options : []
        
    }

    public decideFilter(){

    }

    public render(): React.ReactElement<IFilterProps> {


        return (
            <Dropdown
                placeholder={this.props.filterType}
                options={
                //    this.handleOptions(StatusOptions) 
                this.props.filterOption
                }
                onChange={this._onChange}
                // styles={{dropdown:{width:200}}}
                
            />
        )
    }

    private _onChange = (event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void => {
        //console.log(`Selection change: ${item.text} ${item.selected ? 'selected' : 'unselected'}`);
        //console.log(item.key);
        console.log(this.props.filterOption)
        if(item.key){
            this.props.filter(item.key);
        }else{
            this.props.clearFliter();
        }
    }

}