const submit = document.getElementById('submit');
const results = document.getElementById('results');

submit.addEventListener('click', function(e) {
    e.preventDefault();

    // Get values
    const word = document.getElementById('word').value.toLowerCase();
    const text = document.getElementById('text').value.toLowerCase();

    const res = analyzeText(word, text);
    results.style.display = "block";
    results.innerHTML = res;
})

/*
* Calculates the frequency 
* of the word in the text
*/
function analyzeText(word, text) {
    if (word.length == 0 || text.length == 0) { return "Please fill in all the fields." }
    let wordsInText = text.split(" ");
    let wordsMatchingTotal = 0;

    wordsInText.forEach((w) => {
        if (w === word) {
            wordsMatchingTotal++;
        }
    });

    let wordFrequency = parseFloat(((wordsMatchingTotal / wordsInText.length) * 100).toFixed(2));
    return resultString(wordFrequency);
}

/*
* Returns the string with the result
*/
function resultString(freq) {
    return "The word has a frequency of <b>" + freq + "</b> % in the submitted text.";
}