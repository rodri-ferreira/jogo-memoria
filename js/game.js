const grid = document.querySelector('.grid')


const monkeys = [
    '1.png',
    '3.png',
    '4.png',
    '5.png',
    '6.png',
    '7.png',
    '8.png',
    '9.png',
    '10.png',
    '11.png'
]

let firstCard = ''; 
let secondCard = '';

const checkEndGame = () => {
    const disabledCards = document.querySelectorAll('.disabled-card');

    if(disabledCards.length == 20) {
        alert('Parabéns chefe, tu conseguiu');
    }
}

const createElement = (tag, className) => {
    const element = document.createElement(tag)
    element.className = className;
    return element
}

const checkCards = () => {
    const firstMonkey = firstCard.getAttribute('data-monkey')
    const secondtMonkey = secondCard.getAttribute('data-monkey');

    if(firstMonkey == secondtMonkey) {

        firstCard.firstChild.classList.add('disabled-card');
        secondCard.firstChild.classList.add('disabled-card');

        firstCard = ''
        secondCard = ''

        checkEndGame();

    } else {

        setTimeout(() => {
            firstCard.classList.remove('reveal-card')
            secondCard.classList.remove('reveal-card')

            firstCard = ''
            secondCard = ''

        }, 500)

    }
}

const revielCard = ({target}) => {

    if(target.parentNode.className.includes('reveal-card')) {
        return;
    }

    if(firstCard == '') {
        target.parentNode.classList.add('reveal-card');
        firstCard = target.parentNode;
    } else if(secondCard == ''){
        target.parentNode.classList.add('reveal-card');
        secondCard = target.parentNode;

        checkCards();
    }

}

const createCard = (monkey) => {

    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('../img/${monkey}')`

    card.appendChild(front);
    card.appendChild(back);

    grid.appendChild(card);
    card.setAttribute('data-monkey', monkey)

    card.addEventListener('click', revielCard)

    return card
}

const loadGame = () => {

    const duplicateMonkeys = [ ...monkeys, ...monkeys];

    const shuffledArray = duplicateMonkeys.sort(() => Math.random() - 0.5);


    shuffledArray.forEach((monkey) => {
        const card = createCard(monkey);
        grid.appendChild(card)
    });

}

loadGame()