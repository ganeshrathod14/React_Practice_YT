import React from "react";

const Card = (props) => {
  console.log(props.user,props.age);

  return (
    <div className="card">
      <img src={props.img} alt="Profil Pic"/>
      <h1> {props.user}{props.age} </h1>
      <h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
        culpa?
      </h3>
      <button> View Profile </button>
    </div>
  );
};

export default Card;
