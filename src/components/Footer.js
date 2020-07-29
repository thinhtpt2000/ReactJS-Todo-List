import React from "react";
import classNames from "classnames";
import "./Footer.css";

const Footer = (props) => {
  const { currentState, onStateClick } = props;

  return (
    <div className="Footer">
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
  );
};

export default Footer;
