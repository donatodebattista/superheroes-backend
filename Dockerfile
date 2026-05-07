FROM node:20-alpine

WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install --omit=dev

# Copiar el código de la aplicación
COPY . .

# Exponer el puerto
EXPOSE 3000

# Comando para iniciar la aplicación (ejecuta el seed y luego el servidor)
CMD ["npm", "start"]
