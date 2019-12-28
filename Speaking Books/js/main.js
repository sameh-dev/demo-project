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
   console.log("test");
  var messageref=firebase.database().ref('speaking-book');//setting the name of your database
    function submitform(e){
      console.log("test");
    e.preventDefault();
      //get values
    var visitorname=document.getElementById('name-visitor').value;
    var visitoremail=document.getElementById('email-visitor').value;
      saveMessage(visitorname,visitoremail);
    }
    //add event
    document.getElementById('visitorForm').addEventListener('submit',submitform);
    //save message to our firebase
    function  saveMessage(visitorname,visitoremail){
      var newmesgref=messageref.push();
      newmesgref.set({ID:visitorname,
        Email:visitoremail
    
    });
      }
      $(document).ready(function(){
        $("#myModal").modal('show');
      })
  
   
        