const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const restartButton = document.getElementById('restart-btn')
const questionContainerElement = document.getElementById('question-container')

const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
let shuffledQuestions, currentQuestionIndex
let logo = document.getElementById('logo')


startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(()=> Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()

}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }

        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else{
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else{
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'Koja je najmnogljudnija zemlja na svetu?',
        answers: [
            {text: 'Indija', correct: false},
            {text: 'Kina', correct: true},
            {text: 'Rusija', correct: false},
            {text: 'Amerika', correct: false}
        ]
    }, 
    {
        question: 'Koji je najveci vrh na svetu?',
        answers: [
            {text: 'Mount Everest', correct: true},
            {text: 'Kangchenjunga', correct: false},
            {text: 'Nanga Parbat', correct: false},
            {text: 'Lhotse', correct: false}
        ]
    }, 
    {
        question: 'Koja je najduza reka na svetu?',
        answers: [
            {text: 'Dunav', correct: false},
            {text: 'Nil', correct: false},
            {text: 'Amazon', correct: true},
            {text: 'Tisa', correct: false}
        ]
    },

    {
        question: 'Koja je najbrza zivotinja na svetu?',
        answers: [
            {text: 'Irvas', correct: false},
            {text: 'Gazela', correct: false},
            {text: 'Tigar', correct: false},
            {text: 'Gepard', correct: true}
        ]
    },
    {
        question: 'Koliko udisaja dnevno uradi ljudsko telo?',
        answers: [
            {text: '5000', correct: false},
            {text: '11000', correct: false},
            {text: '28000', correct: true},
            {text: '20000', correct: false}
        ]
    },

    {
        question: 'Ko je osvoji NBA titulu 2020. godine?',
        answers: [
            {text: 'Los Angeles Lakers', correct: true},
            {text: 'Miami Heat', correct: false},
            {text: 'Boston Celtics', correct: false},
            {text: 'Orlando Magic', correct: false}
        ]
    },
    {
        question: 'Koji je glavni grad Portugala?',
        answers: [
            {text: 'Porto', correct: false},
            {text: 'Braga', correct: false},
            {text: 'Lisabon', correct: true},
            {text: 'Koimbra', correct: false}
        ]
    },

    {
        question: 'Koji fudbalski klub ima najvise osvojenih ligi sampiona?',
        answers: [
            {text: 'Barcelona', correct: false},
            {text: 'Real Madrid', correct: true},
            {text: 'Liverpool', correct: false},
            {text: 'Manchester United', correct: false}
        ]
    },
    {
        question: 'Ko je naslikao Monalisu?',
        answers: [
            {text: 'Leonardo DaVinci', correct: true},
            {text: 'Mikelangelo', correct: false},
            {text: 'Salvador Dali', correct: false},
            {text: 'Vincent VanGog', correct: false}
        ]
    },
]