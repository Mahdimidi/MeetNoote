# Étape 1: Image de base avec Node.js
FROM node:16.16.0 as build-step

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers du projet
COPY package.json /app/
COPY . /app/

# Installer les dépendances
RUN npm install

# Construire l'application Angular
RUN npm run build

# Étape 2: Serveur de fichiers statiques pour la production
FROM nginx:alpine
COPY --from=build-step /app/dist/front_projet_finale /usr/share/nginx/html

# Exposer le port (par exemple, 80 pour Nginx)
EXPOSE 80
