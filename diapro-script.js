// ============================================
// DIAPRO - JAVASCRIPT FUNCTIONALITY
// Diabetes Treatment Landing Page
// ============================================

// Wait for DOM to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', function() {

    // ============================================
    // LIVE VISITOR COUNTER
    // ============================================
    const visitorCountElement = document.getElementById('visitorCount');
    
    // Function to update visitor count with random fluctuation
    function updateVisitorCount() {
        // Random number between 40 and 70 (higher than Fertolix for diabetes demographic)
        const count = Math.floor(Math.random() * (70 - 40 + 1)) + 40;
        visitorCountElement.textContent = count;
    }
    
    // Update visitor count every 8-12 seconds (random interval)
    function scheduleVisitorUpdate() {
        const interval = Math.floor(Math.random() * (12000 - 8000 + 1)) + 8000;
        setTimeout(function() {
            updateVisitorCount();
            scheduleVisitorUpdate(); // Schedule next update
        }, interval);
    }
    
    // Start visitor counter
    scheduleVisitorUpdate();

    // ============================================
    // ORDER NOTIFICATION POPUP
    // ============================================
    const orderNotification = document.getElementById('orderNotification');
    const notificationName = document.getElementById('notificationName');
    const notificationOrder = document.getElementById('notificationOrder');
    
    // Array of Nigerian names and cities (Diabetes-focused)
    const nigerianNames = [
        { name: 'Musa', city: 'Kano' },
        { name: 'Ibrahim', city: 'Kaduna' },
        { name: 'Abubakar', city: 'Sokoto' },
        { name: 'Fatima', city: 'Abuja' },
        { name: 'Halima', city: 'Jos' },
        { name: 'Adewale', city: 'Ibadan' },
        { name: 'Oluwaseun', city: 'Lagos' },
        { name: 'Chinedu', city: 'Enugu' },
        { name: 'Emeka', city: 'Onitsha' },
        { name: 'Blessing', city: 'Port Harcourt' },
        { name: 'Grace', city: 'Benin City' },
        { name: 'Ngozi', city: 'Owerri' },
        { name: 'Chioma', city: 'Awka' },
        { name: 'Yusuf', city: 'Maiduguri' },
        { name: 'Zainab', city: 'Bauchi' },
        { name: 'Ahmed', city: 'Katsina' },
        { name: 'Hauwa', city: 'Gombe' },
        { name: 'Aminat', city: 'Ilorin' },
        { name: 'Seun', city: 'Abeokuta' },
        { name: 'Tunde', city: 'Osogbo' },
        { name: 'Funke', city: 'Akure' },
        { name: 'Kemi', city: 'Ado-Ekiti' },
        { name: 'Efe', city: 'Warri' },
        { name: 'Chiamaka', city: 'Umuahia' }
    ];
    
    // Array of package options
    const packages = [
        '1 Bottle',
        '2 Bottles + Diet Plan',
        '3 Bottles + Diet Plan',
        '4 Bottles + Diet Plan'
    ];
    
    // Function to show notification
    function showNotification() {
        // Get random name, city, and package
        const randomPerson = nigerianNames[Math.floor(Math.random() * nigerianNames.length)];
        const randomPackage = packages[Math.floor(Math.random() * packages.length)];
        
        // Update notification content
        notificationName.textContent = `${randomPerson.name} from ${randomPerson.city}`;
        notificationOrder.textContent = `just ordered ${randomPackage}`;
        
        // Show notification with slide-in animation
        orderNotification.classList.add('show');
        
        // Hide notification after 5 seconds
        setTimeout(function() {
            orderNotification.classList.remove('show');
        }, 5000);
    }
    
    // Show first notification after 15 seconds
    setTimeout(showNotification, 15000);
    
    // Then show notification every 15 seconds
    setInterval(showNotification, 15000);

    // ============================================
    // DISCOUNT MODAL
    // ============================================
    const discountModal = document.getElementById('discountModal');
    const modalClose = document.getElementById('modalClose');
    let modalShown = false;
    
    // Function to show modal
    function showModal() {
        if (!modalShown) {
            discountModal.classList.add('active');
            modalShown = true;
            // Prevent body scroll when modal is open
            document.body.style.overflow = 'hidden';
        }
    }
    
    // Function to hide modal
    function hideModal() {
        discountModal.classList.remove('active');
        // Restore body scroll
        document.body.style.overflow = 'auto';
    }
    
    // Show modal after 10 seconds
    setTimeout(showModal, 20000);
    
    // Close modal when X is clicked
    modalClose.addEventListener('click', hideModal);
    
    // Close modal when clicking outside the modal content
    discountModal.addEventListener('click', function(e) {
        if (e.target === discountModal) {
            hideModal();
        }
    });
    
    // Exit Intent - Show modal when user tries to leave
    let exitIntentShown = false;
    document.addEventListener('mouseleave', function(e) {
        // Check if mouse is leaving from the top of the page
        if (e.clientY <= 0 && !exitIntentShown && !discountModal.classList.contains('active')) {
            showModal();
            exitIntentShown = true;
        }
    });
    
    // Modal links - close modal when "Claim My Discount Now" is clicked
    const modalCTA = document.querySelector('.modal-cta');
    if (modalCTA) {
        modalCTA.addEventListener('click', hideModal);
    }

    // ============================================
    // COUNTDOWN TIMER (Modal & Pricing Section)
    // ============================================
    
    // Set countdown duration (3-6 hours in seconds)
    const countdownDuration = Math.floor(Math.random() * (6 - 3 + 1) + 3) * 3600; // Random 3-6 hours
    let countdownSeconds = countdownDuration;
    
    // Get timer elements
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    
    // Sticky timer elements
    const hoursStickyElement = document.getElementById('hoursSticky');
    const minutesStickyElement = document.getElementById('minutesSticky');
    const secondsStickyElement = document.getElementById('secondsSticky');
    
    // Function to update countdown timer
    function updateCountdown() {
        const hours = Math.floor(countdownSeconds / 3600);
        const minutes = Math.floor((countdownSeconds % 3600) / 60);
        const seconds = countdownSeconds % 60;
        
        // Format with leading zeros
        const hoursFormatted = String(hours).padStart(2, '0');
        const minutesFormatted = String(minutes).padStart(2, '0');
        const secondsFormatted = String(seconds).padStart(2, '0');
        
        // Update modal timer
        if (hoursElement) hoursElement.textContent = hoursFormatted;
        if (minutesElement) minutesElement.textContent = minutesFormatted;
        if (secondsElement) secondsElement.textContent = secondsFormatted;
        
        // Update sticky timer
        if (hoursStickyElement) hoursStickyElement.textContent = hoursFormatted;
        if (minutesStickyElement) minutesStickyElement.textContent = minutesFormatted;
        if (secondsStickyElement) secondsStickyElement.textContent = secondsFormatted;
        
        // Decrease countdown
        countdownSeconds--;
        
        // Reset when it reaches 0
        if (countdownSeconds < 0) {
            countdownSeconds = countdownDuration;
        }
    }
    
    // Update countdown every second
    updateCountdown(); // Initial call
    setInterval(updateCountdown, 1000);

    // ============================================
    // STOCK SCARCITY COUNTER
    // ============================================
    const stockCountElements = [
        document.getElementById('stockCount'),
        document.getElementById('stockCountForm'),
        document.getElementById('stockCountFinal')
    ];
    
    let stockCount = 12; // Starting stock count
    
    // Function to update all stock count displays
    function updateStockCount() {
        stockCountElements.forEach(element => {
            if (element) {
                element.textContent = stockCount;
            }
        });
        
        // Decrease stock count
        stockCount--;
        
        // Don't go below 5
        if (stockCount < 5) {
            stockCount = 5;
        }
    }
    
    // Update stock count every 45-90 seconds (random)
    function scheduleStockUpdate() {
        const interval = Math.floor(Math.random() * (90000 - 45000 + 1)) + 45000;
        setTimeout(function() {
            updateStockCount();
            scheduleStockUpdate(); // Schedule next update
        }, interval);
    }
    
    // Start stock counter
    scheduleStockUpdate();

    // ============================================
    // SMOOTH SCROLLING FOR ANCHOR LINKS
    // ============================================
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#" or empty
            if (href === '#' || href === '') return;
            
            e.preventDefault();
            
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                // Smooth scroll to target
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update URL without jumping
                history.pushState(null, null, href);
            }
        });
    });

    // ============================================
    // FORM VALIDATION & SUBMISSION
    // ============================================
    const orderForm = document.getElementById('orderFormElement');
    
    if (orderForm) {
        orderForm.addEventListener('submit', function(e) {
            // Get form fields
            const fullName = document.getElementById('fullName').value.trim();
            const phoneNumber = document.getElementById('phoneNumber').value.trim();
            const phoneNumberConfirm = document.getElementById('phoneNumberConfirm').value.trim();
            const deliveryAddress = document.getElementById('deliveryAddress').value.trim();
            const state = document.getElementById('state').value;
            const quantity = document.getElementById('quantity').value;
            const delivery = document.querySelector('input[name="delivery"]:checked');
            
            // Validation checks
            let errors = [];
            
            // Check if all required fields are filled
            if (!fullName) errors.push('Please enter your full name');
            if (!phoneNumber) errors.push('Please enter your phone number');
            if (!phoneNumberConfirm) errors.push('Please confirm your phone number');
            if (!deliveryAddress) errors.push('Please enter your delivery address');
            if (!state) errors.push('Please select your state');
            if (!quantity) errors.push('Please select a package');
            if (!delivery) errors.push('Please select delivery duration');
            
            // Check if phone numbers match
            if (phoneNumber && phoneNumberConfirm && phoneNumber !== phoneNumberConfirm) {
                errors.push('Phone numbers do not match');
            }
            
            // Validate phone number format (Nigerian format)
            const phoneRegex = /^(\+234|234|0)[789][01]\d{8}$/;
            if (phoneNumber && !phoneRegex.test(phoneNumber.replace(/\s/g, ''))) {
                errors.push('Please enter a valid Nigerian phone number');
            }
            
            // If there are errors, prevent submission and show alert
            if (errors.length > 0) {
                e.preventDefault();
                alert('Please fix the following errors:\n\n' + errors.join('\n'));
                return false;
            }
            
            // If validation passes, form will submit to Formspree
            // Show success message (optional - Formspree handles this)
            alert('Thank you! Your order has been submitted. We will contact you within 2 hours to confirm your order.');
        });
        
        // Real-time phone number matching validation
        const phoneNumberInput = document.getElementById('phoneNumber');
        const phoneNumberConfirmInput = document.getElementById('phoneNumberConfirm');
        
        function checkPhoneMatch() {
            if (phoneNumberInput.value && phoneNumberConfirmInput.value) {
                if (phoneNumberInput.value !== phoneNumberConfirmInput.value) {
                    phoneNumberConfirmInput.style.borderColor = '#DC2626';
                } else {
                    phoneNumberConfirmInput.style.borderColor = '#10B981';
                }
            }
        }
        
        phoneNumberInput.addEventListener('input', checkPhoneMatch);
        phoneNumberConfirmInput.addEventListener('input', checkPhoneMatch);
    }

    // ============================================
    // SCROLL ANIMATIONS (Fade In On Scroll)
    // ============================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-on-scroll');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for scroll animations
    const animatedElements = document.querySelectorAll('.testimonial-card, .benefit-card, .problem-item, .pricing-card, .faq-item, .complication-card, .type-card');
    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // ============================================
    // PREVENT FORM RESUBMISSION ON PAGE REFRESH
    // ============================================
    if (window.history.replaceState) {
        window.history.replaceState(null, null, window.location.href);
    }

    // ============================================
    // CONSOLE MESSAGE (Optional - for developers)
    // ============================================
    console.log('%c💊 DiaPro - Diabetes Treatment Landing Page Loaded Successfully! 💊', 'color: #1E40AF; font-size: 16px; font-weight: bold;');
    console.log('%cAll interactive features are now active.', 'color: #6B7280; font-size: 12px;');

}); // End of DOMContentLoaded

// ============================================
// ADDITIONAL UTILITY FUNCTIONS
// ============================================

// Function to format Nigerian phone numbers
function formatNigerianPhone(phone) {
    // Remove all spaces and special characters
    let cleaned = phone.replace(/\D/g, '');
    
    // Handle different formats
    if (cleaned.startsWith('234')) {
        cleaned = '0' + cleaned.substring(3);
    } else if (cleaned.startsWith('+234')) {
        cleaned = '0' + cleaned.substring(4);
    }
    
    return cleaned;
}

// Function to validate email (if needed in future)
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Prevent right-click on images (optional - to protect product images)
// Uncomment if you want to enable this feature
/*
document.addEventListener('contextmenu', function(e) {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
        return false;
    }
});
*/

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================

// Lazy load images (if you add actual product images later)
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// ============================================
// END OF SCRIPT
// ============================================