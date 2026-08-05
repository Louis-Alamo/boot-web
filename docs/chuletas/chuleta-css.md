# Chuleta CSS

# 1. Selectores

| Selector | Ejemplo | Uso |
|-----------|----------|-----|
| Etiqueta | `div {}` | Todas las etiquetas |
| Clase | `.btn {}` | Todos los elementos con esa clase |
| ID | `#titulo {}` | Un solo elemento |
| Universal | `* {}` | Todo el documento |
| Descendiente | `div p {}` | p dentro de div |
| Hijo directo | `div > p {}` | Hijo inmediato |
| Hover | `button:hover {}` | Al pasar el mouse |
| Focus | `input:focus {}` | Cuando recibe foco |

---

# 2. Tamaños

| Propiedad | Uso |
|------------|-----|
| width | Ancho |
| height | Alto |
| min-width | Ancho mínimo |
| max-width | Ancho máximo |
| min-height | Alto mínimo |
| max-height | Alto máximo |

Ejemplo

```css
width:300px;
height:50px;
```

---

# 3. Márgenes

| Propiedad | Uso |
|------------|-----|
| margin | Exterior |
| margin-top | Superior |
| margin-bottom | Inferior |
| margin-left | Izquierda |
| margin-right | Derecha |

```css
margin:20px;
```

---

# 4. Padding

| Propiedad | Uso |
|------------|-----|
| padding | Espacio interno |
| padding-top | Superior |
| padding-bottom | Inferior |
| padding-left | Izquierda |
| padding-right | Derecha |

```css
padding:10px;
```

---

# 5. Bordes

| Propiedad | Uso |
|------------|-----|
| border | Borde |
| border-radius | Esquinas |
| border-color | Color |
| border-width | Grosor |

```css
border:1px solid gray;
border-radius:5px;
```

---

# 6. Texto

| Propiedad | Uso |
|------------|-----|
| color | Color |
| font-size | Tamaño |
| font-family | Fuente |
| font-weight | Grosor |
| text-align | Alineación |
| text-decoration | Decoración |
| line-height | Altura línea |

---

# 7. Fondo

| Propiedad | Uso |
|------------|-----|
| background | Fondo |
| background-color | Color |
| background-image | Imagen |

---

# 8. Display ⭐⭐⭐⭐⭐

| Valor | Uso |
|--------|-----|
| block | Ocupa toda la línea |
| inline | En línea |
| inline-block | Mezcla |
| flex | Flexbox |
| grid | Grid |
| none | Ocultar |

---

# 9. Flexbox ⭐⭐⭐⭐⭐

Activar

```css
display:flex;
```

## Dirección

```css
flex-direction:row;
flex-direction:column;
```

---

## Alinear horizontal

```css
justify-content:flex-start;
justify-content:center;
justify-content:end;
justify-content:space-between;
space-around;
space-evenly;
```

---

## Alinear vertical

```css
align-items:flex-start;
align-items:center;
align-items:end;
stretch;
```

---

## Separación

```css
gap:10px;
```

---

## Salto de línea

```css
flex-wrap:wrap;
```

---

# 10. Posicionamiento

| Propiedad | Uso |
|------------|-----|
| position | Tipo |
| top | Arriba |
| left | Izquierda |
| right | Derecha |
| bottom | Abajo |
| z-index | Capas |

Valores

```css
static;
relative;
absolute;
fixed;
sticky;
```

---

# 11. Overflow

| Propiedad | Uso |
|------------|-----|
| overflow | Scroll |
| overflow-x | Horizontal |
| overflow-y | Vertical |

Valores

```css
hidden;
auto;
scroll;
```

---

# 12. Tablas ⭐⭐⭐⭐

```css
border-collapse:collapse;
```

```css
border-spacing:0;
```

```css
table-layout:fixed;
```

---

# 13. Cursor

```css
cursor:pointer;
```

---

# 14. Sombras

```css
box-shadow:
```

```css
text-shadow:
```

---

# 15. Transiciones

```css
transition:
```

---

# 16. Opacidad

```css
opacity:0.5;
```

---

# 17. Visibilidad

```css
visibility:hidden;
```

```css
display:none;
```

No son iguales.

---

# 18. Colores

```css
#FFFFFF
```

```css
rgb(255,255,255)
```

```css
rgba(255,255,255,.5)
```

```css
hsl(...)
```

---

# 19. Unidades

| Unidad | Uso |
|---------|-----|
| px | Píxeles |
| % | Porcentaje |
| rem | Tamaño raíz |
| em | Relativo |
| vh | Alto pantalla |
| vw | Ancho pantalla |

---

# 20. Propiedades que usarás TODOS los días

- display
- flex
- width
- height
- margin
- padding
- border
- border-radius
- background-color
- color
- font-size
- text-align
- justify-content
- align-items
- gap
- overflow
- cursor

---

# Layout típico de un ERP

```text
+-----------------------------------------+

Header

+----------+------------------------------+

Menu       Contenido

Menu       Tabla

Menu       Tabla

Menu       Tabla

+----------+------------------------------+

Footer

```

Se hace prácticamente con:

- display:flex
- width
- height
- gap
- overflow