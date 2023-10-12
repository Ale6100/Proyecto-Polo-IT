### Instalación 🔧

Instala las dependencias con el comando

```
npm install
```

Es necesario crear variables de entorno mediante la elaboración de un archivo .env en el mismo nivel que la carpeta src. Este archivo debe completarse con los siguientes campos, los cuales deben modificarse con tus propias credenciales en lugar del valor "X":

```env
URL_FRONTEND1 = X
URL_FRONTEND2 = X # URLs de los frontends que desees dar permisos de acceso, sin barra lateral final
URL_FRONTEND3 = X

TOKEN_GRAL = X # Token arbitrario personal, necesario para acceder a los endpoints
```

## Desarrollo 👷

La carpeta de trabajo es `src` y su archivo principal se ubica en [src/app.ts](src/app.ts). Realiza las modificaciones que desees y, cuando estés listo, ejecuta el siguiente comando:

```
npm run build
```

Este comando compilará todos los archivos TypeScript y los guardará en una carpeta `dist`.

Se recomienda eliminar o vaciar la carpeta `dist` antes de ejecutar dicho comando.

## Despliegue 📦

Para ejecutar el proyecto compilado, utiliza el comando:

```
npm start
```

Una vez que veas el mensaje "Servidor escuchando en el puerto 8080" (puerto configurado por defecto), podrás comenzar a utilizarlo sin problemas.

Asegúrate de que la parte frontend esté ejecutándose
