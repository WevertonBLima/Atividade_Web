let count = 0;
let intervalId = null;
const countDisplay = document.getElementById('count');
const marksList = document.getElementById('marksList');

document.getElementById('start').addEventListener('click', () => {
    if (!intervalId) {
        intervalId = setInterval(() => {
            count++;
            countDisplay.textContent = count;
        }, 1000);
    }
});

document.getElementById('mark').addEventListener('click', () => {
    const markItem = document.createElement('li');
    markItem.textContent = `Tempo: ${count} segundos`;
    marksList.appendChild(markItem);
});

document.getElementById('clearMarks').addEventListener('click', () => {
    marksList.innerHTML = '';
});

document.getElementById('stop').addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null;
});

document.getElementById('reset').addEventListener('click', () => {
    count = 0;
    countDisplay.textContent = count;
});
