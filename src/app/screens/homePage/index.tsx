import React, { useEffect } from "react";
import ActiveUser from "./ActiveUser";
import Advertisement from "./Advertisement";
import Events from "./Events";
import FreshMenu from "./FreshMenu";
import PopularDishes from "./PopularDisshes";
import Statistics from "./Statistics";
import "../../../css/home.css";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import {createSelector} from "reselect";
import { setPopularDishes } from "./slice";
import {retrivePopularDishes } from "./selector";
import { Product } from "../../../lib/types/product";


const actionDispatch = (dispatch: Dispatch) => ({
  setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)),
});

const popularDishesRetriver = createSelector(
  retrivePopularDishes,
  (popularDishes) => ({ popularDishes})
);//Buyerda selectordan Popular dishesni qabul qilib olyapmiz

export default function HomePage() {
  //Selector: Storte => Data
  const { setPopularDishes} = actionDispatch(useDispatch());

  useEffect(() => {
    //Baxkend server data request => Data


    //slice: Data => Storega yoziladi
  }, []);


 

  return <div className="homepage">
  <Statistics />
  <PopularDishes />
  <FreshMenu />
  <Advertisement />
  <ActiveUser />
  <Events />
  </div>;
};
