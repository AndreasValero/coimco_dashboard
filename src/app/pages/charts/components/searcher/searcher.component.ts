import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { ChartsAPI } from './../../chartsAPI.services';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'autocomplete-overview',
  templateUrl: 'searcher.html',
})
export class AutocompleteOverview {
  stateCtrl: FormControl;
  filteredStates: any;
  dbdata: Observable<JSON[]>;
  active: boolean;
  states = [
  ];
  states_db = [];
  constructor(private _chartAPI: ChartsAPI) {
    this.active = false;
    this._chartAPI.getProducts()
      .subscribe(
      data => {
        this.dbdata = data['data'];
        console.log(this.dbdata);
        let list: string[] = [];
        this.dbdata.forEach(variable => {
          list.push(JSON.stringify(variable));
        });
        let data_product: string[] = [];
        for (let i = 0; i < list.length; i++) {
          let data_db = JSON.parse(list[i]);
          console.log(data_db);
          let name = data_db.name;
          let id = data_db.ID;
          //states_id[name] = id;
          //console.log(states_id);
          this.states.push(name);
          this.states_db.push(data_db);

        }
        console.log(this.states_db);
        console.log(this.states);
        //LO QUE ALMACENA EL OBJETO
        for (let j = 0; j < this.states_db.length; j++) {
          console.log(this.states_db[j]);
        }
        this.active = true;
        this.stateCtrl = new FormControl();
        this.filteredStates = this.stateCtrl.valueChanges
          .startWith(null)
          .map(name => this.filterStates(name));
      });


  }

  filterStates(val: string) {
    console.log(val);
    return val ? this.states.filter(s => s.toLowerCase().indexOf(val.toLowerCase()) === 0)
      : this.states;
  }

}
