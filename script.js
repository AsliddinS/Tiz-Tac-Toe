const board = document.querySelector('.board');
const cells = document.querySelectorAll('.cell');
let turn = 'X';

cells.forEach(cell => {
  cell.addEventListener('click', handleCellClick);
});

function handleCellClick(event) {
  const cell = event.target;
  if (cell.textContent !== '') return;
  cell.textContent = turn;
  if (checkForWinner()) {
    alert(`${turn} wins!`);
    resetBoard();
    return;
  }
  if (checkForDraw()) {
    alert("It's a draw!");
    resetBoard();
    return;
  }
  turn = turn === 'X' ? 'O' : 'X';
}

function checkForWinner() {
  return (
    checkRows() ||
    checkColumns() ||
    checkDiagonals()
  );
}

function checkRows() {
  for (let i = 0; i < 9; i += 3) {
    if (
      cells[i].textContent !== '' &&
      cells[i].textContent === cells[i + 1].textContent &&
      cells[i].textContent === cells[i + 2].textContent
    ) {
      return true;
    }
  }
  return false;
}

function checkColumns() {
  for (let i = 0; i < 3; i++) {
    if (
      cells[i].textContent !== '' &&
      cells[i].textContent === cells[i + 3].textContent &&
      cells[i].textContent === cells[i + 6].textContent
    ) {
      return true;
    }
  }
  return false;
}

function checkDiagonals() {
  if (
    cells[0].textContent !== '' &&
    cells[0].textContent === cells[4].textContent &&
    cells[0].textContent === cells[8].textContent
  ) {
    return true;
  }
  if (
    cells[2].textContent !== '' &&
    cells[2].textContent === cells[4].textContent &&
    cells[2].textContent === cells[6].textContent
  ) {
    return true;
  }
  return false;
}

function checkForDraw() {
  return Array.from(cells).every(cell => cell.textContent !== '');
}

function resetBoard() {
  cells.forEach(cell => {
    cell.textContent = '';
  });
  turn = 'X';
}
