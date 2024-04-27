import {createSelector } from "reselect";
import { AppRootState } from "../../../lib/types/screen";
import ProductPage from ".";


const selectProductsPage = (state: AppRootState) => state.productsPage;

export const retriveRestaurant = createSelector(
  selectProductsPage,
  (ProductPage) => ProductPage.restaurant
);

export const retriveChosenProduct = createSelector(
  selectProductsPage,
  (ProductPage) => ProductPage.chosenProduct
);

export const retriveProducts = createSelector(
  selectProductsPage,
  (ProductPage) => ProductPage.products
)