import React from "react";
import { data } from "./assets/datacard";
import "./cards.css";
import { ReactComponent as Like } from "./assets/likesym.svg";
import { ReactComponent as Eye } from "./assets/vieweye.svg";

const Cards = () => {
  return (
    <div className="card">
      {data.map((item, i) => (
        <div key={i} style={{
          backgroundColor: i % 3 === 0 ? '#D9E5E2' : i % 3 === 1 ? '#CCD5E4' : '#EBD0BE'}} className="card_container">
          <header className="card_header">
            <div className="icon-container">
              <Like className="icon" /><span className="count">20</span>
              </div>
              <div className="icon-container">
                <Eye className="icon"/><span className="count">3k</span>
                </div>
          </header>
            <img src={item.image} alt={item.name} />
          <div className="card_details">
            <div className="item_details">
              <div className="item_name">{item.name}</div>
              <div className="item_age">{item.age}</div>
            </div>
            <div className="item_discription">{item.discription}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
