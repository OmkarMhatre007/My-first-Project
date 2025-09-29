// Application data
const wandData = {
    woods: [
        {"name": "Holly", "description": "Holly is one of the rarer kinds of wand woods; traditionally considered protective, it works most happily for those who may need help overcoming a tendency to anger and impetuosity."},
        {"name": "Oak", "description": "A wand for good times and bad, this is a friend as loyal as the wizard who deserves it. Wands of English oak demand partners of strength, courage and fidelity."},
        {"name": "Willow", "description": "Willow is an uncommon wand wood with healing power, and I have noted that the ideal owner for a willow wand often has some (usually unwarranted) insecurity."},
        {"name": "Birch", "description": "Those who are well-suited to birch wands are usually those who display the virtues of tolerance and forbearance."},
        {"name": "Ash", "description": "The ash wand cleaves to its one true master and ought not to be passed on or gifted from the original owner."},
        {"name": "Maple", "description": "I have often found that those chosen by maple wands are by nature travellers and explorers."},
        {"name": "Cherry", "description": "This very rare wand wood creates a wand of strange power, most highly prized by the wizarding students of the school of Mahoutokoro."},
        {"name": "Elder", "description": "The rarest wand wood of all, and reputed to be deeply unlucky, the elder wand is trickier to master than any other."},
        {"name": "Hawthorn", "description": "The wandmaker Gregorovitch wrote that hawthorn 'makes a strange, contradictory wand, as full of paradoxes as the tree that gave it birth'."},
        {"name": "Vine", "description": "The druids considered anything with a woody stem as a tree, and vine makes wands of such a special nature that I have been happy to continue their ancient tradition."}
    ],
    cores: [
        {"name": "Phoenix Feather", "description": "Phoenix feathers are capable of the greatest range of magic, though they may take longer than either unicorn or dragon cores to reveal this."},
        {"name": "Dragon Heartstring", "description": "As a rule, dragon heartstrings produce wands with the most power, and which are capable of the most flamboyant spells."},
        {"name": "Unicorn Hair", "description": "Unicorn hair generally produces the most consistent magic, and is least subject to fluctuations and blockages."}
    ],
    lengths: ["9\"", "9.5\"", "10\"", "10.5\"", "11\"", "11.5\"", "12\"", "12.5\"", "13\"", "13.5\"", "14\"", "14.5\"", "15\""],
    flexibility: [
        {"name": "Quite Rigid", "description": "A wand that is less willing to change and adapt."},
        {"name": "Rigid", "description": "A wand that strongly resists change."},
        {"name": "Reasonably Supple", "description": "A wand that is accommodating and adaptable."},
        {"name": "Quite Bendy", "description": "A very flexible and adaptable wand."},
        {"name": "Supple", "description": "A wand that bends easily to its owner's will."},
        {"name": "Pliant", "description": "A wand that yields readily to pressure or influence."}
    ]
};

const patronusData = {
    animals: [
        {"name": "Stag", "description": "A stag Patronus represents nobility, courage, and leadership. Those who cast this Patronus are natural leaders.", "emoji": "🦌"},
        {"name": "Doe", "description": "A doe Patronus represents gentleness, grace, and unconditional love. It shows deep capacity for love and sacrifice.", "emoji": "🦌"},
        {"name": "Otter", "description": "An otter Patronus represents playfulness, intelligence, and adaptability. These are clever, resourceful individuals.", "emoji": "🦦"},
        {"name": "Wolf", "description": "A wolf Patronus represents loyalty, intelligence, and strong family bonds. Wolves are fierce protectors.", "emoji": "🐺"},
        {"name": "Fox", "description": "A fox Patronus represents cunning, intelligence, and adaptability. Foxes are clever and strategic thinkers.", "emoji": "🦊"},
        {"name": "Eagle", "description": "An eagle Patronus represents freedom, power, and sharp vision. These are independent, far-sighted individuals.", "emoji": "🦅"},
        {"name": "Lion", "description": "A lion Patronus represents courage, strength, and nobility. Lions are natural born leaders and protectors.", "emoji": "🦁"},
        {"name": "Swan", "description": "A swan Patronus represents grace, beauty, and transformation. Swans symbolize inner beauty and elegance.", "emoji": "🦢"},
        {"name": "Owl", "description": "An owl Patronus represents wisdom, mystery, and keen observation. Owls see what others cannot.", "emoji": "🦉"},
        {"name": "Bear", "description": "A bear Patronus represents strength, courage, and protection. Bears are fierce defenders of their loved ones.", "emoji": "🐻"},
        {"name": "Rabbit", "description": "A rabbit Patronus represents alertness, fertility, and quick thinking. Rabbits are always ready to act.", "emoji": "🐰"},
        {"name": "Cat", "description": "A cat Patronus represents independence, mystery, and intuition. Cats are self-reliant and wise.", "emoji": "🐱"}
    ]
};

