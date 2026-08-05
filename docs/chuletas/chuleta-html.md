# Chuleta HTML5

## 1. Estructura básica

| Etiqueta | ¿Para qué sirve? | Atributos comunes |
|----------|------------------|-------------------|
| `<!DOCTYPE html>` | Indica HTML5 | Ninguno |
| `<html>` | Documento HTML | `lang` |
| `<head>` | Configuración del documento | - |
| `<title>` | Título de la pestaña | - |
| `<meta>` | Metadatos | `charset`, `name`, `content` |
| `<link>` | Importar CSS | `rel`, `href` |
| `<script>` | Importar JavaScript | `src`, `type`, `defer` |
| `<body>` | Contenido visible | - |

---

# 2. Etiquetas semánticas

| Etiqueta | Uso |
|----------|-----|
| `<header>` | Encabezado |
| `<nav>` | Menú de navegación |
| `<main>` | Contenido principal |
| `<section>` | Sección |
| `<article>` | Artículo independiente |
| `<aside>` | Barra lateral |
| `<footer>` | Pie de página |

---

# 3. Texto

| Etiqueta | Uso |
|----------|-----|
| `<h1>`-`<h6>` | Encabezados |
| `<p>` | Párrafo |
| `<span>` | Texto en línea |
| `<strong>` | Texto importante |
| `<b>` | Negritas |
| `<em>` | Énfasis |
| `<i>` | Itálica |
| `<small>` | Texto pequeño |
| `<mark>` | Resaltado |
| `<br>` | Salto de línea |
| `<hr>` | Línea horizontal |

---

# 4. Contenedores

| Etiqueta | Uso |
|----------|-----|
| `<div>` | Contenedor genérico |
| `<span>` | Contenedor en línea |

---

# 5. Enlaces e imágenes

| Etiqueta | Uso | Atributos importantes |
|----------|-----|-----------------------|
| `<a>` | Hipervínculo | `href`, `target` |
| `<img>` | Imagen | `src`, `alt`, `width`, `height` |

---

# 6. Listas

| Etiqueta | Uso |
|----------|-----|
| `<ul>` | Lista desordenada |
| `<ol>` | Lista ordenada |
| `<li>` | Elemento |

---

# 7. Tablas ⭐ (Muy usadas en ERP)

| Etiqueta | Uso |
|----------|-----|
| `<table>` | Tabla |
| `<thead>` | Encabezado |
| `<tbody>` | Cuerpo |
| `<tfoot>` | Pie |
| `<tr>` | Fila |
| `<th>` | Celda encabezado |
| `<td>` | Celda |

Ejemplo:

```html
<table>
    <thead>
        <tr>
            <th>Producto</th>
            <th>Stock</th>
            <th>Precio</th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td>Laptop</td>
            <td>25</td>
            <td>$15000</td>
        </tr>
    </tbody>
</table>
```

---

# 8. Formularios ⭐⭐⭐

| Etiqueta | Uso |
|----------|-----|
| `<form>` | Formulario |
| `<label>` | Etiqueta de campo |
| `<input>` | Campo |
| `<textarea>` | Texto largo |
| `<select>` | Lista desplegable |
| `<option>` | Opción |
| `<button>` | Botón |
| `<fieldset>` | Agrupar campos |
| `<legend>` | Título grupo |

## Tipos de input

| Tipo | Uso |
|-------|-----|
| text | Texto |
| number | Número |
| password | Contraseña |
| email | Correo |
| date | Fecha |
| datetime-local | Fecha y hora |
| checkbox | Casilla |
| radio | Selección única |
| file | Archivo |
| hidden | Campo oculto |

---

# 9. Atributos más usados

| Atributo | Uso |
|-----------|-----|
| id | Identificador único |
| class | Clase CSS |
| style | CSS en línea |
| name | Nombre del campo |
| value | Valor |
| placeholder | Texto guía |
| required | Obligatorio |
| disabled | Deshabilitado |
| readonly | Solo lectura |
| checked | Checkbox seleccionado |
| selected | Option seleccionada |
| multiple | Varias opciones |
| maxlength | Máximo caracteres |
| minlength | Mínimo caracteres |

---

# 10. Eventos HTML

| Evento | Cuándo ocurre |
|----------|---------------|
| onclick | Click |
| onchange | Cambio |
| oninput | Mientras escribe |
| onsubmit | Enviar formulario |
| onfocus | Obtiene foco |
| onblur | Pierde foco |

---

# 11. Etiquetas multimedia

| Etiqueta | Uso |
|----------|-----|
| `<video>` | Video |
| `<audio>` | Audio |
| `<source>` | Fuente multimedia |

---

# 12. Etiquetas útiles para un ERP

- table
- form
- input
- button
- select
- option
- textarea
- label
- div
- span
- nav
- header
- main
- section

Con estas puedes hacer prácticamente el 95% de un sistema administrativo.

---

# Atributos Globales

Se pueden usar en casi todas las etiquetas.

- id
- class
- style
- title
- hidden
- draggable
- tabindex
- lang

---

# Propiedades CSS que más usarás

## Layout

- display
- position
- width
- height
- min-width
- max-width

## Flexbox ⭐⭐⭐

- display:flex
- flex-direction
- justify-content
- align-items
- gap
- flex-wrap

## Espaciado

- margin
- padding

## Bordes

- border
- border-radius

## Texto

- font-size
- font-family
- font-weight
- color
- text-align

## Fondo

- background
- background-color

## Tablas

- border-collapse
- border-spacing

## Scroll

- overflow
- overflow-x
- overflow-y

---

# JavaScript (DOM)

## Selección

- document.getElementById()
- document.querySelector()
- document.querySelectorAll()

## Eventos

- addEventListener()

## Manipulación

- createElement()
- appendChild()
- remove()
- innerHTML
- textContent
- value

## Fetch API ⭐⭐⭐

- fetch()
- response.json()
- async
- await

## JSON

- JSON.parse()
- JSON.stringify()
