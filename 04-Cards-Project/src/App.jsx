import React from "react";
import Card from "./components/Card";



const App = () => {
 
  const products = [
  {
    id: 1,
    productName: "Boat Smart Watch",
    price: 2999,
    img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRY0aq5rfNUxuCoKx6HTe9yn0qRj8BvBrC7d3liMJ1TYRIDp-0eLQQrKn621ZfHlhm1kGL0hqrFItrWbonTrGngh0s-_kLa",
  },
  {
    id: 2,
    productName: "Realme Wireless Headphones",
    price: 1999,
    img: "https://m.media-amazon.com/images/I/61MOG3nzwQL._SX569_.jpg",
  },
  {
    id: 3,
    productName: "Noise ColorFit Pro 3",
    price: 3499,
    img: "https://m.media-amazon.com/images/I/61DEUVd9PwL._SL1500_.jpg",
  },
  {
    id: 4,
    productName: "JBL Bluetooth Speaker",
    price: 2499,
    img: "https://m.media-amazon.com/images/I/71HdLDJEEUL._SL1500_.jpg",
  },
  {
    id: 5,
    productName: "Samsung Power Bank",
    price: 1599,
    img: "https://m.media-amazon.com/images/I/71PbmljkyAL._SL1500_.jpg",
  },
  {
    id: 6,
    productName: "MI Wired Earphones",
    price: 599,
    img: "https://m.media-amazon.com/images/I/61FjyEQSmhL._SL1500_.jpg",
  },
  {
    id: 7,
    productName: "Apple AirPods",
    price: 12999,
    img: "https://m.media-amazon.com/images/I/71bhWgQK-cL._SX679_.jpg",
  },
  {
    id: 8,
    productName: "HP Wireless Mouse",
    price: 899,
    img: "https://m.media-amazon.com/images/I/614DbY9tQsL._SL1500_.jpg",
  },
  {
    id: 9,
    productName: "Dell Keyboard",
    price: 1099,
    img: "https://m.media-amazon.com/images/I/714P1XbGl4S._SL1500_.jpg",
  },
  {
    id: 10,
    productName: "Sony Headphones",
    price: 4999,
    img: "https://m.media-amazon.com/images/I/51rpbVmi9XL._SL1200_.jpg",
  },
];

  return (
    <>
      <div className="parent">
        {products.map((elem,idx)=> {
          return  <div key={idx}>
              <Card products={elem.productName} price={elem.price} img={elem.img}/>
              </div>
          
           
          
        })}
      </div>
    </>
  );
};

export default App;
