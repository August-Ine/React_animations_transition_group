import React from "react";
import CSSTransition from "react-transition-group/CSSTransition";

import "./Backdrop.css";

const backdrop = (props) => (
  <CSSTransition
    in={props.isShowing}
    mountOnEnter
    unmountOnExit
    timeout={500}
    classNames="fade"
  >
    <div className="Backdrop"></div>
  </CSSTransition>
);

export default backdrop;
