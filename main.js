console.log("welcome to javascript")
console.log("hello world!!!")

// var let contant

var userName = "Darasimi"
let email ="dklezekiel@gmail.com"
var password ="1234"
const gender ="female"
var Status ="student"
var age =14
console.log(userName)
console.log(email)

var userName = "Darasimi shriffdeen"
userName="Darasimi sheriffdeenz"
Status="developer"
console.log(Status)
console.log(userName)
var age =22
console.log(age)
// data types
// promitive data type 
// String
// number
// boolean
// complex data tpe
// object and arrays
// function
// null
// Symbol
var firstName =" Adewale "
var age = 16.7
var isOnline = true
var brain = null
console.log(typeof(brain))
console.log(typeof(isOnline))
console.log(firstName.length)
console.log(firstName[0])
console.log(firstName.charAt(0))
var newFirstname=firstName.trim()
console.log(newFirstname.length)

// index

console.log(firstName.indexOf('e'))
console.log(firstName.lastIndexOf('e'))
let sentence = 'Welcome to appclick'
// console.log(sentence.search('Appclick'))
// console.log(sentence.toUpperCase())
console.log(sentence.indexOf('APPclick'.toLowerCase()))
console.log(sentence.toUpperCase())
var ModifiedSentence = sentence.replace('Welcome' ,'Go')
console.log(ModifiedSentence);
// string concatination
console.log("my name is " + "and i am " + age +" year's old")
// string interpolation
console.log(`my name is ${firstName} and i am ${age} year's old`)
var fav_food ="Rice"
var fav_car = "Benz"
var fav_car_location = "Apete"
console.log(`Mr Bala's favourite food is ${fav_food} and his favourite car spot is ${fav_car} the name of his car name his ${fav_car_location}`)
// let password ='winner'


var number1 = 65
var number2 =32.2
// operators
// arithmetic operators
// + addition
// - subtraction
// * multiplication
// / division
// % floor 
// ** exponential
console.log(2 ** 3)
var number3 =9
console.log(number3)
// var number3 = number3+5
 newNumber=number3 
console.log(newNumber+=6)
console.log(4 != 4)
var number_one =2
var number_two =3
console.log(number_one && number_two==2)
console.log(number_one || number_two===2)
console.log(!(number_two > number_one))
console.log(number_two++)
var age = 18.6668687
// age >= 18 ? console.log('You are eligible'):console.log('not eligible')


console.log(age.toString())
Math.PI
console.log(Math.PI.toPrecision(4))
console.log(Math.ceil(3.142))
console.log(Math.random() *10)
console.log(Math.round(Math.random() *100))
console.log(Math.max(4,2,64))
console.log(Math.E)

//  var Name=prompt('Please Enter Your Name')

// alert(`welcome ${Name}`)
var Food =['Rice','Amala','plantain']
// console.log(Food[1])
// console.log(Food.length)
Food.push('Salad')
console.log(Food)
Food.pop()
console.log(Food)
Food.shift()
console.log(Food)
Food.unshift('Spaghetti')
console.log(Food)
var Drinks =['coke','fanta','sprite','Baileys','Azul']
// console.log(Food.concat(Drinks))
console.log(Drinks.slice(1,4))
Drinks.splice(2,1,['Guiness'])
  console.log(Drinks)
   var goodFootballers =['Rashford','palmer',['cafu','pirlo',['Ronaldo','Messi']]]
console.log(goodFootballers[2][2][1])
// goodFootballers .reverse
// console.log(goodFootballers)
var arrays=['a','b','f','Z','d','A']
console.log(arrays.sort())
// object is not indexed key and values,
var array = []
var objects ={
  name:'Ali',
  occupation:'developer',
  isOnline:true,
  hobbies:['playing ball','cooking']
}
console.log(objects.hobbies[1])
 //date
 const date = new Date()
 console.log(date.getMinutes())
 var seconds = date.getSeconds()
 var minute =date.getMinutes()
 var Hours = date.getHours()
console.log(`${Hours}:${minute}:${seconds}`)
console.log(Hours+ ':'+minute+ ':' + seconds)
// conditionals
//  if and else, switch
// false in javascript [] is false,"" is false,0 is false
//   var age =10
//   if(age > 18){
//     console.log('you are eligible')
//   }
//   else{
//     console.log('you are not eligible')
//   }
// var score = prompt('enter your score')
// var age = prompt('enter your age')
// if(score>=180 && age >=18){
//   alert('you are eligibe for admission')
// }
// else if(score>=150 && age >=16){
//   alert('private school admission')
// }
// else if(age >18 || score >180){
//   alert('college of education')
// }
// else{
//   alert('you are not eligible')
// }
var quiz=alert('Welcome To who Wants To Be A Billoniare ')
var answer=prompt('What Is The Capital Of Oyo state')
var mark =0
if(answer.toLowerCase()== 'ibadan'){
  mark+=2
  alert(`you have earn ${mark} marks`)
}
else{
  alert('Wrong answer')
}
var question_two =prompt('What Is The longest River In The World')
if(question_two.toLowerCase()== 'nile'){
  mark+=2
  alert(`you have earn ${mark} marks`)
}
else{
  alert('Wrong answer')
}