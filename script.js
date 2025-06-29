// --- scripts.js ---
// Handles the main quiz logic for quiz.html

// --- DOM Elements ---
const quizMainTitle = document.getElementById('quiz-main-title');
const homeBtn = document.getElementById('home-btn');
const courseInfoElement = document.getElementById('course-info');
const selectionArea = document.getElementById('selection-area');
let weekSelect = document.getElementById('week-select');
let startBtn = document.getElementById('start-btn');

const quizArea = document.getElementById('quiz-area');
const courseIndicatorElement = document.getElementById('course-indicator');
const weekIndicatorElement = document.getElementById('week-indicator');
const progressElement = document.getElementById('progress');
const questionTextElement = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const feedbackElement = document.getElementById('feedback');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

const resultsArea = document.getElementById('results-area');
const resultsTitle = document.getElementById('results-title');
const resultsCourseWeekInfo = document.getElementById('results-course-week-info');
const scoreElement = document.getElementById('score');
const totalQuestionsElement = document.getElementById('total-questions');
const percentageScoreElement = document.getElementById('percentage-score');
const incorrectAnswersContainer = document.getElementById('incorrect-answers-container');
const restartBtn = document.getElementById('restart-btn');
const anotherWeekBtn = document.getElementById('another-week-btn');
const changeCourseBtn = document.getElementById('change-course-btn');

// --- Leaderboard Elements (Used on quiz.html results page) ---
const playerNameInput = document.getElementById('player-name');
const saveScoreBtn = document.getElementById('save-score-btn');
const leaderboardList = document.getElementById('leaderboard-list'); // Target ID on quiz.html
const saveStatusElement = document.getElementById('save-status');

const errorArea = document.getElementById('error-area');
const errorMessageElement = document.getElementById('error-message');
const backToIndexBtn = document.getElementById('back-to-index-btn');
const themeToggleButton = document.getElementById('theme-toggle-btn');

// --- JSONBin.io Configuration (MUST MATCH leaderboard.js values) ---
// !!! IMPORTANT: Replace these placeholders with your actual Bin ID and Access Key !!!
// const JSONBIN_BIN_ID = '67f8354d8a456b796686d6db'; // <--- MOVED TO leaderboard_api.js
// const JSONBIN_API_KEY = '$2a$10$XAQ4xZF7ujo6.aSwAx/Kl.8GJeJMEOBZhW3x7Mc9LIO7gUSfYjjb.'; // <--- MOVED TO leaderboard_api.js
// const LEADERBOARD_SIZE = 10; // <--- MOVED TO leaderboard_api.js

// --- State Variables ---
let currentQuestionIndex = 0;
let currentFilteredQuestions = [];
let courseQuestions = [];
let userAnswers = [];
let score = 0;
let selectedWeek = null;
let selectedCourseCode = null;
let selectedCourseName = '';
let lastCorrectAnswerPosition = -1;
let currentPercentage = 0;
let currentPlayerName = 'Guest';

// --- Course Data ---
const courseMap = {
    "COM496": "Cyber Security",
    "COM476": "Special Topics in Computer Engineering",
    "COM478": "Parallel Programming",
    "COM494": "Natural Language Processing",
    "GRI403": "Entrepreneurship",
};

// --- Helper Functions ---

// Fisher-Yates Shuffle
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Show Error Message
function showError(message) {
    console.error("Quiz Error:", message);
    // Hide all main sections, show error section
    if (selectionArea) selectionArea.style.display = 'none';
    if (quizArea) quizArea.style.display = 'none';
    if (resultsArea) resultsArea.style.display = 'none';
    if (quizMainTitle) quizMainTitle.style.display = 'none'; // Optionally hide title too
    if (courseInfoElement) courseInfoElement.style.display = 'none';
    if (homeBtn) homeBtn.style.display = 'inline-block'; // Keep home button visible?
    if (errorArea) errorArea.style.display = 'block'; // Show error area
    if (errorMessageElement) errorMessageElement.textContent = message;
}

