import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wraper">
        <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="Explore the hidden waterfall deep inside the Amazon jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Play footbal on the amazing island"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-5.jpg"
              text="Explore the hidden waterfall deep inside the Amazon jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/img-6.jpg"
              text="Travel to the ocean"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/img-7.jpg"
              text="Play footbal on the amazing island"
              label="Luxury"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
