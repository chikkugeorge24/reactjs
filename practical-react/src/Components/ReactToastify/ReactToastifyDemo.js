import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CustomToast = ({ closeToast }) => {
  return (
    <div>
      Something went wrong
      <button onClick={closeToast}>close</button>
    </div>
  );
};
toast.configure();
const ReactToastifyDemo = () => {
  const notify = () => {
    toast("Basic Notification!", { position: toast.POSITION.TOP_LEFT });
    toast.success("Success Notification!", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 8000,
    });
    toast.info("Info Notification!", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: false,
    });
    toast.warn(<CustomToast />, { position: toast.POSITION.BOTTOM_LEFT });
    toast.error("Error Notification!", {
      position: toast.POSITION.BOTTOM_CENTER,
    });
    toast("Basic Notification!", { position: toast.POSITION.BOTTOM_RIGHT });
  };
  return (
    <div>
      <button onClick={notify}>Notify!</button>
    </div>
  );
};

export default ReactToastifyDemo;