// const escapeHTML = (str) => { // <--- MOVED TO leaderboard_api.js
//     if (typeof str !== 'string') return '';
//     return str.replace(/&/g, "&amp;")
//         .replace(/</g, "&lt;")
//         .replace(/>/g, "&gt;")
//         .replace(/"/g, "&quot;")
//         .replace(/'/g, "&#39;"); // Correct entity for single quote
// };


// --- Leaderboard Functions (for quiz.html results page) ---
// Uses functions from leaderboard_api.js

// Fetches the current leaderboard data from JSONBin
// MOVED to leaderboard_api.js as leaderboardAPI.fetchLeaderboard
// async function fetchLeaderboard() { ... }

// Saves a new score to the leaderboard on JSONBin
// MOVED to leaderboard_api.js as leaderboardAPI.saveScoreToLeaderboard
// async function saveScoreToLeaderboard(name, score, total, percentage, course, week) { ... }

// Displays the leaderboard data on the quiz.html results page
async function displayLeaderboard() {
    // Use the ID from quiz.html
    const listElementOnQuizPage = document.getElementById('leaderboard-list');
    if (!listElementOnQuizPage) return; // Only run if element exists

    listElementOnQuizPage.innerHTML = '<li><span class="loading-dots">Loading<span>.</span><span>.</span><span>.</span></span></li>';

    // Use the centralized API function
    const leaderboardData = await leaderboardAPI.fetchLeaderboard(listElementOnQuizPage);

    listElementOnQuizPage.innerHTML = '';

    if (!Array.isArray(leaderboardData) || leaderboardData.length === 0) {
        listElementOnQuizPage.innerHTML = '<li>No scores recorded yet.</li>';
        return;
    }

    // Sort data (consistent with save/index page)
    leaderboardData.sort((a, b) => {
        if (b.percentage !== a.percentage) return b.percentage - a.percentage;
        if (b.score !== a.score) return b.score - a.score;
        return new Date(b.timestamp) - new Date(a.timestamp);
    });

    // Slice using the constant from the API module
    const topScores = leaderboardData.slice(0, leaderboardAPI.LEADERBOARD_SIZE);

    topScores.forEach((entry, index) => { // Get the index (rank) here
        const listItem = document.createElement('li');

        // Add Rank Classes
        if (index === 0) {
            listItem.classList.add('rank-1'); // Gold
        } else if (index === 1) {
            listItem.classList.add('rank-2'); // Silver
        } else if (index === 2) {
            listItem.classList.add('rank-3'); // Bronze
        }

        const name = entry.name || 'Unknown';
        const scoreVal = typeof entry.score === 'number' ? entry.score : '?';
        const totalVal = typeof entry.total === 'number' ? entry.total : '?';
        const percentVal = typeof entry.percentage === 'number' ? Math.round(entry.percentage) : '?';
        const courseVal = entry.course || 'N/A';
        const weekVal = entry.week || 'N/A';

        // Use the centralized escapeHTML function and improved formatting
        const nameSpan = document.createElement('span');
        nameSpan.className = 'name';
        nameSpan.textContent = name;

        const scoreSpan = document.createElement('span');
        scoreSpan.className = 'score';
        scoreSpan.textContent = `${scoreVal}/${totalVal} (${percentVal}%)`;

        const detailsSpan = document.createElement('span');
        detailsSpan.className = 'details';
        detailsSpan.textContent = `(Course: ${courseVal}, ${weekVal})`;

        listItem.appendChild(nameSpan);
        listItem.appendChild(scoreSpan);
        listItem.appendChild(detailsSpan);

        listElementOnQuizPage.appendChild(listItem);
    });
}

// --- Core Quiz Functions ---

