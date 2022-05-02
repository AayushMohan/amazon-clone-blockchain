import React, { useState, useContext } from "react";
import { AmazonContext } from "../context/AmazonContext";
import Card from "./Card";

const Cards = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>New Release</div>
      <div className={styles.cards}>
        <Card />
      </div>
    </div>
  );
};

export default Cards;
