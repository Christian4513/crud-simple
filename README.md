📋 CRUD de Usuarios con React, Tailwind CSS, TanStack Query y JSON Server.

Aplicación web para gestionar una lista de usuarios (crear, leer, editar y eliminar) desde una interfaz moderna. Los datos se sincronizan automáticamente gracias a TanStack Query y se almacenan en un servidor local simulado con json-server. Además, incluye pruebas automatizadas con Playwright.

---

🚀 Tecnologías utilizadas

- React – Biblioteca para construir interfaces
- Tailwind CSS – Utilidades para estilos rápidos y responsivos
- TanStack Query (React Query) – Gestión de datos y sincronización con el backend
- JSON Server – API REST simulada para pruebas locales
- Playwright – Framework para pruebas end-to-end
- Axios – Cliente HTTP para comunicación con APIs
- Vite – Bundler moderno para desarrollo y producción
- ESLint – Analizador de código estático para JavaScript y React
- PostCSS + Autoprefixer – Procesador CSS para compatibilidad con navegadores
- Plugins ESLint específicos para React y Hooks

---

📦 Requisitos

- Node.js v16 o superior
- npm v8 o superior

---

🛠️ Instalación

1. Clona el repositorio:

git clone https://github.com/Christian4513/crud-simple.git
cd crud-simple

2. Instala dependencias:

npm install

3. Instala Playwright y navegadores:

npx playwright install

---

🧪 Ejecutar aplicación y pruebas

- Inicia la app:

npm run dev

- En otra terminal, corre las pruebas:

npx playwright test

- Para ver reporte visual:

npx playwright show-report

---

📡 Configuración de JSON Server

1. Instala como dependencia de desarrollo:

npm install -D json-server

2. Agrega el archivo db.json:

{
  "users": [
    { "id": 1, "name": "Juan Pérez", "email": "juan@mail.com" },
    { "id": 2, "name": "Ana Gómez", "email": "ana@mail.com" },
    { "id": 3, "name": "Carlos Díaz", "email": "carlos@mail.com" },
    { "id": 4, "name": "Laura Torres", "email": "laura@mail.com" },
    { "id": 5, "name": "Pedro Ramírez", "email": "pedro@mail.com" }
  ]
}

3. Agrega el script en package.json:

"scripts": {
  "api": "json-server --watch db.json --port 3000"
}

4. Ejecuta el servidor de datos:

npm run api

---

🌐 URLs

- App: http://localhost:5173
- API: http://localhost:3000/users

---

🧩 Estructura del proyecto

├── public/
├── src/
│   ├── components/
│   │   ├── UserForm.jsx
│   │   ├── UserList.jsx
│   │   └── UserItem.jsx
│   ├── api.js
│   ├── App.jsx
│   └── main.jsx
├── db.json
├── tests/
│   └── user.test.js
├── package.json
└── README.md

---

🤝 Autor

Christian Fuentes  

---





