# Ciclos Invisibles --- estructura web y especificaciones
## Estímulos externos

### Lienzo de trabajo recomendado

- Lienzo de referencia para web: **900 × 600 px**.
- Mantener la proporción horizontal 3:2, de acuerdo con las pantallas del PDF.
- En escritorio, el contenedor conserva la proporción y ocupa el espacio disponible sin deformar el contenido.
- En tablet y móvil, reorganizar los módulos en vertical; no reducir toda la lámina hasta volver ilegible el texto.
- Si se requiere conservar siempre el mismo espacio de trabajo, reservar un contenedor con proporción fija y adaptar el contenido dentro de él.

```css
.canvas {
  width: 100%;
  aspect-ratio: 1 / 1;
  max-width: 900px;
  margin-inline: auto;
  position: relative;
}

.canvas img,
.canvas svg {
  max-width: 100%;
}
```

## 2. Estructura visual común

Las seis pantallas de estímulos externos utilizan una estructura compartida. Los módulos se adaptan según el tema de cada pantalla:

1. **Encabezado**
   - Logotipo.
   - Selector o indicador «Interno / Externo».
   - Línea divisoria horizontal.
   - Estado activo del apartado «Externo».

2. **Identificación del estímulo**
   - Categoría: «ESTÍMULOS EXTERNOS».
   - Nombre del estímulo.
   - Subtítulo que contextualiza el tema.
   - Texto descriptivo.

3. **Gráfica o ilustración central**
   - Ilustración principal del estímulo.
   - Palabras o conceptos relacionados.
   - Puntos de conexión, líneas guía y formas orgánicas.
   - Relaciones visuales entre el estímulo y las posibles experiencias.

4. **Módulo informativo inferior**
   - Título contextual, que cambia según la pantalla: «¿Qué más influye?», «Factores del entorno» o «Herramientas de cuidado».
   - Lista de factores, prácticas o elementos relacionados.
   - Iconos o recursos gráficos de apoyo.

5. **Módulo «Sabías que...»**
   - Dato breve relacionado con el estímulo.
   - Texto complementario que amplía la información principal.

6. **Navegación entre estímulos**
   - Llamado a la acción: «Explora otros estímulos externos».
   - Recorrido por las categorías disponibles.
   - Indicador visual del estímulo activo.

7. **Categorías de navegación**
   - Tabúes.
   - Sueño.
   - Estrés.
   - Autopercepción.
   - Entorno.
   - Información y cuidados.

## 3. Contenido por pantalla

# Pantalla 01 --- Tabúes

**Categoría:** Estímulos externos

**Título:** Tabúes

### Descripción

Ideas, frases y creencias que aún circulan sobre la menstruación y condicionan la forma en que la vivimos, hablamos y entendemos.

### Gráfica central: elementos y etiquetas

La pantalla presenta una comparación entre tres elementos:

- **Tabúes:** ideas, frases y creencias que siguen presentes alrededor de la menstruación.
- **El tabú:** frase o creencia que representa una idea limitante.
- **La realidad:** una respuesta que cuestiona esa creencia y reconoce que cada experiencia puede ser distinta.

### Frase del tabú

«Seguro no puedes hacer nada».

### La realidad

Puedo continuar con mis actividades, aunque a veces necesite adaptarlas según el dolor o el cansancio.

### ¿Qué más influye?

- Entorno social.
- Educación.
- Sistema de salud.
- Industria de productos.
- Cultura y medios.

### Llamado a la acción

**Explora otros estímulos externos →**

### Navegación

**Tabúes** · Sueño · Estrés · Autopercepción · Entorno · Información y cuidados


# Pantalla 02 --- Sueño

**Categoría:** Estímulos externos

**Título:** Sueño

**Subtítulo:** Descanso y energía

### Descripción

La calidad y cantidad de sueño pueden variar a lo largo del ciclo menstrual. Estos cambios se relacionan con las variaciones hormonales y pueden influir en nuestra energía, estado de ánimo y bienestar general.

### Gráfica central: elementos y etiquetas

La gráfica organiza la relación entre el sueño y las cuatro fases del ciclo:

- **Fase folicular:** suele haber más energía y un sueño más estable.
- **Ovulación:** el sueño puede ser más ligero o con mayor facilidad para despertar.
- **Fase lútea:** es común sentir más cansancio y necesitar más descanso.
- **Fase menstrual:** el sueño puede volverse más profundo, pero también verse afectado por molestias físicas.

