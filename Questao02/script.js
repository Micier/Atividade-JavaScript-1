let rollingInterval;

function startRolling() {
  const input = document.getElementById('rollingMessageInput');
  const message = input.value.trim();
  if (message.length === 0) {
    alert('Por favor, insira uma mensagem.');
    return;
  }
  rollingInterval = setInterval(rollMessage, 200);
}

function stopRolling() {
  clearInterval(rollingInterval);
}

function rollMessage() {
  const input = document.getElementById('rollingMessageInput');
  const message = input.value;
  if (message.length > 0) {
    const firstChar = message.substring(0, 1);
    const restOfString = message.substring(1);
    const newMessage = restOfString + firstChar;
    input.value = newMessage;
  }
}

document.getElementById('startButton').addEventListener('click', startRolling);
document.getElementById('stopButton').addEventListener('click', stopRolling);