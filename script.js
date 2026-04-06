document.addEventListener('DOMContentLoaded', () => {
    // Add simple interaction or analytics here
    console.log('Profile loaded successfully');

    // Add staggered animation delay to list items if they exist
    const elements = document.querySelectorAll('.fade-in-item');
    elements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.1}s`;
    });

    // Optional: Add tilt effect to the card if desired
    const card = document.querySelector('.profile-card');
    if (card) {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Calculate rotation
            // const centerX = rect.width / 2;
            // const centerY = rect.height / 2;
            // const rotateX = ((y - centerY) / centerY) * -2;
            // const rotateY = ((x - centerX) / centerX) * 2;

            // card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            // card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    }
});
