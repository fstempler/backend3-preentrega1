# Imagen base
FROM node:20

# Crear directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código
COPY . .

# Expone el puerto que utiliza la app
EXPOSE 3000

# Comando para iniciar la app
CMD ["npm", "start"]