### ¿Qué más influye?

- Uso de pantallas.
- Rutina y carga laboral.
- Condiciones del entorno.

### Sabías que...

Durante los días previos a la menstruación, las variaciones de estrógeno y progesterona pueden afectar la calidad del sueño, haciendo que te despiertes más veces o no descanses.

### Llamado a la acción

**Explora otros estímulos externos →**

### Navegación

Tabúes · **Sueño** · Estrés · Autopercepción · Entorno · Información y cuidados


# Pantalla 03 --- Estrés

**Categoría:** Estímulos externos

**Título:** Estrés

**Subtítulo:** Carga mental y emociones

### Descripción

La carga mental, las presiones diarias y los cambios emocionales pueden modificar la manera en que vivimos el ciclo menstrual, influyendo en el dolor, el descanso, la energía y el estado de ánimo.

### Gráfica central: elementos y etiquetas

La gráfica relaciona el estrés con distintas señales o experiencias:

- Mayor sensibilidad.
- Cambios en el ánimo.
- Tensión o dolor.
- Menor energía.
- Alteraciones del sueño.

### ¿Qué más influye?

- Pantallas.
- Descanso.
- Entorno social.

### Sabías que...

El estrés sostenido puede intensificar el dolor menstrual, alterar el sueño y modificar nuestro nivel de energía.

### Llamado a la acción

**Explora otros estímulos externos →**

### Navegación

Tabúes · Sueño · **Estrés** · Autopercepción · Entorno · Información y cuidados


# Pantalla 04 --- Autopercepción

**Categoría:** Estímulos externos

**Título:** Autopercepción

**Subtítulo:** Hábitos, imagen y relación con el cuerpo

### Descripción

La forma en que nos percibimos puede variar a lo largo del ciclo menstrual, influyendo en nuestra confianza, estado de ánimo y en cómo vivimos los cambios del cuerpo.

### Gráfica central: elementos y etiquetas

La gráfica presenta conceptos relacionados con la manera en que percibimos nuestro cuerpo:

- Imagen corporal.
- Confianza.
- Autocrítica.
- Relación con el cambio.

### ¿Qué más influye?

- Mensajes sociales.
- Comparación.
- Hábitos de autocuidado.

### Sabías que...

Las fluctuaciones hormonales pueden influir en tu estado de ánimo, sensibilidad emocional e imagen corporal, haciendo que algunos días te sientas más cómoda contigo misma que otros.

### Llamado a la acción

**Explora otros estímulos externos →**

### Navegación

Tabúes · Sueño · Estrés · **Autopercepción** · Entorno · Información y cuidados


# Pantalla 05 --- Entorno

**Categoría:** Estímulos externos

**Título:** Entorno

**Subtítulo:** Trabajo, tiempo y condiciones de vida

### Descripción

Las condiciones de nuestro entorno —como el ritmo de trabajo, la organización del tiempo, el espacio en el que vivimos y las redes de apoyo— pueden influir en cómo experimentamos el ciclo menstrual.

### Gráfica central: elementos y etiquetas

La gráfica reúne cuatro factores relacionados con el entorno:

- Espacio y bienestar.
- Ritmo de vida.
- Condiciones de trabajo.
- Redes de apoyo.

### Factores del entorno

- Organización del tiempo.
- Espacio cotidiano.
- Redes y vínculos.

### Sabías que...

Un entorno con mayor apoyo, flexibilidad y espacios de descanso puede hacer que transitemos el ciclo con más bienestar y menos carga.

### Llamado a la acción

**Explora otros estímulos externos →**

### Navegación

Tabúes · Sueño · Estrés · Autopercepción · **Entorno** · Información y cuidados


# Pantalla 06 --- Información y cuidados

**Categoría:** Estímulos externos

**Título:** Información y cuidados

**Subtítulo:** Herramientas para acompañar tu ciclo

### Descripción

Conocer nuestro ciclo y sus variaciones nos permite tomar decisiones más informadas, prevenir malestares y cuidar nuestro bienestar físico, emocional y cotidiano.

### Gráfica central: elementos y etiquetas

La gráfica presenta acciones y herramientas para acompañar el ciclo:

- Infórmate.
- Cuida tu cuerpo.
- Atiende señales.
- Descansa.
- Busca apoyo.
- Prácticas cotidianas.

### Herramientas de cuidado

