document.addEventListener('DOMContentLoaded', () => {

    //card options
    const cardArray = [
        {
            name: 'arbok',
            img: 'img/arbok.png'
        },
        {
            name: 'arbok',
            img: 'img/arbok.png'
        },
        {
            name: 'growlithe',
            img: 'img/growlithe.png'
        },
        {
            name: 'growlithe',
            img: 'img/growlithe.png'
        },
        {
            name: 'jigglypuff',
            img: 'img/jigglypuff.png'
        },
        {
            name: 'jigglypuff',
            img: 'img/jigglypuff.png'
        },
        {
            name: 'kangaskhan',
            img: 'img/kangaskhan.png'
        },
        {
            name: 'kangaskhan',
            img: 'img/kangaskhan.png'
        },
        {
            name: 'pikachu',
            img: 'img/pikachu.png'
        },
        {
            name: 'pikachu',
            img: 'img/pikachu.png'
        },
        {
            name: 'ponyta',
            img: 'img/ponyta.png'
        },
        {
            name: 'ponyta',
            img: 'img/ponyta.png'
        }
    ]

    //randomise array
    cardArray.sort(() => 0.5 - Math.random())

   

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []

     //create board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src', 'img/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    //check for match
    function checkForMatch() {
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        
        if (optionOneId === optionTwoId) {
            alert('You found a match!')
            cards[optionOneId].setAttribute('src', 'img/white.png')
            cards[optionTwoId].setAttribute('src', 'img/white.png')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'img/blank.png')
            cards[optionTwoId].setAttribute('src', 'img/blank.png')
            alert('Try again!')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congrats! You caught them all!'
        }
    }

    //flip your card
    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId.name])
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    //invoke function
    createBoard()

})