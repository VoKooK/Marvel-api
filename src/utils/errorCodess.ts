export const getErrorMessage = (statusCode: number): string => {
    switch (statusCode) {
        case 409:
            return 'Conflicto: Revisa los parámetros o límites en tu solicitud.';
        case 400:
            return 'Solicitud incorrecta: Parámetros inválidos.';
        case 401:
            return 'No autorizado: Revisa tu clave API o permisos.';
        case 403:
            return 'Prohibido: No tienes permiso para acceder a este recurso.';
        case 404:
            return 'No encontrado: El recurso solicitado no existe.';
        case 500:
            return 'Error interno del servidor: Intenta de nuevo más tarde.';
        default:
            return 'Error desconocido: Algo salió mal.';
    }
};