# DevCorp
practice to architecture web

# Files Architecture
src/
├── assets/                  # Imágenes, logos, icons, fonts, etc.
│   ├── images/
│   │   ├── logo.png
│   │   ├── hero-bg.jpg
│   │   └── clients/         (logos de clientes ficticios o reales)
│   ├── icons/
│   └── fonts/               (si usas fuentes personalizadas)
│
├── components/              # Todo lo reutilizable
│   ├── common/              # Muy genéricos (usados en toda la app)
│   │   ├── Button/
│   │   │   ├── Button.jsx
│   │   │   └── Button.css / styles.module.css
│   │   ├── Card/
│   │   ├── LoadingSpinner/
│   │   └── Modal/
│   │
│   ├── layout/              # Partes que se repiten en varias páginas
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.module.css
│   │   ├── Footer/
│   │   ├── Sidebar/         (si llegas a tener dashboard o algo)
│   │   └── MainLayout.jsx   (envuelve las páginas)
│   │
│   └── ui/                  (alternativa o complemento a common – botones fancy, badges, etc.)
│
├── pages/                   # Cada página principal (ruta)
│   ├── Home/
│   │   ├── Home.jsx
│   │   ├── Home.module.css
│   │   └── sections/        (si la home es muy larga)
│   │       ├── Hero.jsx
│   │       ├── Services.jsx
│   │       └── Stats.jsx
│   │
│   ├── About/
│   │   └── About.jsx
│   ├── Services/
│   │   └── Services.jsx
│   ├── Portfolio/           (o Cases, Projects)
│   │   └── Portfolio.jsx
│   ├── Technologies/        (o Stack, Tech)
│   ├── Contact/
│   │   └── Contact.jsx
│   └── NotFound/            (404)
│
├── hooks/                   # Hooks personalizados
│   ├── useForm.js
│   ├── useScroll.js
│   └── useWindowSize.js
│
├── services/                # Llamadas a API / lógica de datos
│   └── api.js               (axios / fetch centralizado)
│       (o → api/
│           ├── projects.js
│           └── contact.js )
│
├── utils/                   # Funciones de ayuda puras
│   ├── formatDate.js
│   ├── validateEmail.js
│   └── constants.js
│
├── routes/                  # Si usas React Router v6+
│   └── AppRoutes.jsx
│
├── styles/                  # Estilos globales (opcional)
│   ├── global.css
│   └── variables.css        (colores, tamaños, etc.)
│
├── App.jsx                  # Componente raíz
└── main.jsx                 # Entry point (React 18+)
