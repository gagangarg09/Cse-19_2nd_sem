function calculate() {
  let n = parseInt(document.getElementById("numSubjects").value);
  let total = 0;

  for (let i = 1; i <= n; i++) {
    let marks = parseInt(prompt("Enter marks for subject " + i));
    total += marks;
  }

  let avg = total / n;
  let grade = "";
  let status = "";

  if (avg >= 90) grade = "A";
  else if (avg >= 75) grade = "B";
  else if (avg >= 50) grade = "C";
  else grade = "D";

  status = (avg >= 40) ? "Pass" : "Fail";

  document.getElementById("result").innerHTML =
    "Total Marks: " + total + "<br>" +
    "Average: " + avg.toFixed(2) + "<br>" +
    "Grade: " + grade + "<br>" +
    "Result: " + status;
}