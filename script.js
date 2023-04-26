// A function to decrease the quantity of a ticket by one
function decreaseQuantity(id) {
    // Get the input element by its id
    var input = document.getElementById(id);
    // Get the current value of the input
    var value = parseInt(input.value);
    // If the value is greater than zero, subtract one from it
    if (value > 0) {
      value--;
    }
    // Set the new value of the input
    input.value = value;
    // Update the total price
    updateTotal();
  }
  
  // A function to increase the quantity of a ticket by one
  function increaseQuantity(id) {
    // Get the input element by its id
    var input = document.getElementById(id);
    // Get the current value of the input
    var value = parseInt(input.value);
    // Add one to the value
    value++;
    // Set the new value of the input
    input.value = value;
    // Update the total price
    updateTotal();
  }
  
  // A function to update the total price based on the quantities and prices of the tickets
  function updateTotal() {
    // Get all the input elements in the tickets div
    var inputs = document.querySelectorAll("#tickets input");
    // Initialize a variable to store the total price
    var total = 0;
    // Loop through each input element
    for (var i = 0; i < inputs.length; i++) {
      // Get the quantity of the ticket from the input's value attribute
      var quantity = parseInt(inputs[i].value);
      // Get the price of the ticket from the price span inside the ticket div
      var price = parseInt(inputs[i].parentNode.previousElementSibling.querySelector(".ticket-price").textContent.replace("R", ""));
      // Add the quantity times the price to the total
      total += quantity * price;
    }
    // Update the text of the total price span
    document.getElementById("total-price").textContent = "R" + total;
  }
  
  // A function to show a confirmation message when the purchase button is clicked
  function purchase() {
    // Get the total price element
    var totalElement = document.getElementById("total-price");
    // Get the total price value
    var total = parseInt(totalElement.textContent.replace("R", ""));
    // If the total is greater than zero, show the confirmation message
    if (total > 0) {
      // Show the confirmation message
      alert("Thank you for your purchase! Your total is R" + total + ".");
    }
    // Otherwise, show an error message
    else {
      // Show the error message
      alert("Please add at least one ticket to your purchase.");
    }
  }
  