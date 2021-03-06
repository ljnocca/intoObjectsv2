// NORMAL MODE ( 0 - 4 )


// Part 0 

// Write a function called flipColor. This function may be 
// used to change the color of a tile in a game. It should 
// take as input an object. If that object's color property
// has the value blue, it should change it to red, and 
// vice-versa.


function flipColor(object){
    if (object['color']==='red'){
        object['color']='blue'
    }
    else if (object['color']==='blue'){
        object['color']='red'
    }
    return object
}

// see test.js for example usage


// Part 1

// Write a function called getFullNames that takes an array 
// of objects with first and last names and returns an array 
// of strings, where each string is a customer's full name.

function getFullNames(array){
    var fullNameArray = []
    for (var i=0; i<array.length; i++){
        var fullName = array[i]['first']+' '+array[i]['last']
        fullNameArray.push(fullName)
    }
    return fullNameArray
}

// see test.js for example usage

// Part 2

// Write a function called generateDog that returns an object which represents a dog.
// The dog object should have attributes like legs, weight and color. The dog *constructor* 
// (which is, almost, what this is) should take a name input, and the dog should receive the 
// assigned name.

// Give the dog a method called .speak(). speak() should receive a string as input and 
// return a new version of that string where the first letter of every word is replaced 
// with the letter 'r'.

function generateDog(stringName){
    var dog = {//create dog object
        name: stringName,
        legs: 4,
        weight: 30,
        color: 'brown',
        speak: function(string){ //create speak method (aka a function inside an object)
        	var stringToArray = string.split(' ') //split words into an array
        	var dogSpeak = '' //start with empty string
        	for (var i = 0; i<stringToArray.length; i++){
        		var updatedDogWord = stringToArray[i]
        		updatedDogWord = updatedDogWord.replace(updatedDogWord[0],'r') //replace first letter of each word with r
        		dogSpeak += updatedDogWord + ' '
        	}
        	return dogSpeak.trim() //return that the string with etra space trimmed   
        }
    }
    return dog //return the dog object
}




// see test.js for example usage


// Part 3

// Write a function pluck() that, given a list of objects, extracts a list of
// the values associated with a given property name.

// var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}]
// pluck(stooges, 'name') should yield the array, ['moe','larry','curly']

function pluck(objList, objKey){ // the two arguments are an array of Objects and the key you want to pull from each one
    var newArray = [] //you will want to return an array of strings
    for (var i = 0; i< objList.length; i++){
        newArray.push(objList[i][objKey]) //push the name of corresponding key-value pairs into the new array   
    }
    return newArray
}
// see test.js for example usage

// Part 4

// Write a function called getCounts that takes a string of text as input and returns
// an object which stores the frequency of each word in the string.

// Note that your counts should NOT be case-sensitive.
function getCounts(string){
    var lowerCase = string.toLowerCase()
    var justLetters = lowerCase.replace(/[^A-Za-z\s]/, "") //regex replaces everything except A-Z and a-z
    var stringArray = justLetters.split(' ') //split into array of words
    stringArray.sort()
    var wordCountObj = {}
    var counter = 1
    for(var i = 0; i<stringArray.length; i++){
        var word = stringArray[i]
        if(stringArray[i]===stringArray[i+1]){
            counter ++
        }
        else{
            wordCountObj[stringArray[i]]=counter
            counter = 1
        }
    }
    return wordCountObj
}

// check test.js for examples of how this function should be used.

// ADVENTURE MODE ( 5 - 8 )

// for these problems you will need to use the for-in loop


// Part 5

// Write a function called reverseObject(). It should take as input an object, 
// and it should output a new object where the keys and values are reversed.


// var object = {
//     occupants: 4,
//     apartment_no: "2b",
//     structural_integrity: "failing"
// }
// reverseObject(object) should yield: 
// {
//   4: 'occupants',
//   2b: 'apartment_no',
//   failing: 'structural_integrity'
// }

function reverseObject(object){
    var newObj = {}
    for(var prop in object){
        newObj[object[prop]] = prop
    }
    return newObj
}

// Part 6

// Write a function called reverseAll(). It should take as input an array of 
// objects, and it should output an array of objects with the keys and values
// reversed.

var users = [{obama: 'president@gmail.com',hobby: 'basketball'},{trump: 'americamoneywin@yahoo.com', hobby:'dealmaking'},{bush: 'jeb!@hotmail.com',hobby:'portraiture'}]
// should yield: [{'president@gmail.com': 'obama',basketball: 'hobby'}, ....]

function reverseAll(array){
    var newArray = []
    for (var i = 0; i<array.length; i++){
        newArray.push(reverseObject(array[i]))
    }
    return newArray
}

// Part 7

// Write a function where() that takes two inputs, a list of objects and 
// a properties object. It should return a new list containing only those
// objects that meet the key-value conditions in the properties object.

var plays = [
    {title: "Cymbeline", author: "Shakespeare", year: 1623},
    {title: "The Tempest", author: "Shakespeare", year: 1623},
    {title: "Hamlet", author: "Shakespeare", year: 1603},
    {title: "A Midsummer Night's Dream", author: "Shakespeare", year: 1600},
    {title: "Macbeth", author: "Shakespeare", year: 1620},
    {title: "Death of a Salesman", author: "Arthur Miller", year: 1949},
    {title: "Two Blind Mice", author: "Samuel and Bella Spewack", year: 1949}
]