// Load Course Data and Player Name
function loadCourseData() {
    console.log("loadCourseData started");

    // Add a small delay to ensure questions.js is loaded
    setTimeout(() => {
        const urlParams = new URLSearchParams(window.location.search);
        selectedCourseCode = urlParams.get('course');
        currentPlayerName = urlParams.get('player') || 'Guest';

        console.log("Course:", selectedCourseCode, "Player:", currentPlayerName);

        if (!selectedCourseCode) {
            console.log("Error: No course selected");
            showError("No course selected. Please return to the course list and choose a course.");
            return;
        }

        selectedCourseName = courseMap[selectedCourseCode];
        if (!selectedCourseName) {
            console.warn(`Course code "${selectedCourseCode}" not found in courseMap. Using code as name.`);
            selectedCourseName = selectedCourseCode; // Fallback to code
        }

        // Remove redundant course info display
        if (courseInfoElement) courseInfoElement.style.display = 'none';

        // Check if questions.js loaded correctly
        console.log("Checking allQuestions. Type:", typeof allQuestions);
        if (typeof allQuestions === 'undefined' || !Array.isArray(allQuestions)) {
            console.log("Error: allQuestions not loaded or not an array");
            showError("Fatal Error: Question data (allQuestions) could not be loaded. Please refresh the page and try again.");
            return;
        }
        console.log("allQuestions loaded, length:", allQuestions.length);

        courseQuestions = allQuestions.filter(q => q.courseCode === selectedCourseCode);
        console.log("Filtered questions for course, length:", courseQuestions.length);

        if (courseQuestions.length === 0) {
            console.log("Error: No questions found for this course");
            showError(`No questions are currently available for the selected course (${selectedCourseName} - ${selectedCourseCode}). Please add questions or select another course.`);
            return;
        }

        // If data loaded successfully, proceed to week selection UI
        console.log("Data loaded successfully, initializing week selection...");
        if (homeBtn) homeBtn.style.display = 'inline-block';
        initializeWeekSelection();
    }, 100); // Small delay to ensure questions.js is loaded
}

// Populate Week Selector
function populateWeekSelector() {
    if (!weekSelect) { console.error("weekSelect element not found"); return; }
    if (!courseQuestions || courseQuestions.length === 0) {
        console.warn("populateWeekSelector called before courseQuestions were ready.");
        return;
    }
    // Check if any question has week === 0
    const hasWeekZero = courseQuestions.some(q => q.week === 0);

    weekSelect.innerHTML = '<option value="">-- Select a Week --</option>'; // Placeholder
    weekSelect.innerHTML += '<option value="all">All Weeks</option>';

    if (!hasWeekZero) {
        // Use Set to get unique week numbers, filter undefined/null, sort numerically
        const weeks = [...new Set(courseQuestions.map(q => q.week).filter(w => w !== undefined && w !== null))].sort((a, b) => a - b);
        if (weeks.length > 0) {
            weeks.forEach(week => {
                const option = document.createElement('option');
                option.value = week;
                option.textContent = `Week ${week}`;
                weekSelect.appendChild(option);
            });
        } else {
            console.log(`No specific week numbers found for course ${selectedCourseCode}. Only 'All Weeks' available.`);
            // If no specific weeks, maybe default to 'all' or disable selection?
            // For now, just leaves 'All Weeks' as the only option besides placeholder.
        }
    } else {
        // If week 0 is present, do not add individual weeks
        console.log("Week 0 detected: Only 'All Weeks' will be shown in the selector.");
    }
}

// Handle Week Selection Change
function handleWeekSelection() {
    if (!weekSelect || !startBtn) return;
    selectedWeek = weekSelect.value;
    startBtn.disabled = selectedWeek === ""; // Disable start if placeholder selected
}

