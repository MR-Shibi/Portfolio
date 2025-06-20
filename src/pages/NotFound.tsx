import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-portfolio-black">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-heading font-bold text-portfolio-red">
          404
        </h1>
        <p className="text-2xl text-white mb-4">Oops! Page not found</p>
        <p className="text-gray-400 mb-8">
          The page you're looking for doesn't exist.
        </p>
        <a
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 bg-portfolio-red text-white rounded-md hover:bg-portfolio-red-glow transition-all duration-300 glow-red"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
