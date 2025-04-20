// Constants and Configuration
const CONFIG = {
    MAX_NAME_LENGTH: 20,
    MIN_NAME_LENGTH: 2,
    NAME_REGEX: /^[a-zA-Z0-9\s\-_]+$/,
    STORAGE_KEY: 'quiz_player_name',
    ANIMATION_DURATION: 300
};

// DOM Elements
const modal = document.getElementById('player-modal');
const modalNameInput = document.getElementById('modal-player-name');
const modalStartBtn = document.getElementById('modal-start-btn');
const modalTargetUrlInput = document.getElementById('modal-target-url');
const modalError = document.getElementById('modal-error');
const modalCloseBtn = document.querySelector('.modal-close-btn');
const courseLinks = document.querySelectorAll('.course-link.available');
const visitorCount = document.getElementById('visitor-count');
const themeToggleButton = document.getElementById('theme-toggle-btn');

// State Management
let isModalOpen = false;
let currentCourse = null;

// --- Dark Mode Logic --- //
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

// --- End Dark Mode Logic --- //

// Utility Functions
const debounce = (func, wait) => {
    let timeout;
    const executedFunction = function (...args) {
        const later = () => {
            clearTimeout(timeout);
            func.apply(this, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };

    // Add cleanup method
    executedFunction.cancel = () => {
        clearTimeout(timeout);
    };

    return executedFunction;
};

const validateName = (name) => {
    if (!name) return 'Please enter your name.';
    if (name.length < CONFIG.MIN_NAME_LENGTH) return 'Name is too short.';
    if (name.length > CONFIG.MAX_NAME_LENGTH) return 'Name is too long.';
    if (!CONFIG.NAME_REGEX.test(name)) return 'Name contains invalid characters.';
    return null;
};

const sanitizeName = (name) => {
    return name.trim().replace(/\s+/g, ' ');
};

const savePlayerName = (name) => {
    try {
        localStorage.setItem(CONFIG.STORAGE_KEY, name);
    } catch (error) {
        console.warn('Failed to save player name:', error);
    }
};

const getSavedPlayerName = () => {
    try {
        return localStorage.getItem(CONFIG.STORAGE_KEY) || '';
    } catch (error) {
        console.warn('Failed to get saved player name:', error);
        return '';
    }
};

// Modal Functions
function showModal(targetUrl) {
    if (isModalOpen) return;

    isModalOpen = true;
    currentCourse = targetUrl;

    // Reset modal state
    modalNameInput.value = getSavedPlayerName();
    modalError.textContent = '';
    modalTargetUrlInput.value = targetUrl;
    modalNameInput.classList.remove('error');

    // Show modal with animation
    modal.style.display = 'flex';
    // Force reflow to ensure animation works
    void modal.offsetWidth;
    requestAnimationFrame(() => {
        modal.classList.add('active');
    });

    // Focus input after modal is active (CSS transition starts)
    // Using requestAnimationFrame for better timing with CSS transitions
    requestAnimationFrame(() => {
        modalNameInput.focus();
        modalNameInput.select();
    });
}

function closeModal() {
    if (!isModalOpen) return;

    isModalOpen = false;
    currentCourse = null;

    // Hide modal with animation
    modal.classList.remove('active');
    // Hide modal after animation completes
    // Use transitionend event for smoother hiding
    const handleTransitionEnd = () => {
        modal.style.display = 'none';
        // Reset form state when hidden
        modalNameInput.classList.remove('error');
        modalError.textContent = '';
        modal.removeEventListener('transitionend', handleTransitionEnd);
    };
    modal.addEventListener('transitionend', handleTransitionEnd);
}

// Course Link Handlers
function handleCourseClick(event) {
    const link = event.currentTarget;
    const targetUrl = link.getAttribute('data-href');

    if (!targetUrl) {
        console.error("Missing data-href attribute on course item:", link);
        return;
    }

    // Add click animation
    link.classList.add('clicked');
    setTimeout(() => {
        link.classList.remove('clicked');
    }, 200);

    showModal(targetUrl);
}

// Input Validation
const validateInput = debounce(() => {
    const name = modalNameInput.value;
    const error = validateName(name);

    modalError.textContent = error || '';
    modalStartBtn.disabled = !!error;

    // Add visual feedback on the input field
    if (error) {
        modalNameInput.classList.add('error');
    } else {
        modalNameInput.classList.remove('error');
    }
}, 300);

// Event Listeners
courseLinks.forEach(link => {
    link.addEventListener('click', handleCourseClick);

    // Add keyboard navigation
    link.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            handleCourseClick(event);
        }
    });
});

// Add event listener for modal close button
modalCloseBtn.addEventListener('click', closeModal);

modalStartBtn.addEventListener('click', () => {
    const playerName = sanitizeName(modalNameInput.value);
    const targetUrl = modalTargetUrlInput.value;

    const error = validateName(playerName);
    if (error) {
        modalError.textContent = error;
        modalNameInput.focus();
        return;
    }

    if (!targetUrl) {
        modalError.textContent = 'Error: Target course not found.';
        return;
    }

    // Save player name for future use
    savePlayerName(playerName);

    // Show loading state
    modalStartBtn.disabled = true;
    modalStartBtn.innerHTML = '<span class="loading-dots">Starting</span>';

    // Construct final URL
    const separator = targetUrl.includes('?') ? '&' : '?';
    const finalUrl = `${targetUrl}${separator}player=${encodeURIComponent(playerName)}`;

    // Navigate after a short delay to show loading state
    setTimeout(() => {
        window.location.href = finalUrl;
    }, 500);
});

modalNameInput.addEventListener('input', validateInput);
modalNameInput.addEventListener('focus', () => {
    modalNameInput.select();
});

modalNameInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter' && !modalStartBtn.disabled) {
        event.preventDefault();
        modalStartBtn.click();
    }
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isModalOpen) {
        closeModal();
    }
});

// Visitor Count Error Handling
if (visitorCount) {
    visitorCount.addEventListener('error', () => {
        visitorCount.textContent = 'N/A';
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Apply initial theme
    const initialTheme = getPreferredTheme();
    applyTheme(initialTheme);

    // Setup theme toggle button listener
    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', toggleTheme);
    } else {
        console.warn('Theme toggle button (#theme-toggle-btn) not found.');
    }

    // Add loading animation to visitor count
    if (visitorCount) {
        visitorCount.innerHTML = '<span class="loading-dots">Loading</span>';
    }

    // Add ARIA labels for accessibility
    courseLinks.forEach(link => {
        link.setAttribute('role', 'button');
        link.setAttribute('aria-label', `Start ${link.querySelector('h2').textContent} exam`);
    });

    // Initialize modal with saved name
    modalNameInput.value = getSavedPlayerName();
    validateInput();

    // Window resize handler for modals
    window.addEventListener('resize', debounce(() => {
        if (isModalOpen) {
            // The modal should naturally reflow with CSS,
            // explicitly blurring/refocusing is causing issues on mobile
            // when the keyboard triggers resize.
        }
    }, 250));

    // Add close button ARIA labels
    modalCloseBtn.setAttribute('aria-label', 'Close');
});