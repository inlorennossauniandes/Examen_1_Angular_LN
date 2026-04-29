# Examen1AngularLN

Aplicación desarrollada en Angular 19 que permite visualizar usuarios y repositorios de GitHub.

## Descripción

La aplicación consume datos de usuarios y repositorios desde una API externa y los presenta en una interfaz moderna con navegación entre módulos.

### Funcionalidades
- 👤 Listado de usuarios con paginación y vista de detalle (maestro-detalle por componentes)
- 📁 Listado de repositorios con paginación y vista de detalle (maestro-detalle por URL)
- 🎨 Diseño responsive (1, 2 o 3 columnas según el dispositivo)

## Requisitos previos

- Node.js
- Angular CLI 19.2.24

## Instalación

Clona el repositorio e instala las dependencias:

```bash
npm install
```

## Servidor de desarrollo

```bash
ng serve
```

Abre el navegador en `http://localhost:4200/`.

## Ejecutar pruebas unitarias

```bash
ng test
```

## Build

```bash
ng build
```

## Dependencias principales

- Angular 19.2.21
- ngx-pagination
- @faker-js/faker (dev)
- TypeScript 5.7.3
- RxJS 7.8.2
