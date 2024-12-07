document.addEventListener('DOMContentLoaded', () => {
    // Fade-in animation for company description
    const companyDescription = document.querySelector('.company-description');

    if (companyDescription) {
        // Add the fade-in class to trigger animation
        companyDescription.classList.add('fade-in');
    }

    // Image dimming on scroll
    const imageContainer = document.querySelector('.custom-image-container img');

    if (imageContainer) {
        window.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY; // Get the scroll position
            const imageHeight = imageContainer.offsetHeight; // Get the image height

            // Dim the image based on scroll position
            if (scrollPosition > imageHeight / 2) {
                imageContainer.classList.add('dimmed'); // Add the dim effect
            } else {
                imageContainer.classList.remove('dimmed'); // Remove the dim effect
            }
        });
    } else {
        console.error("Image element not found.");
    }
});