// Initialize Week Selection UI State
function initializeWeekSelection() {
    // Check essential elements again
    if (!selectionArea || !quizArea || !resultsArea || !errorArea || !quizMainTitle) {
        console.error("Essential UI elements missing during week selection initialization!");
        showError("Interface error. Please go back and try again."); // Show user-friendly error
        return;
    }

    populateWeekSelector(); // Fill the dropdown

    // Set correct UI visibility
    selectionArea.style.display = 'flex'; // Show week selection
    quizArea.style.display = 'none';
    resultsArea.style.display = 'none';
    errorArea.style.display = 'none';
    quizMainTitle.style.display = 'block'; // Ensure title is visible

    // Set the title and course info in a compact way
    if (quizMainTitle) quizMainTitle.textContent = selectedCourseName;
    if (courseIndicatorElement) courseIndicatorElement.textContent = `${selectedCourseCode}`;

    // Reset state
    if (startBtn) startBtn.disabled = true;
    if (weekSelect) weekSelect.value = ""; // Reset selection
    selectedWeek = null;
    lastCorrectAnswerPosition = -1; // Reset answer position tracking
    if (incorrectAnswersContainer) incorrectAnswersContainer.innerHTML = '';

    // Reset leaderboard input/status if coming back from results
    if (playerNameInput) playerNameInput.value = currentPlayerName === 'Guest' ? '' : currentPlayerName; // Pre-fill if not guest
    if (saveScoreBtn) saveScoreBtn.disabled = false;
    if (saveStatusElement) saveStatusElement.textContent = '';
}

// Start Selected Quiz
function startSelectedQuiz() {
    if (!selectedCourseCode || !selectedWeek) {
        showError("Cannot start exam. Please select a course and week.");
        return;
    }

    // Filter questions based on week selection
    if (selectedWeek === 'all') {
        currentFilteredQuestions = [...courseQuestions]; // Copy all course questions
    } else {
        // Ensure comparison works for numbers/strings if week is stored inconsistently
        currentFilteredQuestions = courseQuestions.filter(q => String(q.week) === String(selectedWeek));
    }

    if (currentFilteredQuestions.length === 0) {
        // Use showError for consistent error display
        showError(`No questions found for ${selectedCourseName} - ${selectedWeek === 'all' ? 'All Weeks' : 'Week ' + selectedWeek}. Please select differently.`);
        initializeWeekSelection(); // Go back to selection immediately
        return;
    }

    // Shuffle and reset quiz state
    currentFilteredQuestions = shuffleArray(currentFilteredQuestions);
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = new Array(currentFilteredQuestions.length).fill(null);
    lastCorrectAnswerPosition = -1;
    currentPercentage = 0;
    if (incorrectAnswersContainer) incorrectAnswersContainer.innerHTML = '';

    // Update UI for quiz start
    selectionArea.style.display = 'none';
    resultsArea.style.display = 'none';
    errorArea.style.display = 'none';
    quizArea.style.display = 'block'; // Show the quiz area
    if (homeBtn) homeBtn.style.display = 'inline-block';

    loadQuestion(currentQuestionIndex); // Load the first question
}

