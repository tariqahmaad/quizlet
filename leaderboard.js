// --- leaderboard.js ---
// Handles fetching and displaying the leaderboard on index.html

// --- Configuration (MUST MATCH scripts.js values) ---
const JSONBIN_BIN_ID = '67f8354d8a456b796686d6db'; // <--- PASTE YOUR BIN ID HERE
const JSONBIN_API_KEY = '$2a$10$XAQ4xZF7ujo6.aSwAx/Kl.8GJeJMEOBZhW3x7Mc9LIO7gUSfYjjb.'; // <--- PASTE YOUR ACCESS KEY HERE
const LEADERBOARD_SIZE = 10;

// --- Utility (Copied from scripts.js) ---
const escapeHTML = (str) => {
    if (typeof str !== 'string') return '';
    return str.replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;"); // Correct entity for single quote
};


// --- Leaderboard Fetching (Copied and adapted from scripts.js) ---
async function fetchLeaderboard() {
    if (!JSONBIN_BIN_ID || !JSONBIN_API_KEY || JSONBIN_BIN_ID === 'YOUR_BIN_ID' || JSONBIN_API_KEY === 'YOUR_ACCESS_KEY') {
        console.warn("JSONBin Bin ID or API Key not configured properly in leaderboard.js. Leaderboard disabled.");
        const listElement = document.getElementById('index-leaderboard-list'); // Target index list
        if (listElement) listElement.innerHTML = '<li>Leaderboard not configured.</li>';
        return [];
    }
    try {
        const response = await fetch(`https://api.jsonbin.io/v3/b/${JSONBIN_BIN_ID}/latest`, {
            method: 'GET',
            headers: {
                'X-Access-Key': JSONBIN_API_KEY
            }
        });
        if (!response.ok) {
            if (response.status === 404) {
                console.log("Leaderboard bin empty or not found on fetch. Returning empty array.");
                return [];
            }
            const errorText = await response.text();
            console.error(`HTTP error fetching leaderboard! Status: ${response.status}`, errorText);
            throw new Error(`HTTP error fetching leaderboard! Status: ${response.status}`);
        }
        const data = await response.json();
        // IMPORTANT: Adjust based on how data is SAVED in scripts.js
        // If saved as { leaderboard: [...] }, use data.record?.leaderboard
        // If saved as [...], use data.record
        return data.record?.leaderboard || data.record || []; // Handles {leaderboard: []} or just []
    } catch (error) {
        console.error("Error fetching leaderboard:", error);
        const listElement = document.getElementById('index-leaderboard-list'); // Target index list
        if (listElement) listElement.innerHTML = '<li>Error loading leaderboard data.</li>';
        return [];
    }
}

// --- Leaderboard Display Function for the Index Page ---
async function displayIndexLeaderboard() {
    const listElement = document.getElementById('index-leaderboard-list'); // Use specific ID
    if (!listElement) {
        console.error("Element #index-leaderboard-list not found on index page.");
        return;
    }

    listElement.innerHTML = '<li><span class="loading-dots">Loading<span>.</span><span>.</span><span>.</span></span></li>';

    const leaderboardData = await fetchLeaderboard();

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

    // Slice again just in case (should match LEADERBOARD_SIZE)
    const topScores = leaderboardData.slice(0, LEADERBOARD_SIZE);

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

        // Corrected innerHTML - NO rank span needed here
        listItem.innerHTML = `
            <span class="name">${escapeHTML(name)}</span> -
            <span class="score">${scoreVal}/${totalVal} (${percentVal}%)</span>
            <span class="details">(Course: ${escapeHTML(courseVal)}, ${escapeHTML(weekVal)})</span>
        `;
        listElement.appendChild(listItem);
    });
}

// --- Run the display function when the DOM is fully loaded ---
document.addEventListener('DOMContentLoaded', displayIndexLeaderboard);