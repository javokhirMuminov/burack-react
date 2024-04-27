

/** REACT APP STATE*/

import { Member } from "./member";
import { Product } from "./product";

export interface AppRootState {
  homePage: HomePageState;// Home page screen component
  productsPage: ProductsPageState;

}


/**Homepage */
export interface HomePageState {
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
