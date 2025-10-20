export function transitionAn(targetPage, direction) {
    const anima = document.querySelector('.anima');
    if (!anima) return;
    anima.classList.add(direction);

    anima.addEventListener('transitionend', () => {
        window.location.href = targetPage;
    }, { once: true });
}
