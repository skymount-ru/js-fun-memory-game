document.addEventListener('DOMContentLoaded', () => {
    const cards = [
        {name: 'apple', img: 'images/apple.png'},
        {name: 'cherry', img: 'images/cherry.png'},
        {name: 'corn', img: 'images/corn.png'},
        {name: 'lemon', img: 'images/lemon.png'},
        {name: 'orange', img: 'images/orange.png'},
        {name: 'strawberry', img: 'images/strawberry.png'},
        {name: 'apple', img: 'images/apple.png'},
        {name: 'cherry', img: 'images/cherry.png'},
        {name: 'corn', img: 'images/corn.png'},
        {name: 'lemon', img: 'images/lemon.png'},
        {name: 'orange', img: 'images/orange.png'},
        {name: 'strawberry', img: 'images/strawberry.png'},
    ];

    cards.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    var cardsChosen = []
    var cardsChosenid = []
    var cardsWon = []

    function createBoard() {
        cards.forEach((element, index) => {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/sun.png')
            card.setAttribute('data-id', index)
            card.addEventListener('click', flipCard)
            grid.appendChild(card);
        });
    }

    function checkFormMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenid[0]
        const optionTwoId = cardsChosenid[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            // alert('You found a match')
            cards[optionOneId].setAttribute('src', 'images/tomato.png')
            cards[optionTwoId].setAttribute('src', 'images/tomato.png')
            cardsWon.push(cardsChosen)
        } else {
            // alert('Sorry, try again')
            cards[optionOneId].setAttribute('src', 'images/sun.png')
            cards[optionTwoId].setAttribute('src', 'images/sun.png')
        }
        cardsChosen = []
        cardsChosenid = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cards.length / 2) {
            resultDisplay.textContent = 'Congratulations! You found them all!'
        }
    }

    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cards[cardId].name)
        cardsChosenid.push(cardId)
        this.setAttribute('src', cards[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkFormMatch, 500)
        }
    }

    createBoard()
});
