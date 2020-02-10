import * as React from 'react';
import { IFilterProps } from './IFilterProps';
import 'office-ui-fabric-react';
import { Dropdown, IDropdownOption } from 'office-ui-fabric-react';
import 'bootstrap/dist/css/bootstrap.css';


export let StatusFilter = '';
export let ServiceTypeFilter ='' ;
export let DescriptionFilter = '' ;
export let RegionFilter = '' ;
export var filterStack = [StatusFilter,ServiceTypeFilter,DescriptionFilter,RegionFilter];

export default class Filter extends React.Component<IFilterProps>{

        
    public state = {
        //   options : []
         filterStack: []
         
    }

    public render(): React.ReactElement<IFilterProps> {


        return (
            <Dropdown
                placeholder={this.props.filterType}
                options={
                    //    this.handleOptions(StatusOptions) 
                    this.props.filterOption
                }
                onChange={this._onChage}
                // styles={{dropdown:{width:200}}}

            />
            
        )
    }
    
    

    private _onChage = (event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void => {
        //console.log(`Selection change: ${item.text} ${item.selected ? 'selected' : 'unselected'}`);
        //console.log(item.key);
        console.log("item.key now is : " + item.key);
        //console.log("filterStack...." + this.filterChoice(item.key));
        // if(item.key){
        //     this.props.filter(item.key);
        // }else{
        //     this.props.clearFliter();
        // }
        // let StatusFilter = '';
        // let ServiceTypeFilter ='' ;
        // let DescriptionFilter = '' ;
        // let RegionFilter = '' ;
        //var filterStack = [StatusFilter,ServiceTypeFilter,DescriptionFilter,RegionFilter];
        // if(item.key === 'Published' || 'Draft'){
        //     StatusFilter = item.key;
        //     this.setState({
        //         filterStack: _filterStack
        //     });
        // }if (item.key === 'Repairs & Maintenance' || 'Rubbish Removal'){
        //     ServiceTypeFilter = item.key;
        //     this.setState({
        //         filterStack : _filterStack
        //     });
        // }
        switch (item.key){
            case 'Published': case 'Draft': 
                StatusFilter = item.key;
                filterStack[0] = StatusFilter;
                break;
            case 'Digital': case 'Electrical': case 'Manufacturer': case 'Cleaning': 
                ServiceTypeFilter = item.key;
                filterStack[1] = ServiceTypeFilter;
                break;
            case 'Repair and Maintenance':case 'Property Maintenance':case 'Testing': 
                DescriptionFilter = item.key;
                filterStack[2] = DescriptionFilter;
                break;
            case 'Central':case'Redfern':case'Kiama':
                RegionFilter = item.key;
                filterStack[3] = RegionFilter;
                break;
        }
        console.log ("this.filterStack should be " + filterStack);
        this.props.filter(filterStack);

    }

}