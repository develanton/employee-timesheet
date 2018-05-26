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

    var database = firebase.database();

    var name = "";
    var lastName = "";
    var role = "";
    var startDate = 0;
    var montlyRate = "";
     // dateAdded: firebase.database.serverValue(TIMESTAMP)


    $("#add-employee").on("click", function (event) {

        event.preventDefault();

        name = $("#name").val().trim();
        lastName = $("#lastnames").val().trim();
        startDate = $("#date").val().trim();
        role = $("#role").val().trim();
        monthlyRate = $("#monthly-rate").val().trim();


        database.ref().push({
            name: name,
            lastName: lastName,
            role: role,
            startDate: startDate,
            monthlyRate: monthlyRate,
            dateAdded: firebase.database.ServerValue.TIMESTAMP
        });

        name = $("#name").val("");
        lastName = $("#lastnames").val("");
        startDate = $("#date").val("");
        role = $("#role").val("");
        monthlyRate = $("#monthly-rate").val("");

        addEmployeeContainer.hide();
        seeEmployeeContainer.show();

        $("#see-employee-list").addClass("is-active");
        $("#add-employee-list").removeClass("is-active");
    })

    // .orderBychild("dateAdded").limitToLast(1).on("child_added"), function (snapshot) {

    //     var sv = snapshot.val();

    //     console.log();

    // }

    // Firebase watcher
    database.ref().on("child_added", function(snapshot) {
        // Log everything that's coming out of snapshot
        console.log(snapshot.val());

        var currentDatabase = snapshot.val();

        var tableBody = $("#table-body");
        var newRow = $("<tr>");
        tableBody.append(newRow);

        var tdName = $("<td>");
        tdName.text(currentDatabase.name);
        newRow.append(tdName);

        var tdLastName = $("<td>");
        tdLastName.text(currentDatabase.lastName);
        newRow.append(tdLastName);

        var tdRole = $("<td>");
        tdRole.text(currentDatabase.role);
        newRow.append(tdRole);

        var tdStartDate = $("<td>");
        tdStartDate.text(currentDatabase.startDate);
        newRow.append(tdStartDate);



        // Handle the errors
        }, function(errorObject) {
        console.log("Errors handled: " + errorObject.code);
    });
})