

/** REACT APP STATE*/

import { Member } from "./member";
import { Order } from "./order";
import { Product } from "./product";

export interface AppRootState {
  homePage: HomePageState;// Home page screen component
  productsPage: ProductsPageState;
  ordersPage: OrdersPageState;

}


/**Homepage */
export interface HomePageState {
  finishedOrders: any;
  processOrders: any;
  pausedOrders: any;
  popularDishes:  Product [];
  newDishes:Product [];
  topUsers: Member [];
}


/***PRODUCTA PAGE */
export interface ProductsPageState {
  restaurant: Member | null;
  chosenProduct: Product | null;
  products: Product[];
}

/**ORDERS PAGE */

export interface OrdersPageState {
  pausedOrders: Order[];
  processOrders: Order[];
  finishedOrders: Order[];
}