const quizData = {
    wand: [
        {
            question: "What quality do you most admire in yourself?",
            answers: [
                {"text": "Courage", "woods": ["Oak", "Holly"], "cores": ["Phoenix Feather"], "flexibility": ["Rigid"]},
                {"text": "Intelligence", "woods": ["Birch", "Ash"], "cores": ["Unicorn Hair"], "flexibility": ["Reasonably Supple"]},
                {"text": "Loyalty", "woods": ["Willow", "Maple"], "cores": ["Dragon Heartstring"], "flexibility": ["Supple"]},
                {"text": "Ambition", "woods": ["Elder", "Hawthorn"], "cores": ["Dragon Heartstring"], "flexibility": ["Quite Rigid"]}
            ]
        },
        {
            question: "What is your greatest fear?",
            answers: [
                {"text": "Being forgotten", "woods": ["Vine", "Cherry"], "cores": ["Phoenix Feather"], "flexibility": ["Pliant"]},
                {"text": "Being powerless", "woods": ["Elder", "Oak"], "cores": ["Dragon Heartstring"], "flexibility": ["Rigid"]},
                {"text": "Being alone", "woods": ["Willow", "Birch"], "cores": ["Unicorn Hair"], "flexibility": ["Supple"]},
                {"text": "Being ordinary", "woods": ["Hawthorn", "Ash"], "cores": ["Phoenix Feather"], "flexibility": ["Quite Bendy"]}
            ]
        }
    ],
    patronus: [
        {
            question: "You're walking through a forest. What catches your attention?",
            answers: [
                {"text": "The sound of running water", "patronuses": ["Otter", "Swan"]},
                {"text": "A rustling in the bushes", "patronuses": ["Wolf", "Fox"]},
                {"text": "Birds singing in the trees", "patronuses": ["Eagle", "Owl"]},
                {"text": "The scent of flowers", "patronuses": ["Doe", "Rabbit"]}
            ]
        },
        {
            question: "What motivates you most?",
            answers: [
                {"text": "Protecting loved ones", "patronuses": ["Stag", "Bear", "Lion"]},
                {"text": "Seeking knowledge", "patronuses": ["Owl", "Eagle"]},
                {"text": "Having fun and adventure", "patronuses": ["Otter", "Fox"]},
                {"text": "Finding inner peace", "patronuses": ["Swan", "Cat", "Doe"]}
            ]
        },
        {
            question: "How do you prefer to spend your free time?",
            answers: [
                {"text": "Reading and learning", "patronuses": ["Owl", "Cat"]},
                {"text": "Exploring outdoors", "patronuses": ["Wolf", "Eagle", "Stag"]},
                {"text": "Playing with friends", "patronuses": ["Otter", "Rabbit"]},
                {"text": "Peaceful contemplation", "patronuses": ["Swan", "Doe"]}
            ]
        }
    ]
};

// Application state
let currentWand = {
    wood: null,
    core: null,
    length: null,
    flexibility: null
};

let currentPatronus = null;
let currentQuiz = null;
let currentQuestionIndex = 0;
let quizAnswers = [];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing application...');
    initializeNavigation();
    initializeWandBuilder();
    populateWandSelects();
});

