import md5 from 'md5'

export const generateUniqueCode = (): string => {
    const timestamp = Date.now();  // Obtiene el tiempo actual en milisegundos
    const randomNum = Math.floor(Math.random() * 10000);  // Genera un número aleatorio de 4 dígitos
    return `${timestamp}${randomNum}`;
};

export const generateHash = (ts: string) => {
    const code = `${ts}${process.env.PRIVATE_API_KEY}${process.env.PUBLIC_API_KEY}`
    const hash = md5(code);
    return hash
} 