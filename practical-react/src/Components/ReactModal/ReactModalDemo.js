import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");
const ReactModalDemo = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setModalIsOpen(true)}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        shouldCloseOnOverlayClick={false}
        style={{
          overlay: {
            backgroundColor: "green",
          },
          content: {
            color: "blue",
          },
        }}
      >
        <h2>Modal Header</h2>
        <p>Modal Body</p>
        <button onClick={() => setModalIsOpen(false)}>Close Modal</button>
      </Modal>
    </>
  );
};

export default ReactModalDemo;
