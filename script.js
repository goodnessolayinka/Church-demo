// Set donation amount
function setAmount(amount) {
    document.getElementById('customAmount').value = amount;
}

// Handle donation form submission
document.getElementById('donationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const amount = document.getElementById('customAmount').value || 'Custom';
    alert(`Thank you for your donation of $${amount}! Your generosity is deeply appreciated. This is a demo - in production, this would process the payment.`);
    this.reset();
});

// Handle contact form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you soon. This is a demo - in production, this would send an email.');
    this.reset();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

console.log('Church website demo loaded successfully!');