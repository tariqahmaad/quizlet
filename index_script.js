const modal = document.getElementById('player-modal');
const modalNameInput = document.getElementById('modal-player-name');
const modalStartBtn = document.getElementById('modal-start-btn');
const modalTargetUrlInput = document.getElementById('modal-target-url');
const modalError = document.getElementById('modal-error');
const courseLinks = document.querySelectorAll('.course-link.available'); // Select only available course links

// Function to show the modal
function showModal(targetUrl) {
    modalNameInput.value = ''; // Clear previous input
    modalError.textContent = ''; // Clear previous error
    modalTargetUrlInput.value = targetUrl; // Store the URL we want to go to
    modal.style.display = 'flex'; // Show the modal overlay
    modalNameInput.focus(); // Set focus to the input field
}

// Function to close the modal
function closeModal() {
    modal.style.display = 'none';
}

// Add click listeners to all available course items
courseLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        const targetUrl = link.getAttribute('data-href'); // Get URL from data attribute
        if (targetUrl) {
            showModal(targetUrl);
        } else {
            console.error("Missing data-href attribute on course item:", link);
        }
    });
});

// Add click listener to the modal's "Start Exam" button
modalStartBtn.addEventListener('click', () => {
    const playerName = modalNameInput.value.trim();
    const targetUrl = modalTargetUrlInput.value;

    if (!playerName) {
        modalError.textContent = 'Please enter your name.';
        modalNameInput.focus();
        return; // Stop if name is empty
    }

    if (!targetUrl) {
        modalError.textContent = 'Error: Target course not found.';
        return; // Stop if target URL is somehow missing
    }

    // Construct the final URL with the player name appended
    // Check if the targetUrl already contains a question mark
    const separator = targetUrl.includes('?') ? '&' : '?';
    const finalUrl = `${targetUrl}${separator}player=${encodeURIComponent(playerName)}`;

    // Navigate to the quiz page
    window.location.href = finalUrl;
});

// Optional: Allow pressing Enter in the input field to submit
modalNameInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        modalStartBtn.click();
    }
});

// Optional: Close modal if clicking outside the content area
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

// Optional: Close modal with Escape key
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.style.display === 'flex') {
        closeModal();
    }
});