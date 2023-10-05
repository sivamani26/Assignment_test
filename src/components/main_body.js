import React from "react";
import "./main_body.css";
import Cards from "./cards";
import { ReactComponent as FilterLogo } from "./assets/filterLogo.svg";
import { ReactComponent as SurpriseLogo } from "./assets/supriseLogo.svg";

import { ReactComponent as View1 } from "./assets/view1.svg";
import { ReactComponent as View2 } from "./assets/view2.svg";

const Main_body = () => {
  return (
    <div className="body_container">
      <div className="body_content">
        <div className="indiv_container">
          <div className="input_container">
            <input
              type="text"
              placeholder="Search from the world's antique collection"
              className="search_input"
            />
          </div>
          <div className="filter_container">
            <button className="filter_btn">
              <div className="filter_logo_container">
                <FilterLogo className="filter_logo" />
              </div>
              <div className="filter_name">FILTERS</div>
            </button>
          </div>
        <div>
          <button className="surprise_btn">
            <div className="surprise_logo">
              <SurpriseLogo />
            </div>
            <div className="surprise_name">SURPRISE ME</div>
          </button>
        </div>
        </div>
      </div>
      <div className="svg_container">
        <View1 />
        <View2 className="view2" />
      </div>
      <div className="cards_body">
        <Cards />
      </div>
    </div>
  );
};

export default Main_body;
