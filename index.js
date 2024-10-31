let raceNumber = Math.floor(Math.random() * 1000);

let isRegisteredEarly = false;

let age = 26;

if (age > 18 && isRegisteredEarly === true) {
raceNumber += 1000;
}

if (age > 18 && isRegisteredEarly === true) {
console.log('You will start at 9:30am')
console.log(`Your race number ${raceNumber}`)
} else if (age > 18 && isRegisteredEarly === false) {
    console.log('You will start at 11am')
    console.log(`Your race number ${raceNumber}`)   
} else if (age <= 18) {
    console.log('You will start at 12:30pm')
    console.log(`Your race number ${raceNumber}`) 

}