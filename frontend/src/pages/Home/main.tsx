import { Link } from 'react-router-dom';

/**
 * @page HomePage
 * @summary Landing page for the application
 * @domain core
 * @type page-component
 * @category public
 */
export const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">Welcome to DataFlow</h1>
        <p className="text-xl text-gray-700 mb-8">
          Sistema simples e intuitivo para gerenciamento de registros
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            to="/auth/login"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Get Started
          </Link>
          <Link
            to="/dashboard"
            className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-50 transition-colors font-medium border border-blue-600"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