// Load Question
function loadQuestion(index) {
    if (index < 0 || index >= currentFilteredQuestions.length) {
        console.error("Invalid question index:", index);
        showError("Error loading question (invalid index).");
        return;
    }

    const currentQuestion = currentFilteredQuestions[index];
    // Robust check for question structure
    if (!currentQuestion || typeof currentQuestion.question !== 'string' || !Array.isArray(currentQuestion.options) || typeof currentQuestion.correctAnswer === 'undefined') {
        console.error("Invalid question data structure at index:", index, currentQuestion);
        showError(`Error: Corrupted question data found at question ${index + 1}. Please check questions.js.`);
        // Attempt to skip or end gracefully
        if (index < currentFilteredQuestions.length - 1) {
            showNextQuestion();
        } else {
            showResults();
        }
        return;
    }
    const correctAnswer = currentQuestion.correctAnswer;

    // Update indicators in a compact way
    if (weekIndicatorElement) weekIndicatorElement.textContent = currentQuestion.week ? `Week ${currentQuestion.week}` : (selectedWeek === 'all' ? 'All Weeks' : '');

    // Set question text and clear previous options/feedback
    if (questionTextElement) questionTextElement.textContent = currentQuestion.question;
    if (optionsContainer) optionsContainer.innerHTML = '';
    // Only clear feedback if not on mobile
    if (feedbackElement && window.innerWidth > 480) {
        feedbackElement.textContent = '';
        feedbackElement.className = 'feedback'; // Reset feedback style
    }

    // Shuffle options, avoid repeating correct answer position if possible
    let shuffledOptions = [...currentQuestion.options]; // Start with a copy
    let currentCorrectPos = shuffledOptions.indexOf(correctAnswer);
    if (index > 0 && currentQuestion.options.length > 1) {
        let attempts = 0;
        const maxAttempts = 10;
        do {
            shuffledOptions = shuffleArray([...currentQuestion.options]);
            currentCorrectPos = shuffledOptions.indexOf(correctAnswer);
            attempts++;
        } while (currentCorrectPos === lastCorrectAnswerPosition && attempts < maxAttempts);
        if (attempts >= maxAttempts) console.warn(`Max reshuffle attempts reached for Q${index + 1}.`);
    }
    lastCorrectAnswerPosition = currentCorrectPos; // Store position for next question's check

    // Create and append option buttons
    shuffledOptions.forEach(optionText => {
        const button = document.createElement('button');
        button.textContent = optionText;
        button.classList.add('option-btn');
        button.addEventListener('click', handleAnswerClick);
        if (optionsContainer) optionsContainer.appendChild(button);
    });

    // Handle previously answered state (for navigation)
    if (userAnswers[index] !== null) {
        highlightPreviousAnswer(userAnswers[index].answer, userAnswers[index].correct);
        disableOptions();
    } else {
        enableOptions();
    }

    // Update progress display and nav buttons
    updateProgress(index);
    updateNavigationButtons(index);
}

// Handle Answer Click
function handleAnswerClick(event) {
    if (userAnswers[currentQuestionIndex] !== null) return; // Prevent re-answering

    const selectedButton = event.target;
    const selectedAnswer = selectedButton.textContent;
    const correctAnswer = currentFilteredQuestions[currentQuestionIndex].correctAnswer;
    const isCorrect = selectedAnswer === correctAnswer;

    // Store answer and update score
    // Make sure to store the index correctly
    userAnswers[currentQuestionIndex] = { questionIndex: currentQuestionIndex, answer: selectedAnswer, correct: isCorrect };
    if (isCorrect) score++;

    // Visual feedback (skip on mobile)
    if (feedbackElement && window.innerWidth > 480) {
        feedbackElement.textContent = isCorrect ? "Correct!" : `Incorrect. Correct Answer: ${leaderboardAPI.escapeHTML(correctAnswer)}`; // Escape correct answer display
        feedbackElement.className = `feedback ${isCorrect ? 'correct' : 'incorrect'}`;
        // Add a small delay before making feedback visible
        setTimeout(() => {
            feedbackElement.classList.add('visible');
        }, 50); // Adjust delay as needed
    }

    // Highlight answers and disable options
    Array.from(optionsContainer.children).forEach(btn => {
        if (btn.textContent === correctAnswer) btn.classList.add('correct');
        if (btn === selectedButton && !isCorrect) btn.classList.add('selected-incorrect');
    });
    disableOptions();
    updateNavigationButtons(currentQuestionIndex); // Update buttons (e.g., enable Finish on last question)
}

// Highlight Previous Answer (for nav)
function highlightPreviousAnswer(selectedAnswer, isCorrect) {
    const correctAnswer = currentFilteredQuestions[currentQuestionIndex].correctAnswer;
    // Only show feedback if not on mobile
    if (feedbackElement && window.innerWidth > 480) {
        feedbackElement.textContent = isCorrect ? "Correct!" : `Incorrect. Correct Answer: ${leaderboardAPI.escapeHTML(correctAnswer)}`; // Escape correct answer display
        feedbackElement.className = `feedback ${isCorrect ? 'correct' : 'incorrect'}`;
    }
    Array.from(optionsContainer.children).forEach(btn => {
        if (btn.textContent === correctAnswer) btn.classList.add('correct');
        else if (btn.textContent === selectedAnswer && !isCorrect) btn.classList.add('selected-incorrect');
    });
}

