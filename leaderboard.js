// --- leaderboard.js ---
// Handles fetching and displaying the leaderboard on index.html

// --- Configuration (MUST MATCH scripts.js values) ---
// const JSONBIN_BIN_ID = '67f8354d8a456b796686d6db'; // <--- MOVED TO leaderboard_api.js
// const JSONBIN_API_KEY = '$2a$10$XAQ4xZF7ujo6.aSwAx/Kl.8GJeJMEOBZhW3x7Mc9LIO7gUSfYjjb.'; // <--- MOVED TO leaderboard_api.js
// const LEADERBOARD_SIZE = 10; // <--- MOVED TO leaderboard_api.js

// --- Utility (Copied from scripts.js) ---
// const escapeHTML = (str) => { // <--- MOVED TO leaderboard_api.js
//     if (typeof str !== 'string') return '';
//     return str.replace(/&/g, "&amp;")
//         .replace(/</g, "&lt;")
//         .replace(/>/g, "&gt;")
//         .replace(/"/g, "&quot;")
//         .replace(/'/g, "&#39;"); // Correct entity for single quote
// };


// --- Leaderboard Fetching (Copied and adapted from scripts.js) ---
// MOVED to leaderboard_api.js as leaderboardAPI.fetchLeaderboard
// async function fetchLeaderboard() { ... }

// --- Leaderboard Display Function for the Index Page ---
async function displayIndexLeaderboard() {
    const listElement = document.getElementById('index-leaderboard-list'); // Use specific ID
    if (!listElement) {
        console.error("Element #index-leaderboard-list not found on index page.");
        return;
    }

    listElement.innerHTML = '<li><span class="loading-dots">Loading<span>.</span><span>.</span><span>.</span></span></li>';

    // Use the centralized API function, passing the status element
    const leaderboardData = await leaderboardAPI.fetchLeaderboard(listElement);

    listElement.innerHTML = ''; // Clear loading/previous list

    if (!Array.isArray(leaderboardData) || leaderboardData.length === 0) {
        listElement.innerHTML = '<li>No high scores recorded yet. Be the first!</li>';
        return;
    }

    // Sort data (should match sorting logic in scripts.js for consistency)
    leaderboardData.sort((a, b) => {
        if (b.percentage !== a.percentage) {
            return b.percentage - a.percentage; // Higher percentage first
        }
        if (b.score !== a.score) {
            return b.score - a.score; // Higher raw score second
        }
        // Optional: Sort by date as final tie-breaker (newest first)
        return new Date(b.timestamp) - new Date(a.timestamp);
    });

    // Slice using the constant from the API module
    const topScores = leaderboardData.slice(0, leaderboardAPI.LEADERBOARD_SIZE);

    topScores.forEach((entry, index) => { // Get the index (rank) here
        const listItem = document.createElement('li');

        // **** START: Add Rank Classes ****
        if (index === 0) {
            listItem.classList.add('rank-1'); // Gold
        } else if (index === 1) {
            listItem.classList.add('rank-2'); // Silver
        } else if (index === 2) {
            listItem.classList.add('rank-3'); // Bronze
        }
        // **** END: Add Rank Classes ****


        const name = entry.name || 'Unknown';
        const scoreVal = typeof entry.score === 'number' ? entry.score : '?';
        const totalVal = typeof entry.total === 'number' ? entry.total : '?';
        const percentVal = typeof entry.percentage === 'number' ? entry.percentage : '?';
        const courseVal = entry.course || 'N/A';
        const weekVal = entry.week || 'N/A';

        // Use the centralized escapeHTML function
        listItem.innerHTML = `
            <span class="name">${leaderboardAPI.escapeHTML(name)}</span> -
            <span class="score">${scoreVal}/${totalVal} (${percentVal}%)</span>
            <span class="details">(Course: ${leaderboardAPI.escapeHTML(courseVal)}, ${leaderboardAPI.escapeHTML(weekVal)})</span>
        `;
        listElement.appendChild(listItem);
    });
}

// --- Run the display function when the DOM is fully loaded ---
document.addEventListener('DOMContentLoaded', displayIndexLeaderboard);