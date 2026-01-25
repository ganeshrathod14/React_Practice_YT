import React from 'react'
import {HeartPlus} from "lucide-react"
import { IndianRupee } from "lucide-react";

const Card = (props) => {

  console.log(props.products)

  return (
    
    <div className="card">
        <div className="upper">
          <div className="img-box">
            <img src={props.img} alt="Watch Img" />
           <button className="heart"> <HeartPlus /> </button>
          </div>
          <hr />
          <div className="center">
           
            <h3> {props.products}  </h3>
            <h2>Price <IndianRupee size={13} />{props.price} </h2>
            <div className="lower">
              
              <button className="btn-buy"> Buy Now </button>
              <button className="btn-add"> Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    
  )
}

export default Card