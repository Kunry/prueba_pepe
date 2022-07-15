let hacker1 = "Esteban"
console.log("The driver's name is " + hacker1)
let hacker2 = "Esteban"
console.log("The navigator's name is " + hacker2)

let palabraCorta = ""
if (hacker1.length < hacker2.length){
  palabraCorta = hacker1
}else{ 
  palabraCorta = hacker2
}
 
for(let index = 0; index<=palabraCorta.length;index++){
  if (hacker1[index]>hacker2[index]){
  console.log("Yo, the navigator goes first definitely")
    break
} else if (hacker1[index]<hacker2[index]){
  console.log("The driver's name goes first")
    break
} else if (index===palabraCorta.length){
    console.log("What?! You both have the same name?")
}
}

/*
if(hacker1.length > hacker2.length) {
  console.log("The driver has the longest name, it has " + hacker1.length + " characters.")  
} else if (hacker1.length < hacker2.length) {
  console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.")
} else {
  console.log("Wow, you both have equally long names, " + hacker1.length + " characters.")
}


const number = 4;
if (number%3==0 && number%5==0) {
  console.log("Ironhack")
} else if (number%3==0){
  console.log("Iron")
} else if (number%5==0){
  console.log("Hack")
} else {
  console.log("Nada")
}


const j = 'j'
const p = 'p'
const o = 'o'

let newWord = ''

/*newWord = j
newWord = newWord + p
console.log(newWord)
newWord = newWord + o
console.log(newWord)*/

let hola = hacker2.toUpperCase().split("")
/*

for(let index= 0;index < hola.length; index++){
 if(index = 0){
   newWord = newWord + hola[index]
 } else{
   newWord = newWord + " " + hola[index]
 }
} 
*/
//console.log(newWord)

let newWord2 = ""
for(let index = hola.length - 1; index >= 0; index--){
  newWord2 = newWord2 + hola[index]
}
console.log(newWord2)

let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut ullamcorper leo. Aenean tempor cursus mauris, a porttitor nunc mollis vitae. Duis eleifend aliquet quam, non congue mi fringilla nec. Proin at dignissim lorem. Mauris ullamcorper porta orci. Nam finibus viverra lectus et fringilla. Sed congue, eros nec scelerisque semper, justo ex ultrices erat, non efficitur turpis diam nec magna. Duis dignissim sagittis est ut fermentum. Aliquam vel gravida justo, vel tempor dui. Etiam fringilla odio diam, ut rutrum eros tempus vel. Maecenas rutrum metus eget libero auctor mattis. Nam viverra, felis ac lobortis ullamcorper, sapien tortor vehicula metus, ac accumsan quam dolor nec mauris. Morbi cursus lectus vel mauris faucibus fringilla. Integer a lacus laoreet, pharetra diam ut, egestas lorem. Morbi ullamcorper, sem vitae dictum aliquam, ante libero aliquam ligula, nec pulvinar arcu odio et tortor. Suspendisse varius non ligula eu ultrices. Sed pulvinar, orci vitae dignissim bibendum, lectus magna finibus purus, vel pretium diam sapien venenatis quam. Donec pulvinar quis velit sed pulvinar. Curabitur cursus ullamcorper tortor interdum vestibulum. Integer elementum quam sit amet dui dignissim, quis efficitur libero commodo. Pellentesque egestas sem et nunc dapibus egestas. Praesent magna nunc, tempor id interdum non, euismod id justo. Mauris sollicitudin ante id leo convallis auctor. Aliquam tortor augue, pellentesque in aliquam gravida, dapibus non dui. Donec lacus urna, elementum id erat nec, venenatis malesuada nisi. Nam tincidunt nunc sit amet tempor fermentum. Vivamus eu elit vel massa venenatis lobortis. Cras vehicula nisl aliquet, tincidunt arcu sit amet, vulputate nisi. Sed mollis quam a velit bibendum imperdiet. Donec aliquet ornare massa quis vestibulum. Morbi a aliquam lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec rutrum elit ac ex vulputate imperdiet. Maecenas nec mauris ultricies, feugiat velit nec, vehicula dolor. Mauris elementum lectus tellus, vel fermentum est lobortis ac. Curabitur non quam vitae tellus semper vulputate eleifend sed sem. Donec et enim ac sem bibendum eleifend. Ut accumsan vel dolor gravida congue."

let words = text.split(" ")
console.log(words.length)

let count = 0

for (index = 0; index < words.length; index++){
  if (words[index] === "et"){
    count = count + 1
  } 
}

console.log(count)

let phraseToCheck = "Was it a car or a cat I saw?"
let phraseToCheck2 = phraseToCheck.toUpperCase().split(" ").join("")
let newPhrase = ""

for(let index = 0; index < phraseToCheck2.length; index++){
   if("ABCDEFGHIJKLMNÑOPQRSTUVWXYZ".indexOf(phraseToCheck2[index]) != -1){
    newPhrase = newPhrase + phraseToCheck2[index]
  }
}

let phraseReversed = ""
for(let index = phraseToCheck2.length - 1; index >= 0; index--){
   if("ABCDEFGHIJKLMNÑOPQRSTUVWXYZ".indexOf(phraseToCheck2[index]) != -1){
    phraseReversed = phraseReversed + phraseToCheck2[index]
  }
}

if (phraseReversed === newPhrase){
  console.log("Palindrome")
} else {
  console.log("Not palindrome")
}
