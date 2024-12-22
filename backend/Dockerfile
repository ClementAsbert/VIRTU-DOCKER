# image nodeJs
FROM node:18-alpine

# création du répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# copie des fichiers package.json et package-lock.json
COPY package*.json ./

# installation des dépendances
RUN npm install

# copie du reste des fichiers
COPY . .

# expose le port 3000
EXPOSE 3000

# commande pour démarrer l'application
CMD ["npm", "start"]