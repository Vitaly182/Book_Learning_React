

// Императивное программирование (замена всех пробелов в строке дефисами)

const string_1 = "Restaurants in Hanalei";
let urlFriendly_1 = "";

for (let i = 0; i < string_1.length; i++) {
    if (string_1[i] === " ") {
        urlFriendly_1 += "-";
    } else {
        urlFriendly_1 += string_1[i];
    }
}

console.log(urlFriendly_1);

// Декларативное программирование (замена всех пробелов в строке дефисами)

const string_2 = "Restaurants in Hanalei";
const urlFriendly_2 = string_2.replace(/ /g, "-");

console.log(urlFriendly_2);


// Основные концепции функционального программирования:
// - неизменяемость
// - чистые функции
// - преобразование данных
// - функции высшего порядка
// - рекурсия


// Неизменяемость - вместо изменений исходной структуры данных - создаются измененные копии этих структур данных

let color_lawn_1 = {
    title: "lawn",
    color: "#00FF00",
    rating: 0
};

function rateColor_1(color, rating) {
    color.rating = rating;
    return color;
}
console.log(rateColor_1(color_lawn_1, 5).rating);
console.log(color_lawn_1.rating);


let color_lawn_2 = {
    title: "lawn",
    color: "#00FF00",
    rating: 0
};

const rateColor_2 = function (color, rating) {
    return Object.assign({}, color, { rating: rating });
};
console.log(rateColor_2(color_lawn_2, 5).rating);
console.log(color_lawn_2.rating);


let color_lawn_3 = {
    title: "lawn",
    color: "#00FF00",
    rating: 0
};

const rateColor_3 = (color, rating) => ({
    ...color,
    rating
});
console.log(rateColor_3(color_lawn_3, 5).rating);
console.log(color_lawn_3.rating);



let list_1 = [{ title: "Rad Red" }, { title: "Lawn" }, { title: "Party Pink" }];

const addColor_1 = function (title, colors) {
    colors.push({ title: title });
    return colors;
}
console.log(addColor_1("Glam Green", list_1).length);
console.log(list_1.length);


let list_2 = [{ title: "Rad Red" }, { title: "Lawn" }, { title: "Party Pink" }];

const addColor_2 = (title, array) => array.concat({ title });
console.log(addColor_2("Glam Green", list_2).length);
console.log(list_2.length);


let list_3 = [{ title: "Rad Red" }, { title: "Lawn" }, { title: "Party Pink" }];

const addColor_3 = (title, list_3) => [...list_3, { title }];
console.log(addColor_3("Glam Green", list_3).length);
console.log(list_3.length);


// Чистые функции - функция, которая возвращает значение, вычисленное на основе её аргументов

const frederick = {
    name: "frederick",
    canRead: false,
    canWrite: false
};

const selfEducate = person => ({
    ...person,
    canRead: true,
    canWrite: true
});

console.log(selfEducate(frederick));
console.log(frederick);


// Преобразование данных

const schools_1 = ["Yorktown", "Washington & Liberty", "Wakefield"];

console.log(schools_1.join(", "));

const wSchool = schools_1.filter(school => schools_1[0] === "W");
console.log(wSchool);

const cutSchool = (cut, list) => list.filter(schools_1 => schools_1 !== cut);
console.log(cutSchool("Washington & Liberty", schools_1).join(", "));


// MAP

const highSchools_1 = schools_1.map(school => `${school} High School`);
console.log(highSchools_1.join("\n"));

const highSchools_2 = schools_1.map(school => ({ name: school }));
console.log(highSchools_2);


let schools_2 = [
    { name: "Yorktown" },
    { name: "Stratford" },
    { name: "Washington & Liberty" },
    { name: "Wakefield" }
];

// const editName = (oldName, name, arr) => 
//     arr.map(item => {
//         if (item.name === oldName) {
//             return {
//                 ...item,
//                 name
//             };
//         } else {
//             return item;
//         }
//     });

const editName = (oldName, name, arr) => 
    arr.map(item => (item.name === oldName ? { ...item, name } : item));

let updatedSchools = editName("Stratford", "HB Woodlawn", schools_2);
console.log(updatedSchools[1]);
console.log(schools_2[1]);


