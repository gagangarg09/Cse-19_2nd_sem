const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");

celsiusInput.addEventListener("input", function() {
  let c = parseFloat(celsiusInput.value);
  if (!isNaN(c)) {
    fahrenheitInput.value = (c * 9/5 + 32).toFixed(2);
  } else {
    fahrenheitInput.value = "";
  }
});

fahrenheitInput.addEventListener("input", function() {
  let f = parseFloat(fahrenheitInput.value);
  if (!isNaN(f)) {
    celsiusInput.value = ((f - 32) * 5/9).toFixed(2);
  } else {
    celsiusInput.value = "";
  }
});
