# 🚀 Node.js + TailwindCSS + Express Template

Este proyecto es un template que combina la potencia de Node.js con la flexibilidad de TailwindCSS y la robustez de Express para crear aplicaciones web modernas y eficientes.

## ✨ Características

- 🖥️ Servidor Express para el backend
- 🎨 TailwindCSS para estilos rápidos y responsivos
- 📁 Estructura de proyecto organizada y escalable
- ⚙️ Configuración lista para desarrollo y producción

## Estructura del Proyecto

proyecto/
│
├── src/
│ ├── public/
│ │ ├── css/
│ │ │ ├── styles.css
│ │ │ └── output.css
│ │ └── favicon.svg
│ │
│ ├── views/
│ │ ├── index.html
│ │ ├── about.html
│ │ └── 404.html
│ │
│ ├── routes/
│ │ └── index.js
│ │
│ ├── hooks/
│ │ └── useRoutes.js
│ │
│ └── app.js
│
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.txt

## 🛠️ Configuración

1. Clona este repositorio:

```
   git clone https://github.com/tu-usuario/nombre-del-repo.git
   cd nombre-del-repo
```

2. Instala las dependencias:

```
   npm install
```

3. Configura TailwindCSS (si no está configurado):

```
   npx tailwindcss init -p
```

## Uso

### Desarrollo

Para iniciar el servidor de desarrollo:

```
npm run dev
```

Este comando iniciará el servidor Node.js con nodemon para reinicio automático y compilará TailwindCSS en modo watch.

> [!TIP]
> 💡 Asegúrate de tener Node.js y npm instalados en tu sistema antes de comenzar.

### Producción

Para construir la aplicación para producción:

```
npm run build
```

Para iniciar el servidor en modo producción:

```
npm start
```

## Personalización

### Rutas

Las rutas se generan automáticamente basadas en los archivos HTML en la carpeta `src/views`. Para añadir una nueva página, simplemente crea un nuevo archivo HTML en esta carpeta.

### Estilos

Modifica `src/public/css/styles.css` para añadir estilos personalizados. Los estilos de Tailwind se compilarán automáticamente.

### Configuración de Tailwind

Puedes personalizar la configuración de Tailwind editando el archivo `tailwind.config.js`.

## Contribuir

Si tienes ideas para mejorar este template, no dudes en abrir un issue o enviar un pull request.

## Licencia

[MIT](https://choosealicense.com/licenses/mit/)
