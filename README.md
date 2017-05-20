# introObjectsv2
Second attempt of Objects Problem Set

## Useful Lessons
* method - a function defined within an object
* .replace(what you are replacing, what you're replacing with)
* To loop though an object, us a for-in loop

```
var apartmentStats = {
    occupants: 4,
    apartment_no: "2b",
    structural_integrity: "failing"
}

function listStats(object){
    for (var key in object){
        return object
    }
}
```

----------
### REGEX
```
 var lowerCase = string.toLowerCase()
 var justLetters = lowerCase.replace(/[^A-Za-z\s]/, "") //regex replaces everything except A-Z and a-z
```
