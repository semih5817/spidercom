import { motion } from 'framer-motion';
import type { Ticket } from '@/data/mockTickets';

interface TicketCardProps {
  ticket: Ticket;
  onClick: () => void;
}

const TicketCard = ({ ticket, onClick }: TicketCardProps) => {
  const typeColors: Record<string, string> = {
    plomberie: 'blue',
    electricite: 'yellow',
    chauffage: 'red',
    serrurerie: 'purple',
    loyer: 'green',
    admin: 'gray'
  };

  const urgencyColors: Record<string, string> = {
    urgent: 'red',
    normal: 'orange',
    faible: 'green'
  };

  const color = typeColors[ticket.type] || 'gray';
  const urgencyColor = urgencyColors[ticket.urgency];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      onClick={onClick}
      className="bg-gradient-to-br from-gray-900 to-gray-800 
                 rounded-xl p-4 border-2 border-gray-700
                 hover:border-cyan-500 cursor-pointer transition-all duration-300
                 shadow-lg hover:shadow-cyan-500/20"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="text-2xl">{ticket.icon}</div>
          <span className={`px-2 py-1 bg-${color}-500/20 text-${color}-400 
                          border border-${color}-500/30 rounded text-xs font-bold uppercase`}>
            {ticket.type}
          </span>
        </div>
        <span className={`px-2 py-1 bg-${urgencyColor}-500/20 text-${urgencyColor}-400 
                        border border-${urgencyColor}-500/30 rounded-full text-xs font-bold`}>
          {ticket.urgency === 'urgent' ? '🔴' :
           ticket.urgency === 'normal' ? '🟡' : '🟢'}
        </span>
      </div>

      {/* Titre */}
      <h4 className="text-white font-bold mb-2 line-clamp-2">
        {ticket.title}
      </h4>

      {/* Locataire & Bien */}
      <div className="text-sm text-gray-400 mb-3 space-y-1">
        <div className="flex items-center gap-2">
          <span>👤</span>
          <span>{ticket.tenant}</span>
        </div>
        <div className="flex items-center gap-2">
          <span>🏠</span>
          <span className="truncate">{ticket.property}</span>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between text-xs text-gray-500 pt-3 border-t border-gray-700">
        <div className="flex items-center gap-1">
          <span>⏰</span>
          <span>{ticket.created}</span>
        </div>
        {ticket.assignedTo && (
          <div className="flex items-center gap-1 text-cyan-400">
            <span>👷</span>
            <span className="truncate max-w-[100px]">{ticket.assignedTo}</span>
          </div>
        )}
      </div>

      {/* Badge action auto */}
      {ticket.automated && (
        <div className="mt-3 px-2 py-1 bg-green-500/10 border border-green-500/30 
                        rounded text-xs text-green-400 text-center font-semibold">
          🤖 Assignation automatique
        </div>
      )}
    </motion.div>
  );
};

export default TicketCard;
