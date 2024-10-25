function openModal() {
    document.getElementById("modal").style.display = "flex";
    document.getElementById("modalSound").play(); // Воспроизведение звука
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

window.onclick = function(event) {
    if (event.target == document.getElementById("modal")) {
        closeModal();
    }
}

function createConfetti() {
    const colors = ['#ff7675', '#ffeaa7', '#ff9a9e', '#fab1a0', '#74b9ff'];
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.appendChild(confetti);
        
        // Удаляем конфетти через 3 секунды, чтобы не загромождать экран
        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }
}

// Запускаем создание конфетти при загрузке страницы
window.onload = function() {
    createConfetti();
}
