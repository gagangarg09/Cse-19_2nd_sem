let employees = [];

function addEmployee() {
  let emp = {
    name: document.getElementById("name").value,
    id: document.getElementById("id").value,
    salary: parseInt(document.getElementById("salary").value),
    dept: document.getElementById("dept").value
  };
  employees.push(emp);
  alert("Employee Added!");
}

function displayEmployees() {
  let output = "<h3>All Employees</h3>";
  employees.forEach(e => {
    output += `${e.name} | ${e.id} | ₹${e.salary} | ${e.dept}<br>`;
  });
  document.getElementById("result").innerHTML = output;
}

function filterSalary() {
  let filtered = employees.filter(e => e.salary > 50000);
  let output = "<h3>Employees with Salary > 50000</h3>";
  filtered.forEach(e => {
    output += `${e.name} | ₹${e.salary}<br>`;
  });
  document.getElementById("result").innerHTML = output;
}

function totalSalary() {
  let total = employees.reduce((sum, e) => sum + e.salary, 0);
  document.getElementById("result").innerHTML = "Total Salary Payout: ₹" + total;
}

function averageSalary() {
  if (employees.length === 0) {
    document.getElementById("result").innerHTML = "No employees added.";
    return;
  }
  let total = employees.reduce((sum, e) => sum + e.salary, 0);
  let avg = total / employees.length;
  document.getElementById("result").innerHTML = "Average Salary: ₹" + avg.toFixed(2);
}

function countDept() {
  let dept = prompt("Enter department to count:");
  let count = employees.filter(e => e.dept.toLowerCase() === dept.toLowerCase()).length;
  document.getElementById("result").innerHTML = 
    "Employees in " + dept + ": " + count;
}