import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ChartBestProductService } from './chartBestProduct.services';
import { ChartsAPI } from './../../../../chartsAPI.services';
@Component({
  selector: 'chartBest-Product',
  templateUrl: './chartBestProduct.html',
  styleUrls: ['./../../chartistJsCustomer.scss'],
})

export class ChartBestProduct {
  data: any;
  dbdata: any;
  datos_aux: any;
  constructor(
    private _chartBestProductService: ChartBestProductService,
    private _chartAPI: ChartsAPI) {

  }
  ngOnInit() {
    this.data = this._chartBestProductService.getAll();
  }
  getResponsive(padding, offset) {
    return this._chartBestProductService.getResponsive(padding, offset);
  }
  onSubmit(f: NgForm) {
    console.log(f.value);
    console.log(f.valid);
    this._chartBestProductService.getSeller(f.value).subscribe(
      data => {
        console.log("Aqui -> ", data);
        this.dbdata = data['data'][0].ID;
        console.log(this.dbdata);
        this.datos_aux = this._chartBestProductService.getAll();

      },
      err => {
        console.log(err)
      });
  }
}
