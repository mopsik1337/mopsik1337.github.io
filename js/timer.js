// задаем дату окончания таймера
const endDate = new Date('2023-05-27T23:00:00').getTime();

// обновляем таймер каждую секунду
const timer = setInterval(function() {

  // получаем текущее время
  const now = new Date().getTime();

  // вычисляем оставшееся время
  const remainingTime = endDate - now;

  // вычисляем дни, часы, минуты и секунды
  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  // отображаем таймер на странице
  document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  // если время вышло, останавливаем таймер
  if (remainingTime < 0) {
    clearInterval(timer);
    document.getElementById('countdown').innerHTML = 'Время вышло!';
  }
}, 1000);
