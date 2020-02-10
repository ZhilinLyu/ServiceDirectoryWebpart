import * as React from 'react';
import pnp, { Items } from 'sp-pnp-js';
import { IServiceDirectoryDemoProps } from './IServiceDirectoryDemoProps';
import Service from './Service';
import Filter from './Filter';
import { filterStack } from './Filter';
import 'bulma/css/bulma.css';
import 'bootstrap/dist/css/bootstrap.css';
import Search from './Search';
import 'office-ui-fabric-react';
import './style.scss';
import { DefaultButton, PrimaryButton, Stack, IStackTokens, ThemeProvider } from 'office-ui-fabric-react';
import { sp } from "@pnp/sp/presets/all";
import { _Profiles } from '@pnp/sp/profiles/types';


const StatusOptions = [
  { key: 'Published', text: 'Published' },
  { key: 'Draft', text: 'Draft' },
 // { key: '', text: 'Status' }
]
const ServiceTypeOptions = [
  { key: 'Manufacturer', text: 'Manufacturer' },
  { key: 'Digital', text: 'Digital' },
  { key: 'Cleaning', text: 'Cleaning' },
  { key: 'Electrical', text: 'Electrical' },
 // { key: '', text: 'ServiceType' }
]

const DescriptionOptions = [
  { key: 'Repair and Maintenance', text: 'Repair and Maintenance' },
  { key: 'Property Maintenance', text: 'Property Maintenance' },
  { key: 'Testing', text: 'Testing' },
  //{ key: '', text: 'Description' }
]

const RegionOptions = [
  { key: 'Central', text: 'Central' },
  { key: 'Redfern', text: 'Redfern' },
  { key: 'Kiama', text: 'Kiama' },
 // { key: '', text: 'Region' }
]

const filterType = ['Status', 'Servicetype', 'Description', 'Region']

export interface state {
  serviceDirectory: [
    {
      ID: string,
      Title: string,
      Description: string,
      ServiceType: string,
      Phone?: string,
      Status: string,
      Region:string,
      Image: string
    }
  ];
  source: [
    {
      ID: "",
      Title: "",
      Description: "",
      ServiceType: "",
      Phone?: "",
      Region:"",
      Status: "",
      Image: ""
    }
  ];
  searchText: '';
  filterOption: [];
  setNumber: number
}

export default class ServiceDemo extends React.Component<IServiceDirectoryDemoProps, state> {

  constructor(props: IServiceDirectoryDemoProps) {

    super(props);
    sp.setup({
      spfxContext: this.props.context
    });

    this.state = {

      serviceDirectory: [
        {
          ID: "",
          Title: "",
          Description: "",
          ServiceType: "",
          Phone: "",
          Region:"",
          Status: "",
          Image: ""
        }
      ],
      source: [
        {
          ID: "",
          Title: "",
          Description: "",
          ServiceType: "",
          Phone: "",
          Region:"",
          Status: "",
          Image: ""
        }
      ],
      searchText: '',
      filterOption: [],
      setNumber: 0

    };
  }

  public componentDidMount() {

    pnp.sp.web.lists.getByTitle("ServiceDirectoryDemo").items.get().then(data => {
      this.setState({
        serviceDirectory: data,
        source: data
      });
    });
  }

  public setDirectory = p => {
    let _setDirectory = [];
    const _partDirectory = this.state.serviceDirectory;
    if (_partDirectory) {
      for (var i = 0; i < _partDirectory.length; i += 9) {
        _setDirectory.push(_partDirectory.slice(i, i + 9))
      }
      return _setDirectory[p];
    }else{
     
    }
  }

  public handleSet = p => {
    if (this.setDirectory(p)) {
      this.setState({
        setNumber: p
      });
      return this.state.setNumber
    }
    // this.setState({
    //   setNumber : p 
    // })
    // return this.state.setNumber;
  }

  public componentDidUpdate() {
    //console.log(this.setDirectory(1));
    //console.log(this.state.serviceDirectory);

    //console.log(this.state.searchText);
  }

