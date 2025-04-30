import { useEffect, useRef } from 'react';

/**
 * Hook que ejecuta una función en un intervalo específico
 * @param callback - Función a ejecutar
 * @param delay - Intervalo en milisegundos (null para pausar)
 */
export function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef<() => void>();

  // Recordar la última función de callback
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Configurar el intervalo
  useEffect(() => {
    function tick() {
      savedCallback.current?.();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}