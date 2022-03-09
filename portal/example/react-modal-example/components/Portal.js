import ReactDOM from "react-dom";

const Portal = (props) => {
  return ReactDOM.createPortal(
    props.children,
    document.querySelector("#portal")
  );
};

export default Portal;
