import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Notifications = ({ title, body }) => {
  if (title || body) {
    toast.info(<Display />);
  }

  const Display = () => {
    return (
      <div>
        <h4>{title}</h4>
        <p>{body}</p>
      </div>
    );
  };

  return (
    <ToastContainer
      autoClose={3000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      draggable
      pauseOnHover={false}
    />
  );
};

export default Notifications;
