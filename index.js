function shout (string) {
  return string.toUpperCase();
}

function whisper (string) {
  return string.toLowerCase();
}


function logShout(string) {
  string = string.toUpperCase();
  console.log(string);
}

function logWhisper(string) {
  string = string.toLowerCase();
  console.log(string);
}

function sayHiToGrandma(string) {
  if (string === string.toLowerCase()) {
    return "I can't hear you!";
  }
}

function sayHiToGrandma(string) {
  if (string === string.toUpperCase()) {
    return "YES INDEED!";
  }
}

 function sayHiToGrandma(string){
   if(string === "I love you, Grandma."){
     return "I love you, too.";
   }
 }
