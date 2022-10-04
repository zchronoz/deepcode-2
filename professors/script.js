const professorsUrl = 'https://professor-allocation.herokuapp.com/professors';

const table = document.getElementById('table');
const tableBody = document.getElementById('table-body');

async function getProfessors() {
  const response = await fetch(professorsUrl);
  if (response.ok) {
    const professors = await response.json();

    if (professors.length > 0) {
      table.removeAttribute('hidden');
      professors.forEach((professor) => {
        createRow(professor);
      })
    }
    
  }
}

function createRow({id, name, cpf, department}) {
  const row = document.createElement('tr');
  const idCollumn = document.createElement('th');
  const nameCollumn = document.createElement('td');
  const cpfCollumn = document.createElement('td');
  const departmentCollumn = document.createElement('td');

  idCollumn.textContent = id;
  idCollumn.setAttribute("scope", "row");

  nameCollumn.textContent = name;
  cpfCollumn.textContent = cpf;
  departmentCollumn.textContent = department.name;

  row.appendChild(idCollumn);
  row.appendChild(nameCollumn);
  row.appendChild(cpfCollumn);
  row.appendChild(departmentCollumn);

  tableBody.appendChild(row);
}


getProfessors();