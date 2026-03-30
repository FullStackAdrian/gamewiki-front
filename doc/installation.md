# Instalación y Ejecución del Proyecto

Sigue estos pasos para configurar y ejecutar el proyecto en tu máquina local.

## Requisitos Previos

Asegúrate de tener instalado lo siguiente:

- **Node.js** (versión 18 o superior)
- **npm** (viene con Node.js) o **Yarn**

## Pasos de Instalación

1.  **Clonar el repositorio**:

    ```bash
    https://github.com/FullStackAdrian/gamewiki-front.git
    cd gamewiki-front
    ```

2.  **Instalar las dependencias**:
    Usa `npm` o `yarn` para instalar todas las dependencias del proyecto.

    ```bash
    npm install
    # o
    yarn install
    ```

3.  **Ejecutar el servidor de desarrollo**:
    Inicia la aplicación en modo de desarrollo. Esto normalmente abrirá la aplicación en tu navegador predeterminado en `http://localhost:5173` (o un puerto similar).

    ```bash
    npm start
    # o
    yarn dev
    ```

    Si el proyecto fue creado con Create React App, el comando podría ser:

    ```bash
    npm start
    # o
    yarn start
    ```

    Una vez ejecutado, la aplicación debería abrirse automáticamente en tu navegador. Si no, puedes acceder manualmente a la dirección que se muestra en la consola.

## Construir para Producción

Para generar una versión optimizada del proyecto para producción:

```bash
npm run build
# o
yarn build
```

Esto creará una carpeta `dist/` (o `build/`) con los archivos estáticos listos para ser desplegados en un servidor web.
