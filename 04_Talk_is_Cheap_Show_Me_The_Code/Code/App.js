import React from "react";
import ReactDOM from "react-dom/client";

//*  * Header
//*  * - Logo
//*  * - Nav Items
//*  * Body
//*  * - Search
//*  * - Restaurant Container
//*  * - Restaurant Card
//*  *   - Img
//*  *   - Restaurant Name, Star Rating, cuisine, delivery time
//*  * Footer
//*  * - Copyright
//*  * - Links
//*  * - Address
//*  * - Contact

//? Header component for header section: Logo, Nav Items
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=2"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

//!  Restaurant card component: image, name, cuisines, rating, deliveryTime

//? Using style in JSX
//* const RestaurantCard = () => {
//*   return(
//*     <div className="restaurant-card">
//*       <h3>Meghana Foods</h3>
//*     </div>
//*   )
//* }

//* const styleCard = {
//*   backgroundColor: "#fc6203",
//* }

//* const RestaurantCard = () => {
//*   return(
//*     <div className="restaurant-card" style={styleCard}>
//*       <h3>Meghana Foods</h3>
//*     </div>
//*   )
//* }

//? Dynamically passing data to a component (pass as props[props is an object] & also there are many ways to dynamically pass data to component)
//* const RestaurantCard = ({resName, cuisines, rating, deliveryTime}) => {
//*   return(
//*     <div className="restaurant-card" style={{backgroundColor: "#fc6203"}}>
//*       <img className="restaurant-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/qzwwf2gzqdkqp4nsquzi" alt="Paneer Item Food Logo"/>
//*       <h3>{resName}</h3>
//*       <h4>{cuisines}</h4>
//*       <h4>{rating}</h4>
//*       <h4>{deliveryTime}</h4>
//*     </div>
//*   )
//* }

//* const RestaurantCard = (props) => {
//*   return(
//*     <div className="restaurant-card" style={{backgroundColor: "#fc6203"}}>
//*       <img className="restaurant-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/qzwwf2gzqdkqp4nsquzi" alt="Paneer Item Food Logo"/>
//*       <h3>{props.resName}</h3>
//*       <h4>{props.cuisines}</h4>
//*       <h4>{props.rating}</h4>
//*       <h4>{props.deliveryTime}</h4>
//*     </div>
//*   )
//* }

const RestaurantCard = (props) => {
  const{resName, cuisines, rating, deliveryTime} = props
  return(
    <div className="restaurant-card" style={{backgroundColor: "#fc6203"}}>
      <img className="restaurant-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/qzwwf2gzqdkqp4nsquzi" alt="Paneer Item Food Logo"/>
      <h3>{resName}</h3>
      <h4>{cuisines}</h4>
      <h4>{rating}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  )
}

//? Body Component for body section: search section, restaurant cards
const Body = () => {
  return(
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurant-container">
        <RestaurantCard resName="Meghana Foods" cuisines="Panner, North Indian, Asian" rating="4.0 Star" deliveryTime="25 minutes"/>
        <RestaurantCard resName="Dev Desi Foods" cuisines="Only Veg Items, Indian" rating="4.3 Star" deliveryTime="15 minutes"/>
      </div>
    </div>
  )
}

//? AppLayout component to show: Header, Body
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
