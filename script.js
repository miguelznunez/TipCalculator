  const amount = document.getElementById("amount");
  const guests = document.getElementById("guests");
  const quality = document.getElementById("quality");
  const tipAmount = document.getElementById("tip-amount");

calculate = () => {
  const tip = ((amount.value * quality.value) / (guests.value)).toFixed(2);
  if(tip === "NaN"){
    tipAmount.innerHTML = "Tip $0 each";
    showTipAmount();
  }
  else{
    tipAmount.innerHTML = "Tip $" + tip + " each";
    showTipAmount();
  }
}

showTipAmount = () => {
  // Get the snackbar DIV
  var x = document.getElementById("tip-amount");
  // Add the "show" class to DIV
  x.className = "show";
  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}