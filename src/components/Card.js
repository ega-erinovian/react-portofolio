import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="exp-card">
        <div className="inner px-4">
          <p className="fs-6">{props.year}</p>
          <h2>{props.title}</h2>
          <h4 className="fs-6 fw-lighter">at {props.event}</h4>
          <p className="fs-6">{props.desc}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