// Disable Option Buttons
function disableOptions() {
    if (!optionsContainer) return;
    Array.from(optionsContainer.children).forEach(btn => { btn.disabled = true; });
}

// Enable Option Buttons
function enableOptions() {
    if (!optionsContainer) return;
    Array.from(optionsContainer.children).forEach(btn => {
        btn.disabled = false;
        btn.classList.remove('correct', 'selected-incorrect');
    });
}

// Update Progress Indicator
function updateProgress(index) {
    if (progressElement) {
        progressElement.textContent = `Question ${index + 1} of ${currentFilteredQuestions.length}`;
    }
}

// Update Navigation Buttons State
function updateNavigationButtons(index) {
    if (prevBtn) prevBtn.disabled = index === 0;
    if (nextBtn) {
        // Keep the button as "Next" and always enabled (unless explicitly disabled elsewhere)
        // The showNextQuestion function will handle the transition to results.
        nextBtn.textContent = "Next";
        nextBtn.disabled = false;

        // Maybe disable if *all* questions are answered? Let's handle that in showNextQuestion for now.
        // const allAnswered = userAnswers.every(ans => ans !== null);
        // nextBtn.disabled = allAnswered;
    }
}

// Show Next Question or Finish
function showNextQuestion() {
    const totalQuestions = currentFilteredQuestions.length;
    let nextUnansweredIndex = -1;

    // 1. Search from current + 1 to end
    for (let i = currentQuestionIndex + 1; i < totalQuestions; i++) {
        if (userAnswers[i] === null) {
            nextUnansweredIndex = i;
            break;
        }
    }

    // 2. If not found, search from 0 to current
    if (nextUnansweredIndex === -1) {
        for (let i = 0; i < currentQuestionIndex; i++) {
            if (userAnswers[i] === null) {
                nextUnansweredIndex = i;
                break;
            }
        }
    }

    // 3. Handle outcome
    if (nextUnansweredIndex !== -1) {
        // Found an unanswered question
        currentQuestionIndex = nextUnansweredIndex;
        loadQuestion(currentQuestionIndex);
    } else {
        // No unanswered questions left (including the current one if it was just answered)
        // Check if the *current* one is actually answered before finishing
        if (userAnswers[currentQuestionIndex] !== null) {
            showResults();
        } else {
            // This case implies the user clicked Next on the last unanswered question
            // without answering it. Let's just stay on the current question.
            // Optionally, provide feedback:
            // alert("This is the last unanswered question.");
            // Or, if we want to *force* results:
            // showResults();
            // For now, just stay put.
            console.log("Clicked Next on the last unanswered question.");
        }
    }
}

// Show Previous Question
function showPreviousQuestion() {
    if (currentQuestionIndex > 0) {
        lastCorrectAnswerPosition = -1; // Reset position logic when going back
        currentQuestionIndex--;
        loadQuestion(currentQuestionIndex);
    }
}

