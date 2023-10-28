var firebaseConfig = {
    apiKey: "AIzaSyCu7fXDBK5zdCxUDta5nyGrdB_DgC43ms8",
    authDomain: "lets-chat-web-app-25e48.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-25e48-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-25e48",
    storageBucket: "lets-chat-web-app-25e48.appspot.com",
    messagingSenderId: "530487989308",
    appId: "1:530487989308:web:3121f3bbf368da8d735f39"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");
  function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
    }
function goToRoom() {
    window.location="chat_room.html";
}  
function send() {
    var msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
    document.getElementById("msg").value="";
}  