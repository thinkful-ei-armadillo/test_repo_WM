function getYearOfBirth(age) {
    if (age < 0) {
        throw new Error('Age can not be negative');
    }
    return 2019 - age;
}

function createGreeting(name, age) {
    const yearOfBirth = getYearOfBirth(age);
    if (typeof age !== Number) {
        throw new TypeError(NaN);
    } else if (type name !== string) {
        throw new TypeError('Not a valid name')
    } else {
    return `Hi, my name is ${name} and I'm ${age} years old`;
    }
}

try {
    const greeting1 = createGreeting('Michael', -10);
} catch(error) {
    throw new Error('Age not valid');
}


function jediName(firstName, lastName){
    return lastName.slice(0,3) + firstName.slice(0,2);
}

console.log(jediName("Beyonce", "Knowles"));



function beyond(num){
if (num === 0){
    console.log('Stay at home!');
  } else if (num > 0 && isFinite(num) === true){
   console.log('To Infinity');
  } else if (num < 0 && isFinite(num) === true){
   console.log('To Negative Infinity');
  } else {
  console.log('And beyond');
  }
}




function decode(words) {
    let result = [];
    let newArray = words.split(' ');
    for (let i = 0; i < newArray.length; i++) {
      if (newArray[i].charAt(0) === 'a') {
        result.push(newArray[i].charAt(1));
      } else if (newArray[i].charAt(0) === 'b') {
        result.push(newArray[i].charAt(2));
      } else if (newArray[i].charAt(0) === 'c') {
        result.push(newArray[i].charAt(3));
      } else if (newArray[i].charAt(0) === 'd') {
        result.push(newArray[i].charAt(4));
      } else {
        result.push(' ');
      }
    }
    return result.join('');
  }
  
  console.log(decode('craft block argon meter bells brown croon droop'))

  function daysInAMonth(month, leapYear) {
  switch(month) {
    case 'January':
    case 'March':
    case 'May':
    case 'July':
    case 'August':
    case 'October':
    case 'December':
      return `${month} has 31 days`;
      break;
    case 'April':
    case 'June':
    case 'September':
    case 'November':
      return `${month} has 30 days`
    case 'February':
      if (leapYear === true) {
        return `${month} has 29 days`;
      } else {
        return `${month} has 28 days`;
      }
      break;
      default:
        console.log('Must provide a valid month');
  }
}

console.log(daysInAMonth('April', true))

function rockPaperScissors(num) {
  const randomNo = Math.floor(Math.random() * 3) + 1;
  console.log(randomNo)
  if (num < 1 || num > 3) {
    throw console.log('Try again!')
  }
  if (randomNo === num) {
    return 'Tied' 
  }
  if (randomNo === 1) {
    if (num === 2) {
      return 'Paper beats rock. Player wins!'
    } else {
      return 'Rock beats scissors. Computer wins!'
    }
  }
  if (randomNo === 2) {
    if (num === 1) {
      return 'Paper beats rock. Computer wins!'
    } else {
      return 'Scissors beats paper. Player wins!'
    }
  }
  if (randomNo === 3) {
    if (num === 1) {
      return 'Rock beats scissors. Player wins!'
    } else {
      return 'Scissors beats paper. Computer wins!'
    }
  }
}

console.log(rockPaperScissors(1))

