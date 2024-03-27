function generateReportAndChart(adminUsername, adminPassword) {
    var selectedMedicine = document.getElementById('medicineSearch').value.trim();
    var startDate = new Date(document.getElementById('startDate').value);
    var endDate = new Date(document.getElementById('endDate').value);

    var initialStock, stockIn, stockOut, finalStock;

    if (selectedMedicine === '1234567890' && '2' && '3' && 'Vowels') {
        alert("Please enter valid credentials")
    } else if (selectedMedicine === 'Aspirin' ||selectedMedicine === 'Clopidogrel') {
        initialStock = 1000;
        stockIn = 200;
        stockOut = 50;
        finalStock = initialStock + stockIn - stockOut;
    }else if (selectedMedicine === 'Atorvastatin' || selectedMedicine === 'Bisoprolol') {
        initialStock = 1000;
        stockIn = 120;
        stockOut = 20;
        finalStock = initialStock + stockIn - stockOut;
    }else if (selectedMedicine === 'Amlodipine 5mg' || selectedMedicine === 'Amlodipine 10mg' ) {
        initialStock = 1000;
        stockIn = 180;
        stockOut = 125;
        finalStock = initialStock + stockIn - stockOut;
    }else if (selectedMedicine === 'Digoxin' || selectedMedicine === 'Isosorbide mononitrate') {
        initialStock = 1000;
        stockIn = 700;
        stockOut = 1200;
        finalStock = initialStock + stockIn - stockOut;
    } else if (selectedMedicine === 'Enalapril' || selectedMedicine === 'Lisinopril') {
        initialStock = 1150;
        stockIn = 300;
        stockOut = 190;
        finalStock = initialStock + stockIn - stockOut;
    } else if (selectedMedicine === 'Metoprolol' || selectedMedicine === 'Losartan 25mg') {
        initialStock = 1300;
        stockIn = 500;
        stockOut = 320;
        finalStock = initialStock + stockIn - stockOut;
    } else if (selectedMedicine === 'O2' || selectedMedicine === 'Prasugrel') {
        initialStock = 300;
        stockIn = 200;
        stockOut = 80;
        finalStock = initialStock + stockIn - stockOut;
    } else if (selectedMedicine === 'Ondem' || selectedMedicine === 'Pioglitazone') {
        initialStock = 50;
        stockIn = 300;
        stockOut = 50;
        finalStock = initialStock + stockIn - stockOut;
    } else if (selectedMedicine === 'Ciplar 20mg' || selectedMedicine === 'Ciplar 40mg' || selectedMedicine === 'Ramipril' || selectedMedicine === 'Simvastatin' ) {
        initialStock = 2000;
        stockIn = 1200;
        stockOut = 880;
        finalStock = initialStock + stockIn - stockOut;
    }else if (selectedMedicine === 'Furosemide' || selectedMedicine === 'Heparin' || selectedMedicine === 'Valsartan 80mg') {
        initialStock = 1250;
        stockIn = 750;
        stockOut = 440;
        finalStock = initialStock + stockIn - stockOut;
    }else {
        initialStock = 0;
        stockIn = 0;
        stockOut = 0;
        finalStock = 0;
    }

    var inventoryReport = `
<strong>Date Range:</strong> ${startDate.toDateString()} to ${endDate.toDateString()}<br>
<strong>Product Name:</strong> ${selectedMedicine} <br>
<strong>Initial Stock:</strong>${initialStock}<br>
<strong>Stock In:</strong>${stockIn} <br>
<strong>Stock Out:</strong>${stockOut}<br>
<strong>Final Stock:</strong>${finalStock}<br>
`;

    document.getElementById('reportOutput').innerHTML = inventoryReport;
    // document.getElementById('chart-container').style.display = 'block';

    // Regenerate the chart
    var ctx = document.getElementById('inventoryChart').getContext('2d');
    if (window.myChart) {
        // If the chart instance exists, destroy it before creating a new one
        window.myChart.destroy();
    }

    window.myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Initial Stock', 'Stock In', 'Stock Out', 'Final Stock'],
            datasets: [{
                data: [initialStock, stockIn, stockOut, finalStock],
                backgroundColor: [
                    'rgba(0, 255, 0, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: [
                    'rgba(0, 255, 0, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 205, 86, 1)',
                    'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
        }
    });
}

// Add the click event listener to the button
document.getElementById('generateReportBtn').addEventListener('click', generateReportAndChart);

////////////////////////////////
////////////////////////////// date validation for not using futute dates 
///////////////////////////////////
// document.addEventListener("DOMContentLoaded", function() {
//     // Get the current date
//     var currentDate = new Date().toISOString().split('T')[0];
    
//     // Set the min attribute of startDate to the current date
//     document.getElementById('startDate').setAttribute('min', currentDate);
    
//     // Set the max attribute of startDate to the current date
//     document.getElementById('endDate').setAttribute('max', currentDate);
// });

// // Function to check if the entered date is valid
// function isValidDate(dateString) {
//     var enteredDate = new Date(dateString);
//     var currentDate = new Date();
    
//     // Compare entered date with current date
//     if (enteredDate > currentDate) {
//         return false; // Entered date is in the future
//     }
//     return true; // Entered date is valid
// }

// Add event listener for date inputs
document.getElementById('startDate').addEventListener('change', function() {
    var startDateValue = this.value;
    if (!isValidDate(startDateValue)) {
        alert('Invalid date selected. Please select a date on or before today.');
        this.value = ''; // Clear the input value
    }
});

document.getElementById('endDate').addEventListener('change', function() {
    var endDateValue = this.value;
    if (!isValidDate(endDateValue)) {
        alert('Invalid date selected. Please select a date on or before today.');
        this.value = ''; // Clear the input value
    }
});
