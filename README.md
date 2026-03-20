# DevCorp
practice to architecture web

# Files Architecture

```text
src/
├── assets/                  # Imágenes, logos, icons, fonts, etc.
│   ├── images/
│   │   ├── logo.png
│   │   ├── hero-bg.jpg
│   │   └── clients/         
│   ├── icons/
│   └── fonts/               
│
├── components/             
│   ├── common/             
│   │   ├── Button/
│   │   │   ├── Button.jsx
│   │   │   └── Button.css / styles.module.css
│   │   ├── Card/
│   │   ├── LoadingSpinner/
│   │   └── Modal/
│   │
│   ├── layout/             
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.module.css
│   │   ├── Footer/
│   │   ├── Sidebar/        
│   │   └── MainLayout.jsx   
│   │
│   └── ui/                  
│
├── pages/                   
│   ├── Home/
│   │   ├── Home.jsx
│   │   ├── Home.module.css
│   │   └── sections/        
│   │       ├── Hero.jsx
│   │       ├── Services.jsx
│   │       └── Stats.jsx
│   │
│   ├── About/
│   │   └── About.jsx
│   ├── Services/
│   │   └── Services.jsx
│   ├── Portfolio/           
│   │   └── Portfolio.jsx
│   ├── Technologies/        
│   ├── Contact/
│   │   └── Contact.jsx
│   └── NotFound/            (404)
│
├── hooks/                   # Hooks personalizados
│   ├── useForm.js
│   ├── useScroll.js
│   └── useWindowSize.js
│
├── services/                
│   └── api.js               
│           ├── projects.js
│           └── contact.js )
│
├── utils/                   # Funciones de ayuda
│   ├── formatDate.js
│   ├── validateEmail.js
│   └── constants.js
│
├── routes/                  
│   └── AppRoutes.jsx
│
├── styles/                  
│   ├── global.css
│   └── variables.css        (colores, tamaños, etc.)
│
├── App.jsx                  
└── main.jsx                 
```
