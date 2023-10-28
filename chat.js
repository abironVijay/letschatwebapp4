const firebaseConfig = {
  apiKey: "AIzaSyCu7fXDBK5zdCxUDta5nyGrdB_DgC43ms8",
  authDomain: "lets-chat-web-app-25e48.firebaseapp.com",
  databaseURL: "https://lets-chat-web-app-25e48-default-rtdb.firebaseio.com",
  projectId: "lets-chat-web-app-25e48",
  storageBucket: "lets-chat-web-app-25e48.appspot.com",
  messagingSenderId: "530487989308",
  appId: "1:530487989308:web:3121f3bbf368da8d735f39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



  function addUser() {
    user_name=document.getElementById("user_name").value;
    localStorage.setItem("user_name",user_name);
    window.location="chat_room.html";
}



