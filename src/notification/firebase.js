import firebase from "firebase/app";
import "firebase/messaging";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0ILuYFcYe2dPPudvA0ITTtXD2oZDg2TM",
  authDomain: "markosis-60aac.firebaseapp.com",
  projectId: "markosis-60aac",
  storageBucket: "markosis-60aac.appspot.com",
  messagingSenderId: "261818603828",
  appId: "1:261818603828:web:ab71a88bd5a0525bd92d61",
  measurementId: "G-2YN31HN09H",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

//returns token
export const getToken = async (setTokenFound) => {
  let currentToken = "";

  try {
    currentToken = await messaging.getToken({
      vapidKey:
        "BG1U8p-Yur98k0zgyxlVM5v4RwyNLwYw4m1U_v6wN0a5Z6USnteb9eQI33Xb9xjMX2wzFXyO0ee4Hp_6cSQyHv8",
    });
    if (currentToken) {
      setTokenFound(true);
    } else {
      setTokenFound(false);
    }
  } catch (error) {
    console.log("An error occurred while retrieving token. ", error);
  }

  return currentToken;
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
  });
