document.getElementById('form').addEventListener('submit', validate)

function validate() {
  const cardNumber = document.getElementById('card_details').value;
  if (cardNumber.length != 16) {
    alert("Invalid card number");
    return 
  }


  alert("Your data was saved!");
}