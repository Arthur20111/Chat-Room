const firebaseConfig = {
  apiKey: "AIzaSyDhvLwyQy2P_zIiHTZMbZmftcHAG1Me_ak",
  authDomain: "chatroom-cc854.firebaseapp.com",
  databaseURL: "https://chatroom-cc854-default-rtdb.firebaseio.com/",
  projectId: "chatroom-cc854",
  storageBucket: "chatroom-cc854.appspot.com",
  messagingSenderId: "1078255538929",
  appId: "1:1078255538929:web:7231ca12403b43fbe3cf50"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
  user_name = localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML =  "Bem-vindo(a), " + user_name + "!";
  
  function addRoom() {
  
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose: "adicionar sala"
    });
  
    localStorage.setItem("room_name", room_name);
  
    window.location = "chatroom_page.html";
  }
  
  function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
      document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        Room_names = childKey;
        console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  // Para obter os dados do banco de dados e exibi-los na página de salas do ChatRoom
  getData();
  
  function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "chatroom_page.html";
  }
  
  function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
  }
  