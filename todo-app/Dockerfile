# Etapa 1: Construcción de la aplicación Angular
FROM node:20 AS build

# Definir el directorio de trabajo
WORKDIR /app

# Copiar los archivos de configuración de npm
COPY package.json package-lock.json ./
RUN npm install

# Copiar el código fuente de la aplicación
COPY . .

# Ejecutar el build en modo producción
RUN npm run build --configuration=production

# Etapa 2: Servir la aplicación con Nginx
FROM nginx:alpine

# Copiar los archivos generados por Angular a la carpeta de Nginx
COPY --from=build /app/dist/todo-app/browser /usr/share/nginx/html

# Copiar el archivo de configuración personalizado de Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Exponer el puerto 80 para Nginx
EXPOSE 80

# Iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
