import React from "react";
import CSSTransition from "react-transition-group/CSSTransition";

import "./Modal.css";

const modal = (props) => (
  <CSSTransition
    in={props.isShowing}
    mountOnEnter
    unmountOnExit
    timeout={500}
    classNames={{
      enter: "",
      enterActive: "ModalOpen",
      exit: "",
      exitActive: "ModalClose"
    }}
  >
    <div className="Modal">
      <h1>A Modal</h1>
      <button className="Button" onClick={props.closed}>
        Dismiss
      </button>
    </div>
  </CSSTransition>
);

export default modal;
