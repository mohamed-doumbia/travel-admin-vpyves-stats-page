# 🛫 Travel Admin Dashboard

Dashboard administratif moderne pour plateforme de réservation de voyages avec authentification, graphiques interactifs et statistiques en temps réel.

## 📋 Fonctionnalités

### 🔐 Page de Connexion
- Interface de connexion moderne et sécurisée
- Validation des identifiants
- Option "Se souvenir de moi"
- Design responsive avec animations

**Identifiants de démonstration :**
- Email : `admin@travel.com`
- Mot de passe : `admin123`

### 📊 Dashboard Principal
- **KPIs en temps réel** :
  - Nombre de réservations
  - Revenus générés
  - Nouveaux clients
  - Vols actifs

- **Graphiques Interactifs** (Chart.js) :
  - Évolution des revenus et réservations (ligne)
  - Distribution des vols (donut)
  - Destinations populaires (bar)
  - Taux de conversion (ligne)
  - Prédictions de réservations (ligne avec prédictions)
  - Méthodes de paiement (pie)

- **Tableau des réservations récentes** :
  - Liste détaillée des dernières réservations
  - Statuts visuels (confirmé, en attente, annulé)
  - Actions rapides (voir, modifier)

### ✨ Caractéristiques
- Design moderne et professionnel
- Interface responsive (mobile, tablette, desktop)
- Animations fluides
- Sidebar avec navigation
- Barre de recherche
- Notifications
- Profil utilisateur
- Sélecteur de période (aujourd'hui, 7 jours, 30 jours, année)
- Mise à jour des données en temps réel

## 🚀 Installation et Utilisation

### Option 1 : Ouverture directe
1. Extrayez le fichier ZIP
2. Ouvrez `login.html` dans votre navigateur web
3. Connectez-vous avec les identifiants de démo
4. Explorez le dashboard !

### Option 2 : Serveur local (recommandé)
Si vous avez Python installé :

```bash
# Python 3
python -m http.server 8000

# Puis ouvrez : http://localhost:8000/login.html
```

Si vous avez Node.js et npm :
```bash
npx http-server -p 8000

# Puis ouvrez : http://localhost:8000/login.html
```

## 📁 Structure du Projet

```
travel-admin-dashboard/
│
├── login.html              # Page de connexion
├── dashboard.html          # Dashboard principal
├── README.md              # Ce fichier
│
├── css/
│   ├── login.css          # Styles de la page de connexion
│   └── dashboard.css      # Styles du dashboard
│
└── js/
    ├── login.js           # Logique de connexion
    └── dashboard.js       # Logique du dashboard et graphiques
```

## 🎨 Technologies Utilisées

- **HTML5** : Structure des pages
- **CSS3** : Styles et animations
- **JavaScript (ES6)** : Logique et interactivité
- **Chart.js 4.4.0** : Graphiques interactifs
- **Font Awesome 6.4.0** : Icônes

## 🔧 Personnalisation

### Changer les couleurs
Modifiez les variables CSS dans `css/dashboard.css` :
```css
:root {
    --primary: #667eea;
    --secondary: #764ba2;
    --success: #10b981;
    --warning: #f59e0b;
    --danger: #ef4444;
}
```

### Ajouter de nouveaux graphiques
Dans `js/dashboard.js`, créez un nouveau graphique Chart.js :
```javascript
const myChart = new Chart(ctx, {
    type: 'line', // ou 'bar', 'pie', 'doughnut', etc.
    data: { ... },
    options: { ... }
});
```

### Modifier les identifiants
Dans `js/login.js`, modifiez la condition :
```javascript
if (email === 'votre@email.com' && password === 'votreMotDePasse') {
    // ...
}
```

## 🔌 Intégration Backend

Pour connecter ce dashboard à votre backend réel :

1. **Authentification** :
   - Remplacez la validation dans `js/login.js` par un appel API
   - Gérez les tokens JWT/sessions

2. **Récupération des données** :
   - Créez des fonctions pour appeler vos endpoints API
   - Mettez à jour les graphiques avec les données réelles

3. **Mise à jour en temps réel** :
   - Utilisez WebSockets pour les mises à jour live
   - Ou polling avec setInterval()

Exemple d'appel API :
```javascript
async function fetchDashboardData() {
    const response = await fetch('https://votre-api.com/dashboard', {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    });
    const data = await response.json();
    updateCharts(data);
}
```

## 📱 Responsive Design

Le dashboard est entièrement responsive et s'adapte à :
- 📱 Mobiles (< 768px)
- 📱 Tablettes (768px - 1200px)
- 💻 Desktop (> 1200px)

## ⚡ Performances

- Chargement rapide avec CSS et JS optimisés
- Graphiques légers et performants
- Animations GPU-accelerated
- Lazy loading possible pour les grandes quantités de données

## 🔒 Sécurité

⚠️ **Important** : Cette version de démonstration utilise une authentification côté client uniquement. Pour un environnement de production :

- Implémentez une authentification serveur
- Utilisez HTTPS
- Validez toutes les entrées côté serveur
- Implémentez des tokens JWT ou sessions sécurisées
- Ajoutez une protection CSRF
- Limitez les tentatives de connexion

## 🎯 Améliorations Futures

- [ ] Connexion à une vraie API backend
- [ ] Export des données en PDF/Excel
- [ ] Filtres avancés sur les tableaux
- [ ] Multi-langue (i18n)
- [ ] Mode sombre
- [ ] Notifications push
- [ ] Recherche avancée
- [ ] Gestion des utilisateurs
- [ ] Logs d'activité
- [ ] Rapports personnalisables

## 📧 Support

Pour toute question ou suggestion, n'hésitez pas à me contacter !

## 📄 Licence

Ce projet est libre d'utilisation pour vos projets personnels et commerciaux.

---

Créé avec ❤️ pour votre plateforme de voyage
```