// Navigation functionality
function initializeNavigation() {
    console.log('Setting up navigation...');
    const navBtns = document.querySelectorAll('.nav-btn');
    const heroButtons = document.querySelectorAll('[data-section]');

    navBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = btn.dataset.section;
            console.log('Nav clicked:', targetSection);
            showSection(targetSection);
            updateActiveNavBtn(btn);
        });
    });

    heroButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = btn.dataset.section;
            if (targetSection) {
                console.log('Hero button clicked:', targetSection);
                showSection(targetSection);
                updateActiveNavBtn(document.querySelector(`.nav-btn[data-section="${targetSection}"]`));
                
                // Start appropriate quiz if needed
                if (targetSection === 'patronus' && !currentPatronus) {
                    setTimeout(startPatronusQuiz, 300);
                }
            }
        });
    });
}

function showSection(sectionId) {
    console.log('Showing section:', sectionId);
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
}

function updateActiveNavBtn(activeBtn) {
    const navBtns = document.querySelectorAll('.nav-btn');
    navBtns.forEach(btn => btn.classList.remove('active'));
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}

// Wand builder functionality
function initializeWandBuilder() {
    const manualModeBtn = document.getElementById('manual-mode');
    const quizModeBtn = document.getElementById('quiz-mode');
    const manualBuilder = document.getElementById('manual-builder');
    const wandQuiz = document.getElementById('wand-quiz');

    if (manualModeBtn && quizModeBtn && manualBuilder && wandQuiz) {
        manualModeBtn.addEventListener('click', () => {
            manualModeBtn.classList.add('active');
            quizModeBtn.classList.remove('active');
            manualBuilder.classList.add('active');
            manualBuilder.classList.remove('hidden');
            wandQuiz.classList.add('hidden');
        });

        quizModeBtn.addEventListener('click', () => {
            quizModeBtn.classList.add('active');
            manualModeBtn.classList.remove('active');
            manualBuilder.classList.remove('active');
            manualBuilder.classList.add('hidden');
            wandQuiz.classList.remove('hidden');
            startWandQuiz();
        });
    }

    // Add change listeners for manual selection
    const selects = ['wood-select', 'core-select', 'length-select', 'flexibility-select'];
    selects.forEach(selectId => {
        const select = document.getElementById(selectId);
        if (select) {
            select.addEventListener('change', updateWandSelection);
        }
    });
}

function populateWandSelects() {
    const woodSelect = document.getElementById('wood-select');
    const coreSelect = document.getElementById('core-select');
    const lengthSelect = document.getElementById('length-select');
    const flexibilitySelect = document.getElementById('flexibility-select');

    if (woodSelect) {
        wandData.woods.forEach(wood => {
            const option = document.createElement('option');
            option.value = wood.name;
            option.textContent = wood.name;
            woodSelect.appendChild(option);
        });
    }

    if (coreSelect) {
        wandData.cores.forEach(core => {
            const option = document.createElement('option');
            option.value = core.name;
            option.textContent = core.name;
            coreSelect.appendChild(option);
        });
    }

    if (lengthSelect) {
        wandData.lengths.forEach(length => {
            const option = document.createElement('option');
            option.value = length;
            option.textContent = length;
            lengthSelect.appendChild(option);
        });
    }

    if (flexibilitySelect) {
        wandData.flexibility.forEach(flex => {
            const option = document.createElement('option');
            option.value = flex.name;
            option.textContent = flex.name;
            flexibilitySelect.appendChild(option);
        });
    }
}

function updateWandSelection() {
    const woodSelect = document.getElementById('wood-select');
    const coreSelect = document.getElementById('core-select');
    const lengthSelect = document.getElementById('length-select');
    const flexibilitySelect = document.getElementById('flexibility-select');

    if (woodSelect) currentWand.wood = woodSelect.value || null;
    if (coreSelect) currentWand.core = coreSelect.value || null;
    if (lengthSelect) currentWand.length = lengthSelect.value || null;
    if (flexibilitySelect) currentWand.flexibility = flexibilitySelect.value || null;

    console.log('Current wand:', currentWand);
    
    updateWandDescriptions();
    updateWandDetails();
    updateWandVisual();
    updateResultsSection();
}

