# AstroApp
Proyecto de consumo de APIs con React Native, enfocado en integrar y visualizar información científica proporcionada por la NASA. Incluye manejo de estados, navegación, diseño responsivo y buenas prácticas de desarrollo móvil, cómo son patrones de diseño, principios SOLID y patrones de arquitectura.

# Navegacion 
📱 Estructura  de la app
🔻 Drawer Navigation:
Inicio (pantalla principal con Tabs)

Acerca de la App

Configuración

📑 Dentro de Inicio (Tabs):
🪐 Tab 1: APOD (Astronomy Picture of the Day)
Muestra la imagen del día con su título y descripción.

Usa la API: https://api.nasa.gov/planetary/apod

🚀 Tab 2: Mars Rover Photos
Muestra imágenes tomadas por los rovers en Marte.

Puedes filtrar por rover, fecha, o cámara.

Usa la API: https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos

☄️ Tab 3: Near Earth Objects (Asteroides cercanos)
Lista los objetos que pasarán cerca de la Tierra entre fechas.

Usa la API: https://api.nasa.gov/neo/rest/v1/feed

🧭 Pantalla extra con navegación interna (Stacks):
En cada tab puedes tener un stack si quieres mostrar una pantalla de detalle:

Detalles del APOD

Detalles de una foto del rover

Info extendida de un asteroide

Otras secciones:
🌌 En un Stack extra (puede ser accedido desde un botón en Configuración o Inicio):
📸 NASA Image & Video Library
Permite hacer búsquedas por palabra clave (ej. "moon", "earth").

Usa la API: https://images-api.nasa.gov/search

🌠 DONKI (Space Weather Notifications)
Lista eventos espaciales como tormentas solares o CMEs.

Usa la API: https://api.nasa.gov/DONKI/notifications

✅ Resumen: Con esta estructura:

3 APIs están directamente en los tabs (APOD, Mars Rover, NEO).

2 APIs están disponibles en otras pantallas o dentro del stack (NASA Library, DONKI).

Todas las 5 APIs están siendo utilizadas de forma clara y accesible en la app.
