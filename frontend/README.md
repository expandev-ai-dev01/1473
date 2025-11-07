# DataFlow Frontend

Sistema simples e intuitivo para gerenciamento de registros.

## Technologies

- React 18.3.1
- TypeScript 5.6.3
- Vite 5.4.11
- TailwindCSS 3.4.14
- React Router DOM 6.26.2
- TanStack Query 5.59.20
- Axios 1.7.7
- Zustand 5.0.1
- React Hook Form 7.53.1
- Zod 3.23.8

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Create `.env` file based on `.env.example`:

```bash
cp .env.example .env
```

4. Start the development server:

```bash
npm run dev
```

5. Open your browser at `http://localhost:5173`

## Project Structure

```
src/
├── app/                    # Application configuration
│   ├── App.tsx            # Root component
│   └── router.tsx         # Routing configuration
├── core/                   # Core functionality
│   ├── components/        # Shared components
│   ├── contexts/          # React contexts
│   └── lib/               # Library configurations
├── pages/                  # Page components
│   ├── layouts/           # Layout components
│   ├── Home/              # Home page
│   ├── Login/             # Login page
│   ├── Dashboard/         # Dashboard page
│   └── NotFound/          # 404 page
└── assets/                 # Static assets
    └── styles/            # Global styles
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Features

- ✅ Authentication system
- ✅ Protected routes
- ✅ Responsive layouts
- ✅ Loading states
- ✅ Error handling
- ✅ Type-safe API client
- ✅ Form validation with Zod
- ✅ State management with Zustand
- ✅ Server state with TanStack Query

## API Configuration

The application connects to a REST API backend. Configure the API URL in `.env`:

```
VITE_API_URL=http://localhost:3000
VITE_API_VERSION=v1
VITE_API_TIMEOUT=30000
```

## Contributing

1. Create a feature branch
2. Make your changes
3. Submit a pull request

## License

MIT