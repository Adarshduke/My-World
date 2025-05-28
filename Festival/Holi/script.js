document.addEventListener("DOMContentLoaded", function () {
    const colors = ['#ff6b81', '#ff9e00', '#00bfae', '#ff66cc', '#6bff81', '#ff4da6'];
    const overlay = document.querySelector('.overlay');

    // Create particle effect when clicking
    document.body.addEventListener('click', (e) => {
        createColorExplosion(e.pageX, e.pageY);
    });

    function createColorExplosion(x, y) {
        const numberOfParticles = 20;
        for (let i = 0; i < numberOfParticles; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            particle.style.left = `${x - 10}px`;
            particle.style.top = `${y - 10}px`;
            particle.style.width = `${Math.random() * 15 + 10}px`;
            particle.style.height = particle.style.width;
            particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            particle.style.animation = `particle-animation ${Math.random() * 1 + 1}s ease-out forwards`;
            particle.style.setProperty('--x', `${Math.random() * 200 - 100}px`); // Random X direction
            particle.style.setProperty('--y', `${Math.random() * 200 - 100}px`); // Random Y direction

            overlay.appendChild(particle);

            setTimeout(() => {
                particle.remove();
            }, 2000); // Remove particle after animation
        }
    }
});
