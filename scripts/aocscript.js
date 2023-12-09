// ======================== DAY 1 =============================================================================
document.getElementById('day1').addEventListener('submit', function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the value from the input box
    const userInput = document.getElementById('inputBox1').value;

    // Do something with the user input (for now, just log it)
    console.log('User Input:', userInput);

    // remove the whitespace that may end up on the ends
    const trimInput = userInput.trim();
    // split it by spaces, to get an array of the raw "words"
    const words = trimInput.split(/\s+/);
    console.log('Trimmed Array of Input: ', words);

    let modifiedWords = [];

    for (let i = 0; i < words.length; i++) {
        let modifiedWord = words[i].split('').filter(char => !/[^0-9]/.test(char)).join('');
        modifiedWords.push(modifiedWord);
    }

    console.log('Numbers: ' + modifiedWords.join(' '));
    let total = 0;
    for (let i = 0; i < modifiedWords.length; i++) {
        if (modifiedWords[i].length == 1) {
            modifiedWords[i] += modifiedWords[i];
            console.log("doubled at: " + i + " for a total of: " + modifiedWords[i]);
        }
        if (modifiedWords[i].length > 2) {
            modifiedWords[i] = modifiedWords[i].charAt(0) + modifiedWords[i].charAt(modifiedWords[i].length - 1);
        }
        total += parseInt(modifiedWords[i]);
        console.log("adding. new total: " + total);
    }
    document.getElementsByClassName('answer1')[0].textContent = "Answer: " + total;
});
// ======================== DAY 2 =============================================================================
// document.getElementById('day2').addEventListener('submit', function (event) {
//     // Prevent the default form submission behavior
//     event.preventDefault();

//     // Get the value from the input box
//     const userInput = document.getElementById('inputBox2').value;

//     // Do something with the user input (for now, just log it)
//     console.log('User Input:', userInput);

//     // remove the whitespace that may end up on the ends
//     const trimInput = userInput.trim();
//     // split it by spaces, to get an array of the raw "words"
//     const regex = /Game \d+: [^G]+/g;
//     const games = trimInput.match(regex);
//     const totalRed = 12;
//     const totalGreen = 13;
//     const totalBlue = 14;
//     const gameData = [];

//     for (let i = 0; i < games.length; i++) {
//         let currentCase = games[i];
//         const regex2 = /Game (\d+):/;
//         const match = regex2.exec(currentCase);

//         if (match) {
//             var gameNumber = match[1]; // Extract the game number
//             console.log("Game Number:", gameNumber);
//             const matchedString = match[0]; // Extract the matched part of the string
//             var remainingString = currentCase.substring(matchedString.length); // Extract the remaining part of the string
//         }
//         const remainingInts = remainingString.match(/\d+/g)
//             ? remainingString.match(/\d+/g).map(match => parseInt(match))
//             : [];

//         gameData[parseInt(gameNumber)] = remainingInts;
//     }
//     var validGames = []

//     console.log("Game Data:", gameData);
//     for (let i = 1; i < gameData.length; i++) {
//         var isGameValid = true; // reset to true when re-checking!
//         for (let j = 0; j < gameData[i].length; j++) {
//             if (gameData[i][j] > totalBlue || gameData[i][j] > totalGreen || gameData[i][j] > totalRed) {
//                 isGameValid = false;
//                 break; // dont process what you dont need too
//             }
//         }
//         if (isGameValid) {
//             validGames.push(i);
//             console.log("Game " + i + " was valid!");
//         }
//     }
//     console.log(validGames);
//     var total = 0;
//     for (let k = 0; k < validGames.length; k++) {
//         total += validGames[k];
//         console.log("New total: " + total);
//     }
//     document.getElementsByClassName('answer2')[0].textContent = "Answer: " + total;
// });




// console.log(games);
// document.getElementsByClassName('answer2')[0].textContent = "Answer: " + total;