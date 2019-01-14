function getYearOfBirth(age) {
    return 2019 - age;
}

function createGreeting(name, age) {
    const yearOfBirth = getYearOfBirth(age);
    return `Hi, my name is William and I'm 5 years old`;
}

const greeting1 = createGreeting();
console.log(greeting1);