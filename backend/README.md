### Instalación 🔧

Instala las dependencias con el comando

```
npm install
```

Es necesario crear variables de entorno mediante la elaboración de un archivo .env en el mismo nivel que la carpeta src. Este archivo debe completarse con los siguientes campos, los cuales deben modificarse con tus propias credenciales en lugar del valor "X":

```env
NODEMAILER_USER = X # Gmail configurado en Nodemailer que se usa para enviar los mails
NODEMAILER_PASS = X # Contraseña que te proporciona nodemailer

URL_FRONTEND1 = X
URL_FRONTEND2 = X # URLs de los frontends que desees dar permisos de acceso, sin barra lateral final
URL_FRONTEND3 = X

TOKEN_GRAL = X # Cadena de caracteres utilizado como mecanismo de autenticación para asegurar que solamente los usuarios que presenten este token en los encabezados de sus solicitudes puedan acceder al backend. Importante: Su valor tiene que ser el mismo que el de la variable de entorno VITE_ACCESS_TOKEN que ponés en el frontend

MONGO_URL = X # URL de mongo, la que ponemos dentro de mongoose.connect(X)

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

Una vez que veas los mensajes "Servidor escuchando en el puerto 8080" (puerto configurado por defecto) y "Base de mongo conectada", podrás comenzar a utilizarlo sin problemas.

Asegúrate de que la parte frontend esté ejecutándose

## Endpoints 🕵️

Antes de presentar los endpoints disponibles, debes saber que para acceder a ellos se necesita enviar un token de acceso especial en los encabezados utilizando el esquema de autenticación Bearer simple, esto es, enviando Authorization: Bearer X en la petición, donde X es el valor del token definido en la variable de entorno TOKEN_GRAL.

Si no envías el token de acceso, se devuelve una respuesta con el estado 403 y el siguiente cuerpo:

```js
{
    status: "error",
    error: `Forbidden | Token de acceso inválido`
}
```

### 1. **Envío de mails** 

En la ruta `/api/mail` con el método `POST`, puedes enviar un correo electrónico. 

#### 1.1. Solicitud
Asegúrese de incluir los siguientes datos en el cuerpo de la solicitud (body):

* `from`: La dirección de correo electrónico desde la cual se enviará el mail, aunque esto es simbólico porque quien lo envía realmente es el colocado en la variable de entorno NODEMAILER_USER. Por esta razón se recomienda colocar el email de envío dentro del propio html o en el subject de la petición

* `to`: La dirección de correo electrónico de destino, a la cual se enviará el correo

* `subject`: Asunto

* `html`: El contenido del correo electrónico en formato HTML

* `attachments` (opcional): Un arreglo que contenga el nombre de los archivos adjuntos junto con sus rutas de origen, por ejemplo `[{filename: "imagen.jpg", path: "https://dummyimage.com/600x400/000/fff"}]`. No se permite enviar archivos muy pesados, queda pendiente averiguar dicho límite.

#### 1.2. Respuesta
Si el correo electrónico se envía correctamente, se devuelve una respuesta con el estado 200 y el siguiente cuerpo:

```js
{
    status: "success",
    message: "Enviado"
}
```

Si faltan valores en la solicitud o alguno de los campos requeridos está vacío, se devuelve una respuesta con el estado 400 y el siguiente cuerpo:

```js
{
  status: "error",
  error: "Valores incompletos"
}

```

Si se produce un error durante el envío del correo electrónico, se devuelve una respuesta con el estado 500 y el siguiente cuerpo:

```js
{
  status: "error",
  error: "X" // El valor X varía según el mensaje de error específico
}
```
