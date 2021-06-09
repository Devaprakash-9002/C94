
//ADD YOUR FIREBASE LINKS 
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 var firebaseConfig = {
    apiKey: "AIzaSyBnKnsWhKYGKm7Hue62qYVCTySXMdVqlXA",
    authDomain: "kwitter-33af5.firebaseapp.com",
    projectId: "kwitter-33af5",
    storageBucket: "kwitter-33af5.appspot.com",
    messagingSenderId: "29793106555",
    appId: "1:29793106555:web:985a351cb2846554cb40de",
    measurementId: "G-LJCXBNW4LM"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
  }