export function transitionAn(targetPage, direction) {
    const animaElements = document.getElementsByClassName("anima");
    if (!animaElements.length) return;

    let transitionHandled = false;

    for (const el of animaElements) {
        el.classList.add(direction);
        el.addEventListener('animationend', () => {
            if (!transitionHandled) {
                transitionHandled = true;
                window.location.href = targetPage;
            }
        }, { once: true });
    }
}