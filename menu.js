document.addEventListener('DOMContentLoaded', function() {
    // Daily Tip Close Button
    const closeTipBtn = document.querySelector('.close-tip-btn');
    const dailyTipSection = document.querySelector('.daily-tip-section');

    if (closeTipBtn && dailyTipSection) {
        closeTipBtn.addEventListener('click', function() {
            dailyTipSection.style.display = 'none';
        });
    }

    // Last Logged In Section (example data, replace with real data as needed)
    const lastLoginTimeElem = document.getElementById('last-login-time');
    const lastLoginLocationElem = document.getElementById('last-login-location');
    if (lastLoginTimeElem && lastLoginLocationElem) {
        // Example: Replace with real data fetching logic as needed
        const lastLoginTime = '2024-06-07 14:32:10';
        const lastLoginLocation = 'Kathmandu, Nepal';
        lastLoginTimeElem.textContent = lastLoginTime;
        lastLoginLocationElem.textContent = `Location: ${lastLoginLocation}`;
    }
}); 