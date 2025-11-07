# DataFlow Backend

Backend API for DataFlow - Simple and intuitive record management system.

## Features

- RESTful API architecture
- TypeScript for type safety
- Express.js framework
- Modular structure for scalability
- Comprehensive error handling
- Security middleware (Helmet, CORS)
- Request compression
- Health check endpoint

## Project Structure

```
src/
├── api/                    # API controllers
├── routes/                 # Route definitions
├── middleware/             # Express middleware
├── services/               # Business logic
├── utils/                  # Utility functions
├── constants/              # Application constants
├── instances/              # Service instances
└── server.ts               # Application entry point
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env` file from `.env.example`:
   ```bash
   cp .env.example .env
   ```

4. Configure environment variables in `.env`

### Development

Run the development server:
```bash
npm run dev
```

The server will start on `http://localhost:3000` (or the port specified in `.env`).

### Building for Production

Build the project:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

### Testing

Run tests:
```bash
npm test
```

Run tests in watch mode:
```bash
npm run test:watch
```

Generate coverage report:
```bash
npm run test:coverage
```

## API Endpoints

### Health Check

- `GET /health` - Server health status

### API Version 1

- Base URL: `/api/v1`
- External routes: `/api/v1/external/*` (public access)
- Internal routes: `/api/v1/internal/*` (authenticated access)

## Environment Variables

| Variable | Description | Default |
|----------|-------------|----------|
| NODE_ENV | Environment mode | development |
| PORT | Server port | 3000 |
| API_VERSION | API version | v1 |
| CORS_ORIGINS | Allowed CORS origins (comma-separated) | localhost ports |
| BCRYPT_ROUNDS | Password hashing rounds | 10 |
| CACHE_TTL | Cache time-to-live (seconds) | 3600 |
| CACHE_CHECK_PERIOD | Cache check period (seconds) | 600 |

## Development Guidelines

- Follow TypeScript strict mode
- Use path aliases (`@/`) for imports
- Write tests for all business logic
- Document complex functions with TSDoc comments
- Follow RESTful API conventions
- Implement proper error handling
- Use environment variables for configuration

## License

ISC
