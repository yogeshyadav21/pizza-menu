import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

const App = () => {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
};

const Pizza = (props) => {
  return (
    <li className={`pizza ${props.soldOut && "sold-out"}`}>
      <img src={props.photoName} alt={props.photoName}></img>
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        {props.soldOut?<span>SOLD OUT</span>:<span>{props.price}</span>}
      </div>
    </li>
  );
};

const Header = () => {
  return (
    <header className="header">
      <h1>Welcome to the pizza shop</h1>
    </header>
  );
};

const Menu = () => {
  return (
    <main className="menu">
      <h2>OUR MENU</h2>
      <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
      {pizzaData.map((data) => (
        <ul className="pizzas">
          <Pizza
            name={data.name}
            ingredients={data.ingredients}
            price={data.price}
            photoName={data.photoName}
            soldOut={data.soldOut}
          />
        </ul>
      ))}
    </main>
  );
};

const Footer = () => {
  const currentHour = new Date().getHours();
  const openingHour = 12;
  const closingHour = 22;
  const open = currentHour >= openingHour && currentHour <= closingHour;
  console.log(open);
  return <footer className="footer">{(open)?
    <Order openHour={openingHour} closeHour={closingHour}></Order>:<p>
    We're happy to welcome you between {openingHour}:00 and {closingHour}:00.
  </p>
  }</footer>;
};

const Order = ({ openHour, closeHour }) => {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
