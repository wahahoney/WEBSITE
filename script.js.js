document.addEventListener('DOMContentLoaded', () => {
    
    // Mobile Menu Toggle
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mainNav = document.getElementById('main-nav');

    if (mobileMenuToggle && mainNav) {
        mobileMenuToggle.addEventListener('click', () => {
            // Toggle display of navigation on mobile
            if (mainNav.style.display === 'flex') {
                mainNav.style.display = 'none';
            } else {
                mainNav.style.display = 'flex';
                mainNav.style.flexDirection = 'column';
                mainNav.style.position = 'absolute';
                mainNav.style.top = '70px';
                mainNav.style.left = '0';
                mainNav.style.width = '100%';
                mainNav.style.backgroundColor = '#fff';
                mainNav.style.padding = '20px';
                mainNav.style.boxShadow = '0 5px 10px rgba(0,0,0,0.1)';
                mainNav.style.zIndex = '99';
            }
        });
    }

    // Wishlist Toggle (Heart Icon)
    const wishlistButtons = document.querySelectorAll('.wishlist-btn');
    
    wishlistButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent triggering the product card click
            const icon = btn.querySelector('i');
            
            if (icon.classList.contains('far')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
                icon.style.color = '#d32f2f';
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
                icon.style.color = '#333';
            }
        });
    });

    // Color Swatch Selection (Visual only for demo)
    const colorSwatches = document.querySelectorAll('.color-swatch');
    
    colorSwatches.forEach(swatch => {
        swatch.addEventListener('click', () => {
            // Remove active class from all
            colorSwatches.forEach(s => s.classList.remove('active'));
            // Add active to clicked
            swatch.classList.add('active');
        });
    });

    // Filter Accordion (Visual Toggle)
    const filterHeaders = document.querySelectorAll('.filter-group h3');
    
    filterHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const icon = header.querySelector('i');
            const list = header.nextElementSibling;
            
            if (list.style.display === 'none') {
                list.style.display = 'block';
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
            } else {
                list.style.display = 'none';
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            }
        });
    });

    // Size Button Selection
    const sizeButtons = document.querySelectorAll('.size-grid button');
    
    sizeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.style.backgroundColor === 'black') {
                btn.style.backgroundColor = '';
                btn.style.color = '';
            } else {
                btn.style.backgroundColor = 'black';
                btn.style.color = 'white';
            }
        });
    });

    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});