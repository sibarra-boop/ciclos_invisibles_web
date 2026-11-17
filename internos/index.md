# Ciclos Invisibles --- estructura web y especificaciones

### Lienzo de trabajo recomendado

-   Lienzo de referencia para web: **900 × 600 px**.
-   Mantener la proporción 1:1
-   En escritorio, el contenedor conserva la proporción y ocupa el
    espacio disponible sin deformar el contenido.
-   En tablet y móvil, reorganizar los módulos en vertical; no reducir
    toda la lámina hasta volver ilegible el texto.
-   Si el profesor solicita que el canvas conserve siempre el mismo
    espacio, reservar un contenedor con proporción fija y adaptar el
    contenido dentro de él.

``` css
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

Las cuatro páginas utilizan estos módulos:

1.  **Encabezado**
    -   Logotipo.
    -   Selector o indicador «Interno / Externo».
    -   Línea divisoria horizontal.
2.  **Identificación de fase**
    -   Categoría: «FASES DEL CICLO».
    -   Nombre de la fase.
    -   Texto descriptivo.
3.  **Gráfica o ilustración central**
    -   Ilustración principal de la fase.
    -   Elementos anatómicos o del proceso.
    -   Etiquetas explicativas.
    -   Líneas guía y puntos de conexión.
4.  **Columna de sensaciones**
    -   Pregunta: «¿Cómo podríamos sentirnos?» o «¿Cómo podrías
        sentirte?».
    -   Lista de posibles señales o sensaciones.
5.  **Módulos informativos inferiores**
    -   «¿Qué más influye?»
    -   «Frases que escuchamos»
    -   «Sabías que...»
6.  **Acceso a contenido relacionado**
    -   Llamado a la acción: «Explora más relaciones» o «Explora sus
        relaciones».
    -   Flecha.
7.  **Navegación del ciclo**
    -   Menstruación.
    -   Fase folicular.
    -   Ovulación.
    -   Fase lútea.
    -   Indicador visual de la fase activa.



## 3. Contenido por pantalla

# Pantalla 01 --- Ovulación

**Categoría:** Fases del ciclo\
**Título:** Ovulación

### Descripción

Es el momento en el que se libera un óvulo desde el ovario. Suele
ocurrir hacia la mitad del ciclo, aunque el momento exacto puede variar.
Es parte de nuestro proceso hormonal que conecta distintas señales.

### Gráfica central: elementos y etiquetas

-   **Estrógenos:** Aumentan antes de la ovulación.
-   **LH:** Su aumento desencadena la liberación del óvulo.
-   **Óvulo:** Sale del ovario.

### ¿Cómo podríamos sentirnos?

-   Cambios de energía.
-   Cambios en el deseo.
-   Variaciones del ánimo.
-   Mayor sensibilidad.
-   Molestias leves.

### ¿Qué más influye?

La experiencia de esta fase también puede variar por nuestro sueño, el
estrés, la alimentación y nuestro entorno.

### Frases que escuchamos

-   «Solo andas así porque estás ovulando».
-   «En esta fase siempre tienes más ganas».

### Sabías que...

La ovulación puede coincidir con cambios corporales, pero no determina
cómo sentimos ni cómo actuamos.

### Llamado a la acción

**Explora más relaciones →**

### Navegación

Menstruación · Fase folicular · **Ovulación** · Fase lútea



# Pantalla 02 --- Fase folicular

**Categoría:** Fases del ciclo\
**Título:** Fase folicular

### Descripción

Es la primera parte del ciclo. Aquí comienza a prepararse un nuevo óvulo
y aumenta gradualmente el estrógeno, lo que puede influir en tu energía,
estado de ánimo y deseo.

### Gráfica central: elementos y etiquetas

-   **Folículos ováricos:** Varios folículos comienzan a madurar en el
    ovario.
-   **Estrógenos:** Aumentan de forma gradual, preparando el cuerpo para
    la ovulación.
-   **Folículo dominante:** Uno de los folículos se desarrolla más que
    los demás.

### ¿Cómo podrías sentirte?

-   Más energía.
-   Mayor motivación.
-   Cambios en el ánimo.
-   Aumento del deseo sexual.
-   Piel más luminosa.

### ¿Qué más influye?

La experiencia en esta fase también puede variar por factores externos
como el estrés, el sueño, la alimentación y el entorno.

### Frases que escuchamos

-   «Es cuando andas de buen humor, ¿no?»
-   «Aquí ya deberías tener más energía».

### Sabías que...

El aumento de estrógenos en esta fase participa en cambios del
organismo, aunque cada experiencia puede ser diferente.

### Llamado a la acción

**Explora sus relaciones →**

### Navegación

Menstruación · **Fase folicular** · Ovulación · Fase lútea



# Pantalla 03 --- Fase lútea

**Categoría:** Fases del ciclo\
**Título:** Fase lútea

### Descripción

Es la segunda parte del ciclo. Aquí el folículo que liberó el óvulo se
transforma en cuerpo lúteo, que produce progesterona y prepara el cuerpo
por si hubiera un embarazo.

### Gráfica central: elementos y etiquetas

-   **Cuerpo lúteo:** Se forma a partir del folículo que liberó el
    óvulo.
-   **Progesterona:** Aumenta en esta fase y ayuda a preparar el
    endometrio.
-   **Si no hay embarazo:** El cuerpo lúteo involuciona y disminuyen las
    hormonas.

### ¿Cómo podrías sentirte?

-   Mayor sensibilidad.
-   Cambios en el ánimo.
-   Cansancio o baja energía.
-   Hinchazón.
-   Antojos más frecuentes.

### ¿Qué más influye?

Nuestra experiencia también puede variar con el estrés, el sueño, la
alimentación y el entorno.

### Frases que escuchamos

-   «Estoy más sensible de lo normal».
-   «Solo son antojos, ¿no?»

### Sabías que...

La progesterona puede relacionarse con cambios en el sueño, el apetito y
la temperatura corporal.

### Llamado a la acción

**Explora sus relaciones →**

### Navegación

Menstruación · Fase folicular · Ovulación · **Fase lútea**



# Pantalla 04 --- Menstruación

**Categoría:** Fases del ciclo\
**Título:** Menstruación

### Descripción

Es el inicio del ciclo. En esta fase, el revestimiento del útero
(endometrio) se desprende y se expulsa a través de la vagina en forma de
sangrado, dando paso a un nuevo ciclo.

### Gráfica central: elementos y etiquetas

-   **Endometrio:** Revestimiento del útero que se engrosa durante el
    ciclo.
-   **Desprendimiento:** El endometrio se desprende cuando bajan las
    hormonas.
-   **Sangrado menstrual:** Expulsión natural del endometrio.

### ¿Cómo podrías sentirte?

-   Dolor o cólicos.
-   Baja energía.
-   Cambios en el ánimo.
-   Sensibilidad emocional.
-   Mayor necesidad de descanso.

### ¿Qué más influye?

Nuestra experiencia en esta fase también puede variar por factores
externos como el estrés, el sueño, la alimentación y nuestro entorno.

### Frases que escuchamos

-   «Es solo un periodo, aguántate».
-   «Estás más sensible porque andas en tus días».

### Sabías que...

La menstruación es un proceso fisiológico natural, no una enfermedad.
Cada experiencia menstrual puede ser distinta.

### Llamado a la acción

**Explora sus relaciones →**

### Navegación

**Menstruación** · Fase folicular · Ovulación · Fase lútea



## 4. Sistema de tamaños y retícula

Las siguientes medidas son una **propuesta inicial para el lienzo de 900
× 600 px**, no medidas extraídas literalmente del PDF.

### Retícula base

-   Lienzo: 900 × 600 px.
-   Márgenes de seguridad sugeridos: 28--32 px.
-   Retícula sugerida: 12 columnas.
-   Separación entre columnas: 12--16 px.
-   Unidad base de espaciado: 8 px.
-   Mantener alineaciones compartidas entre las cuatro pantallas.

### Escala tipográfica sugerida para el lienzo de 900 × 600 px

  Elemento                   Tamaño sugerido
  ------------------------ -----------------
  Título de fase                   40--48 px
  Título de módulos                20--24 px
  Subtítulo / pregunta             18--22 px
  Texto descriptivo                14--16 px
  Etiquetas de gráfica             12--14 px
  Texto de sensaciones             13--15 px
  Navegación inferior              12--14 px
  Categoría / microtexto            9--11 px

**Criterio:** conservar jerarquías y legibilidad. Si el contenido se
muestra en una pantalla más pequeña, permitir que los textos crezcan en
relación con el ancho disponible o reorganizar los módulos; no forzar
todos los elementos a caber en una miniatura.

### Distribución por zonas

-   Encabezado: franja superior.
-   Título y descripción: columna izquierda.
-   Ilustración y etiquetas: zona central.
-   Sensaciones: columna derecha.
-   Información complementaria: franja inferior.
-   Navegación: borde inferior.

La distribución es orientativa. Las proporciones internas pueden
ajustarse, pero los módulos deben conservar una alineación y un orden
consistentes entre fases.



## 5. Normalización de iconos y gráficas

### Iconos

-   Exportar en **SVG**.
-   Convertir los trazos a contornos/curvas antes de entregar el archivo
    final.
-   Normalizar el grosor del trazo.
-   Mantener una misma caja de proporción y alineación.
-   Definir tamaños consistentes para cada escala de uso.
-   Expandir objetos cuando sea necesario para evitar diferencias de
    interpretación entre programas.
-   Nombrar cada archivo de forma clara y consistente.

Ejemplo de nomenclatura: - `icono-flecha.svg` - `icono-interno.svg` -
`icono-externo.svg` - `icono-menstruacion.svg` -
`icono-fase-folicular.svg` - `icono-ovulacion.svg` -
`icono-fase-lutea.svg`

### Iconografía como tipografía

El profesor menciona **IcoMoon** como opción para convertir iconos en
una fuente de pictogramas. Esto permitiría utilizarlos como caracteres
tipográficos y controlar propiedades como tamaño y color desde CSS.

### Gráficas e ilustraciones

-   Exportar las gráficas en SVG.
-   Mantener proporciones y grosores de línea consistentes.
-   Normalizar etiquetas, puntos, flechas y líneas guía.
-   Mantener los textos de las gráficas identificables y legibles.
-   Evitar que las etiquetas se encimen o pierdan su relación con el
    elemento señalado.
-   Conservar el mismo lenguaje gráfico en las cuatro fases.



## 6. Comportamiento responsive

La composición original es horizontal. Para que funcione en distintos
dispositivos, se recomienda definir tres adaptaciones:

### Desktop

-   Composición horizontal.
-   Mantener la relación entre título, gráfica central y columna de
    sensaciones.
-   Mostrar los módulos inferiores en una misma franja cuando exista
    espacio suficiente.

### Tablet

-   Conservar la lectura horizontal si el ancho lo permite.
-   Reducir espacios y ajustar columnas.
-   Si el contenido queda comprimido, mover la columna de sensaciones
    debajo de la gráfica.

### Mobile

-   Composición vertical.
-   Orden recomendado:
    1.  Encabezado.
    2.  Nombre de la fase.
    3.  Descripción.
    4.  Gráfica.
    5.  Sensaciones.
    6.  ¿Qué más influye?
    7.  Frases que escuchamos.
    8.  Sabías que...
    9.  Explora sus relaciones.
    10. Navegación del ciclo.

### Orientación

-   **Landscape:** aprovechar la composición horizontal.
-   **Portrait:** apilar los módulos y conservar el orden de lectura.
-   Evitar que la orientación cambie el significado o la secuencia de la
    información.



## 7. Reglas de consistencia entre pantallas

-   Todas las fases deben utilizar los mismos nombres de módulos.
-   Mantener los mismos estilos de título, subtítulo, párrafo y
    etiqueta.
-   Mantener la misma escala de iconos y grosores de trazo.
-   Mantener el mismo tratamiento de gráficas, flechas y líneas guía.
-   El indicador de navegación debe cambiar únicamente para señalar la
    fase activa.
-   Las columnas y módulos deben respetar la misma retícula.
-   Las variaciones de texto deben contemplarse sin romper el sistema.
-   Los elementos interactivos deben conservar estados y comportamientos
    consistentes.



## 8. Interacción y elementos web

Elementos identificados en el diseño que pueden convertirse en
interacciones:

-   **Interno / Externo:** selector para cambiar la información o
    perspectiva mostrada, si esa función está contemplada en el
    proyecto.
-   **Navegación del ciclo:** acceso a cada una de las cuatro fases.
-   **Explora más relaciones:** enlace o botón hacia contenido
    relacionado.
-   **Iconos y flechas:** elementos de apoyo a la navegación; no deben
    parecer interactivos si no tienen una acción.

Las interacciones deben contar con estados claros (normal, hover, activo
y foco) y ser utilizables tanto con mouse como con pantalla táctil.



## 9. Qué indicaciones del profesor aplican a este archivo


  Indicación                          Aplicación en este proyecto
  
  Iconos en SVG                       Sí: exportación de iconos y
                                      símbolos.

  Trazos a curvas                     Sí: preparación de archivos
                                      finales.

  Normalizar trazos y grosores        Sí: iconos, ilustraciones y líneas
                                      guía.

  Homogeneizar tamaños y propiedades  Sí: sistema completo de pantallas.

  Grid con tamaño base                Sí: retícula compartida.

  Canvas 900 × 600                    Sí: referencia propuesta para la
                                      composición web.

  IconMoon / IcoMoon                  Opcional: si se necesita una fuente
                                      de iconos.

  Gráficas en SVG                     Sí: ilustraciones y diagramas
                                      centrales.

  Mobile y tablet                     Sí: adaptación responsive.

  Radio de aspecto 1:1                No como formato principal: el PDF
                                      es 3:2. Puede servir para
                                      componentes cuadrados
                                      independientes.

  Variaciones verticales y            Sí: adaptaciones landscape y
  horizontales                        portrait.

  Ajustar textos                      Sí: contemplar cambios de longitud
                                      y lectura.

  Elementos interactivos              Sí: navegación y exploración de
                                      relaciones.

  Reglas CSS                          Sí: definir estilos compartidos y
                                      responsive.

  Coordenadas, flechas y logo         Sí: normalizar su ubicación, tamaño
                                      y uso.
 

## 10. Pendientes por definir

Estos datos no se pueden confirmar únicamente con el PDF y las notas del
profesor:

-   Familia tipográfica y pesos exactos.
-   Colores definitivos y sus valores HEX.
-   Grosor exacto de cada trazo.
-   Medidas definitivas de cada icono.
-   Número exacto de columnas y separación final de la retícula.
-   Breakpoints específicos para desktop, tablet y móvil.
-   Acción final del selector «Interno / Externo».
-   Destino y contenido de «Explora sus relaciones».
-   Si el lienzo de 900 × 600 debe ser fijo en píxeles o únicamente
    conservar la proporción 3:2.

**Nota:** el PDF contiene las cuatro pantallas de fases del ciclo. No
incluye especificaciones de CSS, coordenadas exactas, interacciones
implementadas ni medidas individuales de cada elemento; por eso esos
puntos se presentan como propuestas o pendientes, no como datos
confirmados.
