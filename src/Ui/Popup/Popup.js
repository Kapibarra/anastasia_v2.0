import React from "react";
import Modal from "react-modal";
import classes from "./Popup.module.css";
import SimpleSlider from "../../Ui/Slider/Slider";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

function Popup() {
  var subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

//   function afterOpenModal() {
//     subtitle.style.color = "#f00";
//   }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Мои дипломы</button>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Modal"
      >
        <div className={classes.modalWrapper}>
        <h2 ref={(_subtitle) => (subtitle = _subtitle)} className={classes.modalTitle}>Мои дипломы</h2>
        <SimpleSlider />
          <svg className={classes.swipeIcon} xmlns="http://www.w3.org/2000/svg">
            <g fill="none">
              <path
                d="M17.506 12.59c-.452-2.69-2.19-3.17-3.018-3.245-.624-.816-1.514-1.262-2.54-1.262-.22 0-.443.02-.668.06-.607-.725-1.444-1.12-2.397-1.12-.72 0-1.355.225-1.793.482l-1.785-5.61C4.94.732 3.975 0 2.792 0 1.897 0 1.056.427.542 1.128c-.5.677-.625 1.525-.357 2.38l2.253 7.088c-.32.184-.604.43-.84.727-.46.58-.737 1.347-.82 2.28-.124 1.387.335 2.933 1.363 4.595.7 1.12 1.47 1.994 1.79 2.334l1.06 2.48c.26.606.85.988 1.51.988h7.05c.806 0 1.487-.563 1.62-1.354l.01-.05.297-2.468.048-.108c1.58-3.596 2.23-6.025 1.997-7.43zm-3.118 7.18c-.015.037-.026.075-.033.114l-.31 2.57c-.04.247-.255.417-.504.417H6.5c-.205 0-.39-.11-.472-.3L4.92 19.99c-.023-.057-.057-.106-.1-.15-.452-.475-3.158-3.432-2.918-6.13.143-1.597.92-2.114 1.45-2.28.268-.085.413-.373.33-.64l-2.42-7.61c-.38-1.21.584-2.026 1.53-2.026.6 0 1.195.33 1.436 1.097l2.07 6.5c.073.23.284.36.495.36.148 0 .297-.06.4-.2.085-.113.188-.222.31-.316.272-.21.8-.432 1.38-.432.594 0 1.24.237 1.707.96.1.15.264.24.437.24.048 0 .095-.007.143-.02.205-.06.478-.116.78-.116.58 0 1.268.21 1.773 1.01.095.15.258.24.434.24h.07c.607 0 1.822.266 2.166 2.316.32 1.903-1.766 6.43-2.004 6.992z"
                fill="#161616"
              />
              <path
                className={classes.SwipeArrow}
                d="M9.766 3.294h5.505l-1.21 1.213c-.22.22-.22.578 0 .8.11.11.26.164.4.164.15 0 .29-.05.4-.16l2.11-2.11c.22-.22.22-.58 0-.8L14.8.24c-.22-.22-.577-.22-.797 0-.22.22-.22.578 0 .798l1.128 1.13H9.77c-.312 0-.564.252-.564.563 0 .31.252.56.564.56z"
                fill="#161616"
              />
            </g>
          </svg>
          <button onClick={closeModal}>Закрыть</button>
        </div>


      </Modal>
    </div>
  );
}

export default Popup;
