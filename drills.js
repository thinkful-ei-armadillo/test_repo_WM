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

