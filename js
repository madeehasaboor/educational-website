// DOM Elements
const modal = document.getElementById('gameModal');
const gameContainer = document.getElementById('gameContainer');
const closeBtn = document.querySelector('.close');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

// Smooth scrolling function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Navigation toggle for mobile
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close modal
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Subject opening function
function openSubject(subject) {
    const subjects = {
        math: {
            title: 'Mathematics',
            content: `
                <div class="subject-lesson">
                    <h2>Let's Learn Math! 🔢</h2>
                    <div class="lesson-content">
                        <h3>Today's Topic: Addition</h3>
                        <p>Addition is when we put numbers together to make a bigger number!</p>
                        <div class="example">
                            <h4>Example:</h4>
                            <p>2 + 3 = 5</p>
                            <p>We have 2 apples and add 3 more apples. Now we have 5 apples!</p>
                        </div>
                        <div class="practice">
                            <h4>Practice:</h4>
                            <p>What is 4 + 2?</p>
                            <button onclick="checkAnswer(6)" class="btn btn-primary">6</button>
                            <button onclick="checkAnswer(5)" class="btn btn-secondary">5</button>
                            <button onclick="checkAnswer(7)" class="btn btn-secondary">7</button>
                        </div>
                    </div>
                </div>
            `
        },
        science: {
            title: 'Science',
            content: `
                <div class="subject-lesson">
                    <h2>Amazing Science! 🔬</h2>
                    <div class="lesson-content">
                        <h3>Today's Topic: Animals</h3>
                        <p>Animals are living things that can move, eat, and grow!</p>
                        <div class="example">
                            <h4>Fun Facts:</h4>
                            <ul>
                                <li>🐘 Elephants are the largest land animals</li>
                                <li>🐝 Bees make honey from flower nectar</li>
                                <li>🦋 Butterflies taste with their feet!</li>
                            </ul>
                        </div>
                        <div class="practice">
                            <h4>Quiz:</h4>
                            <p>Which animal can fly?</p>
                            <button onclick="checkAnswer('bird')" class="btn btn-primary">Bird</button>
                            <button onclick="checkAnswer('fish')" class="btn btn-secondary">Fish</button>
                            <button onclick="checkAnswer('cat')" class="btn btn-secondary">Cat</button>
                        </div>
                    </div>
                </div>
            `
        },
        english: {
            title: 'English Language! 📚',
            content: `
                <div class="subject-lesson">
                    <h2>English Language! 📚</h2>
                    <div class="lesson-content">
                        <h3>Today's Topic: The Alphabet</h3>
                        <p>The alphabet has 26 letters from A to Z!</p>
                        <div class="example">
                            <h4>Let's Sing:</h4>
                            <p>A, B, C, D, E, F, G...</p>
                            <p>H, I, J, K, L, M, N, O, P...</p>
                            <p>Q, R, S, T, U, V...</p>
                            <p>W, X, Y, Z!</p>
                        </div>
                        <div class="practice">
                            <h4>Practice:</h4>
                            <p>What letter comes after A?</p>
                            <button onclick="checkAnswer('B')" class="btn btn-primary">B</button>
                            <button onclick="checkAnswer('C')" class="btn btn-secondary">C</button>
                            <button onclick="checkAnswer('D')" class="btn btn-secondary">D</button>
                        </div>
                    </div>
                </div>
            `
        },
        geography: {
            title: 'Geography',
            content: `
                <div class="subject-lesson">
                    <h2>World Geography! 🌍</h2>
                    <div class="lesson-content">
                        <h3>Today's Topic: Continents</h3>
                        <p>There are 7 continents on Earth!</p>
                        <div class="example">
                            <h4>The Continents:</h4>
                            <ul>
                                <li>🌍 Africa</li>
                                <li>🌏 Asia</li>
                                <li>🌎 Europe</li>
                                <li>🌎 North America</li>
                                <li>🌎 South America</li>
                                <li>🌏 Australia</li>
                                <li>🌍 Antarctica</li>
                            </ul>
                        </div>
                        <div class="practice">
                            <h4>Quiz:</h4>
                            <p>Which continent is the largest?</p>
                            <button onclick="checkAnswer('Asia')" class="btn btn-primary">Asia</button>
                            <button onclick="checkAnswer('Africa')" class="btn btn-secondary">Africa</button>
                            <button onclick="checkAnswer('Europe')" class="btn btn-secondary">Europe</button>
                        </div>
                    </div>
                </div>
            `
        },
        art: {
            title: 'Art & Music',
            content: `
                <div class="subject-lesson">
                    <h2>Creative Arts! 🎨</h2>
                    <div class="lesson-content">
                        <h3>Today's Topic: Colors</h3>
                        <p>Colors make our world beautiful and fun!</p>
                        <div class="example">
                            <h4>Primary Colors:</h4>
                            <div class="color-boxes">
                                <div class="color-box" style="background: red;">Red</div>
                                <div class="color-box" style="background: blue;">Blue</div>
                                <div class="color-box" style="background: yellow;">Yellow</div>
                            </div>
                        </div>
                        <div class="practice">
                            <h4>Activity:</h4>
                            <p>Mix red and blue to make...</p>
                            <button onclick="checkAnswer('Purple')" class="btn btn-primary">Purple</button>
                            <button onclick="checkAnswer('Green')" class="btn btn-secondary">Green</button>
                            <button onclick="checkAnswer('Orange')" class="btn btn-secondary">Orange</button>
                        </div>
                    </div>
                </div>
            `
        },
        history: {
            title: 'History',
            content: `
                <div class="subject-lesson">
                    <h2>Amazing History! 🏛️</h2>
                    <div class="lesson-content">
                        <h3>Today's Topic: Ancient Egypt</h3>
                        <p>Ancient Egypt was a civilization that lived thousands of years ago!</p>
                        <div class="example">
                            <h4>Fun Facts:</h4>
                            <ul>
                                <li>🏺 They built huge pyramids</li>
                                <li>👑 They had pharaohs as kings</li>
                                <li>📜 They wrote in hieroglyphics</li>
                                <li>🐪 They lived near the Nile River</li>
                            </ul>
                        </div>
                        <div class="practice">
                            <h4>Quiz:</h4>
                            <p>What did ancient Egyptians build?</p>
                            <button onclick="checkAnswer('Pyramids')" class="btn btn-primary">Pyramids</button>
                            <button onclick="checkAnswer('Castles')" class="btn btn-secondary">Castles</button>
                            <button onclick="checkAnswer('Bridges')" class="btn btn-secondary">Bridges</button>
                        </div>
                    </div>
                </div>
            `
        }
    };

    if (subjects[subject]) {
        gameContainer.innerHTML = subjects[subject].content;
        modal.style.display = 'block';
    }
}