- Alimentación consciente.
- Movimiento y energía.
- Bienestar emocional.

### Sabías que...

Pequeños cambios en tu rutina, alimentación, descanso y manejo del estrés pueden hacer una gran diferencia en cómo vives tu ciclo.

### Llamado a la acción

**Explora otros estímulos externos →**

### Navegación

Tabúes · Sueño · Estrés · Autopercepción · Entorno · **Información y cuidados**

## 4. Sistema de tamaños y retícula

Las siguientes medidas son una **propuesta inicial para un lienzo de 900 × 600 px**. El PDF presenta las composiciones visuales, pero no especifica medidas exactas de cada elemento.

### Retícula base

- Lienzo de referencia: 900 × 600 px.
- Márgenes de seguridad sugeridos: 28–32 px.
- Retícula sugerida: 12 columnas.
- Separación entre columnas: 12–16 px.
- Unidad base de espaciado: 8 px.
- Mantener alineaciones compartidas entre las seis pantallas.

### Escala tipográfica sugerida para el lienzo de 900 × 600 px

| Elemento | Tamaño sugerido |
|---|---:|
| Título del estímulo | 40–48 px |
| Título de módulos | 20–24 px |
| Subtítulo | 18–22 px |
| Texto descriptivo | 14–16 px |
| Etiquetas de gráfica | 12–14 px |
| Texto complementario | 13–15 px |
| Navegación inferior | 12–14 px |
| Categoría / microtexto | 9–11 px |

**Criterio:** conservar jerarquías y legibilidad. Si el contenido se muestra en una pantalla más pequeña, permitir que los textos crezcan en relación con el ancho disponible o reorganizar los módulos; no forzar todos los elementos a caber en una miniatura.

### Distribución por zonas

- Encabezado: franja superior con logotipo y selector Interno / Externo.
- Título y descripción: columna izquierda.
- Ilustración y etiquetas: zona central o derecha.
- Información complementaria: franja inferior.
- «Sabías que...»: módulo inferior, separado visualmente del resto.
- Navegación: borde inferior.

La distribución es orientativa. En las pantallas del PDF, la gráfica central cambia de composición según el estímulo; los módulos inferiores y la navegación conservan una estructura reconocible.

## 5. Normalización de iconos y gráficas

### Iconos

- Exportar en **SVG**.
- Convertir los trazos a contornos o curvas antes de entregar el archivo final.
- Normalizar el grosor del trazo.
- Mantener una misma caja de proporción y alineación.
- Definir tamaños consistentes para cada escala de uso.
- Expandir objetos cuando sea necesario para evitar diferencias de interpretación entre programas.
- Nombrar cada archivo de forma clara y consistente.

Ejemplo de nomenclatura:

- `icono-tabues.svg`
- `icono-sueno.svg`
- `icono-estres.svg`
- `icono-autopercepcion.svg`
- `icono-entorno.svg`
- `icono-informacion-cuidados.svg`
- `icono-interno.svg`
- `icono-externo.svg`
- `icono-flecha.svg`

### Gráficas e ilustraciones

- Exportar las gráficas en SVG cuando se requiera conservar nitidez y escalabilidad.
- Mantener proporciones y grosores de línea consistentes.
- Normalizar etiquetas, puntos, flechas y líneas guía.
- Mantener los textos de las gráficas identificables y legibles.
- Evitar que las etiquetas se encimen o pierdan su relación con el elemento señalado.
- Conservar el mismo lenguaje gráfico en las seis pantallas.
- Mantener la relación visual entre los puntos y las formas orgánicas que representan los estímulos o conceptos.

### Navegación e indicadores

- Mantener una línea o eje de navegación compartido.
- Utilizar un indicador visual para señalar el estímulo activo.
- Conservar el orden de las seis categorías en todas las pantallas.
- Mantener consistentes los puntos, colores y estilos de los indicadores.

## 6. Comportamiento responsive

La composición original de las pantallas es horizontal. Para que funcione en distintos dispositivos, se recomienda definir tres adaptaciones:

### Desktop

- Composición horizontal.
- Mantener la relación entre título, descripción y gráfica central.
- Mostrar los módulos inferiores en una misma franja cuando exista espacio suficiente.
- Mantener visible la navegación entre estímulos.

### Tablet

- Conservar la lectura horizontal si el ancho lo permite.
- Reducir espacios y ajustar columnas.
- Si el contenido queda comprimido, mover los módulos inferiores a una segunda fila.
- Evitar que las etiquetas de las gráficas se encimen.

