import { createSelector } from "reselect";
import { AppRootState } from "../../../lib/types/screen";
import HomePage from ".";

const selectOrdersPage = (state: AppRootState) => state.homePage;
export const retrievePausedOrders = createSelector(
  selectOrdersPage,
  (OrdersPage) => OrdersPage.pausedOrders
);

export const retrieveProcessOrders = createSelector(
  selectOrdersPage,
  (OrdersPage) => OrdersPage.processOrders
);

export const retrieveFinishedOrders = createSelector(
  selectOrdersPage,
  (OrdersPage) => OrdersPage.finishedOrders
);