// Show Results Page
function showResults() {
    // Check required elements for results page
    if (!quizArea || !resultsArea || !playerNameInput || !saveScoreBtn || !leaderboardList) {
        console.error("Essential results/leaderboard elements not found!");
        showError("Error displaying results page. Interface elements missing.");
        return;
    }

    // Switch UI views
    quizArea.style.display = 'none';
    resultsArea.style.display = 'flex'; // Show results
    if (homeBtn) homeBtn.style.display = 'inline-block';

    // Display info in a compact way
    const weekText = selectedWeek === 'all' ? 'All Weeks' : `Week ${selectedWeek}`;
    if (resultsTitle) resultsTitle.textContent = `${selectedCourseName} - ${weekText}`;
    if (resultsCourseWeekInfo) resultsCourseWeekInfo.style.display = 'none'; // Hide redundant info

    // Calculate and display score/percentage
    if (scoreElement) scoreElement.textContent = score;
    if (totalQuestionsElement) totalQuestionsElement.textContent = currentFilteredQuestions.length;
    currentPercentage = currentFilteredQuestions.length > 0 ? Math.round((score / currentFilteredQuestions.length) * 100) : 0;
    if (percentageScoreElement) percentageScoreElement.textContent = currentPercentage;

    // --- Generate Incorrect Answers List ---
    if (incorrectAnswersContainer) {
        incorrectAnswersContainer.innerHTML = ''; // Clear previous
        let incorrectFound = false;
        const list = document.createElement('ul');
        list.classList.add('incorrect-answer-list'); // For potential styling

        for (let i = 0; i < currentFilteredQuestions.length; i++) {
            const questionData = currentFilteredQuestions[i];
            const userAnswerData = userAnswers[i];

            // If skipped (null) or answered incorrectly
            if (userAnswerData === null || !userAnswerData.correct) {
                if (!incorrectFound) {
                    incorrectFound = true;
                    const title = document.createElement('h3');
                    title.textContent = 'Review Incorrect/Skipped Answers:';
                    incorrectAnswersContainer.appendChild(title);
                }

                const listItem = document.createElement('li');
                // Ensure userAnswerData exists before accessing its 'answer' property
                const yourAnswerText = userAnswerData ? leaderboardAPI.escapeHTML(userAnswerData.answer) : '<i>Skipped</i>';
                // Check questionData exists before accessing properties
                const correctAnswerText = questionData ? leaderboardAPI.escapeHTML(questionData.correctAnswer) : 'N/A';
                const questionText = questionData ? leaderboardAPI.escapeHTML(questionData.question) : 'Question data missing';
                const questionWeek = questionData?.week !== undefined ? `Week ${questionData.week}` : 'N/A'; // Handle missing week

                listItem.innerHTML = `
                    <p class="review-question"><strong>Q (${questionWeek}):</strong> ${questionText}</p>
                    <p class="review-answer"><em>Your Answer:</em> <span class="user-answer">${yourAnswerText}</span></p>
                    <p class="review-correct"><em>Correct Answer:</em> <span class="correct-answer-text">${correctAnswerText}</span></p>
                `;
                if (userAnswerData === null) listItem.classList.add('skipped-question');
                list.appendChild(listItem);
            }
        }

        if (incorrectFound) {
            incorrectAnswersContainer.appendChild(list);
        } else if (currentFilteredQuestions.length > 0 && score === currentFilteredQuestions.length) {
            const allCorrectMessage = document.createElement('p');
            allCorrectMessage.textContent = 'Congratulations! You answered all questions correctly!';
            allCorrectMessage.classList.add('all-correct-message');
            incorrectAnswersContainer.appendChild(allCorrectMessage);
        } else if (currentFilteredQuestions.length === 0) {
            const noQuestionsMessage = document.createElement('p');
            noQuestionsMessage.textContent = 'No questions were attempted in this quiz.';
            incorrectAnswersContainer.appendChild(noQuestionsMessage);
        }
    } else {
        console.warn("incorrectAnswersContainer element not found.");
    }

    // --- Leaderboard Integration ---
    if (playerNameInput) {
        // Keep the name entered by the user if they've typed one, otherwise use the name from URL
        playerNameInput.value = playerNameInput.value.trim() || (currentPlayerName === 'Guest' ? '' : currentPlayerName);
    }
    if (saveScoreBtn) saveScoreBtn.disabled = false; // Re-enable save button
    if (saveStatusElement) saveStatusElement.textContent = ''; // Clear any previous save status

    // Display the leaderboard after showing results
    displayLeaderboard().catch(err => console.error("Error displaying leaderboard on results page:", err));

    // Add event listener for saving score
    if (saveScoreBtn) {
        saveScoreBtn.onclick = async () => {
            const playerName = playerNameInput.value;
            // Use the centralized API function
            const success = await leaderboardAPI.saveScoreToLeaderboard(
                playerName,
                score,
                currentFilteredQuestions.length,
                currentPercentage,
                selectedCourseName, // Use the full name
                selectedWeek,
                saveStatusElement, // Pass status element
                saveScoreBtn // Pass button element
            );
            if (success) {
                // Optionally disable input/button after successful save
                playerNameInput.disabled = true;
                saveScoreBtn.disabled = true;
                saveScoreBtn.textContent = "Saved";
            }
        };
    } else {
        console.warn("Save score button not found.");
    }
}

