

// Объявление переменных

// Ключевое слово const

var pizza_1 = true;
pizza_1 = false;
console.log(pizza_1);

const pizza_2 = true;
// pizza_2 = false;   // Assignment to constant variable.

// Ключевое слово let

var topic_1 = "Javascript"

if (topic_1) {
    var topic_1 = "React"
    console.log("block", topic_1);
}

console.log("global", topic_1);


var topic_2 = "Javascript"

if (topic_2) {
    let topic_2 = "React"
    console.log("block", topic_2);
}

console.log("global", topic_2);


// Шаблонные строки

firstName = "Vitaly";
middleName = "Yuw";
lastName = "Smirnov";

console.log(lastName + ", " + firstName + ", " + middleName)

console.log(`${lastName}, ${firstName}, ${middleName}`)

let qty = 15;
let event = "Festival";
let price = 20;
let ticketAgent = "Hove Saad"

const email = `
Hello ${firstName},

Thanks for ordering ${qty} tickets to ${event}

Order Detail
${firstName} ${middleName} ${lastName}
    ${qty} x $${price} = $${qty*price} to ${event}

You can pick your tickets up 30 minutes before the show.

Thanks,

${ticketAgent}
`

console.log(email);


// Создание функций

// Объявление функций

function logCompliment_1() {
    console.log("You're doing great!");
}

logCompliment_1();


// Функциональные выражения

const logCompliment_2 = function () {
    console.log("You're doing great!");
}

logCompliment_2();


// Передача аргументов

const logCompliment_3 = function (firstName) {
    console.log(`You're doing great, ${firstName}`);
};

logCompliment_3("Molly");


const logCompliment_4 = function (firstName, message) {
    console.log(`${firstName}, ${message}`);
};

logCompliment_4("Molly", "you're so cool");


// Возвращаемое значение функции

const createCompliment = function (firstName, message) {
    return `${firstName}, ${message}`;
};
createCompliment("Molly", "you're so cool")
console.log(createCompliment("Molly", "you're so cool"))


// Параметры по умолчанию 

function logActivity_1(name = "Wow", activity = "skiing") {
    console.log(`${name} loves ${activity}`);
}
logActivity_1()
logActivity_1(n="Tui", a="E")


const defaultPerson = {
    name: {
        first: "Shane",
        last: "Pop"
    },
    favActitity: "polo"
};

function logActivity_2(person = defaultPerson) {
    console.log(`${person.name.first} loves ${person.favActitity}`)
}
logActivity_2()


// Стрелочные функции

// Typical <=> Arrow function - example 1
const lordify_1 = function (firstName) {
    return `${firstName} of Canterbury`;
};

console.log(lordify_1("Dale"));
console.log(lordify_1("Gaile"));


const lordify_2 = firstName => `${firstName} of Cant`
console.log(lordify_2("Tom"));


// Typical <=> Arrow function - example 2

const lordify_3 = function(firstName, land) {
    return `${firstName} of ${land}`;
};
console.log(lordify_3("Dale", "Game"));


const lordify_4 = (firstName, land) => `${firstName} of ${land}`;
console.log(lordify_4("Sim", "Dim"));


// Arrow function - example 3

const lordify_5 = (firstName, land) => {
    if (!firstName) {
        throw new Error("A firstName is required to lordify");
    }
    if (!land) {
        throw new Error("A lord must have a land");
    }

    return `${firstName} of ${land}`;
};

console.log(lordify_5("Kelly", "Sonoma"));
// console.log(lordify_5("Kelly")); // A lord must have a land
// console.log(lordify_5("")); // A firstName is required to lordify


// Возврат объектов

// для возврата объектов необходимы круглые скобки

const person = (firstName, lastName) => ({
    first: firstName,
    last: lastName
});

console.log(person("Nik", "Fet"));


// Стрелочные функции и область видимости

const tahoe = {
    mountains: ["Freel", "Rose", "Tallas"],
    print: function (delay = 1000) {
        setTimeout(() => {
            console.log(this);
            console.log(this.mountains.join(", "));
        }, delay);
    }
};

tahoe.print();


// Деструктуризация объектов

const sandwich_1 = {
    bread: "dutch crunch",
    meat: "tuna",
    cheese: "swiss",
    toppings: ["lettuce", "tomato", "mustard"]
};
const { bread_1, meat_1 } = sandwich_1;
console.log(bread_1, meat_1)


