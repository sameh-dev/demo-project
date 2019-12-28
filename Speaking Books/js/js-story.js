// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDA5C-vvLfQr5sOg-ICtKb95MKBtCtDJ4Y",
    authDomain: "speaking-book.firebaseapp.com",
    databaseURL: "https://speaking-book.firebaseio.com",
    projectId: "speaking-book",
    storageBucket: "speaking-book.appspot.com",
    messagingSenderId: "552220757328",
    appId: "1:552220757328:web:8083dea4c474d0ba77f055",
    measurementId: "G-JELLX2CDJR"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
    // Get a reference to the database service
   var messageref=firebase.database().ref('speaking-book');//setting the name of your database
   console.log("test2");
       //Contact us
     function sendmessage(e){
       console.log("aaaa");
       e.preventDefault();
         //get values
       var fullname=document.getElementById('name').value;
       var yourphone=document.getElementById('phone').value;
       var youremail=document.getElementById('email').value;
       var yourmessage=document.getElementById('message').value;
         saveMess(fullname,yourphone,youremail,yourmessage);
       }
       //add event
       document.getElementById('contactForm').addEventListener('submit',sendmessage);
       //save message to our firebase
       function  saveMess(fullname,yourphone,youremail,yourmessage){
         var newmesgref=messageref.push();
         newmesgref.set({Name:fullname,
           Phone:yourphone,
           Email:youremail,
           Message:yourmessage
       
       });
         }