# Iniciar el proyecto en desarrollo
Antes de iniciar el proyecto debe tener intalado [docker](https://docs.docker.com/get-docker/) y [pnpm](https://pnpm.io/installation)

1. Clonar el archivo `.env.template` a `.env` y configurar las varibles de entorno.
2. Ejecutar `pnpm i` para cargar los modulos de node.
3. Ejecutar `docker compose up -d` para levantar la db en desarrollo.
4. Ejecutar `pnpm run dev` para levantar el servidor.
