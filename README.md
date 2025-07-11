# 🚀 NLW Front AI

A modern React application built with cutting-edge technologies for creating and managing AI-powered rooms. This project is part of the NLW (Next Level Week) series, focusing on frontend development with AI integration.

## 🛠️ Technologies

### Core Technologies
- **React 19.1.0** - Latest version of React with concurrent features
- **TypeScript 5.8.3** - Type-safe JavaScript development
- **Vite 7.0.3** - Fast build tool and development server

### UI & Styling
- **Tailwind CSS 4.1.11** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful & consistent icon toolkit
- **Class Variance Authority** - Type-safe component variants
- **clsx & tailwind-merge** - Conditional styling utilities

### State Management & Data Fetching
- **TanStack React Query 5.82.0** - Powerful data synchronization for React
- **React Router DOM 7.6.3** - Declarative routing for React

### Development Tools
- **Biome** - Fast formatter and linter
- **Ultracite** - Enhanced development experience
- **tw-animate-css** - Tailwind CSS animations

## 📁 Project Structure

```
nlw-front-ai/
├── src/
│   ├── components/
│   │   └── ui/           # Reusable UI components (shadcn/ui)
│   ├── pages/            # Application pages
│   │   ├── create-room.tsx
│   │   └── room.tsx
│   ├── lib/              # Utility functions and configurations
│   ├── App.tsx           # Main application component
│   ├── main.tsx          # Application entry point
│   └── index.css         # Global styles
├── public/               # Static assets
├── package.json          # Dependencies and scripts
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript configuration
├── biome.jsonc           # Biome linter/formatter config
└── components.json       # shadcn/ui configuration
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (version 18 or higher)
- **pnpm** (recommended) or npm/yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd nlw-front-ai
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application.

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build locally

## 🏗️ Architecture

### Component Architecture
The project follows a modular component architecture using **shadcn/ui** components, which provides:
- Consistent design system
- Type-safe component variants
- Accessible components out of the box
- Easy customization with Tailwind CSS

### Routing
The application uses React Router for navigation with two main routes:
- `/` - Create Room page (default)
- `/room/:roomId` - Individual room details

### Data Management
- **TanStack React Query** handles server state management
- Automatic caching and background updates
- Optimistic updates for better UX
- Error handling and loading states

## 🎨 Features

### Current Features
- ✅ Room listing and navigation
- ✅ Type-safe API integration
- ✅ Responsive design with Tailwind CSS
- ✅ Modern React patterns with hooks
- ✅ Fast development with Vite

### Planned Features
- 🔄 Real-time room updates
- 🔄 AI-powered room interactions
- 🔄 User authentication
- 🔄 Advanced room management

## 🔧 Configuration

### Environment Setup
The project is configured to connect to a backend API running on `http://localhost:3333`. Make sure your backend server is running for full functionality.

### Development Tools
- **Biome** is configured for code formatting and linting
- **TypeScript** strict mode enabled for better type safety
- **Path aliases** configured for cleaner imports (`@/` points to `src/`)

## 📦 Dependencies

### Production Dependencies
- `react` & `react-dom` - React framework
- `@tanstack/react-query` - Data fetching and caching
- `react-router-dom` - Client-side routing
- `@radix-ui/react-slot` - Component primitives
- `tailwindcss` - CSS framework
- `lucide-react` - Icon library

### Development Dependencies
- `@vitejs/plugin-react` - Vite React plugin
- `@biomejs/biome` - Linter and formatter
- `typescript` - TypeScript compiler
- `@types/react` & `@types/react-dom` - TypeScript definitions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is part of the NLW (Next Level Week) series. Please check the license file for more details.

## 🙏 Acknowledgments

- **Rocketseat** for the NLW series
- **shadcn/ui** for the amazing component library
- **Vite** team for the incredible build tool
- **TanStack** for React Query

---

**Happy coding! 🎉** 