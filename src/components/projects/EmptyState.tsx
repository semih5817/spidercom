import { motion } from "framer-motion";
import { Search } from "lucide-react";

interface EmptyStateProps {
  onReset: () => void;
}

const EmptyState = ({ onReset }: EmptyStateProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="py-20 text-center"
    >
      <div className="max-w-md mx-auto">
        <div className="w-24 h-24 mx-auto mb-6 bg-gray-800 rounded-full flex items-center justify-center">
          <Search className="w-12 h-12 text-gray-600" />
        </div>
        
        <h3 className="text-3xl font-black text-white mb-3">
          Aucun projet trouvé
        </h3>
        
        <p className="text-gray-400 mb-6">
          Essayez de modifier vos filtres ou explorez tous nos projets.
        </p>
        
        <button
          onClick={onReset}
          className="px-6 py-3 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all"
        >
          Réinitialiser les filtres
        </button>
      </div>
    </motion.div>
  );
};

export default EmptyState;
