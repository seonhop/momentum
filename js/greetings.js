const loginFormBlock = document.querySelector(".login-form-block");
const loginInput = loginFormBlock.querySelector("input");
const greeting = document.querySelector(".greeting-text");
const clock = document.querySelector(".clock-text");
const bottomBar = document.querySelector(".bottom-bar");
const todoForm = document.querySelector(".todo-form");
const todoList = document.querySelector(".todo-list");
const weather = document.querySelector(".weather");
const mainPageElems = [greeting, clock, bottomBar, todoForm, todoList, weather];
const mainPageElemsLen = mainPageElems.length;
console.log(mainPageElems.length);
console.log(mainPageElems[0]);

const HIDDEN_CLASSNAME = "--hidden";
const USERNAME_KEY = "username";

function paintMainPage(username, mainPageElems) {
    for (let step = 0; step < mainPageElemsLen; step++) {
        mainPageElems[step].classList.remove(HIDDEN_CLASSNAME);
    }
    const date = new Date();
    const currHour = date.getHours();
    let greetingText;
    if (currHour >= 5 && currHour < 12) {
        greetingText = "Good Morning, ";
    } else if (currHour >= 12 && currHour < 19) {
        greetingText = "Good Afternoon, ";
    } else if (currHour >= 19 && currHour < 23) {
        greetingText = "Good Evening, ";
    } else {
        greetingText = "Good Night, ";
    }
    greeting.innerText = greetingText + username;
}

function onLoginSubmit(event) {
    event.preventDefault();
    loginFormBlock.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    paintMainPage(username, mainPageElems);
    localStorage.setItem(USERNAME_KEY, username);
}

function paintGreetings(username) {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
    loginFormBlock.classList.remove(HIDDEN_CLASSNAME);
    for (let step = 0; step < mainPageElems.length; step++) {
        mainPageElems[step].classList.add(HIDDEN_CLASSNAME);
    }
    loginFormBlock.addEventListener("submit", onLoginSubmit);
} else {
    loginFormBlock.classList.add(HIDDEN_CLASSNAME);
    for (let step = 0; step < mainPageElems.length; step++) {
        mainPageElems[step].classList.remove(HIDDEN_CLASSNAME);
    }
    paintMainPage(savedUsername, mainPageElems);
}