function updateWandDescriptions() {
    const woodDesc = document.getElementById('wood-description');
    const coreDesc = document.getElementById('core-description');
    const flexDesc = document.getElementById('flexibility-description');

    // Update wood description
    if (woodDesc && currentWand.wood) {
        const wood = wandData.woods.find(w => w.name === currentWand.wood);
        woodDesc.textContent = wood ? wood.description : '';
        woodDesc.style.display = wood ? 'block' : 'none';
    } else if (woodDesc) {
        woodDesc.style.display = 'none';
    }

    // Update core description
    if (coreDesc && currentWand.core) {
        const core = wandData.cores.find(c => c.name === currentWand.core);
        coreDesc.textContent = core ? core.description : '';
        coreDesc.style.display = core ? 'block' : 'none';
    } else if (coreDesc) {
        coreDesc.style.display = 'none';
    }

    // Update flexibility description
    if (flexDesc && currentWand.flexibility) {
        const flex = wandData.flexibility.find(f => f.name === currentWand.flexibility);
        flexDesc.textContent = flex ? flex.description : '';
        flexDesc.style.display = flex ? 'block' : 'none';
    } else if (flexDesc) {
        flexDesc.style.display = 'none';
    }
}

function updateWandDetails() {
    const wandDetails = document.getElementById('wand-details');
    
    if (wandDetails) {
        if (currentWand.wood && currentWand.core && currentWand.length && currentWand.flexibility) {
            wandDetails.innerHTML = `
                <h3>Your Wand</h3>
                <p><strong>${currentWand.length} ${currentWand.wood} wand</strong></p>
                <p><strong>Core:</strong> ${currentWand.core}</p>
                <p><strong>Flexibility:</strong> ${currentWand.flexibility}</p>
            `;
        } else {
            wandDetails.innerHTML = `
                <h3>Your Wand</h3>
                <p>Select components to see your wand details</p>
            `;
        }
    }
}

function updateWandVisual() {
    const wandStick = document.querySelector('.wand-stick');
    if (wandStick && currentWand.wood) {
        // Change wand appearance based on wood type
        const woodColors = {
            'Holly': 'linear-gradient(to right, #8B4513, #D2691E)',
            'Oak': 'linear-gradient(to right, #654321, #8B4513)',
            'Willow': 'linear-gradient(to right, #DEB887, #F5DEB3)',
            'Birch': 'linear-gradient(to right, #F5F5DC, #FFFACD)',
            'Ash': 'linear-gradient(to right, #696969, #A9A9A9)',
            'Maple': 'linear-gradient(to right, #CD853F, #D2691E)',
            'Cherry': 'linear-gradient(to right, #8B0000, #DC143C)',
            'Elder': 'linear-gradient(to right, #2F4F4F, #708090)',
            'Hawthorn': 'linear-gradient(to right, #556B2F, #6B8E23)',
            'Vine': 'linear-gradient(to right, #228B22, #32CD32)'
        };
        
        wandStick.style.background = woodColors[currentWand.wood] || 'linear-gradient(to right, #8B4513, #D2691E)';
        
        // Add length scaling
        if (currentWand.length) {
            const length = parseFloat(currentWand.length.replace('"', ''));
            const scale = 0.8 + (length - 9) * 0.05; // Scale from 0.8 to 1.3
            wandStick.style.transform = `scaleX(${scale})`;
        }
        
        // Add magical glow if complete
        if (currentWand.wood && currentWand.core && currentWand.length && currentWand.flexibility) {
            wandStick.style.boxShadow = '0 0 20px rgba(50, 184, 198, 0.6)';
        }
    }
}

// Quiz functionality
function startWandQuiz() {
    currentQuiz = 'wand';
    currentQuestionIndex = 0;
    quizAnswers = [];
    
    const result = document.getElementById('wand-result');
    if (result) result.classList.add('hidden');
    
    showQuizQuestion();
}

