

/** REACT APP STATE*/

import { Member } from "./member";
import { Product } from "./product";

export interface AppRootState {
  homePage: HomePageState;// Home page screen component

}


/**Homepage */
export interface HomePageState {
  popularDishes:  Product [];
  newDished:Product [];
  topUsers: Member [];
}


/***PRODUCTA PAGE */

/**ORDERS PAGE */
