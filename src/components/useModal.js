import React, { useState } from "react";
import Modal from "react-modal";

const useModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const show = () => setIsVisible(true);
  const hide = () => setIsVisible(false);

  const RenderModal = (props) => (
    <>
      <Modal
        isOpen={isVisible}
        onHide={hide}
        onRequestClose={hide}
        className="ProjectModal"
      >
        {props.children}
      </Modal>
    </>
  );

  return {
    show,
    hide,
    RenderModal
  };
};

export default useModal;
