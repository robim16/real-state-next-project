"use client"; // Directiva necesaria para usar componentes de React que manejan estado y efectos en Next.js (Client Component)

import { useRef } from "react"; // Hook de React para crear una referencia mutable (se usará para almacenar la instancia de la store)
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"; // Hooks y tipos de react-redux
import { combineReducers, configureStore } from "@reduxjs/toolkit"; // Funciones de Redux Toolkit para combinar reducers y configurar la store
import { Provider } from "react-redux"; // Componente Provider para poner la store de Redux a disposición de la aplicación
import { setupListeners } from "@reduxjs/toolkit/query"; // Función para configurar oyentes de RTK Query (manejo de caché y refetch)
import globalReducer from "@/state"; // Importa el reducer 'global'
import { api } from "@/state/api"; // Importa el objeto API creado con RTK Query

/* REDUX STORE */
// Combina todos los reducers en un único rootReducer
const rootReducer = combineReducers({
  global: globalReducer, // Reducer para el estado global (ej: tema, navegación, etc.)
  [api.reducerPath]: api.reducer, // Reducer generado automáticamente por RTK Query para manejar el estado de las peticiones API
});

// Función que crea y devuelve la instancia de la store de Redux
export const makeStore = () => {
  return configureStore({
    reducer: rootReducer, // Asigna el rootReducer a la store
    // Configura el middleware de la store
    middleware: (getDefaultMiddleware) =>
      // Obtiene el middleware por defecto y le concatena el middleware de RTK Query
      // Esto es crucial para que RTK Query funcione correctamente (manejo de caché, solicitudes, etc.)
      getDefaultMiddleware().concat(api.middleware),
  });
};

/* REDUX TYPES */
// Infiere el tipo de la store
export type AppStore = ReturnType<typeof makeStore>;
// Infiere el tipo de RootState (estado global combinado) a partir del estado de la store
export type RootState = ReturnType<AppStore["getState"]>;
// Infiere el tipo de AppDispatch (función dispatch)
export type AppDispatch = AppStore["dispatch"];
// Hook tipado para usar useDispatch, asegura la inferencia de tipos correcta para las acciones
export const useAppDispatch = () => useDispatch<AppDispatch>();
// Hook tipado para usar useSelector, asegura la inferencia de tipos correcta para el estado
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

/* PROVIDER (Componente para envolver la aplicación) */
// Componente que inicializa la store (si no existe) y provee acceso a ella a través del Provider de react-redux
export default function StoreProvider({
  children, // Propiedad children para envolver los componentes hijos
}: {
  children: React.ReactNode;
}) {
  // Referencia para almacenar la store de forma persistente a través de renders
  const storeRef = useRef<AppStore | null>(null);

  // Inicialización de la store: solo ocurre una vez
  if (!storeRef.current) {
    storeRef.current = makeStore(); // Crea la store
    // Configura los listeners de RTK Query (necesario para el manejo de caché y refetch automáticos)
    setupListeners(storeRef.current.dispatch);
  }

  // Renderiza el componente Provider de react-redux, pasando la store creada
  return <Provider store={storeRef.current}>{children}</Provider>;
}