function startPatronusQuiz() {
    console.log('Starting patronus quiz...');
    currentQuiz = 'patronus';
    currentQuestionIndex = 0;
    quizAnswers = [];
    
    const result = document.getElementById('patronus-result');
    if (result) result.classList.add('hidden');
    
    showQuizQuestion();
}

function showQuizQuestion() {
    const questions = quizData[currentQuiz];
    const question = questions[currentQuestionIndex];
    
    const questionEl = document.getElementById(`${currentQuiz}-question`);
    const answersEl = document.getElementById(`${currentQuiz}-answers`);
    const progressEl = document.getElementById(`${currentQuiz}-progress`);
    const progressTextEl = document.getElementById(`${currentQuiz}-progress-text`);
    
    if (questionEl) questionEl.textContent = question.question;
    
    // Update progress
    if (progressEl && progressTextEl) {
        const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
        progressEl.style.width = `${progress}%`;
        progressTextEl.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
    }
    
    // Clear previous answers
    if (answersEl) {
        answersEl.innerHTML = '';
        
        // Add answer options
        question.answers.forEach((answer, index) => {
            const answerEl = document.createElement('button');
            answerEl.className = 'quiz-answer';
            answerEl.textContent = answer.text;
            answerEl.addEventListener('click', () => selectQuizAnswer(answer, index));
            answersEl.appendChild(answerEl);
        });
    }
}

function selectQuizAnswer(answer, index) {
    // Mark answer as selected visually
    const answers = document.querySelectorAll('.quiz-answer');
    answers.forEach(a => a.classList.remove('selected'));
    if (answers[index]) answers[index].classList.add('selected');
    
    // Store the answer
    quizAnswers.push(answer);
    
    // Move to next question or show results
    setTimeout(() => {
        currentQuestionIndex++;
        const questions = quizData[currentQuiz];
        
        if (currentQuestionIndex < questions.length) {
            showQuizQuestion();
        } else {
            showQuizResults();
        }
    }, 500);
}

function showQuizResults() {
    const resultEl = document.getElementById(`${currentQuiz}-result`);
    const contentEl = document.querySelector(`#${currentQuiz}-quiz .quiz-content`);
    
    if (contentEl) contentEl.style.display = 'none';
    if (resultEl) resultEl.classList.remove('hidden');
    
    if (currentQuiz === 'wand') {
        calculateWandResult();
    } else {
        calculatePatronusResult();
    }
}

function calculateWandResult() {
    // Combine all possible traits from answers
    const allWoods = [];
    const allCores = [];
    const allFlexibility = [];
    
    quizAnswers.forEach(answer => {
        if (answer.woods) allWoods.push(...answer.woods);
        if (answer.cores) allCores.push(...answer.cores);
        if (answer.flexibility) allFlexibility.push(...answer.flexibility);
    });
    
    // Pick most common or random from options
    currentWand.wood = getRandomFromArray(allWoods) || wandData.woods[Math.floor(Math.random() * wandData.woods.length)].name;
    currentWand.core = getRandomFromArray(allCores) || wandData.cores[Math.floor(Math.random() * wandData.cores.length)].name;
    currentWand.flexibility = getRandomFromArray(allFlexibility) || wandData.flexibility[Math.floor(Math.random() * wandData.flexibility.length)].name;
    currentWand.length = wandData.lengths[Math.floor(Math.random() * wandData.lengths.length)];
    
    displayWandResult();
    updateWandVisual();
    updateResultsSection();
}

function calculatePatronusResult() {
    // Combine all possible patronuses from answers
    const allPatronuses = [];
    
    quizAnswers.forEach(answer => {
        if (answer.patronuses) allPatronuses.push(...answer.patronuses);
    });
    
    // Pick random from suggested patronuses
    const patronusName = getRandomFromArray(allPatronuses) || patronusData.animals[Math.floor(Math.random() * patronusData.animals.length)].name;
    currentPatronus = patronusData.animals.find(p => p.name === patronusName);
    
    displayPatronusResult();
    updateResultsSection();
}

function getRandomFromArray(arr) {
    if (!arr || arr.length === 0) return null;
    return arr[Math.floor(Math.random() * arr.length)];
}

