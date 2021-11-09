import React, { useState, useEffect } from "react";

//firebase
import { getToken } from "./notification/firebase";
import { onMessageListener } from "./notification/firebase";
import Notifications from "./notification/Notifications";

const App = () => {
  /*---firebase configuration for notification---*/
  //get token for displaying in console
  const [isTokenFound, setTokenFound] = useState(false);
  useEffect(() => {
    let data;
    async function tokenFunc() {
      data = await getToken(setTokenFound);
      if (data) {
        console.log("Token is", data);
      }
      return data;
    }
    tokenFunc();
  }, [setTokenFound]);
  console.log("Token found", isTokenFound);

  const [show, setShow] = useState(false);
  const [notification, setNotification] = useState({ title: "", body: "" });
  console.log(show, notification);

  onMessageListener()
    .then((payload) => {
      setShow(true);
      setNotification({
        title: payload.notification.title,
        body: payload.notification.body,
      });
      console.log(payload);
    })
    .catch((err) => console.log("failed: ", err));

  return (
    <div>
      {show ? (
        <Notifications title={notification.title} body={notification.body} />
      ) : (
        <><p>Firebase</p></>
      )}
    </div>
  );
};

export default App;
