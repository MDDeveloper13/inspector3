hideElement("gif");
var stringWithReplacement

onEvent("re", "click", function( ) {
 showElement("gif");
   
  var originalString = getText("t");

// Specify the word you want to replace and the replacement
var wordToReplace = getText("ret");
var replacementWord = getText("pt");

// Using replace with a string (replaces only the first occurrence)
 stringWithReplacement = originalString.replace(wordToReplace, replacementWord);
console.log(stringWithReplacement);

// Output: Hello Universe, world!

// Using replace with a regular expression and the 'g' (global) flag (replaces all occurrences)
var regex = new RegExp(wordToReplace, 'g');
stringWithReplacement = originalString.replace(regex, replacementWord);
console.log(stringWithReplacement);
 setTimeout(function() {
   setText("t",stringWithReplacement);
   hideElement("gif");
 }, 3000);
  
});
onEvent("copy", "click", function( ) {
  
  
  // Function to copy text to clipboard
function copyToClipboard(text) {
    // Create a temporary textarea element
    var textarea = document.createElement("textarea");

    // Set the text content to the provided text
    textarea.value = text;

    // Append the textarea to the document
    document.body.appendChild(textarea);

    // Select the text in the textarea
    textarea.select();

    // Execute the copy command
    document.execCommand('copy');

    // Remove the textarea from the document
    document.body.removeChild(textarea);
}

// Example usage
var myText = stringWithReplacement;
copyToClipboard(myText);

  
});