### Mobile

- Composición vertical.
- Orden recomendado:
  1. Encabezado.
  2. Nombre del estímulo.
  3. Subtítulo.
  4. Descripción.
  5. Gráfica o ilustración.
  6. Factores, conceptos o herramientas relacionadas.
  7. «Sabías que...».
  8. «Explora otros estímulos externos».
  9. Navegación entre estímulos.

### Orientación

- **Landscape:** aprovechar la composición horizontal.
- **Portrait:** apilar los módulos y conservar el orden de lectura.
- Evitar que la orientación cambie el significado o la secuencia de la información.

## 7. Reglas de consistencia entre pantallas

- Todas las pantallas deben utilizar la misma categoría: «Estímulos externos».
- Mantener los mismos estilos de título, subtítulo, párrafo y etiqueta.
- Mantener la misma escala de iconos y grosores de trazo.
- Mantener el mismo tratamiento de gráficas, puntos, flechas y líneas guía.
- El indicador de navegación debe cambiar únicamente para señalar el estímulo activo.
- Las seis categorías deben conservar el mismo orden en la navegación.
- Los módulos inferiores deben mantener una jerarquía visual compartida, aunque su título cambie según el contenido.
- Las variaciones de texto deben contemplarse sin romper el sistema.
- Los elementos interactivos deben conservar estados y comportamientos consistentes.
- Mantener el selector «Interno / Externo» en la misma ubicación y con el apartado activo claramente identificado.

## 8. Interacción y elementos web

Elementos identificados en el diseño que pueden convertirse en interacciones:

- **Interno / Externo:** selector para cambiar entre la información o perspectiva interna y externa, si esa función está contemplada en el proyecto.
- **Navegación de estímulos:** acceso a cada una de las seis categorías.
- **Explora otros estímulos externos:** enlace o botón hacia las demás pantallas.
- **Iconos y elementos gráficos:** pueden funcionar como apoyo a la navegación o como elementos informativos, siempre que su acción sea clara.
- **Factores y herramientas:** si se plantean como botones o controles, deben comunicar visualmente que pueden seleccionarse.

Las interacciones deben contar con estados claros (normal, hover, activo y foco) y ser utilizables tanto con mouse como con pantalla táctil.

## 9. Correspondencia entre las pantallas y sus contenidos

| Pantalla | Estímulo | Módulo complementario | Elementos principales |
|---|---|---|---|
| 01 | Tabúes | ¿Qué más influye? | Entorno social, educación, sistema de salud, industria de productos, cultura y medios |
| 02 | Sueño | ¿Qué más influye? | Uso de pantallas, rutina y carga laboral, condiciones del entorno |
| 03 | Estrés | ¿Qué más influye? | Pantallas, descanso, entorno social |
| 04 | Autopercepción | ¿Qué más influye? | Mensajes sociales, comparación, hábitos de autocuidado |
| 05 | Entorno | Factores del entorno | Organización del tiempo, espacio cotidiano, redes y vínculos |
| 06 | Información y cuidados | Herramientas de cuidado | Alimentación consciente, movimiento y energía, bienestar emocional |

## 10. Pendientes por definir

Estos datos no se pueden confirmar únicamente con el PDF:

- Familia tipográfica y pesos exactos.
- Colores definitivos y sus valores HEX.
- Grosor exacto de cada trazo.
- Medidas definitivas de cada icono.
- Número exacto de columnas y separación final de la retícula.
- Breakpoints específicos para desktop, tablet y móvil.
- Acción final del selector «Interno / Externo».
- Si los factores y conceptos de las gráficas tendrán interacción o serán únicamente informativos.
- Destino final de los enlaces de navegación entre estímulos.
- Si el lienzo de 900 × 600 px debe ser fijo en píxeles o únicamente conservar la proporción 3:2.

**Nota:** el PDF contiene seis pantallas de estímulos externos: Tabúes, Sueño, Estrés, Autopercepción, Entorno e Información y cuidados. Las medidas, la retícula, las reglas responsive y las posibles interacciones de este documento se presentan como propuestas de organización web, no como datos técnicos confirmados por el PDF. En la sexta pantalla, el encabezado visible muestra «Interno» en lugar del selector completo «Interno / Externo»; conviene revisar si se trata de una decisión de diseño o de un elemento pendiente.
