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
import { setNewDishes, setPopularDishes, setTopUsers } from "./slice";
import { Product } from "../../../lib/types/product";
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../../lib/enums/product.enum";
import MemberService from "../../services/MemberService";
import { Member } from "../../../lib/types/member";


const actionDispatch = (dispatch: Dispatch) => ({
  setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)),
  setNewDishes: ( data: Product []) => dispatch(setNewDishes(data)),
  setTopUsers: (data: Member[]) => dispatch(setTopUsers(data)),
});



export default function HomePage() {
  //Selector: Storte => Data
  const { setPopularDishes, setNewDishes, setTopUsers} = actionDispatch(useDispatch());

  useEffect(() => {
    //Backend server data request => Data
    const product = new ProductService();
    product.getProducts({
      page:1,
      limit: 4,
      order: "productViews",
      productCollection: ProductCollection.DISH,
    })
    .then(data => {
      console.log("dtataPassetHere",data);
      setPopularDishes(data)
    })
    .catch((err) => console.log(err));



    //Fresh Menu
    product.getProducts({
      page:1,
      limit: 4,
      order: "createsAt",
      //productCollection: ProductCollection.DISH,
    })
    .then(data => {
     setNewDishes(data);
    })
    .catch((err) => console.log(err));


    //slice: Data => Storega yoziladi


    const member = new MemberService();
    member
    .getTopUsers()
    .then(data => {
      setTopUsers(data);
    })
    .catch((err) => console.log(err));
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
