const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleContinue() {
    window.location.href = "question.html";
}

function handleYesClick() {
    fetch('https://webhook.site/cf915e70-0a41-44d7-b165-4618e3ad38cc', {
        method: 'POST',
        body: JSON.stringify({
            clickCount: messageIndex,
            response: 'yes',
            timestamp: new Date().toISOString()
        })
    })
    .then((res) => {
        console.log(res,"ress");
        window.location.href = "yes_page.html";
    })
    .catch((err) => {
        console.log(err, "error");
        window.location.href = "yes_page.html";
    });
}