// --- Event Listeners Setup ---
function setupEventListeners() {
    // Load course data when the quiz page's DOM is ready
    document.addEventListener('DOMContentLoaded', loadCourseData);

    // Add listeners only if the elements exist
    if (weekSelect) weekSelect.addEventListener('change', handleWeekSelection);
    if (startBtn) startBtn.addEventListener('click', startSelectedQuiz);
    if (prevBtn) prevBtn.addEventListener('click', showPreviousQuestion);
    if (nextBtn) nextBtn.addEventListener('click', showNextQuestion);

    // Results page buttons
    if (restartBtn) restartBtn.addEventListener('click', startSelectedQuiz); // Restarts same config
    if (anotherWeekBtn) anotherWeekBtn.addEventListener('click', initializeWeekSelection); // Go back to week selection
    if (changeCourseBtn) changeCourseBtn.addEventListener('click', () => { window.location.href = 'index.html'; });
    if (homeBtn) homeBtn.addEventListener('click', () => { window.location.href = 'index.html'; });
    if (backToIndexBtn) backToIndexBtn.addEventListener('click', () => { window.location.href = 'index.html'; });
}

// --- Dark Mode Logic (Copied from index_script.js) ---
const LOCAL_STORAGE_THEME_KEY = 'themePreference';

function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    // Update the theme icon
    if (themeToggleButton) {
        const iconSpan = themeToggleButton.querySelector('.theme-icon');
        if (iconSpan) {
            iconSpan.innerHTML = theme === 'dark' ? `
                <svg class="icon-moon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 12.79A9 9 0 0 1 12.79 3a7 7 0 1 0 8.21 9.79z" stroke="currentColor" stroke-width="2" fill="currentColor"/>
                </svg>
            ` : `
                <svg class="icon-sun" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="2" fill="currentColor"/>
                  <g stroke="currentColor" stroke-width="2">
                    <line x1="12" y1="1" x2="12" y2="3"/>
                    <line x1="12" y1="21" x2="12" y2="23"/>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                    <line x1="1" y1="12" x2="3" y2="12"/>
                    <line x1="21" y1="12" x2="23" y2="12"/>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                  </g>
                </svg>
            `;
            // Add animation class for smooth transition
            iconSpan.classList.remove('theme-icon-animate');
            void iconSpan.offsetWidth; // force reflow
            iconSpan.classList.add('theme-icon-animate');
        }
    }
}

function getPreferredTheme() {
    const savedTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);
    if (savedTheme) {
        return savedTheme;
    }
    // Check system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function saveThemePreference(theme) {
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.dataset.theme || getPreferredTheme();
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
    saveThemePreference(newTheme);
}

// --- End Dark Mode Logic ---

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded and parsed.");

    // Apply initial theme
    const initialTheme = getPreferredTheme();
    applyTheme(initialTheme);

    // Setup theme toggle button listener
    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', toggleTheme);
    } else {
        console.warn('Theme toggle button (#theme-toggle-btn) not found.');
    }

    loadCourseData();
    setupEventListeners();
});