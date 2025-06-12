document.getElementById("studentForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const grade = document.getElementById("class").value.trim();
  const email = document.getElementById("email").value.trim();

  if (name && grade && email) {
    const table = document.getElementById("studentTableBody");
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${name}</td>
      <td>${grade}</td>
      <td>${email}</td>
    `;

    table.appendChild(row);

    // Reset form
    document.getElementById("studentForm").reset();
  }
});