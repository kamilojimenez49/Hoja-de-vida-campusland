# Portafolio — Kamilo Jiménez

## Estructura de carpetas

```
portfolio/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   ├── favicon.svg
│   └── images/
│       ├── placeholder.svg
│       ├── obleas.webp          ← reemplazar
│       ├── nuestro-universo.webp ← reemplazar
│       ├── preseleccion-ia.webp  ← reemplazar
│       └── og-cover.webp         ← reemplazar (1200×630)
└── README.md
```

## Pendientes antes de publicar

- Reemplazar los `href="#"` de cada proyecto por tus enlaces reales de GitHub y demo.
- Reemplazar el email y usuarios de GitHub/LinkedIn en `index.html` (hero, contacto y footer).
- Agregar las imágenes reales de cada proyecto en `assets/images/`.
- El formulario de contacto solo simula el envío; conéctalo a Formspree, EmailJS o tu propio backend.

## Optimizar imágenes (WebP)

Con [Squoosh](https://squoosh.app) (sin instalar nada): arrastra la imagen, elige formato **WebP**, calidad 75–80, y descarga.

Por línea de comandos, con `cwebp`:

```bash
# Instalar (Ubuntu/Debian)
sudo apt install webp

# Convertir una imagen
cwebp -q 80 captura-proyecto.png -o assets/images/obleas.webp

# Convertir todas las .png de una carpeta
for f in *.png; do cwebp -q 80 "$f" -o "assets/images/${f%.png}.webp"; done
```

Recomendado: capturas a 1280×960px máximo, comprimidas entre 100–200 KB cada una.

## Subir el proyecto a GitHub

```bash
cd portfolio
git init
git add .
git commit -m "chore: estructura inicial del portafolio"
git branch -M main
git remote add origin https://github.com/<tu-usuario>/portfolio.git
git push -u origin main
```

## Configurar GitHub Pages

1. En el repositorio: **Settings → Pages**.
2. En **Source**, selecciona la rama `main` y la carpeta `/ (root)`.
3. Guarda. Tu sitio quedará en `https://<tu-usuario>.github.io/portfolio/`.
4. Cada `git push` a `main` actualiza el sitio automáticamente (1–2 minutos).

## Git Flow + Conventional Commits

Flujo sugerido:

```bash
git checkout -b feature/dark-mode
# ... cambios ...
git add .
git commit -m "feat: agregar modo oscuro con persistencia en localStorage"
git checkout main
git merge feature/dark-mode
git push origin main
```

Ejemplos de buenos commits:

```
feat: agregar sección de skills con grupos técnicos y blandos
fix: corregir contraste del botón ghost en modo oscuro
style: ajustar espaciado entre secciones en mobile
refactor: extraer lógica de lazy load a una función reutilizable
docs: actualizar instrucciones de despliegue en README
perf: comprimir imágenes de proyectos a WebP
a11y: agregar aria-label al botón de tema
```

Prefijos comunes: `feat`, `fix`, `style`, `refactor`, `perf`, `docs`, `chore`, `test`.
