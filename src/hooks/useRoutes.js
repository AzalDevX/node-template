const path = require('path');
const fs = require('fs').promises;

async function useRoutes(router) {
  try {
    // Lee todos los archivos en el directorio de vistas
    const viewsDir = path.join(__dirname, '../views');
    const files = await fs.readdir(viewsDir);

    // Filtra solo los archivos HTML
    const htmlFiles = files.filter(file => path.extname(file).toLowerCase() === '.html');

    // Crea rutas para cada archivo HTML
    htmlFiles.forEach(file => {
      const routePath = '/' + (path.basename(file, '.html') === 'index' ? '' : path.basename(file, '.html'));
      router.get(routePath, (req, res) => {
        res.sendFile(path.join(viewsDir, file));
      });
      console.log(`Ruta creada: ${routePath} -> ${file}`);
    });

    // Ruta para manejar 404 (página no encontrada)
    router.use((req, res) => {
      res.status(404).sendFile(path.join(viewsDir, '404.html'));
    });

  } catch (error) {
    console.error('Error al configurar las rutas:', error);
  }
}

module.exports = useRoutes;