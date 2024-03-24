function submitUserId() {
    var userIdInput = document.getElementById("userId").value;
    var userDetailsTableContainer = document.getElementById("userDetailsTableContainer");

    // Clear previous table
    userDetailsTableContainer.innerHTML = "";

    if (userIdInput.trim() === "") {
        alert("Please Enter Medicine Name before Proceed!!");
    } else if (userIdInput === "O2") {
        var existingUserData = {
            medicineName: userIdInput,
            medicineId: "MI4010",
            medicinetype: "Generic",
            stockQty: "500",
            action: "View Full Detail >>"
        };
        createAndPopulateTable(existingUserData);
    } else if (userIdInput === "Azithral 500") {
        var existingUserData = {
            medicineName: userIdInput,
            medicineId: "MI4001",
            medicinetype: "Generic",
            stockQty: "1000",
            action: "View Full Detail >>"
        };
        createAndPopulateTable(existingUserData);
    } else if (userIdInput === "Shelcal-CT") {
        var existingUserData = {
            medicineName: userIdInput,
            medicineId: "MI4070",
            medicinetype: "Generic",
            stockQty: "1000",
            action: "View Full Detail >>"
        };
        createAndPopulateTable(existingUserData);
    } else if (userIdInput === "Ibuprofen 200") {
        var existingUserData = {
            medicineName: userIdInput,
            medicineId: "MI4230",
            medicinetype: "Generic",
            stockQty: "1200",
            action: "View Full Detail >>"
        };
        createAndPopulateTable(existingUserData);
    } else if (userIdInput === "Dolo 650") {
        var existingUserData = {
            medicineName: userIdInput,
            medicineId: "MI4012",
            medicinetype: "Generic",
            stockQty: "1000",
            action: "View Full Detail >>"
        };
        createAndPopulateTable(existingUserData);
    } else {
        alert("Invalid Credentials.!")
    }

    function createAndPopulateTable(userData) {
        // Create and populate the table
        var table = document.createElement("table");
        var headerRow = table.insertRow(0);

        var headers = ["Medicine Name", "Medicine Id", "Medicine Type", "Stock Qty.", "Action"];
        for (var i = 0; i < headers.length; i++) {
            var headerCell = headerRow.insertCell(i);
            headerCell.innerHTML = "<b>" + headers[i] + "</b>";
        }

        var dataRow = table.insertRow(1);
        dataRow.insertCell(0).innerHTML = userData.medicineName;
        dataRow.insertCell(1).innerHTML = userData.medicineId;
        dataRow.insertCell(2).innerHTML = userData.medicinetype;
        dataRow.insertCell(3).innerHTML = userData.stockQty;

        // Create hyperlink for action
        var actionCell = dataRow.insertCell(4);
        var viewDetailLink = document.createElement("a");
        viewDetailLink.href = "#";
        viewDetailLink.textContent = userData.action;
        viewDetailLink.addEventListener("click", function () {
            displayMedicineDetails(userData.medicineName);
        });
        actionCell.appendChild(viewDetailLink);

        userDetailsTableContainer.appendChild(table);
    }

    function displayMedicineDetails(medicineName) {
        // Display medicine details based on medicineName
        var detailsMessage;
        if (medicineName === "O2") {
            detailsMessage = "Medicine Company:Biocon Limited\nCost: $10\nExpiration Date: 2024-12-31\nBatch Number: HR9012F\nSupplier ID:SPLR1201";
        } else if (medicineName === "Azithral 500") {
            detailsMessage = "Medicine Company: Dr. Reddy's Laboratories Ltd.\nCost: 1000\nExpiration Date: 2024-12-31\nBatch Number: PD9876C\nSupplier ID:SPLR1210";
        } else if (medicineName === "Shelcal-CT") {
            detailsMessage = "Medicine Company: DEF Pharmaceuticals\nCost: $20\nExpiration Date: 2025-03-15\nBatch Number: PQR789";
        } else if (medicineName === "Ibuprofen 200") {
            detailsMessage = "Medicine Company: GHI Pharmaceuticals\nCost: $5\nExpiration Date: 2024-09-30\nBatch Number: LMN012";
        } else if (medicineName === "Dolo 650") {
            detailsMessage = "Medicine Company: JKL Pharmaceuticals\nCost: $8\nExpiration Date: 2024-11-15\nBatch Number: UVW345";
        } else {
            detailsMessage = "Details not available for this medicine.";
        }
        alert(detailsMessage);
    }
}
