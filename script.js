document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const menuContainer = document.querySelector('.menu-container');

    menuToggle.addEventListener('click', function(event) {
        event.stopPropagation();
        menuContainer.classList.toggle('active');
        menuToggle.classList.toggle('fa-bars');
        menuToggle.classList.toggle('fa-times');

        // Smooth scroll to top when menu is opened on mobile
        if (window.innerWidth <= 768 && menuContainer.classList.contains('active')) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.menu-container') && !event.target.closest('.hamburger-menu')) {
            menuContainer.classList.remove('active');
            menuToggle.classList.remove('fa-times');
            menuToggle.classList.add('fa-bars');
        }
    });

    const revenueCtx = document.getElementById('revenueChart').getContext('2d');
    new Chart(revenueCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Revenue',
                data: [65000, 80000, 75000, 95000, 110000, 120000],
                borderColor: '#2da2ad',
                backgroundColor: 'rgba(45, 162, 173, 0.1)',
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return '$' + value / 1000 + 'k';
                        }
                    }
                }
            }
        }
    });


    const userCtx = document.getElementById('userPieChart').getContext('2d');
    new Chart(userCtx, {
        type: 'pie',
        data: {
            labels: ['Active', 'Inactive', 'New'],
            datasets: [{
                data: [7500, 2500, 1000],
                backgroundColor: ['#2da2ad', '#f0a518', '#e74c3c']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: window.innerWidth < 768 ? 'top' : 'bottom'
                }
            }
        }
    });
});
