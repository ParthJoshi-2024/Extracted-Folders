
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDIURiv8GDTS1ZucnsY32GlChQWNQoEA1M",
    authDomain: "tictactoe-3c015.firebaseapp.com",
    projectId: "tictactoe-3c015",
    storageBucket: "tictactoe-3c015.appspot.com",
    messagingSenderId: "926011424426",
    appId: "1:926011424426:web:b90575b57eac462d131ad3",
    measurementId: "G-6VDQWSXPFG"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
