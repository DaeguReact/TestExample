import React, { useEffect, useState } from "react";
import classes from "./Card.module.css";

const Card = ({ name }) => {
  return (
    <div className={classes.border}>
      <span>{name}</span>
    </div>
  );
};
export default Card;
