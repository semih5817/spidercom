import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import type { Ticket } from '@/data/mockTickets';

interface TicketDetailModalProps {
  ticket: Ticket;
  onClose: () => void;
}

const TicketDetailModal = ({ ticket, onClose }: TicketDetailModalProps) => {
  const typeColors: Record<string, string> = {
    plomberie: 'blue',
    electricite: 'yellow',
    chauffage: 'red',
    serrurerie: 'purple',
    loyer: 'green',
    admin: 'gray'
  };

  const color = typeColors[ticket.type] || 'gray';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative bg-gradient-to-br from-gray-900 to-gray-800 
                     rounded-2xl p-8 max-w-2xl w-full border-2 border-cyan-500/30
                     shadow-[0_0_60px_rgba(6,182,212,0.3)] max-h-[90vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-gray-700 hover:bg-gray-600 
                       rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-5xl">{ticket.icon}</div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className={`px-3 py-1 bg-${color}-500/20 text-${color}-400 
                                  border border-${color}-500/30 rounded text-sm font-bold uppercase`}>
                    {ticket.type}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm font-bold
                                  ${ticket.urgency === 'urgent' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                                    ticket.urgency === 'normal' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' :
                                    'bg-green-500/20 text-green-400 border border-green-500/30'}`}>
                    {ticket.urgency === 'urgent' ? '🔴 Urgent' :
                     ticket.urgency === 'normal' ? '🟡 Normal' : '🟢 Faible'}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-white">
                  {ticket.title}
                </h2>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            {/* Description */}
            {ticket.description && (
              <div className="bg-black/30 rounded-xl p-4 border border-gray-700">
                <h3 className="text-cyan-400 font-bold mb-2">📝 Description</h3>
                <p className="text-gray-300">{ticket.description}</p>
              </div>
            )}

            {/* Informations */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-black/30 rounded-xl p-4 border border-gray-700">
                <h3 className="text-cyan-400 font-bold mb-3">👤 Locataire</h3>
                <p className="text-white text-lg">{ticket.tenant}</p>
              </div>

              <div className="bg-black/30 rounded-xl p-4 border border-gray-700">
                <h3 className="text-cyan-400 font-bold mb-3">🏠 Bien</h3>
                <p className="text-white text-sm">{ticket.property}</p>
              </div>

              <div className="bg-black/30 rounded-xl p-4 border border-gray-700">
                <h3 className="text-cyan-400 font-bold mb-3">⏰ Créé</h3>
                <p className="text-white">{ticket.created}</p>
              </div>

              {ticket.assignedTo && (
                <div className="bg-black/30 rounded-xl p-4 border border-gray-700">
                  <h3 className="text-cyan-400 font-bold mb-3">👷 Assigné à</h3>
                  <p className="text-white">{ticket.assignedTo}</p>
                </div>
              )}
            </div>

            {/* Statut */}
            <div className="bg-black/30 rounded-xl p-4 border border-gray-700">
              <h3 className="text-cyan-400 font-bold mb-3">📊 Statut</h3>
              <div className="flex items-center gap-2">
                {ticket.status === 'new' && (
                  <span className="px-4 py-2 bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 rounded-full font-bold">
                    🆕 Nouveau
                  </span>
                )}
                {ticket.status === 'inprogress' && (
                  <span className="px-4 py-2 bg-orange-500/20 text-orange-400 border border-orange-500/30 rounded-full font-bold">
                    ⚙️ En cours
                  </span>
                )}
                {ticket.status === 'resolved' && (
                  <span className="px-4 py-2 bg-green-500/20 text-green-400 border border-green-500/30 rounded-full font-bold">
                    ✅ Résolu
                  </span>
                )}
              </div>
            </div>

            {/* Automation badge */}
            {ticket.automated && (
              <div className="bg-gradient-to-r from-green-950/50 to-emerald-950/50 
                              rounded-xl p-4 border-2 border-green-500/30">
                <div className="flex items-center gap-3">
                  <div className="text-4xl">🤖</div>
                  <div>
                    <h3 className="text-green-400 font-bold text-lg mb-1">
                      Traitement Automatique
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Ce ticket a été classé, priorisé et assigné automatiquement par l'IA
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="mt-8 flex gap-4">
            <button className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 
                             text-white font-bold rounded-xl hover:scale-105 transition-all">
              Mettre à jour
            </button>
            <button 
              onClick={onClose}
              className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white 
                       font-bold rounded-xl transition-all"
            >
              Fermer
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default TicketDetailModal;
