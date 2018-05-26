$(document).ready(function () {
   
   // firebase database
    var config = {
        apiKey: "AIzaSyCWTt0IfvbOLlGSg7Kgj6IN4JfNA5Brje0",
        authDomain: "myproject-49aba.firebaseapp.com",
        databaseURL: "https://myproject-49aba.firebaseio.com",
        projectId: "myproject-49aba",
        storageBucket: "myproject-49aba.appspot.com",
        messagingSenderId: "69901023986"
    };
    firebase.initializeApp(config);

    
    
    database.ref()

    dateAdded: firebase.database.serverValue(TIMESTAMP)


    .orderBychild("dateAdded").limitToLast(1).on("child_added"),function(snapshot){

        var sv = snapshot.val();

        console.log();

    }
})