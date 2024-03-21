const totalStock = 1000;
let currentStock = 500;
// Function to update the range bar
function updateRangeBar() {
  const rangeBar = document.getElementById('rangeBar');
  const currentStockBar = document.getElementById('currentStock');
  // Calculate the percentage of current stock
  const percentage = (currentStock / totalStock) * 100;
  // Update the width of the current stock bar
  currentStockBar.style.width = `${percentage}%`;
  // Calculate darkness based on the range changes
  const darkness = (totalStock - currentStock) / totalStock;
  const darkColor = `rgba(0, 0, 0, ${1 - darkness})`; // Black color based on darkness
  // Update background color for better visibility
  currentStockBar.style.backgroundColor = darkColor;
}
// Example: Change stock and update the range bar
function changeStock(newStock) {
  currentStock = newStock;
  updateRangeBar();
}
updateRangeBar();
// Example: Simulate stock changes
setTimeout(() => changeStock(700), 1000); // Change stock after 2 seconds
const tstock = 2000;
let cstock = 1200;

function upRangeBar() {
  const rangeBar1 = document.getElementById('rangeBar1');
  const currentStockBar1 = document.getElementById('currentStock1');

  const percentage = (cstock / tstock) * 100;
  currentStockBar1.style.width = `${percentage}%`;
  const dark = (tstock - cstock) / tstock;
  const dColor = `rgba(0, 0, 0, ${1 - dark})`;
  currentStockBar1.style.backgroundColor = dColor;
}
function chgStock(nStock) {
  cstock = nStock;
  upRangeBar();
}
upRangeBar();
setTimeout(() => chgStock(1300), 1000);
const totalStock1 = 1000;
let currentStock1 = 500;
function RangeBar() {
  const rangeBar2 = document.getElementById('rangeBar2');
  const currentStockBar2 = document.getElementById('currentStock2');
  const percentage = (currentStock1 / totalStock1) * 100;
  currentStockBar2.style.width = `${percentage}%`;
  const darknesss = (totalStock1 - currentStock1) / totalStock1;
  const darkColorr = `rgba(0, 0, 0, ${1 - darknesss})`;
  currentStockBar2.style.backgroundColor = darkColorr;
}
function changeStockk(newStockk) {
  currentStock1 = newStockk;
  RangeBar();
}
RangeBar();
setTimeout(() => changeStockk(700), 1000);



///////////newss
// Example data (replace this with real-time data from your backend)
const stockNews = [
  { stock: 'AAPL', headline: 'Stock In: 3000' },
  { stock: 'GOOGL', headline: 'Overstock: not yet reported' },
  { stock: 'MSFT', headline: 'Stock Out: 1800' },
  { stock: 'MSFT', headline: 'Stock Out: 1800' },

  // Add more news items as needed
];
const tickerContainer = document.getElementById('headline-container');
// Function to generate news headlines and apply appropriate styles
function generateHeadlines() {
  tickerContainer.innerHTML = ''; // Clear existing headlines
  stockNews.forEach(({ stock, headline }) => {
    const headlineElement = document.createElement('div');
    headlineElement.className = 'headline';

    if (headline.includes('Stock In')) {
      headlineElement.classList.add('stock-in');
    } else if (headline.includes('Stock Out')) {
      headlineElement.classList.add('stock-out');
    } else if (headline.includes('Overstock')) {
      headlineElement.classList.add('overstock');
    } else if (headline.includes('Stock Out')) {
      headlineElement.classList.add('stock-out');
    }
    headlineElement.textContent = headline;
    // Add the headline to the container
    tickerContainer.appendChild(headlineElement);
  });
}
// Initial generation of headlines
generateHeadlines();
// Example: Simulate updating headlines after a delay (replace with real-time data fetching)
setInterval(() => {
  // Update news (add new headlines, change stock status, etc.)
  // stockNews.push({ stock: 'AAPL', headline: 'Stock Out: Apple Inc. faces high demand.' });

  // Regenerate headlines with updated data
  generateHeadlines();
}, 5000); // Update every 5 seconds (adjust as needed)



/////////Reorder Message/////////
function updateReorderStatus() {
  var medicineId = document.getElementById('medicine_id').value;
  var stockOut = document.getElementById('stockOut').value;

  // Check if both fields are filled  
  if (!medicineId || !stockOut) {
    alert('Please fill in all required fields.');
    return;
  }

  // Display information in the alert pop-up
  alert('Medicine Name: ' + medicineId + '\n Status: ' + generateReorderMessage(stockOut));
}

function generateReorderMessage(stockOut) {
  var numericStockOut = parseFloat(stockOut);
  if (isNaN(numericStockOut) || numericStockOut <= 0) {
    return 'Enter a valid stock out quantity.';
  } else if (numericStockOut <= 500) {
    return 'Stock is sufficient. No need to reorder.';
  } else if (numericStockOut <= 1000) {
    return 'Consider restocking soon.';
  } else {
    return 'Reorder needed!';
  }
}



///track quantities ..
///stock....
// History data structure to store tracked quantities
function trackQuantity() {
  var medicineId = document.getElementById("medicine_id").value;

  if (medicineId === "") {
    // Display an alert message for empty input
    alert("Please enter a Medicine Name.");
    return;
  }
}
function promptAndExport() {
  if (medicineId === "") {
    alert("Please enter a Medicine Name before exporting to CSV.");
    return;
  }
}