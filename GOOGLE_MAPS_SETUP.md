# Configuración de Google Maps

## Para que el mapa interactivo funcione, necesitas:

### 1. Obtener una API Key de Google Maps
1. Ve a [Google Cloud Console](https://console.cloud.google.com/)
2. Crea un nuevo proyecto o selecciona uno existente
3. Habilita la API de Google Maps JavaScript
4. Ve a "Credentials" y crea una nueva API Key
5. Restringe la API Key solo a tu dominio de Vercel

### 2. Configurar la variable de entorno en Vercel
1. Ve a tu proyecto en Vercel
2. Ve a "Settings" > "Environment Variables"
3. Agrega:
   - **Name**: `VITE_GOOGLE_MAPS_API_KEY`
   - **Value**: Tu API key de Google Maps
   - **Environment**: Production (y Preview si quieres)

### 3. Configurar la variable localmente (opcional)
Crea un archivo `.env` en la raíz del proyecto:
```bash
VITE_GOOGLE_MAPS_API_KEY=tu_api_key_aqui
```

### 4. Restricciones de seguridad recomendadas
- Restringe la API Key solo a tu dominio de Vercel
- No compartas la API Key públicamente
- Usa restricciones de IP si es posible

## Nota importante
Sin la API Key, el mapa mostrará un error. La API Key es gratuita para uso básico (hasta 28,500 cargas de mapa por mes).
