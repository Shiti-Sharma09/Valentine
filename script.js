const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const catImg = document.querySelector('.cat-img');
const jsConfetti = new JSConfetti();

function generateConfetti() {
    jsConfetti.addConfetti().then(() => {
        // Optionally, add a delay before generating confetti again
        setTimeout(generateConfetti, 30); // Adjust the delay (in milliseconds) as needed
    });
}


// Add event listener to Yes button
yesButton.addEventListener('click', function () {
    // Display "Yeey"
    const messageElement = document.querySelector('.title');
    messageElement.textContent = "YEYEYEYEYEYEYEYEYEYEYEYEYEYEY!!!!!!";

    // Change the image source
    catImg.src = './imgg/happy.jpg';

    // Trigger confetti shower
    generateConfetti();
});

// Add event listener to No button
noButton.addEventListener('click', function () {
    const messages = [
        "No",
        "Are you sure?",
        "Huh!!!!!!",
        "Pookie please",
        "Why No BEBE",
        "Don't do this to me :(",
        "You're breaking my heart",
        "I'm gonna cry...",
    ];

    const randomIndex = Math.floor(Math.random() * messages.length);
    const messageElement = document.querySelector('.title');
    messageElement.textContent = messages[randomIndex];

    // Change the image source
    let imageIndex = Math.floor(Math.random() * 8) + 1; // Generate a random index between 1 and 8
    catImg.src = `./imgg/sed-${imageIndex}.jpg`;
});
