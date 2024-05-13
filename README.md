# React Typescript Sass Vite Template

This is a base Frontend Project Template using React, Typescript, Sass, and Esbuild. It hot swaps into a Docker container, which is required to be running for dev.

# Requirements
Node Version 22.1.0
Docker

# To Launch a local webpage:

From the root of the project, run the following:

`docker compose up -d`

Once the docker container is running, you can then begin watching for changes with:

`yarn watch`

Or to manually trigger rebuilds and update the docker files in the docker container you can run:

`yarn dev`

# Build for production:
Run the following:

 `yarn build`