import React from "react";
import classNames from "classnames";
import "./Footer.css";

const Footer = (props) => {
  const { currentState, counter, onStateClick } = props;

  return (
    <div className="Footer">
      <p>
        {counter} {counter > 1 ? "items" : "item"} left
      </p>
      <div className="FooterList">
        <div
          className={classNames("FooterItem", {
            active: currentState === "All",
          })}
          onClick={() => onStateClick("All")}
        >
          All
        </div>
        <div
          className={classNames("FooterItem", {
            active: currentState === "Active",
          })}
          onClick={() => onStateClick("Active")}
        >
          Active
        </div>
        <div
          className={classNames("FooterItem", {
            active: currentState === "Complete",
          })}
          onClick={() => onStateClick("Complete")}
        >
          Complete
        </div>
      </div>
    </div>
  );
};

export default Footer;
