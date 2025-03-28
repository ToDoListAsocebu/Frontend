# 📌 ToDoApp - Frontend

Este Proyecto fue generado por Angular CLI version 19.2.0.

🚀 **Desarrollado por Camilo Chaparro - Desarrollador de Software**


## 📖 Descripción
Es una aplicación web desarrollada en **Angular 19** que permite gestionar tareas de forma eficiente. Cuenta con funcionalidades para **CRUD de tareas**..

## 🚀 Tecnologías Utilizadas
- **Angular 19** (Framework frontend)
- **TypeScript** (Lenguaje principal)
- **HttpClient** (Consumo de APIs en .NET 8)
- **Reactive Forms** (Manejo de formularios)
- **ngx-toastr** (Notificaciones)
- **GitHub Pages** (Despliegue estático)
- **GitHub Actions** (CI/CD para despliegue automático)

---

## ⚙️ Prerrequisitos
Antes de ejecutar el proyecto, asegúrate de tener instalados:
- [Node.js 18+](https://nodejs.org/)
- [Angular CLI 19](https://angular.io/cli)
- [Git](https://git-scm.com/downloads)
- [Docker](https://docs.docker.com/)

---

---

## ⚡ Instalación y Uso

### 🔹 1. Clonar el repositorio
```sh
git clone https://github.com/ToDoListAsocebu/Frontend.git
cd Frontend
```

### 🔹 2. Instalar dependencias
```sh
npm install
```

### 🔹 3. Ejecutar el proyecto en local
```sh
ng serve --open
```
Esto abrirá la aplicación en `http://localhost:4200/`.

---


## 🐳 Ejecución con Docker

### 📌 1. Construir y ejecutar el contenedor
```bash
docker build -t frontend-app .
docker run -p 8080:8080 todoapp-api
```
---


## 🌍 Despliegue en GitHub Pages
El proyecto está configurado para desplegarse automáticamente en GitHub Pages a través de **GitHub Actions**.

### 🔹 1. Construir el proyecto para producción
```sh
ng build --configuration=production --output-path=dist/
```

### 🔹 2. Desplegar en GitHub Pages
```sh
gh-pages -d dist
```

**💡 El despliegue automático ocurre cada vez que se hace push a `main`.**

---

## ✅ Funcionalidades Principales
✔ **Lista de tareas:** Ver todas las tareas registradas.  
✔ **Crear tareas:** Agregar nuevas tareas con título y descripción.  
✔ **Editar tareas:** Modificar título y descripción de una tarea.  
✔ **Eliminar tareas:** Remover tareas de la lista.  
✔ **Notificaciones:** Mensajes visuales de éxito o error con `ngx-toastr`.  
✔ **Despliegue automático:** CI/CD con GitHub Actions.  

---




