\### Resumen General de la Aplicación

Esta es una aplicación escalable de bienes raíces para alquiler de apartamentos a nivel empresarial. Utiliza tecnologías modernas como Next.js para el frontend, Node.js para el backend y varios servicios de AWS para despliegue y autenticación. La app permite a usuarios (inquilinos y gerentes) buscar, gestionar y aplicar a propiedades de alquiler, con un enfoque en mapas interactivos, filtros avanzados y seguridad. Es completamente responsiva y se despliega en la nube para manejar grandes volúmenes de datos.

\### Estructura del Proyecto

El proyecto se divide en dos partes principales: frontend (cliente) y backend (servidor), con integración a bases de datos y servicios de AWS. Aquí va un desglose:

\- \*\*Frontend (Cliente - Next.js)\*\*:

\- Directorio principal: \`client/src\`.

\- Páginas y componentes: Utiliza el enrutador de Next.js para rutas como \`/\` (landing page), \`/search\` (búsqueda con mapa), \`/dashboard\` (panel de usuario), \`/properties\` (listados), \`/applications\` (solicitudes), y páginas específicas para propiedades individuales.

\- Estado global: Gestionado con Redux Toolkit y RTK Query para consultas API.

\- Estilos y UI: Tailwind CSS + Shadcn (componentes como sidebar, forms, sonner para notificaciones).

\- Animaciones: Framer Motion.

\- Formularios: React Hook Form + Zod para validación.

\- Mapas: Mapbox GL para renderizado personalizado y responsivo.

\- Otras libs: Lucide-react (iconos), date-fns (fechas), lodash (utilidades), filepond (subida de imágenes).

\- \*\*Backend (Servidor - Node.js/Express)\*\*:

\- Directorio principal: \`server\`.

\- Rutas API: Organizadas en controladores (e.g., properties, leases, applications) con endpoints como \`/properties\` (GET para búsqueda), \`/leases\` (gestión de arrendamientos), etc.

\- Base de datos: Prisma ORM con PostgreSQL + PostGIS (para geolocalización).

\- Autenticación: AWS Cognito para roles (tenant/manager).

\- Almacenamiento: AWS S3 para imágenes.

\- Despliegue: En AWS EC2, con API Gateway para enrutamiento seguro (HTTPS) y proxies para forwarding de requests.

\- \*\*Base de Datos y AWS\*\*:

\- Esquema: Diagrama ERD (Entity-Relationship Diagram) con tablas relacionadas (usuarios, propiedades, leases, applications).

\- Servicios AWS: EC2 (computo), RDS (DB relacional), S3 (almacenamiento), Amplify (hosting frontend), API Gateway (enrutamiento), Cognito (auth), VPC (redes seguras).

\- Diagramas: Incluye flujos de autenticación, búsqueda de propiedades y arquitectura AWS en Miro (enlaces en descripción).

\- \*\*Herramientas Adicionales\*\*:

\- Dependencias: Instaladas via npm (e.g., express, prisma, mapbox-gl).

\- Entorno: Variables en \`.env\` para claves API (e.g., Mapbox token, Cognito IDs, S3 bucket).

\- Código fuente: Repositorio en GitHub (completado y assets disponibles).

\### Funcionamiento General

La app funciona como una plataforma full-stack escalable:

1\. \*\*Autenticación\*\*: Usuarios se registran/loguean via Cognito (con confirmación por email). Dependiendo del rol (tenant o manager), acceden a dashboards personalizados.

2\. \*\*Búsqueda y Mapa\*\*: En \`/search\`, se carga un mapa Mapbox con propiedades geolocalizadas. Filtros (precio, camas, baños, tipo de propiedad) se aplican en el servidor (server-side rendering) para eficiencia con grandes datasets.

3\. \*\*Gestión de Propiedades\*\*: Inquilinos pueden favoritizar, ver detalles y aplicar a propiedades. Gerentes crean/editan propiedades, revisan solicitudes y gestionan leases.

4\. \*\*Dashboard\*\*: Panel responsivo con secciones para favorites, residencias, aplicaciones y settings (edición de perfil con notificaciones).

5\. \*\*Despliegue\*\*: Frontend en Amplify (SSR rápido), backend en EC2 con RDS. Requests van a través de API Gateway para HTTPS seguro. Imágenes se suben a S3.

6\. \*\*Escalabilidad\*\*: Diseñado para empresas grandes; usa server-side filtering para evitar carga cliente, y AWS para auto-escalado (e.g., EC2 para compute, RDS para DB).

El flujo general: Usuario ingresa → Busca propiedades en mapa → Favoritiza/Aplica → Gerente aprueba/deniega → Todo sincronizado via API y DB relacional.

\### Features Principales

\- \*\*Roles Diferenciados\*\*: Inquilinos (buscar, aplicar, favorites) vs. Gerentes (agregar propiedades, revisar aplicaciones, contactar usuarios).

\- \*\*Mapa Interactivo\*\*: Mapbox personalizado con clustering, zoom responsivo y geolocalización real (usando Nominatim para búsquedas).

\- \*\*Filtros Avanzados\*\*: Precio (slider), camas/baños, tipo de propiedad, pies cuadrados, fechas; con reset y server-side para performance.

\- \*\*Formularios y Validación\*\*: Creación de propiedades/solicitudes con subida de imágenes (Filepond), validación Zod.

\- \*\*Notificaciones y UI Moderna\*\*: Shadcn para componentes (sidebar colapsable, toasts), animaciones Framer Motion.

\- \*\*Seguridad y Auth\*\*: Cognito para login seguro, roles en DB, HTTPS via API Gateway.

\- \*\*Responsividad\*\*: Totalmente mobile-friendly.

\- \*\*Otras\*\*: Páginas de landing atractiva, historial de pagos (para leases), limpieza de código (cleanup), y diagramas detallados para comprensión.

