No se pasó correctamente la funcionalidad de links y giro de elementos de @index.html al root de la nueva arquitectura. Inspecciona y valida.

--

Refactoricemos este sitio, vamos a migrar comportamientos, interfaz y componentes desde @internos/index.html y sus vistas relacionadas, pasemos elementos de navegación, botones, hover, estados. Migremos y adaptemos a astro.

--

En la vista de /internos, añadamos gsap para generar animaciones interactivas sobre los elementos.
- Al momento de dar click en "Explora las fases" se deben de animar los elementos 'blobs' contenedores del svg dentro de la vista.
- El efecto deseado para esta animación es con estilo orgánico , fluido moviendo los vértices que forman el path, aplíca un efecto stagger entre ellos, alternando su brillo y vértices, hasta completar un ciclo.
- Repite el efecto al hover, siendo sensible los vértices a las posición del mouse afectándose por mousemove.