  public search = text => {
    let _services: any = [...this.state.source];
    _services = _services.filter(p => {
      const matchArr = p.Title.match(new RegExp(text, 'gi'));
      return !!matchArr;
    });
    this.setState({
      serviceDirectory: _services
    });
  }

  public clearSearch = p => {
    let _clearSearch: any = [...this.state.source];

    this.setState({
      serviceDirectory: _clearSearch
    });
  }


  // public filter = clickValue => {
  //   let _filter: any = [...this.state.source];
  //   _filter = _filter.filter(p => {
  //     if (p.Status) {
  //       const matchStatus = p.Status.match(clickValue) || p.ServiceType.match(clickValue);
  //       return !!matchStatus;
  //     }
  //   });
  //   this.setState({
  //     serviceDirectory: _filter
  //   });
  // }

  public filter = filterValue => {
    let _filter: any = [...this.state.source];
    _filter = _filter.filter(p => {
        const matchValue = p.Status.match(filterValue[0]) && p.ServiceType.match(filterValue[1]) && p.Description.match(filterValue[2]) && p.Region.match(filterValue[3]);
        
        return !!matchValue;
    });
    this.setState({
      serviceDirectory: _filter
    });
    console.log("filter function value:" + filterValue);
  }

  public filterLetter = clickLetter => {
    let _filterLetter: any = [...this.state.source];
    _filterLetter = _filterLetter.filter(p => {
      if (p.Title) {
        const matchLetter = p.Title.match(new RegExp(clickLetter, 'gi'))
        return !!matchLetter;
      }
    });
    this.setState({
      serviceDirectory: _filterLetter
    });
  }

  public clearFilter () {
    let _clearFilter: any = [...this.state.source];

    this.setState({
      serviceDirectory: _clearFilter
    });

  }

  public render(): React.ReactElement<IServiceDirectoryDemoProps> {

    return (

      <div className="services">

        <div className="tollBar">

          <div className="columns is-multiline is-mobile">
            <div className="column is-one-quarter">
              <Filter filter={this.filter} clearFliter={this.clearFilter} filterOption={StatusOptions} filterType={filterType[0]} />
            </div>
            <div className="column is-one-quarter">
              <Filter filter={this.filter} clearFliter={this.clearFilter} filterOption={ServiceTypeOptions} filterType={filterType[1]} />
            </div>
            <div className="column is-one-quarter">
              <Filter filter={this.filter} clearFliter={this.clearFilter} filterOption={DescriptionOptions} filterType={filterType[2]} />
            </div>
            <div className="column is-one-quarter">
              <Filter filter={this.filter} clearFliter={this.clearFilter} filterOption={RegionOptions} filterType={filterType[3]} />
            </div>
            {/* <div className="column is-one-quarter">
              <button onClick={this.clearSearch}></button>
            </div> */}
          </div>
          <div className="columns is-miltiline is-mobile">
            <div className="column is-three-quarters">
              <Search search={this.search} clearSearch={this.clearSearch} />
            </div>
            <div className="column is-one-quarter">
              <PrimaryButton className="clearButton" onClick={()=>this.clearFilter()} text="clear filter" />
            </div>
          </div>

          {/* <div className="columns is-miltiline is-mobile">
            <div className="column">
              <Navbar filterLetter={this.filterLetter}/>
            </div>
          </div> */}

          <div className="ServiceView">
            <div className="columns is-multiline is-mobile" >
              {this.setDirectory(this.state.setNumber).map(p => {
                return <div className="column is-one-third" key={p.ID}>
                  <Service ID={p.ID} Title={p.Title} Description={p.Description}
                    Status={p.Status} ServiceType={p.ServiceType} Phone={p.Phone} Region={p.Region} Image={p.Image}
                  />
                </div>
              })}
            </div>
          </div>

          <div className="Pagination">

            <div className="column">


              <DefaultButton onClick={() => this.handleSet(0)} text="1" />
              <DefaultButton onClick={() => this.handleSet(1)} text="2" />
              <DefaultButton onClick={()=> this.handleSet(2)} text="3" />


              {/* <button onClick={()=>this.handleSet(1)}>2</button>
              <button onClick={()=>this.handleSet(2)}>3</button> */}

            </div>
          </div>


        </div>
      </div>
    );
  }
}