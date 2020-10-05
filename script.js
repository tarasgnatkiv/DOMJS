// 1. створити список з допомогою роботи з домом, пронумерувати список та вивести всі його значення. Населення відобразити в млн "40 млн". Київ та Україна підсвітити синьо-жовтим кольором.

let countryList = [
    {
        country: "Україна",
        capital: "Київ",
        count: 40000000
    },

    {
        country: "Грузія",
        capital: "Тбілісі",
        count: 10000000
    },

    {
        country: "Великобританія",
        capital: "Лондон",
        count: 100000000
    },

    {
        country: "США",
        capital: "Вашингтон",
        count: 300000000
    }
];






let container = document.getElementById(`country`)
let title = document.createElement(`h1`);
title.innerText = `Country List`;
title.classList.add(`container`);
container.appendChild(title);


let showCounty = () => {
    let countryContainer = document.createElement(`div`);
    countryContainer.classList.add(`countryContainer`)
    for (let i = 0; i < countryList.length; i++) {
        let mainP = document.createElement(`p`);

        let numberSpan = document.createElement(`span`);
        let countrySpan = document.createElement(`span`);
        let capitalSpan = document.createElement(`span`);
        let countSpan = document.createElement(`span`);

        numberSpan.innerText = `${i+1}. `;

        let countryVar = countryList[i].country;
        countrySpan.innerText = `${countryVar} `;
        if(countryVar === `Україна`) {
            countrySpan.classList.add(`ukraine`)
        }

        let capitalVar = countryList[i].capital;
        capitalSpan.innerText = `${capitalVar} `;
        if(capitalVar === `Київ`) {
            capitalSpan.classList.add(`kyiv`)
        }

        let countVar = countryList[i].count;
        countSpan.innerText = `${countVar / 1000000}млн.`;


        mainP.appendChild(numberSpan);
        mainP.appendChild(countrySpan);
        mainP.appendChild(capitalSpan);
        mainP.appendChild(countSpan);


        countryContainer.appendChild(mainP);
    }
    container.appendChild(countryContainer);
}

showCounty();

// 2. Створити список в якому можна буде довільно змінювати колір для айтемів (палітра мінімум з 5 кольорів).

let color = document.getElementById(`color`);
let colorTitle = document.createElement(`h2`);
colorTitle.innerText = `Change color`;
colorTitle.classList.add(`container`);
color.appendChild(colorTitle);

let colorDiv = document.createElement(`div`);
colorDiv.classList.add(`colorDiv`);
color.appendChild(colorDiv);

let buttonRed = document.createElement(`button`);
buttonRed.innerText = `Color Red`;
buttonRed.classList.add(`btn`);
color.appendChild(buttonRed);

let buttonGreen = document.createElement(`button`);
buttonGreen.innerText = `Color Green`;
buttonGreen.classList.add(`btn`);
color.appendChild(buttonGreen);

let buttonBlack = document.createElement(`button`);
buttonBlack.innerText = `Color Black`;
buttonBlack.classList.add(`btn`);
color.appendChild(buttonBlack);

let buttonYellow = document.createElement(`button`);
buttonYellow.innerText = `Color Yellow`;
buttonYellow.classList.add(`btn`);
color.appendChild(buttonYellow);

let buttonPurple = document.createElement(`button`);
buttonPurple.innerText = `Color Purpple`;
buttonPurple.classList.add(`btn`);
color.appendChild(buttonPurple);

buttonRed.onclick = () => {
    colorDiv.className = `colorDiv`;
    colorDiv.classList.add(`red`);
}

buttonGreen.onclick = () => {
    colorDiv.className = `colorDiv`;
    colorDiv.classList.add(`green`);
}

buttonBlack.onclick = () => {
    colorDiv.className = `colorDiv`;
    colorDiv.classList.add(`black`);
}

buttonYellow.onclick = () => {
    colorDiv.className = `colorDiv`;
    colorDiv.classList.add(`yellow`);
}

buttonPurple.onclick = () => {
    colorDiv.className = `colorDiv`;
    colorDiv.classList.add(`purple`);
}