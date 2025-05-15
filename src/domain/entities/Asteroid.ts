// Interfaz que define la estructura de un asteroide según los datos de la NASA API
export interface Asteroid {
    // ID único del asteroide (ej: "2000433")
    id: string;
    
    // Nombre completo del asteroide (ej: "433 Eros (A898 PA)")
    name: string;
    
    // Indica si el asteroide es potencialmente peligroso para la Tierra
    is_potentially_hazardous_asteroid: boolean;
    
    // Diámetro estimado en diferentes unidades de medida
    estimated_diameter: {
        // Diámetro en kilómetros con rango mínimo y máximo
        kilometers: {
            estimated_diameter_min: number;
            estimated_diameter_max: number;
        };
        // Podrían existir otras unidades como metros o millas
    };
    
    // Lista de aproximaciones cercanas a la Tierra
    close_approach_data: {
        // Fecha de aproximación en formato YYYY-MM-DD (ej: "2023-07-20")
        close_approach_date: string;
        
        // Velocidad relativa respecto a la Tierra
        relative_velocity: {
            // Velocidad en km/h (ej: "73581.2356" - viene como string de la API)
            kilometers_per_hour: string;
        };
        
        // Distancia de aproximación más cercana
        miss_distance: {
            // Distancia en kilómetros (ej: "56180456.2" - string de la API)
            kilometers: string;
        };
    }[]; // Array porque puede tener múltiples aproximaciones en diferentes fechas
}