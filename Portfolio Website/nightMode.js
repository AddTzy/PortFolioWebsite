document.addEventListener('DOMContentLoaded', function () {
    // Check if night mode preference is stored in localStorage
    const isNightMode = localStorage.getItem('nightMode') === 'true';

    // Set the initial mode based on the preference
    setNightMode(isNightMode);

    // Toggle night mode on button click
    document.getElementById('nightModeToggle').addEventListener('click', function () {
        const currentMode = document.body.classList.contains('night-mode');
        const newMode = !currentMode;

        // Toggle the class on the body element
        setNightMode(newMode);

        // Store the preference in localStorage
        localStorage.setItem('nightMode', newMode);
    });

    function setNightMode(isNightMode) {
        // Add or remove the 'night-mode' class on the body element
        document.body.classList.toggle('night-mode', isNightMode);
    }
});
