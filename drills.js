function getYearOfBirth(age) {
    if (age < 0) {
        throw new Error('Age can not be negative');
    }
    return 2019 - age;
}

function createGreeting(name, age) {
    const yearOfBirth = getYearOfBirth(age);
    return `Hi, my name is William and I'm 5 years old`;
}

try {
    const greeting1 = createGreeting('Michael', -10);
} catch(error) {
    throw new Error('Age not valid');
}