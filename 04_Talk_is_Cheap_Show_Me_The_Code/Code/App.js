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

// const RestaurantCard = (props) => {
//   const{resName, cuisines, rating, deliveryTime} = props
//   return(
//     <div className="restaurant-card" style={{backgroundColor: "#fc6203"}}>
//       <img className="restaurant-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/qzwwf2gzqdkqp4nsquzi" alt="Paneer Item Food Logo"/>
//       <h3>{resName}</h3>
//       <h4>{cuisines}</h4>
//       <h4>{rating}</h4>
//       <h4>{deliveryTime}</h4>
//     </div>
//   )
// }

const restaurantObject = {
  first: {
    info: {
      id: "725082",
      name: "Pizza Hut",
      cloudinaryImageId: "490629b70f89da8a5b93fc199ece335e",
      locality: "Kankar Bagh",
      areaName: "Kankarbagh",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.1,
      parentId: "721",
      avgRatingString: "4.1",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 2.2,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-02 01:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Pizza.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Pizza.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/pizza-hut-kankar-bagh-kankarbagh-patna-725082",
      type: "WEBLINK",
    },
  },

  second: {
    info: {
      id: "253169",
      name: "Bikaner Sweets and Pastry Shop",
      cloudinaryImageId: "gd1wohldbsmjuv5mstp7",
      locality: "Ghrounda",
      areaName: "Kankarbagh",
      costForTwo: "₹449 for two",
      cuisines: ["Bakery", "Sweets"],
      avgRating: 4.5,
      veg: true,
      parentId: "45906",
      avgRatingString: "4.5",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 2.4,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-01 22:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Mithai.png",
            description: "Delivery!",
          },
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Mithai.png",
                },
              },
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/bikaner-sweets-and-pastry-shop-ghrounda-kankarbagh-patna-253169",
      type: "WEBLINK",
    },
  },
};

const RestaurantCard = (props) => {
  const { restaurantData } = props;
  return (
    <div className="restaurant-card" style={{ backgroundColor: "#fc6203" }}>
      <img
        className="restaurant-logo"
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ restaurantData.info.cloudinaryImageId}
        alt="Paneer Item Food Logo"
      />
      <h3>{restaurantData.info.name}</h3>
      <h4>{restaurantData.info.cuisines}</h4>
      <h4>{restaurantData.info.avgRating} stars</h4>
      <h4>{restaurantData.info.sla.deliveryTime} minutes</h4>
      <h4>{restaurantData.info.costForTwo} minutes</h4>
    </div>
  );
};

//? Body Component for body section: search section, restaurant cards
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurant-container">
        <RestaurantCard restaurantData={restaurantObject.first} />
        <RestaurantCard restaurantData={restaurantObject.second} />
      </div>
    </div>
  );
};

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
