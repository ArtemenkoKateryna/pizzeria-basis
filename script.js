alert("Вітаємо на сайті піцерії Базіс!");

function userDialog() {
    let name = prompt("Як вас звати?");
    let order = confirm("Бажаєте переглянути меню піцерії?");

    if (name === null || name === "") {
        alert("Ім'я не було введено.");
    } else {
        alert("Вітаємо, " + name + "!");
    }

    if (order) {
        alert("Меню можна переглянути на сторінці menu.html");
    } else {
        alert("Ви залишились на головній сторінці.");
    }

    for (let i = 1; i <= 3; i++) {
        console.log("Повідомлення номер " + i);
    }
}

function showDeveloper(lastName, firstName, position = "студентка") {
    alert("Розробник сторінки: " + lastName + " " + firstName + ", посада: " + position);
}

function compareStrings() {
    let first = prompt("Введіть перший рядок:");
    let second = prompt("Введіть другий рядок:");

    if (first.length > second.length) {
        alert("Більший рядок: " + first);
    } else if (second.length > first.length) {
        alert("Більший рядок: " + second);
    } else {
        alert("Рядки однакової довжини.");
    }
}

function changeBackground() {
    let oldColor = document.body.style.backgroundColor;
    document.body.style.backgroundColor = "#ffd08a";

    setTimeout(function () {
        document.body.style.backgroundColor = oldColor;
    }, 30000);
}

function goToMenu() {
    let answer = confirm("Перейти на сторінку меню?");

    if (answer) {
        location.href = "menu.html";
    }
}

function changeText() {
    let element = document.getElementById("jsText");
    element.innerHTML = "Текст було змінено за допомогою innerHTML.";

    let headings = document.querySelectorAll("h2");
    headings[0].textContent = "Оновлена головна сторінка";

    console.log(element.outerHTML);
}

function addElement() {
    let container = document.getElementById("newElements");

    let newParagraph = document.createElement("p");
    let text = document.createTextNode("Новий елемент додано через JavaScript.");

    newParagraph.append(text);
    container.prepend(newParagraph);

    let secondParagraph = document.createElement("p");
    secondParagraph.textContent = "Ще один елемент додано методом after().";

    newParagraph.after(secondParagraph);
}

function removeElement() {
    let container = document.getElementById("newElements");

    if (container.firstChild) {
        container.firstChild.remove();
    } else {
        alert("Немає елементів для видалення.");
    }
}