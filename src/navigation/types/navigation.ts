// Tipos para la configuración de navegación usando React Navigation

// Define los parámetros de las rutas del Drawer Navigator (menú lateral)
// Contiene 4 rutas que no requieren parámetros:
export type DrawerParamList = {
    Home: undefined,       // Pantalla principal
    about: undefined,     // Pantalla de información
    news: undefined,      // Pantalla de noticias
    config: undefined     // Pantalla de configuración
}

// Define los parámetros de las rutas del Tab Navigator (navegación por pestañas)
// Contiene 3 rutas para diferentes secciones de la app:
export type TabsParamList = {
    imagenDay: undefined,          // Pantalla de la imagen del día
    Rover: undefined,
    EarthAsset: undefined           // Pantalla de información del Rover
    NearEarthObjects: undefined     // Pantalla de objetos cercanos a la Tierra
}

// Define los parámetros de las rutas del Stack Navigator (navegación por pilas)
// Incluye rutas con parámetros para detalles y otras pantallas:
export type StacksParamList = {
    detailApod: { id: string },    // Pantalla de detalle APOD requiere ID
    datailRover: { id: string },   // Pantalla de detalle Rover (posible typo en 'datail')
    detailNear: { id: string },    // Pantalla de detalle de objetos cercanos
    NasaImage: undefined,          // Pantalla de imágenes NASA sin parámetros
    donki: undefined               // Pantalla DONKI (Space Weather Database) sin parámetros
}