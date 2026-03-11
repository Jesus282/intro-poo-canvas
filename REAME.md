# Introducción a Canvas 2D con Programación Orientada a Objetos

## Descripción

Este proyecto muestra una introducción al uso del **Canvas 2D de HTML5** utilizando **JavaScript** y el paradigma de **Programación Orientada a Objetos (OOP)**.

La aplicación dibuja distintos círculos dentro de tres lienzos (canvas), demostrando cómo crear objetos gráficos, generar propiedades aleatorias y manejar múltiples instancias de una clase.

El objetivo principal consiste en comprender cómo se pueden representar objetos gráficos dentro de un canvas utilizando clases y métodos en JavaScript.

---

## Tecnologías utilizadas

* HTML5
* CSS3
* JavaScript
* Bootstrap 5
* API Canvas 2D

---

## Estructura del proyecto

```
project/
│
├── index.html
├── README.md
│
└── assets
    ├── css
    │   └── styles.css
    ├── js
    │   └── main.js
    └── images
        └── favicon.png
```

---

## Funcionamiento del proyecto

El programa contiene tres secciones principales:

### 1. Objeto 2D

Se crea un círculo utilizando una clase llamada `Circle`.
Este círculo tiene propiedades definidas manualmente como:

* posición
* radio
* color
* texto interno

El objeto se dibuja utilizando el método `draw()`.

---

### 2. Objeto con Random

En esta sección el círculo se genera utilizando valores aleatorios:

* posición aleatoria
* radio aleatorio
* colores aleatorios

Se implementa lógica para asegurar que el círculo permanezca completamente dentro del canvas.

---

### 3. Múltiples objetos

Se genera un arreglo de objetos `Circle` y mediante un ciclo se crean múltiples círculos con propiedades aleatorias.

Cada círculo se almacena dentro de un arreglo y posteriormente se dibuja en el canvas correspondiente.

---

## Conceptos aplicados

Durante el desarrollo de la práctica se aplicaron los siguientes conceptos:

* Uso de **clases en JavaScript**
* Creación de **objetos**
* Uso de **arreglos de objetos**
* Generación de **valores aleatorios**
* Manipulación de gráficos mediante **Canvas 2D**
* Uso de **Bootstrap** para el diseño de la interfaz

---

## Cómo ejecutar el proyecto

1. Clonar el repositorio o descargar los archivos.
2. Abrir el archivo `index.html` en cualquier navegador web moderno.
3. El programa mostrará los tres canvas con los círculos generados.

---

## Captura del proyecto

Aquí se puede agregar una captura del funcionamiento del programa.

```
![Vista del proyecto](assets/images/captura.png)
```

---

## Autor

Jesús
Estudiante de Ingeniería en Sistemas
