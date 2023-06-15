const endDate = new Date('2023-05-27T20:00:00').getTime();
let requestId;

function updateTimer() {
  const now = new Date().getTime();
  const remainingTime = endDate - now;

  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (remainingTime < 0) {
    document.getElementById('countdown').innerHTML = 'Время вышло!';
    cancelAnimationFrame(requestId);
  } else {
    requestId = requestAnimationFrame(updateTimer);
  }
}

updateTimer();
