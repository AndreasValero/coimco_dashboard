import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ChartProductByCategoryService } from './chartProductByCategory.services';
import { ChartsAPI } from './../../../../chartsAPI.services';
@Component({
  selector: 'chartProductByCategory',
  templateUrl: './chartProductByCategory.html',
  styleUrls: ['./../../chartistJsSale.scss'],
})

export class ChartProductByCategory {
  data: any;
  dbdata: any;
  datos_aux: any;
  constructor(
    private _chartProductByCategoryService: ChartProductByCategoryService,
    private _chartAPI: ChartsAPI) {

  }
  ngOnInit() {
    this.data = this._chartProductByCategoryService.getAll();
  }
  getResponsive(padding, offset) {
    return this._chartProductByCategoryService.getResponsive(padding, offset);
  }
  onSubmit(f: NgForm) {
    console.log(f.value);
    console.log(f.valid);
    this._chartProductByCategoryService.getSeller(f.value).subscribe(
      data => {
        console.log("Aqui -> ", data);
        this.dbdata = data['data'][0].ID;
        console.log(this.dbdata);
        this.datos_aux = this._chartProductByCategoryService.getAll();

      },
      err => {
        console.log(err)
      });
  }
}
