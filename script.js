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

// Лабораторна робота 7

function showPizzaOffer() {
    document.getElementById("eventResult").textContent =
        "Сьогодні діє акція: при замовленні великої піци напій у подарунок.";
}

let propertyButton = document.getElementById("propertyButton");

propertyButton.onclick = function () {
    document.getElementById("eventResult").textContent =
        "Рекомендація дня: піца Пепероні з томатним соусом і сиром моцарела.";
};

let listenerButton = document.getElementById("listenerButton");

function firstHandler() {
    document.getElementById("eventResult").textContent =
        "Ваше замовлення прийнято. Піца готується.";
}

function secondHandler() {
    alert("Дякуємо за замовлення у піцерії Базіс!");
}

listenerButton.addEventListener("click", firstHandler);
listenerButton.addEventListener("click", secondHandler);

let removeHandlerButton = document.getElementById("removeHandlerButton");

removeHandlerButton.addEventListener("click", function () {
    listenerButton.removeEventListener("click", secondHandler);

    document.getElementById("eventResult").textContent =
        "Додаткове повідомлення після замовлення було скасовано.";
});

let eventBox = document.getElementById("eventBox");

eventBox.addEventListener("mouseover", function () {
    eventBox.classList.add("active");
    eventBox.textContent = "Гаряча піца вже чекає на вас!";
});

eventBox.addEventListener("mouseout", function () {
    eventBox.classList.remove("active");
    eventBox.textContent = "Наведи мишкою, щоб побачити пропозицію";
});

let eventObject = {
    handleEvent(event) {
        document.getElementById("eventResult").textContent =
            "Клік спрацював на блоці пропозиції піцерії.";
    }
};

eventBox.addEventListener("click", eventObject);

let pizzaList = document.getElementById("pizzaList");

pizzaList.onclick = function (event) {
    if (event.target.tagName === "LI") {
        let items = pizzaList.querySelectorAll("li");

        for (let item of items) {
            item.classList.remove("selected");
        }

        event.target.classList.add("selected");

        document.getElementById("eventResult").textContent =
            "Ви обрали піцу: " + event.target.textContent;
    }
};

let pizzaMenu = document.getElementById("pizzaMenu");

pizzaMenu.addEventListener("click", function (event) {
    let action = event.target.dataset.action;

    if (!action) return;

    let result = document.getElementById("menuResult");

    if (action === "pizza") {
        result.innerHTML = "<b>🍕 Піца:</b> Маргарита, Пепероні, Гавайська, Чотири сири.";
    }

    if (action === "drink") {
        result.innerHTML = "<b>🥤 Напої:</b> кола, сік, чай, вода.";
    }

    if (action === "dessert") {
        result.innerHTML = "<b>🍰 Десерти:</b> тірамісу, чизкейк, морозиво.";
    }
});



// Лабораторна робота 8

let mouseArea = document.getElementById("mouseArea");
let mouseInfo = document.getElementById("mouseInfo");

mouseArea.addEventListener("mouseover", function (event) {
    if (!event.target.classList.contains("mouse-card")) return;

    event.target.classList.add("active");

    mouseInfo.textContent =
        "Мишка наведена на елемент: " + event.target.textContent;
});

mouseArea.addEventListener("mouseout", function (event) {
    if (!event.target.classList.contains("mouse-card")) return;

    event.target.classList.remove("active");

    let related = event.relatedTarget;

    if (related && related.classList.contains("mouse-card")) {
        mouseInfo.textContent = "Мишка перейшла на іншу піцу.";
    } else {
        mouseInfo.textContent = "Наведи мишку на піцу.";
    }
});

mouseArea.addEventListener("mouseleave", function () {
    mouseInfo.textContent = "Мишка вийшла за межі блоку з піцами.";
});

let dragPizza = document.getElementById("dragPizza");
let dragArea = document.querySelector(".drag-area");

let shiftX = 0;
let shiftY = 0;
let isDragging = false;

dragPizza.addEventListener("mousedown", function (event) {
    isDragging = true;

    shiftX = event.clientX - dragPizza.getBoundingClientRect().left;
    shiftY = event.clientY - dragPizza.getBoundingClientRect().top;

    dragPizza.style.zIndex = 1000;
});

document.addEventListener("mousemove", function (event) {
    if (!isDragging) return;

    let areaRect = dragArea.getBoundingClientRect();

    let newLeft = event.clientX - areaRect.left - shiftX;
    let newTop = event.clientY - areaRect.top - shiftY;

    if (newLeft < 0) newLeft = 0;
    if (newTop < 0) newTop = 0;

    if (newLeft > dragArea.clientWidth - dragPizza.offsetWidth) {
        newLeft = dragArea.clientWidth - dragPizza.offsetWidth;
    }

    if (newTop > dragArea.clientHeight - dragPizza.offsetHeight) {
        newTop = dragArea.clientHeight - dragPizza.offsetHeight;
    }

    dragPizza.style.left = newLeft + "px";
    dragPizza.style.top = newTop + "px";
});

document.addEventListener("mouseup", function () {
    isDragging = false;
    dragPizza.style.zIndex = 1;
});