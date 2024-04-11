import React from "react";
import ActiveUser from "./ActiveUser";
import Advertisement from "./Advertisement";
import Events from "./Events";
import FreshMenu from "./FreshMenu";
import PopularDishes from "./PopularDisshes";
import Statistics from "./Statistics";
import "../../../css/home.css";

export default function HomePage() {
    return <div className="homepage">
      <Statistics />
      <PopularDishes />
      <FreshMenu />
      <Advertisement />
      <ActiveUser />
      <Events />
    </div>;
  };
