var historyData = {};

function trackQuantity() {
  // Clear previous result
  document.getElementById("result-container").innerHTML = "";

  // Get the medicine ID entered by the user
  var medicineId = document.getElementById("medicine_id").value;

  console.log("Medicine ID entered:", medicineId); // Debugging statement

  // Validate if the input is empty
  if (medicineId === "") {
    // Display an alert message for empty input
    alert("Please enter a Medicine Name.");
    return;
  }

  // Dummy data based on if-else conditions
  var stockIn, stockOut, totalStock, totalSales;

  // Example of different scenarios based on medicine ID (dummy data)
//   if (medicineId === "o2") {
//     stockIn = 100;
//     stockOut = 30;
//     totalSales = 500;
//   } else if (medicineId === "medicine2") {
//     stockIn = 150;
//     stockOut = 20;
//     totalSales = 700;
//   } else {
//     // Display an error message if medicine ID is not found
//     var errorMessage = "<p class='error-message'>Medicine ID not found. Please enter a valid ID.</p>";
//     document.getElementById("result-container").innerHTML = errorMessage;
//     return;
//   }
  // // Example of different scenarios based on medicine ID (dummy data)
  if (medicineId === "O2" || medicineId === "Prasugrel" ) {
    stockIn = 200;
    stockOut = 80;
    totalSales = 500;
  } else if (medicineId === "Ciplar 20mg" || medicineId === "Ciplar 40mg" || medicineId === "Ramipril" || medicineId === "Simvastatin") {
    stockIn = 1200;
    stockOut = 880;
    totalSales = 700;
  }else if (medicineId === "Ondem" || medicineId === "Pioglitazone") {
    stockIn = 300;
    stockOut = 50;
    totalSales = 400;
  }else if (medicineId === "Aspirin" || medicineId === "Clopidogrel") {
    stockIn = 200;
    stockOut = 50;
    totalSales = 400;
  }else if (medicineId === "Atorvastatin" || medicineId === "Bisoprolol") {
    stockIn = 120;
    stockOut = 20;
    totalSales = 600;
  }else if (medicineId === "Amlodipine 5mg" || medicineId === "Amlodipine 10mg") {
    stockIn = 180;
    stockOut = 125;
    totalSales = 300;
  }else if (medicineId === "Digoxin" || medicineId === "Isosorbide mononitrate") {
    stockIn = 1200;
    stockOut = 700;
    totalSales = 800;
  } else if (medicineId === "Enalapril" || medicineId === "Lisinopril") {
    stockIn = 300;
    stockOut = 190;
    totalSales = 400;
  } else if (medicineId === "Metoprolol" || medicineId === "Losartan 25mg") {
    stockIn = 500;
    stockOut = 380;
    totalSales = 800;
  }else if (medicineId === "Furosemide" || medicineId === "Heparin" || medicineId === "Valsartan 80mg") {
    stockIn = 750;
    stockOut = 440;
    totalSales = 400;
  } else {
    // Display an error message if medicine ID is not found
    var errorMessage = "<p class='error-message'>Medicine ID not found. Please enter a valid ID.</p>";
    document.getElementById("result-container").innerHTML = errorMessage;
    return;
  }

  // Calculate total stock
  totalStock = stockIn - stockOut;

  // Update history data for the current medicine
  if (!historyData[medicineId]) {
    historyData[medicineId] = [];
  }
  historyData[medicineId].push({ stockIn, stockOut, totalStock, totalSales });

  // Create a table with the generated data
  updateResultTable();
}

function resetForm() {
  // Clear the input field and any displayed result
  document.getElementById("medicine_id").value = "";
  document.getElementById("result-container").innerHTML = "";
}

function promptAndExport() {
  var medicineId = document.getElementById("medicine_id").value;

  if (medicineId === "") {
    alert("Please enter a Medicine Name before exporting to CSV.");
    return;
  }

  if (!historyData[medicineId]) {
    alert("Wrong Medicine Name. Please enter a valid Name.");
    return;
  }

  exportToCSV();
}

function exportToCSV() {
  // Export data to CSV format and trigger download
  var csvContent = "data:text/csv;charset=utf-8,";
  csvContent += "Medicine ID,Stock In,Stock Out,Total Stock,Total Sales\n";

  for (var medicine in historyData) {
    historyData[medicine].forEach(function (entry) {
      csvContent += medicine + "," + entry.stockIn + "," + entry.stockOut + "," + entry.totalStock + "," + entry.totalSales + "\n";
    });
  }

  var encodedURI = encodeURI(csvContent);
  var link = document.createElement("a");
  link.setAttribute("href", encodedURI);
  link.setAttribute("download", "medicine_data.csv");
  document.body.appendChild(link);
  link.click();
}

function updateResultTable() {
  var resultContainer = document.getElementById("result-container");

  if (Object.keys(historyData).length > 0) {
    var table = "<table class='result-table'><tr><th>Medicine ID</th><th>Stock In</th><th>Stock Out</th><th>Total Stock</th><th>Total Sales</th><th>Edit</th></tr>";

    for (var medicine in historyData) {
      historyData[medicine].forEach(function (entry, index) {
        table += "<tr>";
        table += "<td>" + medicine + "</td>";
        table += "<td>" + entry.stockIn + "</td>";
        table += "<td>" + entry.stockOut + "</td>";
        table += "<td>" + entry.totalStock + "</td>";
        table += "<td>" + entry.totalSales + "</td>";
        table += "<td><span class='edit-button' onclick='editEntry(\"" + medicine + "\", " + index + ")'>Edit</span></td>";
        table += "</tr>";
      });
    }

    table += "</table>";
    resultContainer.innerHTML = table;
  } else {
    resultContainer.innerHTML = "<p>No data available.</p>";
  }
}

function editEntry(medicineId, entryIndex) {
  // Retrieve the entry values
  var entry = historyData[medicineId][entryIndex];

  // Prompt the user for new values
  var newStockIn = prompt("Enter new Stock In value:", entry.stockIn);
  var newStockOut = prompt("Enter new Stock Out value:", entry.stockOut);
  var newTotalSales = prompt("Enter new Total Sales value:", entry.totalSales);

  // Update the entry with new values
  historyData[medicineId][entryIndex] = {
    stockIn: parseFloat(newStockIn),
    stockOut: parseFloat(newStockOut),
    totalStock: parseFloat(newStockIn) - parseFloat(newStockOut),
    totalSales: parseFloat(newTotalSales)
  };

  // Update the result table
  updateResultTable();
}