// Game functions
function startGame(gameType) {
    const games = {
        'math-quiz': createMathQuiz,
        'word-search': createWordSearch,
        'memory-game': createMemoryGame,
        'spelling-bee': createSpellingBee
    };

    if (games[gameType]) {
        games[gameType]();
        modal.style.display = 'block';
    }
}

function createMathQuiz() {
    const questions = [
        { question: 'What is 2 + 3?', answer: 5, options: [5, 6, 4, 7] },
        { question: 'What is 4 + 2?', answer: 6, options: [6, 5, 7, 8] },
        { question: 'What is 1 + 5?', answer: 6, options: [6, 5, 7, 4] }
    ];

    let currentQuestion = 0;
    let score = 0;

    function showQuestion() {
        const q = questions[currentQuestion];
        const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);
        
        gameContainer.innerHTML = `
            <div class="game-quiz">
                <h2>Math Quiz! 🔢</h2>
                <div class="quiz-progress">Question ${currentQuestion + 1} of ${questions.length}</div>
                <div class="quiz-score">Score: ${score}</div>
                <div class="quiz-question">
                    <h3>${q.question}</h3>
                    <div class="quiz-options">
                        ${shuffledOptions.map(option => 
                            `<button onclick="checkQuizAnswer(${option})" class="btn btn-primary">${option}</button>`
                        ).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    window.checkQuizAnswer = function(answer) {
        if (answer === questions[currentQuestion].answer) {
            score++;
            showMessage('Correct! 🎉', 'success');
        } else {
            showMessage('Try again! 💪', 'error');
        }
        
        setTimeout(() => {
            currentQuestion++;
            if (currentQuestion < questions.length) {
                showQuestion();
            } else {
                showResults();
            }
        }, 1000);
    };

    function showResults() {
        gameContainer.innerHTML = `
            <div class="game-results">
                <h2>Quiz Complete! 🎊</h2>
                <div class="results-score">Your Score: ${score} out of ${questions.length}</div>
                <div class="results-message">
                    ${score === questions.length ? 'Perfect! You\'re a math genius! 🌟' : 
                      score >= questions.length * 0.7 ? 'Great job! Keep practicing! 👍' : 
                      'Good try! Practice makes perfect! 💪'}
                </div>
                <button onclick="startGame('math-quiz')" class="btn btn-primary">Play Again</button>
                <button onclick="modal.style.display='none'" class="btn btn-secondary">Close</button>
            </div>
        `;
    }

    showQuestion();
}

function createWordSearch() {
    const words = ['CAT', 'DOG', 'BIRD', 'FISH'];
    const grid = [
        ['C', 'A', 'T', 'X'],
        ['D', 'O', 'G', 'Y'],
        ['B', 'I', 'R', 'D'],
        ['F', 'I', 'S', 'H']
    ];

    gameContainer.innerHTML = `
        <div class="word-search">
            <h2>Word Search! 🔍</h2>
            <p>Find these words: ${words.join(', ')}</p>
            <div class="word-grid">
                ${grid.map(row => 
                    `<div class="grid-row">
                        ${row.map(cell => `<div class="grid-cell">${cell}</div>`).join('')}
                    </div>`
                ).join('')}
            </div>
            <div class="word-list">
                <h3>Words to find:</h3>
                ${words.map(word => `<span class="word-item">${word}</span>`).join('')}
            </div>
            <button onclick="modal.style.display='none'" class="btn btn-primary">Close</button>
        </div>
    `;
}

function createMemoryGame() {
    const cards = ['🐶', '🐱', '🐰', '🐼', '🐨', '🐯', '🦁', '🐸'];
    const gameCards = [...cards, ...cards].sort(() => Math.random() - 0.5);
    let flippedCards = [];
    let matchedPairs = 0;

    function createCard(index) {
        return `
            <div class="memory-card" onclick="flipCard(${index})" data-index="${index}">
                <div class="card-front">❓</div>
                <div class="card-back">${gameCards[index]}</div>
            </div>
        `;
    }

    gameContainer.innerHTML = `
        <div class="memory-game">
            <h2>Memory Game! 🧠</h2>
            <div class="memory-grid">
                ${gameCards.map((_, index) => createCard(index)).join('')}
            </div>
            <div class="memory-info">
                <p>Find matching pairs of animals!</p>
                <p>Matched: ${matchedPairs} / ${cards.length}</p>
            </div>
            <button onclick="modal.style.display='none'" class="btn btn-primary">Close</button>
        </div>
    `;

    window.flipCard = function(index) {
        const card = document.querySelector(`[data-index="${index}"]`);
        if (flippedCards.length < 2 && !card.classList.contains('flipped') && !card.classList.contains('matched')) {
            card.classList.add('flipped');
            flippedCards.push({ index, value: gameCards[index] });

            if (flippedCards.length === 2) {
                setTimeout(checkMatch, 1000);
            }
        }
    };

    function checkMatch() {
        const [card1, card2] = flippedCards;
        if (card1.value === card2.value) {
            document.querySelector(`[data-index="${card1.index}"]`).classList.add('matched');
            document.querySelector(`[data-index="${card2.index}"]`).classList.add('matched');
            matchedPairs++;
        } else {
            document.querySelector(`[data-index="${card1.index}"]`).classList.remove('flipped');
            document.querySelector(`[data-index="${card2.index}"]`).classList.remove('flipped');
        }
        flippedCards = [];
    }
}

function createSpellingBee() {
    const words = [
        { word: 'CAT', hint: 'A furry pet that says meow' },
        { word: 'DOG', hint: 'A friendly pet that says woof' },
        { word: 'SUN', hint: 'The bright star in the sky' }
    ];
    let currentWordIndex = 0;

    function showWord() {
        const currentWord = words[currentWordIndex];
        gameContainer.innerHTML = `
            <div class="spelling-bee">
                <h2>Spelling Bee! 📝</h2>
                <div class="spelling-progress">Word ${currentWordIndex + 1} of ${words.length}</div>
                <div class="spelling-hint">
                    <h3>Hint:</h3>
                    <p>${currentWord.hint}</p>
                </div>
                <div class="spelling-input">
                    <input type="text" id="spellingInput" placeholder="Type the word..." maxlength="${currentWord.word.length}">
                    <button onclick="checkSpelling()" class="btn btn-primary">Check</button>
                </div>
                <div class="spelling-result" id="spellingResult"></div>
                <button onclick="modal.style.display='none'" class="btn btn-secondary">Close</button>
            </div>
        `;
    }

    window.checkSpelling = function() {
        const input = document.getElementById('spellingInput');
        const result = document.getElementById('spellingResult');
        const userAnswer = input.value.toUpperCase();
        const correctWord = words[currentWordIndex].word;

        if (userAnswer === correctWord) {
            result.innerHTML = '<p class="correct">Correct! 🎉</p>';
            setTimeout(() => {
                currentWordIndex++;
                if (currentWordIndex < words.length) {
                    showWord();
                } else {
                    showSpellingResults();
                }
            }, 1500);
        } else {
            result.innerHTML = `<p class="incorrect">Try again! The word is ${correctWord}</p>`;
        }
    };

    function showSpellingResults() {
        gameContainer.innerHTML = `
            <div class="spelling-results">
                <h2>Spelling Bee Complete! 🎊</h2>
                <p>Great job practicing your spelling!</p>
                <button onclick="startGame('spelling-bee')" class="btn btn-primary">Play Again</button>
                <button onclick="modal.style.display='none'" class="btn btn-secondary">Close</button>
            </div>
        `;
    }

    showWord();
}

// Activity functions
function openActivity(activity) {
    const activities = {
        art: {
            title: 'Art Project',
            content: `
                <div class="activity-lesson">
                    <h2>Let's Draw a Rainbow! 🌈</h2>
                    <div class="activity-steps">
                        <h3>Step 1:</h3>
                        <p>Draw a curved line for the rainbow</p>
                        <h3>Step 2:</h3>
                        <p>Add 7 colors: Red, Orange, Yellow, Green, Blue, Indigo, Purple</p>
                        <h3>Step 3:</h3>
                        <p>Add clouds at the ends</p>
                        <h3>Step 4:</h3>
                        <p>Color your rainbow!</p>
                    </div>
                    <button onclick="modal.style.display='none'" class="btn btn-primary">Close</button>
                </div>
            `
        },
        science: {
            title: 'Science Experiment',
            content: `
                <div class="activity-lesson">
                    <h2>Rainbow in a Glass! 🌈</h2>
                    <div class="activity-steps">
                        <h3>Materials needed:</h3>
                        <ul>
                            <li>Clear glass</li>
                            <li>Water</li>
                            <li>Food coloring</li>
                            <li>Sugar</li>
                        </ul>
                        <h3>Steps:</h3>
                        <ol>
                            <li>Fill the glass with water</li>
                            <li>Add different colors of food coloring</li>
                            <li>Add sugar and stir</li>
                            <li>Watch the colors mix!</li>
                        </ol>
                    </div>
                    <button onclick="modal.style.display='none'" class="btn btn-primary">Close</button>
                </div>
            `
        },
        music: {
            title: 'Music & Rhymes',
            content: `
                <div class="activity-lesson">
                    <h2>Sing Along! 🎵</h2>
                    <div class="music-content">
                        <h3>Twinkle Twinkle Little Star</h3>
                        <div class="lyrics">
                            <p>Twinkle, twinkle, little star,</p>
                            <p>How I wonder what you are!</p>
                            <p>Up above the world so high,</p>
                            <p>Like a diamond in the sky.</p>
                        </div>
                        <div class="music-note">🎵 🎶 🎵 🎶</div>
                    </div>
                    <button onclick="modal.style.display='none'" class="btn btn-primary">Close</button>
                </div>
            `
        },
        physical: {
            title: 'Physical Activities',
            content: `
                <div class="activity-lesson">
                    <h2>Let's Move! 💪</h2>
                    <div class="activity-steps">
                        <h3>Animal Exercise:</h3>
                        <ul>
                            <li>🐸 Frog jumps - Jump like a frog</li>
                            <li>🐘 Elephant walk - Walk with big steps</li>
                            <li>🦋 Butterfly dance - Flap your arms</li>
                            <li>🐰 Bunny hops - Hop on one foot</li>
                        </ul>
                        <h3>Do each exercise for 30 seconds!</h3>
                    </div>
                    <button onclick="modal.style.display='none'" class="btn btn-primary">Close</button>
                </div>
            `
        }
    };

    if (activities[activity]) {
        gameContainer.innerHTML = activities[activity].content;
        modal.style.display = 'block';
    }
}

// Answer checking function
function checkAnswer(answer) {
    const buttons = document.querySelectorAll('.practice button');
    buttons.forEach(button => {
        button.disabled = true;
        if (button.textContent == answer) {
            button.style.background = '#4ecdc4';
            button.style.color = 'white';
            showMessage('Correct! 🎉', 'success');
        } else {
            button.style.background = '#ff6b6b';
            button.style.color = 'white';
        }
    });
}

// Message display function
function showMessage(message, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = message;
    messageDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 10px;
        color: white;
        font-weight: bold;
        z-index: 3000;
        animation: slideIn 0.3s ease;
        background: ${type === 'success' ? '#4ecdc4' : '#ff6b6b'};
    `;
    
    document.body.appendChild(messageDiv);
    
    setTimeout(() => {
        messageDiv.remove();
    }, 3000);
}

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    .subject-lesson, .game-quiz, .word-search, .memory-game, .spelling-bee, .activity-lesson {
        padding: 20px;
    }
    
    .lesson-content, .quiz-question, .spelling-hint {
        margin: 20px 0;
    }
    
    .example, .practice {
        background: #f8f9fa;
        padding: 15px;
        border-radius: 10px;
        margin: 15px 0;
    }
    
    .color-boxes {
        display: flex;
        gap: 10px;
        margin: 10px 0;
    }
    
    .color-box {
        width: 60px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        color: white;
        font-weight: bold;
        text-shadow: 1px 1px 1px rgba(0,0,0,0.5);
    }
    
    .quiz-options, .spelling-input {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        margin: 15px 0;
    }
    
    .word-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 5px;
        margin: 20px 0;
    }
    
    .grid-row {
        display: flex;
    }
    
    .grid-cell {
        width: 50px;
        height: 50px;
        border: 2px solid #667eea;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        background: white;
    }
    
    .memory-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 10px;
        margin: 20px 0;
    }
    
    .memory-card {
        width: 80px;
        height: 80px;
        position: relative;
        cursor: pointer;
        transform-style: preserve-3d;
        transition: transform 0.6s;
    }
    
    .memory-card.flipped {
        transform: rotateY(180deg);
    }
    
    .memory-card.matched {
        opacity: 0.7;
    }
    
    .card-front, .card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #667eea;
        border-radius: 10px;
        background: white;
        font-size: 2rem;
    }
    
    .card-back {
        transform: rotateY(180deg);
    }
    
    .lyrics {
        background: #f8f9fa;
        padding: 15px;
        border-radius: 10px;
        margin: 15px 0;
        text-align: center;
    }
    
    .music-note {
        text-align: center;
        font-size: 2rem;
        margin: 15px 0;
    }
    
    .quiz-progress, .spelling-progress {
        background: #667eea;
        color: white;
        padding: 10px;
        border-radius: 10px;
        text-align: center;
        margin: 10px 0;
    }
    
    .quiz-score {
        text-align: center;
        font-size: 1.2rem;
        font-weight: bold;
        color: #667eea;
        margin: 10px 0;
    }
    
    .correct {
        color: #4ecdc4;
        font-weight: bold;
    }
    
    .incorrect {
        color: #ff6b6b;
        font-weight: bold;
    }
    
    .word-list {
        margin: 20px 0;
    }
    
    .word-item {
        display: inline-block;
        background: #667eea;
        color: white;
        padding: 5px 10px;
        margin: 5px;
        border-radius: 15px;
        font-weight: bold;
    }
`;
document.head.appendChild(style);

// Newsletter form submission
document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            showMessage('Thank you for subscribing! 📧', 'success');
            this.reset();
        });
    }
}); 