function displayWandResult() {
    const resultDetails = document.getElementById('wand-result-details');
    
    if (resultDetails) {
        const wood = wandData.woods.find(w => w.name === currentWand.wood);
        const core = wandData.cores.find(c => c.name === currentWand.core);
        const flex = wandData.flexibility.find(f => f.name === currentWand.flexibility);
        
        resultDetails.innerHTML = `
            <h4>${currentWand.length} ${currentWand.wood} Wand</h4>
            <p><strong>Core:</strong> ${currentWand.core}</p>
            <p><strong>Flexibility:</strong> ${currentWand.flexibility}</p>
            <div class="wand-trait">
                <h5>Wood Properties:</h5>
                <p>${wood ? wood.description : ''}</p>
            </div>
            <div class="wand-trait">
                <h5>Core Properties:</h5>
                <p>${core ? core.description : ''}</p>
            </div>
            <div class="wand-trait">
                <h5>Flexibility:</h5>
                <p>${flex ? flex.description : ''}</p>
            </div>
        `;
    }
}

function displayPatronusResult() {
    const resultDetails = document.getElementById('patronus-result-details');
    const patronusAnimal = document.getElementById('patronus-animal');
    
    if (currentPatronus) {
        if (patronusAnimal) patronusAnimal.textContent = currentPatronus.emoji;
        if (resultDetails) {
            resultDetails.innerHTML = `
                <h4>${currentPatronus.name}</h4>
                <p>${currentPatronus.description}</p>
            `;
        }
    }
}

function updateResultsSection() {
    // Update wand in results
    const profileWandDetails = document.getElementById('profile-wand-details');
    if (profileWandDetails && currentWand.wood && currentWand.core && currentWand.length && currentWand.flexibility) {
        const wood = wandData.woods.find(w => w.name === currentWand.wood);
        profileWandDetails.innerHTML = `
            <h4>${currentWand.length} ${currentWand.wood} Wand</h4>
            <p><strong>Core:</strong> ${currentWand.core}</p>
            <p><strong>Flexibility:</strong> ${currentWand.flexibility}</p>
            <p class="description">${wood ? wood.description : ''}</p>
        `;
    }
    
    // Update patronus in results
    const profilePatronusDetails = document.getElementById('profile-patronus-details');
    const profilePatronusAnimal = document.getElementById('profile-patronus-animal');
    if (currentPatronus) {
        if (profilePatronusAnimal) profilePatronusAnimal.textContent = currentPatronus.emoji;
        if (profilePatronusDetails) {
            profilePatronusDetails.innerHTML = `
                <h4>${currentPatronus.name}</h4>
                <p>${currentPatronus.description}</p>
            `;
        }
    }
}

// Global functions for buttons
function retakeQuizzes() {
    currentWand = { wood: null, core: null, length: null, flexibility: null };
    currentPatronus = null;
    
    // Reset form selections
    const selects = ['wood-select', 'core-select', 'length-select', 'flexibility-select'];
    selects.forEach(selectId => {
        const select = document.getElementById(selectId);
        if (select) select.value = '';
    });
    
    // Reset descriptions and details
    updateWandDescriptions();
    updateWandDetails();
    updateWandVisual();
    updateResultsSection();
    
    // Show home section
    showSection('home');
    updateActiveNavBtn(document.querySelector('.nav-btn[data-section="home"]'));
}

function shareProfile() {
    if (currentWand.wood && currentPatronus) {
        const text = `My magical profile: ${currentWand.length} ${currentWand.wood} wand with ${currentWand.core} core, and my Patronus is a ${currentPatronus.name}! ⚡`;
        
        if (navigator.share) {
            navigator.share({
                title: 'My Wizarding Profile',
                text: text
            });
        } else {
            // Fallback: copy to clipboard
            navigator.clipboard.writeText(text).then(() => {
                alert('Profile copied to clipboard!');
            }).catch(() => {
                alert(text);
            });
        }
    } else {
        alert('Complete both your wand selection and patronus discovery first!');
    }
}

// Make functions globally available
window.retakeQuizzes = retakeQuizzes;
window.shareProfile = shareProfile;