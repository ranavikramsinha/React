import React from "react";
import ReactDOM from "react-dom/client";

//  * Header
//  * - Logo
//  * - Nav Items
//  * Body
//  * - Search
//  * - Restaurant Container
//  * - Restaurant Card
//  *   - Img
//  *   - Restaurant Name, Star Rating, cuisine, delivery time
//  * Footer
//  * - Copyright
//  * - Links
//  * - Address
//  * - Contact

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

// const RestaurantCard = () => {
//   return(
//     <div className="restaurant-card">
//       <h3>Meghana Foods</h3>
//     </div>
//   )
// }

// const styleCard = {
//   backgroundColor: "#fc6203",
// }

// const RestaurantCard = () => {
//   return(
//     <div className="restaurant-card" style={styleCard}>
//       <h3>Meghana Foods</h3>
//     </div>
//   )
// }


const RestaurantCard = () => {
  return(
    <div className="restaurant-card" style={{backgroundColor: "#fc6203"}}>
      <img className="restaurant-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/qzwwf2gzqdkqp4nsquzi" alt="Paneer Item Food Logo"/>
      <h3>Meghana Foods</h3>
      <h4>Paneer, North Indian, Asian</h4>
      <h4>4.0 Star</h4>
      <h4>25 minutes</h4>
    </div>
  )
}


const Body = () => {
  return(
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurant-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  )
}

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
