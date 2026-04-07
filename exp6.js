// Change heading text
document.getElementById("btnHeading").addEventListener("click", function() {
  let msg = document.getElementById("message").value;
  document.getElementById("heading").innerText = msg || "Default Heading";
});

// Change background color
document.getElementById("btnBg").addEventListener("click", function() {
  document.body.style.backgroundColor = 
    document.body.style.backgroundColor === "lightblue" ? "#f9f9f9" : "lightblue";
});

// Change font size
document.getElementById("btnFont").addEventListener("click", function() {
  let para = document.getElementById("para");
  para.style.fontSize = para.style.fontSize === "24px" ? "16px" : "24px";
});

// Show/Hide paragraph
document.getElementById("btnToggle").addEventListener("click", function() {
  let para = document.getElementById("para");
  para.style.display = (para.style.display === "none") ? "block" : "none";
});

// Reset page
document.getElementById("btnReset").addEventListener("click", function() {
  document.getElementById("heading").innerText = "Welcome to Experiment 6";
  document.body.style.backgroundColor = "#f9f9f9";
  document.getElementById("para").style.fontSize = "16px";
  document.getElementById("para").style.display = "block";
  document.getElementById("message").value = "";
});