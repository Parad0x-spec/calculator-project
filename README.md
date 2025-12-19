# Projet Calculatrice - Methodologie Git Flow

Ce projet consiste en une application web de calculatrice simplifiee, developpee pour demontrer la maitrise du workflow Git Flow, de la gestion des branches et de la resolution de conflits.

## Fonctionnalites
L'application permet d'effectuer les operations arithmetiques suivantes :
* Addition : Somme de deux nombres.
* Soustraction : Difference entre deux nombres.
* Multiplication : Produit de deux nombres.

## Technologies
* Frontend : HTML5 / CSS3
* Logique : JavaScript (ES6)
* Versionnage : Git et GitHub

## Architecture Git
Ce projet respecte le modele Git Flow pour l'organisation des branches :

1. main : Branche de production contenant le code stable.
2. develop : Branche d'integration pour le developpement des fonctionnalites.
3. feature/ : Branches temporaires utilisees pour le developpement isole de chaque operation.

### Gestion des conflits
Conformement aux consignes du projet, un conflit a ete genere volontairement dans le fichier README.md lors de la fusion de la branche feature/soustraction vers develop. Ce conflit a ete resolu manuellement pour integrer les modifications des deux branches de maniere coherente.

## Structure du projet
.
├── index.html       # Structure de l'interface utilisateur
├── style.css        # Definition des styles graphiques
├── calculator.js    # Logique metier et fonctions de calcul
└── README.md        # Documentation technique

## Installation et Utilisation
1. Cloner le depot :
   git clone https://github.com/Parad0x-spec/calculator-project.git
2. Ouvrir le fichier index.html dans un navigateur web pour utiliser la calculatrice.

---
Auteur : Boyer Clément
Aide à la rédaction : Gemini
