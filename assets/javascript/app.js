$(document).ready(function () {

    //Catch containers
    var addEmployeeContainer = $("#add-employee-container");
    var seeEmployeeContainer = $("#see-employee-container");

    //Hide containers
    addEmployeeContainer.hide();
    seeEmployeeContainer.show();

    //Function to switch tabs
    $('.tabs li').on('click', function () {
        var tabClicked = $(this);

        if (tabClicked[0].id == "add-employee-list") {
            tabClicked.addClass("is-active");
            $("#see-employee-list").removeClass("is-active");
            seeEmployeeContainer.hide();
            addEmployeeContainer.show();

        } else if (tabClicked[0].id == "see-employee-list") {
            tabClicked.addClass("is-active");
            $("#add-employee-list").removeClass("is-active");
            addEmployeeContainer.hide();
            seeEmployeeContainer.show();
        }
    });

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

    var datasbase = firebase.database();

    var name = "";
    var lastName = "";
    var role = "";
    var startDate = 0;
    var montlyRate = "";

    database.ref()

    dateAdded: firebase.database.serverValue(TIMESTAMP)


    $("#addEmployee").on("click", function (event) {

        event.preventDefault();

        name = $("#")
        lastName = $("")
        startDate = $("")
        role = $("");
        montlyRate = $("")


        database.ref().push({
            name: name,
            lastName: lastName,
            email: email,
            startDate: startDate,
            montlyRate: montlyRate,
            //dateAdded: firebase.database.ServerValue.(TIMESTAMP)
        });

    })

        // .orderBychild("dateAdded").limitToLast(1).on("child_added"), function (snapshot) {

        //     var sv = snapshot.val();

        //     console.log();

        // }
})