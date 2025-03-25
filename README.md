# 🗺️ React Maps App with Mapbox

Aplicación web creada con **React + TypeScript** que integra **Mapbox GL JS** para mostrar mapas interactivos y personalizables. También se incluyen recursos como **Bootstrap** para el diseño responsivo y **Axios** para realizar peticiones HTTP.

---

## 🚀 Tecnologías utilizadas

- [React + TypeScript](https://react.dev/)
- [Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js/)
- [Bootstrap 5](https://getbootstrap.com/)
- [Axios](https://axios-http.com/)
- [Vite](https://vitejs.dev/) o `create-react-app`
- [QuickType](https://app.quicktype.io/) (para generar tipos a partir de JSON)
- [Netlify](https://www.netlify.com/) (para despliegue)

---

## 📦 Instalación

### 1. Crear proyecto React + TypeScript

Con NPX:

```bash
npx create-react-app my-app --template typescript
Con Yarn:

bash
Copy
Edit
yarn create react-app my-app --template typescript
🎨 Bootstrap (v5.3)
Para aplicar estilos rápidamente, se utiliza Bootstrap vía CDN:

html
Copy
Edit
<!-- Añadir en el archivo index.html -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" />
Más información:
🔗 https://getbootstrap.com/docs/5.3/getting-started/introduction/#cdn-links

🗺️ Mapbox
1. Instalar Mapbox GL JS
bash
Copy
Edit
npm install mapbox-gl
2. Añadir estilos de Mapbox
Tienes dos opciones para incluir los estilos:

Opción 1 (CDN):

html
Copy
Edit
<link href='https://api.mapbox.com/mapbox-gl-js/v2.13.0/mapbox-gl.css' rel='stylesheet' />
Opción 2 (Importación directa):

ts
Copy
Edit
import 'mapbox-gl/dist/mapbox-gl.css';
3. Uso en tu archivo index.tsx o componente principal:
ts
Copy
Edit
import mapboxgl from 'mapbox-gl';

// Clave de acceso a Mapbox (usa tu propia clave)
mapboxgl.accessToken = 'pk.eyJ1IjoiZGF0YWtva2siLCJhIjoiY2xmNTJmYjJuMThkczN2cjByczVwNjNlZSJ9.NS1f4sOkpVdi-XZ-cGKTHA';
4. Tipado para Mapbox (si usas TypeScript)
Para evitar errores de tipado:

bash
Copy
Edit
npm install --save-dev @types/mapbox-gl
📡 Axios (Peticiones HTTP)
Para consumir APIs externas:

bash
Copy
Edit
npm install axios
🔄 Convertir JSON a TypeScript
Si necesitas tipos a partir de una respuesta JSON, puedes usar:
🔗 https://app.quicktype.io

☁️ Despliegue en Netlify
Ve a Netlify y crea una cuenta.

Conecta tu repositorio de GitHub.

Configura el comando de build (npm run build) y el directorio de salida (dist o build).

¡Despliega tu app con un clic!

📁 Estructura del proyecto
pgsql
Copy
Edit
React-maps-mapbox/
├── public/
├── src/
│   ├── components/
│   │   └── Map.tsx
│   ├── App.tsx
│   ├── main.tsx
├── .env
├── index.html
├── package.json
└── tsconfig.json
💡 Recomendaciones
No compartas públicamente tu token de Mapbox en proyectos en producción.

Usa variables de entorno (.env) para almacenar claves.

Puedes mejorar esta base integrando rutas, geolocalización del usuario, marcadores personalizados, etc.

🤝 Contribuciones
¿Tienes una mejora o encontraste un bug? ¡Contribuye!

Abre un issue

Haz un fork

Crea tu rama

Envía un pull request

```
