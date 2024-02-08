var declineMessages = ["You sure?", "Think again?", "Maybe reconsider?", "Feeling hesitant?"];
        var yesFontSize = 16;

        function selectOption(option) {
            if (option === 'yes') {
                document.getElementById('video').src = "https://media.tenor.com/zmAsQOIKdhgAAAPo/milk-and-mocha-cute.mp4";
                document.getElementById('option-buttons').style.display = 'none';
            } else if (option === 'no') {
                var randomIndex = Math.floor(Math.random() * declineMessages.length);
                yesFontSize += 5;
                document.getElementById('yes').style.fontSize = yesFontSize + "px";
                document.getElementById('yes').innerText = "Yes";
                document.getElementById('no').innerText = declineMessages[randomIndex];
            }
        }