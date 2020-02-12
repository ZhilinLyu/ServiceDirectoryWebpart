import * as React from 'react';
import {ISearchProps} from './ISearchProps';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';



export default class Search extends React.Component<ISearchProps>{

    public state = {
        searchText : ''
    };
   
    
    public handleSearch = p => {
        if(this.props.search(p)){
           return this.props.search(p)
        }else{
            return this.props.clearSearch()
        }
    }


    public render():React.ReactElement<ISearchProps>{
        return(
            <div className="">
                <div className="">
                  <SearchBox
                    placeholder="Search the title"

                    onSearch={newValue =>
                     this.props.search(newValue)

                    }
                    onClear={ev=> 
                    this.props.clearSearch()
                    }
                  />
                </div>
              </div>
        );
    }

}