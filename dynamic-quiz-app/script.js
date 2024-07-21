document.addEventListener('DOMContentLoaded', () => {

    document.body.style.backgroundColor = 'gray';
    document.body.style.color = 'white';


    const quizData = [
        {
            question: "What is the capital of France?",
            options: [
                "Paris",
                "London",
                "Berlin",
                "Rome"
            ],
            correctAnswer: "Paris"
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: [
                "Earth",
                "Mars",
                "Venus",
                "Jupiter"
            ],
            correctAnswer: "Mars"
        },
        {
            question: "What is the largest mammal?",
            options: [
                "Elephant",
                "Blue Whale",
                "Giraffe",
                "Hippopotamus"
            ],
            correctAnswer: "Blue Whale"
        },
        {
            question: "Who painted the Mona Lisa?",
            options: [
                "Michelangelo",
                "Leonardo da Vinci",
                "Raphael",
                "Vincent van Gogh"
            ],
            correctAnswer: "Leonardo da Vinci"
        },
        {
            question: "What is the highest mountain in the world?",
            options: [
                "K2",
                "Kangchenjunga",
                "Lhotse",
                "Mount Everest"
            ],
            correctAnswer: "Mount Everest"
        },
        {
            question: "What is the smallest country in the world?",
            options: [
                "Monaco",
                "Nauru",
                "Tuvalu",
                "Vatican City"
            ],
            correctAnswer: "Vatican City"
        },
        {
            question: "What is the largest ocean in the world?",
            options: [
                "Atlantic Ocean",
                "Indian Ocean",
                "Arctic Ocean",
                "Pacific Ocean"
            ],
            correctAnswer: "Pacific Ocean"
        },
        {
            question: "What is the currency of Japan?",
            options: [
                "Yuan",
                "Yen",
                "Won",
                "Rupee"
            ],
            correctAnswer: "Yen"
        },
        {
            question: "Who wrote the Harry Potter series?",
            options: [
                "J.K. Rowling",
                "Stephen King",
                "George R.R. Martin",
                "Neil Gaiman"
            ],
            correctAnswer: "J.K. Rowling"
        },
        {
            question: "What is the chemical symbol for gold?",
            options: [
                "Ag",
                "Au",
                "Fe",
                "Hg"
            ],
            correctAnswer: "Au"
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    // Create a container
    const container = document.createElement('div');
    container.style.maxWidth = '600px';
    container.style.margin = '50px auto';
    container.style.padding = '20px';
    container.style.border = '1px solid #ddd';
    container.style.borderRadius = '5px';
    container.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
    container.style.backgroundColor = '#000';
    container.style.color = '#fff';
    container.style.fontFamily = 'Arial, sans-serif';
    document.body.appendChild(container);
    console.log(container);


    // Create title 
    const title = document.createElement('h1');
    title.textContent = 'Dynamic Quiz App';
    title.style.textAlign = 'center';
    container.appendChild(title);

    // Create a question container
    const questionContainer = document.createElement('div');
    questionContainer.style.marginBottom = '20px';
    container.appendChild(questionContainer);

    // Create a options container
    const optionsContainer = document.createElement('div');
    container.appendChild(optionsContainer);

    // Create a submit button
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    submitButton.style.padding = '10px 20px';
    submitButton.style.border = 'none';
    submitButton.style.backgroundColor = '#007bff';
    submitButton.style.color = '#fff';
    submitButton.style.cursor = 'pointer';
    submitButton.style.borderRadius = '5px';
    submitButton.style.display = 'block';
    submitButton.style.margin = '20px auto';
    container.appendChild(submitButton);

    // Create a result container
    const resultContainer = document.createElement('div');
    resultContainer.style.textAlign = 'center';
    resultContainer.style.marginTop = '20px';
    container.appendChild(resultContainer);


    // Function to load question
    const loadQuestion = () => {
        const currentQuestion = quizData[currentQuestionIndex]; // now contains first question object
        questionContainer.textContent = currentQuestion.question;
        optionsContainer.innerHTML = '';


        currentQuestion.options.forEach((option) => {
            const optionLabel = document.createElement('label');
            optionLabel.style.display = 'block';
            optionLabel.style.marginBottom = '10px';

            const optionInput = document.createElement('input');
            optionInput.type = 'radio';
            optionInput.name = 'option';
            optionInput.value = option;
            optionLabel.style.marginRight = '10px';

            optionLabel.appendChild(optionInput);
            optionLabel.appendChild(document.createTextNode(option));
            optionsContainer.appendChild(optionLabel);

        });
    };

    // Function to check answer
    const checkAnswer = () => {
        const selectedOption = document.querySelector('input[name="option"]:checked');
        console.log(selectedOption);
        if (selectedOption) {
            if (selectedOption.value === quizData[currentQuestionIndex].correctAnswer) {
                score++;
                resultContainer.textContent = 'Correct!';
            } else {
                resultContainer.textContent = 'Incorrect!';
            }

            currentQuestionIndex++;

            if (currentQuestionIndex < quizData.length) {
                loadQuestion();
            } else {
                showResult();
            }
        } else {
            alert('Please select an option.');
        }
    };


    // Function to show result
    const showResult = () => {
        questionContainer.style.display = 'none';
        optionsContainer.style.display = 'none';
        submitButton.style.display = 'none';
        resultContainer.textContent = `Your score is ${score} out of ${quizData.length}!`
    };

    submitButton.addEventListener('click', checkAnswer);

    // Load the first question
    loadQuestion();

});