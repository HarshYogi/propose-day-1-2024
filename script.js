var declineMessages = [
    "You sure?", "Think again?", "Maybe reconsider?", "Feeling hesitant?", 
    "Are you absolutely sure?", "Last chance!", "Come on, say yes!", "I know you want to say yes!", "Think from your heart 💖"
];
var yesFontSize = 16;

function selectOption(option) {
    if (option === 'yes') {
        document.getElementById('video').src = "https://media.tenor.com/zmAsQOIKdhgAAAPo/milk-and-mocha-cute.mp4";
        document.getElementById('option-buttons').style.display = 'none';
        document.getElementById('text').innerText = "Yay! You make me the happiest! 💖🥰";
    } else if (option === 'no') {
        var randomIndex = Math.floor(Math.random() * declineMessages.length);
        yesFontSize += 3;
        document.getElementById('yes').style.fontSize = yesFontSize + "px";
        document.getElementById('yes').innerText = "Yes";
        document.getElementById('no').innerText = declineMessages[randomIndex];
    }
}
