import React from "react";
import classNames from "classnames";
import "./Footer.css";
import PropTypes from "prop-types";

const Footer = (props) => {
  const {
    currentState,
    counter,
    counterComp,
    onStateClick,
    onClearCompleteClick,
  } = props;

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
      <p
        className={classNames("ClearCompleteBtn", { hidden: counterComp <= 0 })}
        onClick={onClearCompleteClick}
      >
        clear complete
      </p>
    </div>
  );
};

Footer.propTypes = {
  currentState: PropTypes.string,
  counter: PropTypes.number,
  counterComp: PropTypes.number,
  onStateClick: PropTypes.func,
  onClearCompleteClick: PropTypes.func,
};

export default Footer;
