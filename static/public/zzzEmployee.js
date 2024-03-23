function submitUserId() {
    var userIdInput = document.getElementById("userId").value;
    var userDetailsTableContainer = document.getElementById("userDetailsTableContainer");

    // Clear previous table
    userDetailsTableContainer.innerHTML = "";

    if (userIdInput.trim() === "") {
        alert("Please enter your User ID before submitting.");
    } else if (userIdInput === "MS7601") {
        // Assume dummy data for an existing user
        var existingUserData = {
            userId: userIdInput,
            userName: "DEV PARMAR",
            joiningDate: "01-10-2022",
            contactNo: "987-654-3210"
        };
        // Create and populate the table for existing user
        createAndPopulateTable(existingUserData);
    } else if (userIdInput === "MS7619") {
        var existingUserData = {
            userId: userIdInput,
            userName: "JAINAM PARMAR",
            joiningDate: "01-12-2022",
            contactNo: "987-654-3210"
        };
        createAndPopulateTable(existingUserData);
    } else if (userIdInput === "MS7610") {
        var existingUserData = {
            userId: userIdInput,
            userName: "HARSH GRIGLANI",
            joiningDate: "01-11-2021",
            contactNo: "987-456-3210"
        };
        createAndPopulateTable(existingUserData);
    } else if (userIdInput === "MS7605") {
        var existingUserData = {
            userId: userIdInput,
            userName: "JAYRAJ DESAI",
            joiningDate: "01-04-2022",
            contactNo: "997-456-3910"
        };
        createAndPopulateTable(existingUserData);
    } else {
        return;
    }

    function createAndPopulateTable(userData) {
        // Create and populate the table
        var table = document.createElement("table");
        var headerRow = table.insertRow(0);

        var headers = ["User ID", "User Name", "Joining Date", "Contact No"];
        for (var i = 0; i < headers.length; i++) {
            var headerCell = headerRow.insertCell(i);
            headerCell.innerHTML = "<b>" + headers[i] + "</b>";
        }

        var dataRow = table.insertRow(1);
        dataRow.insertCell(0).innerHTML = userData.userId;
        dataRow.insertCell(1).innerHTML = userData.userName;
        dataRow.insertCell(2).innerHTML = userData.joiningDate;
        dataRow.insertCell(3).innerHTML = userData.contactNo;

        userDetailsTableContainer.appendChild(table);
    }
}