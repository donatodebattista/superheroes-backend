# Superheroes App - Backend

Este repositorio contiene el backend de la aplicación **Superheroes SPA**, construido con Node.js, Express y MongoDB. Proporciona una API REST para gestionar personajes de Marvel y DC.

## Requisitos previos
- Tener [Docker](https://docs.docker.com/get-docker/) y Docker Compose instalados en el sistema.

## Instrucciones para levantar la aplicación

1. Abrí una terminal, clona este repositorio y navegá hasta la carpeta del proyecto.
2. Ejecutá el siguiente comando para construir y levantar los contenedores (servidor Node.js y base de datos MongoDB):

   ```bash
   docker-compose up -d
   ```

3. **¡Listo!** El servidor backend estará corriendo y disponible en `http://localhost:3000`.

> **Nota sobre los datos:** La base de datos se sembrará (seed) automáticamente con 40 superhéroes de prueba la primera vez que levantes el contenedor, por lo que no es necesario correr ningún script manual.

## Detener la aplicación
Para detener los contenedores sin borrar los datos, ejecutá:
```bash
docker-compose down
```
