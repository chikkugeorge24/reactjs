import React, { useRef, useState } from "react";
import Modal from "react-modal";
import IdleTimer from "react-idle-timer";

Modal.setAppElement("#root");
const ReactIdleTimerDemo = () => {
  const timerRef = useRef(null);
  const sessionTimeoutRef = useRef(null);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onIdle = () => {
    setIsModalOpen(true);
    sessionTimeoutRef.current = setTimeout(logout, 5000);
  };
  const logout = () => {
    setIsLoggedIn(false);
    setIsModalOpen(false);
    clearTimeout(sessionTimeoutRef.current);
  };
  const stayActive = () => {
    setIsModalOpen(false);
    clearTimeout(sessionTimeoutRef.current);
  };
  return (
    <div>
      {isLoggedIn ? <h2>Hello Admin</h2> : <h2>Hello Guest</h2>}
      <Modal isOpen={isModalOpen}>
        <div>
          <h2>You have been Idle for a while</h2>
          <p> You will be logged out soon</p>
          <button onClick={logout}>Log me out</button>
          <button onClick={stayActive}>Keep me signed in</button>
        </div>
      </Modal>
      <IdleTimer ref={timerRef} timeout={5 * 1000} onIdle={onIdle}></IdleTimer>
    </div>
  );
};

export default ReactIdleTimerDemo;
