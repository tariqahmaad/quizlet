// --- leaderboard_api.js ---
// Centralized API functions for JSONBin.io leaderboard

// --- Configuration ---
// !!! IMPORTANT: Replace these placeholders with your actual Bin ID and Access Key !!!
const JSONBIN_BIN_ID = '67f8354d8a456b796686d6db'; // <--- PASTE YOUR BIN ID HERE
const JSONBIN_API_KEY = '$2a$10$XAQ4xZF7ujo6.aSwAx/Kl.8GJeJMEOBZhW3x7Mc9LIO7gUSfYjjb.'; // <--- PASTE YOUR ACCESS KEY HERE
const LEADERBOARD_SIZE = 10; // How many scores to keep

// --- Helper (copied from scripts.js/leaderboard.js) ---
const escapeHTML = (str) => {
    if (typeof str !== 'string') return '';
    return str.replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
};

// --- API Functions ---

/**
 * Fetches the current leaderboard data from JSONBin.
 * @param {HTMLElement | null} statusElement - Optional element to display loading/error messages.
 * @returns {Promise<Array>} - A promise that resolves to the leaderboard array or an empty array on error/not found.
 */
async function fetchLeaderboard(statusElement = null) {
    if (!JSONBIN_BIN_ID || !JSONBIN_API_KEY || JSONBIN_BIN_ID === 'YOUR_BIN_ID' || JSONBIN_API_KEY === 'YOUR_ACCESS_KEY') {
        console.warn("JSONBin Bin ID or API Key not configured. Leaderboard functions disabled.");
        if (statusElement) statusElement.innerHTML = '<li>Leaderboard not configured.</li>';
        return [];
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

    try {
        const response = await fetch(`https://api.jsonbin.io/v3/b/${JSONBIN_BIN_ID}/latest`, {
            method: 'GET',
            headers: { 'X-Access-Key': JSONBIN_API_KEY },
            signal: controller.signal
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
            if (response.status === 404) {
                console.log("Leaderboard bin empty or not found. Returning empty array.");
                return []; // Return empty array if bin doesn't exist yet
            }
            const errorText = await response.text();
            console.error(`HTTP error fetching leaderboard! Status: ${response.status}`, errorText);
            throw new Error(`HTTP error fetching leaderboard! Status: ${response.status}`);
        }

        const data = await response.json();
        // Return the leaderboard array, handling both {leaderboard: [...]} and [...] structures
        return data.record?.leaderboard || data.record || [];
    } catch (error) {
        clearTimeout(timeoutId);
        console.error("Error fetching leaderboard:", error);
        if (statusElement) {
            if (error.name === 'AbortError') {
                statusElement.innerHTML = '<li>Request timed out. Please try again.</li>';
            } else {
                statusElement.innerHTML = '<li>Error loading leaderboard data.</li>';
            }
        }
        return [];
    }
}

/**
 * Saves a new score to the leaderboard on JSONBin.
 * @param {string} name - Player's name.
 * @param {number} score - Player's score.
 * @param {number} total - Total questions.
 * @param {number} percentage - Score percentage.
 * @param {string} course - Course name/code.
 * @param {string} week - Week identifier ('all' or number).
 * @param {HTMLElement | null} saveStatusElement - Element to show save status.
 * @param {HTMLButtonElement | null} saveBtnElement - Button to disable/enable during save.
 * @returns {Promise<boolean>} - True if save was successful, false otherwise.
 */
async function saveScoreToLeaderboard(name, score, total, percentage, course, week, saveStatusElement = null, saveBtnElement = null) {
    if (!JSONBIN_BIN_ID || !JSONBIN_API_KEY || JSONBIN_BIN_ID === 'YOUR_BIN_ID' || JSONBIN_API_KEY === 'YOUR_ACCESS_KEY') {
        console.error("JSONBin Bin ID or API Key not configured. Cannot save score.");
        if (saveStatusElement) saveStatusElement.textContent = "Save disabled (config).";
        return false;
    }

    // Input validation
    const trimmedName = name ? name.trim() : '';
    if (!trimmedName) {
        if (saveStatusElement) saveStatusElement.textContent = "Please enter your name.";
        else alert("Please enter your name to save the score.");
        return false;
    }

    // Validate numeric inputs
    if (typeof score !== 'number' || isNaN(score) || score < 0) {
        console.error("Invalid score value:", score);
        if (saveStatusElement) saveStatusElement.textContent = "Invalid score value.";
        return false;
    }

    if (typeof total !== 'number' || isNaN(total) || total <= 0) {
        console.error("Invalid total value:", total);
        if (saveStatusElement) saveStatusElement.textContent = "Invalid total questions value.";
        return false;
    }

    if (typeof percentage !== 'number' || isNaN(percentage) || percentage < 0 || percentage > 100) {
        console.error("Invalid percentage value:", percentage);
        if (saveStatusElement) saveStatusElement.textContent = "Invalid percentage value.";
        return false;
    }

    if (saveStatusElement) saveStatusElement.textContent = "Saving...";
    if (saveBtnElement) saveBtnElement.disabled = true;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

    try {
        // Fetch current leaderboard. We don't need a status element here.
        let leaderboard = await fetchLeaderboard();
        if (!Array.isArray(leaderboard)) {
            console.warn("Fetched leaderboard data is not an array. Resetting to empty array.");
            leaderboard = [];
        }

        const newEntry = {
            name: trimmedName,
            score,
            total,
            percentage,
            course,
            week: week === 'all' ? 'All Weeks' : `Week ${week}`,
            timestamp: new Date().toISOString()
        };
        leaderboard.push(newEntry);

        // Sort leaderboard (consistent logic)
        leaderboard.sort((a, b) => {
            if (b.percentage !== a.percentage) return b.percentage - a.percentage;
            if (b.score !== a.score) return b.score - a.score;
            return new Date(b.timestamp) - new Date(a.timestamp); // Newest first on tie
        });

        // Limit size
        leaderboard = leaderboard.slice(0, LEADERBOARD_SIZE);

        // Save data wrapped in a root object for better structure
        const saveData = { leaderboard: leaderboard };

        const response = await fetch(`https://api.jsonbin.io/v3/b/${JSONBIN_BIN_ID}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Access-Key': JSONBIN_API_KEY,
                'X-Bin-Versioning': 'false' // Optional: Disable versioning if not needed
            },
            body: JSON.stringify(saveData),
            signal: controller.signal
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
            const errorText = await response.text();
            console.error(`HTTP error saving score! Status: ${response.status}`, errorText);
            throw new Error(`HTTP error saving score! Status: ${response.status}`);
        }

        console.log("Score saved successfully to JSONBin!");
        if (saveStatusElement) saveStatusElement.textContent = "Score Saved!";
        return true; // Indicate success

    } catch (error) {
        clearTimeout(timeoutId);
        console.error("Error saving score:", error);
        if (saveStatusElement) {
            if (error.name === 'AbortError') {
                saveStatusElement.textContent = "Request timed out. Please try again.";
            } else {
                saveStatusElement.textContent = "Error saving score.";
            }
        }
        if (saveBtnElement) saveBtnElement.disabled = false; // Re-enable button on error
        return false; // Indicate failure
    }
}

// Make functions globally available (alternative: use ES modules if environment supports it)
window.leaderboardAPI = {
    fetchLeaderboard,
    saveScoreToLeaderboard,
    escapeHTML,
    LEADERBOARD_SIZE // Expose size if needed elsewhere
}; 