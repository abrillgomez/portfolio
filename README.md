# 🌐 Portfolio — Abril Gómez

Portfolio personal desarrollado con Next.js, TypeScript y Tailwind CSS.

---

## 🚀 Tecnologías

| Tecnología | Descripción |
|---|---|
| [Next.js 16](https://nextjs.org/) | Framework de React con App Router |
| [React 19](https://react.dev/) | Librería de UI |
| [TypeScript](https://www.typescriptlang.org/) | Tipado estático |
| [Tailwind CSS v4](https://tailwindcss.com/) | Estilos utilitarios |
| [Radix UI](https://www.radix-ui.com/) | Componentes accesibles sin estilos |
| [shadcn/ui](https://ui.shadcn.com/) | Componentes UI construidos sobre Radix |
| [Lucide React](https://lucide.dev/) | Íconos |
| [Recharts](https://recharts.org/) | Gráficos |
| [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) | Formularios y validación |
| [next-themes](https://github.com/pacocoursey/next-themes) | Soporte para dark/light mode |
| [Vercel Analytics](https://vercel.com/analytics) | Analíticas |

---

## 📁 Estructura del proyecto

```
portfolio/
├── app/          # Rutas y páginas (App Router)
├── components/   # Componentes reutilizables
├── hooks/        # Custom hooks
├── lib/          # Utilidades y helpers
├── public/       # Assets estáticos
└── styles/       # Estilos globales
```

---

## 🛠️ Instalación local

### Requisitos previos

- [Node.js](https://nodejs.org/) v18 o superior
- [Yarn](https://yarnpkg.com/)

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/abrillgomez/portfolio.git
cd portfolio

# 2. Instalar dependencias
yarn install

# 3. Iniciar el servidor de desarrollo
yarn dev
```

Abrí [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## 📦 Scripts disponibles

| Comando | Descripción |
|---|---|
| `yarn dev` | Inicia el servidor de desarrollo |
| `yarn build` | Genera el build de producción |
| `yarn start` | Inicia el servidor de producción |
| `yarn lint` | Ejecuta el linter |

---

## 🌍 Deploy

El proyecto está configurado para deployarse en [Vercel](https://vercel.com/). Cada push a `main` genera un deploy automático.

---

## 📄 Licencia

Este proyecto es de uso personal. © Abril Gómez