const schools_3 = {
    Yorktown: 10,
    "Washington & Liberty": 2,
    Wakefield: 5
};

const schoolArray_3 = Object.keys(schools_3).map(key => ({
    name: key,
    wins: schools_3[key]
}));
console.log(schoolArray_3);


// REDUCE

const ages = [21, 18, 42, 40, 64, 63, 34];

const maxAge = ages.reduce((max, age) => {
    console.log(`${age} > ${max} = ${age > max}`);
    if (age > max) {
        return age;
    } else {
        return max;
    }
}, 0);
console.log("maxAge", maxAge);

const max = ages.reduce((max, value) => (value > max ? value : max), 0);
console.log("max", max);


const colors_1 = [
    {
        id: "xekare",
        title: "rad red",
        rating: 3
    },
    {
        id: "jbwsof",
        title: "big blue",
        rating: 2
    },
    {
        id: "prigbj",
        title: "grizzly grey",
        rating: 5
    },
    {
        id: "ryhbhsl",
        title: "banana",
        rating: 1
    }
];

const hashColors = colors_1.reduce((hash, { id, title, rating }) => {
    hash[id] = { title, rating };
    return hash;
}, {});

console.log(hashColors);


const colors_2 = ["red", "red", "green", "blue", "green"];

const uniqueColors = colors_2.reduce(
    (unique, color) => 
        unique.indexOf(color) !== -1 ? unique : [...unique, color],
    []
);
console.log(uniqueColors);


// Функции высшего порядка

const invokeIf = (condition, fnTrue, fnFalse) =>
    condition ? fnTrue() : fnFalse();

const showWelcome = () => console.log("Welcome!!!");
const showUnauthorized = () => console.log("showUnauthorized!!!");

invokeIf(true, showWelcome, showUnauthorized);
invokeIf(false, showWelcome, showUnauthorized);


// Рекурсия

const countdown_1 = (value, fn) => {
    fn(value);
    return value > 0 ? countdown_1(value - 1, fn) : value;
};
countdown_1(5, value => console.log(value));


const countdown_2 = (value, fn, delay = 500) => {
    fn(value);
    return value > 0
        ? setTimeout(() => countdown_2(value - 1, fn, delay), delay)
        : value;
};
const log_2 = value => console.log(value);
countdown_2(3, log_2);


// Композиция

// const template = "hh:mm:ss tt";
// const clockTime = template
//     .replace("hh", "03")
//     .replace("mm", "33")
//     .replace("ss", "14")
//     .replace("tt", "PM");
// console.log(clockTime);


// const both = compose(
//     civilianHours,
//     appendAMPM
// );


const compose = (...fns) => arg =>
    fns.reduce((composed, f) => f(composed), arg);


// Собираем всё вместе

const oneSecond = () => 1000;
const getCurrentTime = () => new Date();
const clear = () => console.clear();
const log = message => console.log(message);

const serializeClockTime = date => ({
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds()
});

const civilianHours = clockTime => ({
    ...clockTime,
    hours: clockTime.hours > 12 ? clockTime.hours - 12 : clockTime.hours
});

const appendAMPM = clockTime => ({
    ...clockTime,
    ampm: clockTime.hours >= 12 ? "PM" : "AM"
});

const display = target => time => target(time);

const formatClock = format => time =>
    format 
        .replace("hh", time.hours)
        .replace("mm", time.minutes)
        .replace("ss", time.seconds)
        .replace("tt", time.ampm);

const prependZero = key => clockTime => ({
    ...clockTime,
    [key]: clockTime[key] < 10 ? "0" + clockTime[key] : clockTime[key]
});

const convertToCivilianTime = clockTime =>
    compose(
        appendAMPM,
        civilianHours
    )(clockTime);

const doubleDigits = civilianTime =>
    compose(
        prependZero("hours"),
        prependZero("minutes"),
        prependZero("seconds")
    )(civilianTime);

const startTicking = () =>
    setInterval(
        compose(
            clear,
            getCurrentTime,
            serializeClockTime,
            convertToCivilianTime,
            doubleDigits,
            formatClock("hh:mm:ss tt"),
            display(log)
        ),
        oneSecond()
    );

startTicking();