const sandwich_2 = {
    bread: "dutch crunch",
    meat: "tuna",
    cheese: "swiss",
    toppings: ["lettuce", "tomato", "mustard"]
}
let { bread_2, meat_2 } = sandwich_2;
bread_2 = "garlic";
meat_2 = "turkey";
console.log(bread_2);
console.log(meat_2);
console.log(sandwich_2.bread, sandwich_2.meat);


// Деструктуризация массивов

const [firstAnimal] = ["Horse", "Mouse", "Cat"]
console.log(firstAnimal);

const [, , thirdAnimal] = ["Horse", "Mouse", "Cat"]
console.log(thirdAnimal);


// Расширение объектного литерала

const name_1 = "Tallac";
const elevation_1 = 9738;
const funHike_1 = { name_1, elevation_1};
console.log(funHike_1);


const name_2 = "Tallac";
const elevation_2 = 9738;
const print_2 = function() {
    console.log(`Mt. ${this.name} is ${this.elevation_2} feet tall`);
}
const funHike_2 = { name_2, elevation_2, print_2}
funHike_2.print_2();


// Оператор распространения

const peaks = ["tall", "rals"]
const canyo = ['ward', 'blac']
const tartr = [...peaks, ...canyo]
console.log(tartr.join(", "));


const peaks_1 = ["Tallas", "Ralston", "Rose"]
const [last_1] = peaks_1.reverse();
console.log(last_1);
console.log(peaks_1.join(", "));


const peaks_2 = ["Tallas", "Ralston", "Rose"]
const [last_2] = [...peaks_2].reverse();
console.log(last_2);
console.log(peaks_2.join(", "));


const lakes = ["Donner", "Marlette", "Fallen", "Cascade"]
const [first, ...other] = lakes;
console.log(other.join(", "));


function directions(...args) {
    let [start, ...remaining] = args;
    let [finish, ...stops] = remaining.reverse();

    console.log(`
    Drive through ${args.length} towns.

    Start in ${start}.

    The destination is ${finish}.

    Stopping ${stops.length} times in between
    `);
}
directions("Truckee", "Tahoe City", "Sunnyside", "Homewood", "Tahoma")


const morning = {
    breakfast: "oatmeal",
    lunch: "peanut butter and jelly"
};
const dinner = "mac and cheese";
const backpackingMeals = {
    ...morning,
    dinner
};
console.log(backpackingMeals);


// Простые промисы и функция fetch

console.log(fetch("https://api.randomuser.me/?nat=US&results=1"));


fetch("https://api.randomuser.me/?nat=US&results=1")
    .then(res => res.json())
    .then(json => json.results)
    .then(console.log)
    .catch(console.error);


// Async await

const getFakePerson = async () => {
    try {
        let res = await fetch("https://api.randomuser.me/?nat=US&results=1");
        let { results } = await res.json();
        console.log(results);
    } catch (error) {
        console.error(error);
    }
};
getFakePerson();


// Сборка промисов

const getPeople = count =>
    new Promise((resolves, rejects) => {
        const api = `https://api.randomuser.me/?nat=US&results=${count}`
        const request = new XMLHttpRequest();
        request.open("GET", api);
        request.onload = () =>
            request.status === 200
                ? resolves(JSON.parse(request.response).results)
                : rejects(Error(request.statusText));
        request.onerror = err => rejects(err);
        request.send();
    });

getPeople(5)
    .then(members => console.log(members))
    .catch(error => console.error(`getPeople failed: ${error.message}`))


// Классы


class Vacation {
    constructor(destination, length) {
        this.destination = destination;
        this.length = length;
    }

    print() {
        console.log(`${this.destination} will take ${this.length} days.`);
    }
}

const trip_1 = new Vacation("Santiago", 7);
trip_1.print();


class Expedition extends Vacation {
    constructor(destination, length, gear) {
        super(destination, length);
        this.gear = gear;
    }

    print() {
        super.print();
        console.log(`Bring your ${this.gear.join(" and your ")}`);
    }
}

const trip_2 = new Expedition("Mt. Whitney", 3, [
    "sunglasses",
    "prayer flags",
    "camera"
]);

trip_2.print();



