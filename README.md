# 🚀 AstroApp

**AstroApp** es una aplicación móvil desarrollada en **React Native + TypeScript** que permite explorar recursos visuales de la NASA a través de diferentes APIs oficiales. La aplicación cuenta con funcionalidades como búsqueda multimedia, galería de imágenes del Mars Rover, y sistema de favoritos, todo construido bajo principios de **Clean Architecture** y **patrones de diseño modernos**.

---

## 🧠 Tecnologías

- **React Native (Expo)**
- **TypeScript**
- **Redux Toolkit** para manejo de estado global
- **React Navigation (Drawer, Stack, Tabs)**
- **AsyncStorage** para persistencia local
- **React Hook Form + Yup** para validación de formularios
- **Reanimated** para animaciones fluidas
- **Axios** para consumo de APIs

---

## 🛰️ Funcionalidades

- 🔍 **Búsqueda de imágenes y videos** desde la NASA Image & Video Library.
- 📸 **Galería de fotos del Rover de Marte**.
- ❤️ **Favoritos persistentes** en almacenamiento local.
- 🔐 Interfaz intuitiva con navegación por Drawer, Tabs y Stacks.
- 🎨 Animaciones suaves y responsivas.

---

## 🏗️ Arquitectura

### 🧱 Clean Architecture + MVVM

- **Domain**: Entidades y contratos (interfaces).
- **Data**: Repositorios, DTOs y servicios de API.
- **Presentation**: ViewModels, Hooks y UI.

### 💡 Principios SOLID aplicados

- **S**: Cada módulo tiene una responsabilidad única (ej. `NasaLibraryRepositoryImpl.ts` solo accede a datos).
- **O**: Puedes extender sin modificar, por ejemplo, cambiando la API o agregando filtros.
- **L**: Los ViewModels no dependen de implementaciones concretas, sino de interfaces.
- **I**: Interfaces separadas por contexto (ej. `NasaLibraryRepository`).
- **D**: Las capas dependen de abstracciones, no implementaciones directas.

### 🧩 Patrones de diseño usados

| Patrón         | Aplicación                                                                 |
|----------------|----------------------------------------------------------------------------|
| **Repositorio** | `NasaLibraryRepository` y su implementación en `data/repositories`         |
| **MVVM**        | Separación clara entre lógica (ViewModel), UI y entidades de dominio      |
| **Singleton**   | Redux Store y `ApiService` para manejar una sola instancia compartida     |

---

##🔌 APIs Usadas:

📚 NASA Image & Video Library API

Endpoint: https://images-api.nasa.gov/search

Permite buscar imágenes, videos y audios relacionados con el espacio utilizando palabras clave.

🤖 Mars Rover Photos API

Endpoint: https://api.nasa.gov/mars-photos/api/v1/rovers/{rover}/photos

Devuelve fotografías capturadas por los rovers de Marte (Curiosity, Opportunity, Spirit) según fecha y cámara.

🌍 Earth Assets API

Endpoint: https://api.nasa.gov/planetary/earth/assets

Permite acceder a imágenes satelitales de la Tierra por coordenadas geográficas y fechas.

🌠 Astronomy Picture of the Day (APOD) API

Endpoint: https://api.nasa.gov/planetary/apod

Proporciona la imagen astronómica destacada del día, junto con su explicación.

☄️ Asteroids NeoWs API

Endpoint: https://api.nasa.gov/neo/rest/v1/neo/browse

Devuelve una lista de asteroides cercanos a la Tierra con información como fecha de aproximación, tamaño y velocidad.


---

## 🚀 Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/antoniouc/AstroApp.git
cd AstroApp
npm install
npx expo start

📜 Licencia
Este proyecto está bajo la licencia MIT. ¡Úsalo como inspiración para tus propias misiones espaciales! 🛸 

🙌 Autor
Desarrollado por @antoniouc