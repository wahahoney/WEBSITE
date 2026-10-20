document.addEventListener('DOMContentLoaded', () => {
    // Mobile filter toggle
    const filterBtn = document.getElementById('filterBtn');
    const sidebar = document.getElementById('sidebar');
    if (filterBtn) {
        filterBtn.addEventListener('click', () => {
            sidebar.classList.toggle('open');
        });
    }

    // Collapsible filters
    document.querySelectorAll('.filter-toggle').forEach(btn => {
        btn.addEventListener('click', () => {
            const options = btn.nextElementSibling;
            const icon = btn.querySelector('i');
            options.classList.toggle('open');
            icon.classList.toggle('fa-chevron-up');
            icon.classList.toggle('fa-chevron-down');
        });
    });

    // Size selection
    document.querySelectorAll('.size-grid button').forEach(b => {
        b.addEventListener('click', () => b.classList.toggle('active'));
    });

    // Color dots
    document.querySelectorAll('.dot').forEach(d => {
        d.addEventListener('click', () => {
            d.parentElement.querySelectorAll('.dot').forEach(x => x.classList.remove('active'));
            d.classList.add('active');
        });
    });

    // Wishlist toggle
    document.querySelectorAll('.wishlist').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const icon = btn.querySelector('i');
            icon.classList.toggle('fa-regular');
            icon.classList.toggle('fa-solid');
            icon.style.color = icon.classList.contains('fa-solid') ? 'red' : '';
        });
    });

    // Smooth scroll
    document.documentElement.style.scrollBehavior = 'smooth';

    // Netlify form - prevent double submit message
    const form = document.querySelector('.newsletter-form');
    if (form) {
        form.addEventListener('submit', () => {
            setTimeout(() => form.reset(), 500);
        });
    }
});
