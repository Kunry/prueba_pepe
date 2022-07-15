const hacker1 = "Esteban"
console.log("The driver's name is " + hacker1)
const hacker2 = "Pepe"
console.log("The navigator's name is " + hacker2)

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
