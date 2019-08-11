//create an array of words
const word = ['Michael Scott','Jim','Dwight','Pam','Creed','Toby', 'Daryl', 'Stanley','Kevin','Dunder Mifflin' ]
//choose word randomly
let randNum = Math.floor (Math.random() * word.length);
let chosenWord = word[randNum];
let rightWord = [];
let wrongWord = [];
let underScore = [];
console.log(chosenWord);
//Dom manipulation
let docUnderScore = document.getElementsByClassName('underscore');
let docRightGuess = document.getElementsByClassName('rightGuess');
let docWrongGuess = document.getElementsByClassName('wrongGuess');

console.log(chosenWord);
//create underscores based on length of word
let generateUnderscore = () => {
    for(let i = 0; i < chosenWord.length; i++) {
        underScore.push('_')
    }
    return underScore;
}
console.log(generateUnderscore());
//get users guess
document.addEventListener('keypress', (event)=>{
    let keyword = String.fromCharCode(event.keycode);
//if user guesses right
    if(chosenWord.indexOf(keyword) > -1){
        console.log(true);
    }
    //add to right words array
    rightWord.push(keyword);
    docUnderScore[0].innerHTML = generateunderScore.join('');
    rightGuess[0].innerHTML = rightGuess.join(''); 
        console.log(rightWord);
    //replace undrtscore with right letter
    underScore [(chosenWord.indexOf(keyword)) = keyword];
        docUnderScore.innerHTML = underScore.join('');
            console.log(underScore);
       
});
//check if guess is right
if(underScore.join('') == chosenWord){
    alert('You Win')
}
else{ wrongWord.push(keyword);
    wrongGuess[0].innerHTML = wrongGuess.join('');
        console.log(wrongWord);
}
//music
var audioElement = document.createElement("audio");
audioElement.setAttribute("src, Assets/music/TheOfficeThemeSong.mp3");
$(".theme-button").on("click", function() {
  audioElement.play();
});
$(".pause-button").on("click", function() {
  audioElement.pause();
});
//if right push to right array
//if wrong push to wrong array