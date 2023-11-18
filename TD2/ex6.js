
// Code to make sure the user interduces a 6 characters long string
// Commented to avoid using an HTML Page because nodejs doesn't support 
// prompts without using libs
// do {
//     var ch = prompt("Write a string with 6 characters at least")
// } while(ch.length < 6)

// Example that works
// ch = "JavaScript"
//Examlple that doesn't work
ch = "java"


if (ch.endsWith("Script"))
    console.log("The string ends with the word 'Script'");
else
    console.log("The string doesn't end with the word 'Script'");