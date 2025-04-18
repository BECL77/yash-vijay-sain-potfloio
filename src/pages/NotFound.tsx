import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Film } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-editor-dark p-4">
      <div className="text-center max-w-md">
        <div className="mb-6 flex justify-center">
          <Film size={64} className="text-editor-red" />
        </div>
        <h1 className="text-6xl font-bold mb-4 text-white">404</h1>
        <p className="text-2xl text-white/80 mb-6">This scene didn't make the final cut</p>
        <p className="text-white/60 mb-8">
          The page you're looking for is missing or was edited out of the project
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center px-6 py-3 bg-editor-red hover:bg-editor-red/90 text-white font-bold rounded-md transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
