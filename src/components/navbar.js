import React from "react";
import "./navbar.css";

// import { ReactComponent as Brandlogo1 } from "../components/assets/brandlogo1.svg";
// import { ReactComponent as Brandlogo2 } from "../components/assets/brandlogo2.svg";
import { ReactComponent as Homelogo1 } from "../components/assets/homelogo1.svg";
import { ReactComponent as Homelogo2 } from "../components/assets/homelogo2.svg";
import { ReactComponent as Homelogo3 } from "../components/assets/homelogo3.svg";

const navarr = ["HOME", "ARTIFACTS", "ABOUT"];

const navbar = () => {
  return (
    <div className="nav_conatiner">
      <header className="nav-header">
        <div className="navBrand">
        </div>
        <div className="navMenu">
          {navarr.map((nav, index) => {
            return (
              <li key={index} className="navItems">
                <div className="listItems">
                  <div >
                    {index === 0 && <Homelogo1 style={{width: "20px"}}/>}
                    {index === 1 && <Homelogo2 style={{width: "20px"}}/>}
                    {index === 2 && <Homelogo3 style={{width: "20px"}}/>}
                  </div>
                  <div className="listMenu" style={{ color: index === 1 ? "#B57A50" : "black" }}>{nav}</div>
                </div>
              </li>
            );
          })}
        </div>
      </header>
    </div>
  );
};

export default navbar;
