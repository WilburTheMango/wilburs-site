document.getElementById('myForm').addEventListener('submit', function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the value from the input box
    const userInput = document.getElementById('inputBox').value;

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
            modifiedWords[i] = modifiedWords[i].charAt(0) + modifiedWords[i].charAt(modifiedWords[i].length-1);
        }
        total += parseInt(modifiedWords[i]);
        console.log("adding. new total: " + total);
    }
    document.getElementsByClassName('answer')[0].textContent = "Answer: " + total;
});