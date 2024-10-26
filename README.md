# Weather App

## Description

Weather App est une application simple qui permet aux utilisateurs de rechercher les conditions météorologiques actuelles d'une ville donnée. L'application utilise l'API OpenWeather pour récupérer les données météo et affiche les informations sous une interface utilisateur simple, construite avec React et Material UI.

## Fonctionnalités

- **Recherche de Ville** : Permet aux utilisateurs d'entrer le nom d'une ville et d'obtenir les conditions météorologiques actuelles.
- **Affichage des Données Météorologiques** : Montre le nom de la ville, la description de la météo et la température en degrés Celsius.

## Technologies Utilisées

- **React** : Bibliothèque JavaScript pour construire l'interface utilisateur.
- **Material UI** : Framework CSS pour des composants React stylisés.
- **React Query** : Outil pour gérer les requêtes et le cache des données.
- **Axios** : Bibliothèque pour faire des requêtes HTTP.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

- Node.js
- npm ou yarn

## Installation

1. Clonez le dépôt :

   ```bash
   git clone https://github.com/Wiizlax/Weather_app.git
   cd Weather_app
   ```

2. Installez les dépendances :

   ```bash
   npm install
   ```

   ou

   ```bash
   yarn install
   ```

3. Configurez votre clé d'API :

   - Créez un compte OpenWeather afin de générer une clé pour utiliser l'API
   - Créez un fichier `.env` à la racine du projet.
   - Ajoutez vos variables d'environnement :

   ```
   VITE_API_KEY_WEATHER=your_api_key_here
   VITE_URL=https://api.openweathermap.org/data/2.5/weather
   ```

   Remplacez `your_api_key_here` par votre clé d'API OpenWeather.

## Exécution de l'Application

Pour démarrer l'application, exécutez :

```bash
npm run dev
```

ou

```bash
yarn dev
```

Ouvrez votre navigateur et allez à `http://localhost:5173` pour voir l'application en action.

## Utilisation

1. Entrez le nom d'une ville dans le champ de recherche.
2. Cliquez sur le bouton "Search" pour afficher les conditions météorologiques de la ville spécifiée.