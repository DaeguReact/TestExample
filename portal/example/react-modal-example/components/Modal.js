import React from "react";
import Portal from "./Portal";
// import st from './Modal.module.css'

const Modal = (props) => {
  return (
    <Portal>
      <div id="modal-wrap">
        <div id="modal-background" onClick={props.onClose}></div>
        <div id="modal-main">
          <header className={props.error ? "error" : "success"}>
            <h1>Title</h1>
          </header>
          <section>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              delectus deleniti ipsum saepe nulla, quae fugiat nihil expedita
              similique, sed placeat a maxime quis hic voluptates, magnam
              ducimus iusto dignissimos.
            </p>
          </section>
        </div>
      </div>
    </Portal>
  );
};
export default Modal;
