import React from 'react';

function App() {
    // Задание 1
    //Допиши код так, чтобы в переменной positive остались только положительные числа из массива
    const array = [22, 0, -45, 1001, 8, -6, -0.1, 101, 2.5, -55555];

    const positive = array.filter(function (item) {
            if (item >= 0) {return item}
        });


    return (
        <div>
            <h1>{positive}</h1>
        </div>
    )

}

// Задание 2
//Напиши фильтр, который пропустит только те элементы (объекты), у которых свойство error равно false.
// Выведи полученный результат в консоль.

const messages = [
    {message: 'hello', error: true},
    {message: 'javascript', error: false},
    {message: 'intocode', error: true},
    {message: 'react', error: true},
    {message: 'angular', error: false},
    {message: 'es6', error: false},
];

const newObj = messages.filter(function (item) {
    return item.error === false;

})
console.log(newObj);

//Задание 3
// Есть следующий массив:
// Используя метод `.map` создай новый массив, где слова короче пяти символов заменены на звездочку.

const words= ['intocode', 'js', 'react', 'css', 'angular', 'bootstrap', 'html'];
const wordsNew = words.filter(function (item) {
    return item.length < 5;
})
const newWords = words.map(function (item) {
    if (item.length < 5 ) {
        return ("*");
    }
})
console.log(newWords)


//Задача 4
//Измени следующие функцию на стрелочные
const sendMessage = (message) => {
    /*
    * тут какой-то большой код для отправки сообщения
    */
}

const half = (number) => {
    return number / 2;
}

const showConsole = () => {
    console.log('intocode');
}

const concatWords =(first, second) => {
    return first + second;
}



//Задача 5

//Измени следующие функции из стрелочных в обычные

function justText() {
    'intocode'
}

function logging() {
    console.log()
}

function add(x,y) {
    const z = 3;

    return z * x * y;
}

function onlyPositive(number) {
    if(number < 0) {
        return false;
    }

    return true;
}


export default App;