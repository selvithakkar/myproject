// document.getElementById('generateReportBtn').addEventListener('click', function () {
//     var medicineSearchValue = document.getElementById('medicineSearch').value.trim();
//     var startDateValue = document.getElementById('startDate').value;
//     var endDateValue = document.getElementById('endDate').value;
//     // if (!medicineSearchValue === '' && !startDateValue === '' && !endDateValue === '')
//     if (!medicineSearchValue && !startDateValue && !endDateValue) {
//         alert('Please fill in all required fields.');
//         return;
//     }
//     if (!medicineSearchValue) {
//         alert('Please fill in all required fields.');
//         exit(); 
//     }
//     generateReportAndChart();
//     // Calling the function for generating report and chart
// });
////////////
////////////
document.getElementById('generateReportBtn').addEventListener('click', function () {
    var medicineSearchValue = document.getElementById('medicineSearch').value.trim();
    var startDateValue = document.getElementById('startDate').value;
    var endDateValue = document.getElementById('endDate').value;

    // Check if the medicine search field is empty
    // Check if both start date and end date are filled
    if (!startDateValue || !endDateValue) {
        alert('Please fill in both start date and end date fields.');
        return;
    } else if (!medicineSearchValue) {
        alert('Please fill in the medicine search field.');
        return;
    }

    // Prompt user for admin username and password
    var adminUsername = prompt('Enter Admin Username:');
    var adminPassword = prompt('Enter Admin Password:');

    // Validate admin credentials
    if (adminUsername === 'tirthshah' && adminPassword === '8888') { // Check against predefined values
        generateReportAndChart(adminUsername, adminPassword); // Generate report and chart if credentials are correct
    } else {
        alert('This action is accessible for admin only. Please provide valid admin credentials.');
        generate();
    }
});

function generate(){
    alert("Invalid Credentials");
    return;
}

////////////
////////////
// Function to check if the entered date is valid
function isValidDate(dateString) {
    var enteredDate = new Date(dateString);
    var currentDate = new Date();
    
    // Compare entered date with current date
    if (enteredDate > currentDate) {
        return false; // Entered date is in the future
    }
    return true; // Entered date is valid
}

//////////////////// 
////////////////////
////////////////////

function generateReportAndChart(adminUsername, adminPassword) {
    var selectedMedicine = document.getElementById('medicineSearch').value.trim();
    var startDate = new Date(document.getElementById('startDate').value);
    var endDate = new Date(document.getElementById('endDate').value);

    var initialStock, stockIn, stockOut, finalStock;

    if (selectedMedicine === '1234567890' && '2' && '3' && 'Vowels') {
        alert("Please enter valid credentials")
    } else if (selectedMedicine === 'paracetamol500mg') {
        initialStock = 1000;
        stockIn = 200;
        stockOut = 50;
        finalStock = initialStock + stockIn - stockOut;
    }else if (selectedMedicine === 'Ibuprofen200mg') {
        initialStock = 1000;
        stockIn = 120;
        stockOut = 10;
        finalStock = initialStock + stockIn - stockOut;
    }else if (selectedMedicine === 'Amoxicillin250mg') {
        initialStock = 1000;
        stockIn = 180;
        stockOut = 25;
        finalStock = initialStock + stockIn - stockOut;
    }else if (selectedMedicine === 'Dolo 650') {
        initialStock = 1000;
        stockIn = 700;
        stockOut = 1200;
        finalStock = initialStock + stockIn - stockOut;
    } else if (selectedMedicine === 'Azithral 500mg') {
        initialStock = 1150;
        stockIn = 300;
        stockOut = 50;
        finalStock = initialStock + stockIn - stockOut;
    } else if (selectedMedicine === 'Shelcal-CT') {
        initialStock = 1300;
        stockIn = 200;
        stockOut = 80;
        finalStock = initialStock + stockIn - stockOut;
    } else if (selectedMedicine === 'O2') {
        initialStock = 300;
        stockIn = 200;
        stockOut = 80;
        finalStock = initialStock + stockIn - stockOut;
    } else if (selectedMedicine === 'Ondem') {
        initialStock = 50;
        stockIn = 300;
        stockOut = 50;
        finalStock = initialStock + stockIn - stockOut;
    } else if (selectedMedicine === 'Ciplar 20mg') {
        initialStock = 2000;
        stockIn = 1200;
        stockOut = 880;
        finalStock = initialStock + stockIn - stockOut;
    } else {
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

////////////////////////////////
//////////////////////////////
///////////////////////////////////


document.getElementById('generateReportBtn').addEventListener('click', function () {
    var selectedMedicine = document.getElementById('medicineSearch').value.trim();
    var initialStock = document.getElementById('initialStock').value.trim();
    var stockIn = document.getElementById('stockIn').value.trim();
    var stockOut = document.getElementById('stockOut').value.trim();
    var finalStock = document.getElementById('finalStock').value.trim();

    // Send data to backend
    fetch('admin/medisync/medicines', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // Add any additional headers if needed
        },
        body: JSON.stringify({
            selected_medicine: selectedMedicine,
            initial_stock: initialStock,
            stock_in: stockIn,
            stock_out: stockOut,
            final_stock: finalStock
        })
    })
    .then(response => {
        if (response.ok) {
            alert('Inventory report saved successfully');
        } else {
            throw new Error('Failed to save inventory report');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Failed to save inventory report');
    });
});
