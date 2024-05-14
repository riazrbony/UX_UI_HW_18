// JavaScript code for your website

// Function to handle button click
function handleButtonClick() {
    alert("Button clicked!"); // Display an alert
}

// Add event listener to the button
document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("myButton"); // Assuming your button has an id of "myButton"
    button.addEventListener("click", handleButtonClick);
});