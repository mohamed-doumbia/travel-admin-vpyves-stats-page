// Check if user is logged in
window.addEventListener('DOMContentLoaded', function() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') || sessionStorage.getItem('isLoggedIn');
    if (isLoggedIn !== 'true') {
        // window.location.href = 'login.html'; // Décommenter si nécessaire
        return;
    }
});

// Logout functionality
const logoutBtn = document.getElementById('logoutBtn');
if(logoutBtn) {
    logoutBtn.addEventListener('click', function(e) {
        e.preventDefault();
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userEmail');
        sessionStorage.removeItem('isLoggedIn');
        sessionStorage.removeItem('userEmail');
        window.location.href = 'login.html';
    });
}

// Sidebar toggle
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');

if(menuToggle && sidebar) {
    menuToggle.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });
}

// --- CONFIGURATION CHART.JS ---

// Configuration globale pour désactiver TOUTES les animations par défaut
Chart.defaults.font.family = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
Chart.defaults.color = '#6b7280';
Chart.defaults.animation = false; // Désactive l'animation au chargement
Chart.defaults.animations = {
    colors: false,
    x: false,
};
Chart.defaults.transitions = {
    active: {
        animation: {
            duration: 0 // Désactive l'animation au survol (hover)
        }
    }
};

// 1. Revenue and Bookings Chart (Line + Bar)
// 1. Revenue and Bookings Chart (Combo Bar + Line)
// On utilise un "Combo Chart" pour bien voir la différence d'échelle
const revenueCtx = document.getElementById('revenueChart').getContext('2d');
const revenueChart = new Chart(revenueCtx, {
    type: 'bar', // Type par défaut barres (pour les revenus)
    data: {
        labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'],
        datasets: [{
            label: 'Revenus (€)',
            data: [65000, 78000, 92000, 88000, 95000, 110000, 125000, 118000, 132000, 145000, 158000, 172000],
            backgroundColor: '#667eea', // Barres bleues
            borderRadius: 4,
            barPercentage: 0.6,
            order: 2, // Afficher derrière la ligne
            yAxisID: 'y' // Axe de gauche
        }, {
            type: 'line', // On force ce dataset en Ligne
            label: 'Nombre de Réservations',
            data: [520, 680, 750, 720, 810, 920, 1050, 980, 1120, 1250, 1380, 1520],
            borderColor: '#10b981', // Ligne verte
            backgroundColor: '#10b981',
            borderWidth: 3,
            pointBackgroundColor: '#fff',
            pointBorderColor: '#10b981',
            pointRadius: 4,
            pointHoverRadius: 6,
            tension: 0.4, // Courbe fluide
            order: 1, // Afficher devant les barres
            yAxisID: 'y1' // Axe de droite (IMPORTANT)
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
            mode: 'index',
            intersect: false,
        },
        plugins: {
            legend: {
                display: true,
                position: 'top',
                align: 'end',
                labels: { usePointStyle: true, boxWidth: 8 }
            }
        },
        scales: {
            y: {
                type: 'linear',
                display: true,
                position: 'left',
                title: { display: true, text: 'Revenus (€)' },
                grid: { borderDash: [2, 4], color: '#f0f0f0' },
                ticks: { callback: function(value) { return value / 1000 + 'k€'; } }
            },
            y1: {
                type: 'linear',
                display: true,
                position: 'right',
                title: { display: true, text: 'Volume Réservations' },
                grid: { drawOnChartArea: false } // Pas de grille pour l'axe de droite pour ne pas surcharger
            },
            x: {
                grid: { display: false }
            }
        }
    }
});

// 2. Flight Distribution Chart (Doughnut)
const flightDistCtx = document.getElementById('flightDistributionChart').getContext('2d');
const flightDistChart = new Chart(flightDistCtx, {
    type: 'doughnut',
    data: {
        labels: ['Vols Internes', 'Vols Européens', 'Vols Internationaux'],
        datasets: [{
            data: [35, 42, 23],
            backgroundColor: ['#667eea', '#10b981', '#f59e0b'],
            borderWidth: 2,
            borderColor: '#ffffff'
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: false,
        plugins: {
            legend: {
                position: 'right',
                labels: { usePointStyle: true, padding: 15 }
            }
        }
    }
});

// 3. Popular Destinations Chart (Bar)
const destinationsCtx = document.getElementById('destinationsChart').getContext('2d');
const destinationsChart = new Chart(destinationsCtx, {
    type: 'bar',
    data: {
        labels: ['Paris', 'New York', 'Tokyo', 'Londres', 'Dubaï', 'Barcelone', 'Rome', 'Bangkok'],
        datasets: [{
            label: 'Réservations',
            data: [1250, 980, 850, 1120, 670, 890, 720, 560],
            backgroundColor: '#667eea',
            borderWidth: 0
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: false,
        plugins: {
            legend: { display: false }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: { color: 'rgba(0, 0, 0, 0.05)' }
            },
            x: {
                grid: { display: false }
            }
        }
    }
});

// 4. Conversion Rate Chart (Line)
const conversionCtx = document.getElementById('conversionChart').getContext('2d');
const conversionChart = new Chart(conversionCtx, {
    type: 'line',
    data: {
        labels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
        datasets: [{
            label: 'Taux de Conversion (%)',
            data: [68, 72, 65, 78, 82, 85, 79],
            borderColor: '#667eea',
            backgroundColor: 'rgba(102, 126, 234, 0.1)',
            tension: 0.4, // Lissage de la courbe
            fill: true,
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                callbacks: {
                    label: function(context) { return 'Conversion: ' + context.parsed.y + '%'; }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: false,
                min: 50,
                grid: { color: 'rgba(0, 0, 0, 0.05)' },
                ticks: { callback: function(value) { return value + '%'; } }
            },
            x: { grid: { display: false } }
        }
    }
});

// 5. Prediction Chart (Line)
const predictionCtx = document.getElementById('predictionChart').getContext('2d');
const predictionChart = new Chart(predictionCtx, {
    type: 'line',
    data: {
        labels: ['Nov', 'Déc', 'Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun'],
        datasets: [{
            label: 'Données Réelles',
            data: [1380, 1520, null, null, null, null, null, null],
            borderColor: '#667eea',
            backgroundColor: 'rgba(102, 126, 234, 0.1)',
            tension: 0.4,
            fill: true,
            borderWidth: 2
        }, {
            label: 'Prédictions',
            data: [null, 1520, 1650, 1780, 1920, 2050, 2180, 2320],
            borderColor: '#10b981',
            backgroundColor: 'rgba(16, 185, 129, 0.05)',
            borderDash: [5, 5],
            tension: 0.4,
            fill: true,
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: false,
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
                labels: { usePointStyle: true, padding: 20 }
            }
        },
        scales: {
            y: {
                beginAtZero: false,
                grid: { color: 'rgba(0, 0, 0, 0.05)' }
            },
            x: { grid: { display: false } }
        }
    }
});

// 6. Payment Methods Chart (Pie)
const paymentCtx = document.getElementById('paymentMethodsChart').getContext('2d');
const paymentChart = new Chart(paymentCtx, {
    type: 'pie',
    data: {
        labels: ['Carte Bancaire', 'PayPal', 'Virement', 'Apple Pay', 'Google Pay'],
        datasets: [{
            data: [52, 23, 12, 8, 5],
            backgroundColor: ['#667eea', '#10b981', '#f59e0b', '#8b5cf6', '#3b82f6'],
            borderWidth: 2,
            borderColor: '#ffffff'
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: { usePointStyle: true, padding: 15 }
            }
        }
    }
});

// Date range selector functionality
const dateBtns = document.querySelectorAll('.date-btn');
dateBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        dateBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        // Ici on pourrait charger de nouvelles données statiques
    });
});

// Export button functionality
const exportBtn = document.querySelector('.export-btn');
if(exportBtn) {
    exportBtn.addEventListener('click', function() {
        alert('Export des données en cours...');
    });
}

console.log('Dashboard initialized successfully (Mode statique) !');


// Fonction pour voir les détails
function viewDetails(bookingId) {
    // Redirige vers la page de détails
    window.location.href = `detail.html?id=${bookingId}`;
}

// Fonction pour ouvrir le modal de changement de statut
let currentBookingId = '';

function openStatusModal(bookingId, currentStatus) {
    currentBookingId = bookingId;
    document.getElementById('modalBookingId').textContent = '#' + bookingId;
    
    // Définir le statut actuel dans le select
    const select = document.getElementById('statusSelect');
    if (currentStatus === 'Confirmé') select.value = 'confirmed';
    else if (currentStatus === 'En attente') select.value = 'pending';
    else if (currentStatus === 'Annulé') select.value = 'cancelled';
    
    // Ouvrir le modal (utilise Bootstrap 5)
    const modal = new bootstrap.Modal(document.getElementById('statusModal'));
    modal.show();
}

// Fonction pour mettre à jour le statut
function updateStatus() {
    const newStatus = document.getElementById('statusSelect').value;
    const row = document.querySelector(`tr[data-booking-id="${currentBookingId}"]`);
    
    if (row) {
        const statusCell = row.querySelector('.status');
        
        // Mise à jour de l'affichage
        statusCell.className = 'status ' + newStatus;
        
        if (newStatus === 'confirmed') {
            statusCell.textContent = 'Confirmé';
        } else if (newStatus === 'pending') {
            statusCell.textContent = 'En attente';
        } else if (newStatus === 'cancelled') {
            statusCell.textContent = 'Annulé';
        }
        
        // Fermer le modal
        const modal = bootstrap.Modal.getInstance(document.getElementById('statusModal'));
        modal.hide();
        
        // Message de confirmation (optionnel)
        alert('Statut mis à jour avec succès !');
        
        // Ici tu peux ajouter un appel AJAX pour sauvegarder dans la base de données
        // saveStatusToDatabase(currentBookingId, newStatus);
    }
}