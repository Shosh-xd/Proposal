const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const responseDiv = document.getElementById('response');

noButton.addEventListener('mouseover', () => {
    const newX = Math.random() * (window.innerWidth - 100); // Adjust 100 for button width
    const newY = Math.random() * (window.innerHeight - 50); // Adjust 50 for button height
    noButton.style.position = 'absolute';
    noButton.style.left = `${newX}px`;
    noButton.style.top = `${newY}px`;
});

yesButton.addEventListener('click', () => {
    responseDiv.textContent = "Thanks, we will meet on next Saturday at my place :)";
});
