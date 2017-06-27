import { Routes, RouterModule } from '@angular/router';

import { Charts } from './charts.component';
import { chartistJsProduct } from './components/chartistJsProduct/chartistJsProduct.component';
import { ChartDashboardProduct } from './components/chartistJsProduct/chartDashboard.component';
import { ChartDashboardProvider } from './components/chartistJsProvider/chartDashboard.component';
import { ChartDashboardCustomer } from './components/chartistJsCustomer/chartDashboard.component';
import { ChartDashboardSale } from './components/chartistJsSale/chartDashboard.component';
import { ChartBestSeller } from './components/chartistJsProduct/product/bestseller/chartBestSeller.component';
import { ChartProductSales } from './components/chartistJsProduct/product/productsales/chartProductSales.component';
import { ChartRankCategory } from './components/chartistJsProduct/product/rankcategory/chartRankCategory.component';
import { ChartRankBrand } from './components/chartistJsProduct/product/rankbrand/chartRankBrand.component';
import { ChartProductPrice } from './components/chartistJsProduct/product/productprice/chartProductPrice.component';
// noinspection TypeScriptValidateTypes

//customer
import { ChartProductBuy } from './components/chartistJsCustomer/Customer/ProductBuy/chartProductBuy.component';
import { ChartFrequency } from './components/chartistJsCustomer/Customer/Frequency/chartFrequency.component';
import { ChartCollected } from './components/chartistJsCustomer/Customer/Collected/chartCollected.component';
import { ChartBestProduct } from './components/chartistJsCustomer/Customer/BestProduct/chartBestProduct.component';
import { ChartRankingCustomer } from './components/chartistJsCustomer/Customer/RankingCustomer/chartRankingCustomer.component';

//provider-purchase
import { ChartRankingPurchase } from './components/chartistJsProvider/Provider/RankingPurchase/chartRankingPurchase.component';
import { ChartRankingProvider } from './components/chartistJsProvider/Provider/RankingProvider/chartRankingProvider.component';
import { ChartRankingProviderInTime } from './components/chartistJsProvider/Provider/RankingProviderInTime/chartRankingProviderInTime.component';
import { ChartRankingProviderCategory } from './components/chartistJsProvider/Provider/RankingProviderCategory/chartRankingProviderCategory.component';
import { ChartRankingPurchaseCategory } from './components/chartistJsProvider/Provider/RankingPurchaseCategory/chartRankingPurchaseCategory.component';

//sales
import { ChartProductByCategory } from './components/chartistJsSale/Sale/ProductByCategory/chartProductByCategory.component';
import { ChartRankingProductBrand} from './components/chartistJsSale/Sale/RankingProductBrand/chartRankingProductBrand.component';
import { ChartBest_Seller } from './components/chartistJsSale/Sale/Best_Seller/chartBest_Seller.component';
import { ChartRankingCollected } from './components/chartistJsSale/Sale/RankingCollected/chartRankingCollected.component';
import { ChartRankingTotalSale } from './components/chartistJsSale/Sale/RankingTotalSale/chartRankingTotalSale.component';
import { ChartRankingSale } from './components/chartistJsSale/Sale/RankingSale/chartRankingSale.component';
import { ChartRankingSaleCategory } from './components/chartistJsSale/Sale/RankingSaleCategory/chartRankingSaleCategory.component';
import { ChartCustomerByBest } from './components/chartistJsSale/Sale/CustomerByBest/chartCustomerByBest.component';
import { ChartCustomerByProduct } from './components/chartistJsSale/Sale/CustomerByProduct/chartCustomerByProduct.component';
import { ChartRankingSaleProduct } from './components/chartistJsSale/Sale/RankingSaleProduct/chartRankingSaleProduct.component';
import { ChartRankingSaleBrand } from './components/chartistJsSale/Sale/RankingSaleBrand/chartRankingSaleBrand.component';
import { ChartSaleRecord } from './components/chartistJsSale/Sale/SaleRecord/chartSaleRecord.component';

const routes: Routes = [
  {
    path: '',
    component: Charts,
    children: [
      
      { path: 'product', component: ChartDashboardProduct },      //Products
      { path: 'provider', component: ChartDashboardProvider },    //Providers
      { path: 'customer', component: ChartDashboardCustomer },    //Customers
      { path: 'sale', component: ChartDashboardSale },            //Sale
      //product
      { path: 'bestseller', component: ChartBestSeller },
      { path: 'productsales', component: ChartProductSales },
      { path: 'rankcategory', component: ChartRankCategory },
      { path: 'rankbrand', component: ChartRankBrand },
      { path: 'productprice', component: ChartProductPrice },
      //customer
      { path: 'productbuy', component: ChartProductBuy },
      { path: 'frequency', component: ChartFrequency },
      { path: 'collected', component: ChartCollected },
      { path: 'bestproduct', component: ChartBestProduct },
      { path: 'rankingcustomer', component: ChartRankingCustomer },
      //provider-purchase
      { path: 'rankingpurchase', component: ChartRankingPurchase },
      { path: 'RankingProvider', component: ChartRankingProvider },
      { path: 'RankingProviderInTime', component: ChartRankingProviderInTime },
      { path: 'RankingProviderCategory', component: ChartRankingProviderCategory },
      { path: 'RankingPurchaseCategory', component: ChartRankingPurchaseCategory },
      //sale
      { path: 'ProductByCategory', component: ChartProductByCategory },
      { path: 'Best_Seller', component: ChartBest_Seller },
      { path: 'RankingCollected', component: ChartRankingCollected },
      { path: 'RankingTotalSale', component: ChartRankingTotalSale },
      { path: 'RankingProductBrand', component: ChartRankingProductBrand },
      { path: 'RankingSale', component: ChartRankingSale },
      { path: 'RankingSaleCategory', component: ChartRankingSaleCategory },
      { path: 'CustomerByBest', component: ChartCustomerByBest },
      { path: 'CustomerByProduct', component: ChartCustomerByProduct },
      { path: 'RankingSaleProduct', component: ChartRankingSaleProduct },
      { path: 'RankingSaleBrand', component: ChartRankingSaleBrand },
      { path: 'SaleRecord', component: ChartSaleRecord },
      //Q.E.P.D
    ],
  },
];

export const routing = RouterModule.forChild(routes);
