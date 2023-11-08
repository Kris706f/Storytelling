const container = document.querySelector('.container');
let currentBox = 1;

document.addEventListener('wheel', (e) => {
    if (e.deltaY > 0) {
        currentBox = Math.min(currentBox + 1, 3);
    } else {
        currentBox = Math.max(currentBox - 1, 1);
    }
    const translateX = (currentBox - 1) * 100;
    container.style.transform = `translateX(-${translateX}%)`;
});