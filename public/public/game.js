const socket = io();
let multiplier = 1;
let crashPoint = Math.random() * 10 + 1;
let running = false;

// Place Bet
document.getElementById('betBtn').onclick = () => {
  const bet = parseFloat(document.getElementById('bet').value);
  if(!bet) return alert('Enter a bet!');
  socket.emit('placeBet', { amount: bet });
  multiplier = 1;
  crashPoint = Math.random() * 10 + 1;
  running = true;
  runGame();
};

// Cash Out
document.getElementById('cashBtn').onclick = () => {
  if(running) {
    alert(`Cashed out at ${multiplier.toFixed(2)}x`);
    running = false;
  }
};

// Multiplier Growth
function runGame() {
  if(!running) return;
  multiplier += 0.05;
  document.getElementById('multiplier').innerText = multiplier.toFixed(2) + 'x';
  if(multiplier >= crashPoint) {
    alert(`Crashed at ${crashPoint.toFixed(2)}x`);
    running = false;
  } else {
    setTimeout(runGame, 50);
  }
}
