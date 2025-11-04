import { useState } from 'react';
import { mockTickets, type Ticket } from '@/data/mockTickets';
import TicketCard from './TicketCard';
import TicketDetailModal from './TicketDetailModal';

const TicketKanbanBoard = () => {
  const [tickets] = useState<Ticket[]>(mockTickets);
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);

  const columns = [
    { id: 'new', title: 'Nouveau', color: 'cyan', icon: '🆕' },
    { id: 'inprogress', title: 'En cours', color: 'orange', icon: '⚙️' },
    { id: 'resolved', title: 'Résolu', color: 'green', icon: '✅' }
  ];

  const getTicketsByStatus = (status: string) => {
    return tickets.filter(t => t.status === status);
  };

  return (
    <div className="space-y-8">
      
      {/* Stats rapides */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-cyan-950/30 border border-cyan-500/30 rounded-xl p-4 text-center">
          <div className="text-3xl font-black text-cyan-400 font-orbitron">
            {getTicketsByStatus('new').length}
          </div>
          <div className="text-sm text-gray-400">Nouveaux tickets</div>
        </div>
        <div className="bg-orange-950/30 border border-orange-500/30 rounded-xl p-4 text-center">
          <div className="text-3xl font-black text-orange-400 font-orbitron">
            {getTicketsByStatus('inprogress').length}
          </div>
          <div className="text-sm text-gray-400">En traitement</div>
        </div>
        <div className="bg-green-950/30 border border-green-500/30 rounded-xl p-4 text-center">
          <div className="text-3xl font-black text-green-400 font-orbitron">
            {getTicketsByStatus('resolved').length}
          </div>
          <div className="text-sm text-gray-400">Résolus aujourd'hui</div>
        </div>
        <div className="bg-purple-950/30 border border-purple-500/30 rounded-xl p-4 text-center">
          <div className="text-3xl font-black text-purple-400 font-orbitron">
            24min
          </div>
          <div className="text-sm text-gray-400">Temps moy. réponse</div>
        </div>
      </div>

      {/* Kanban Board */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {columns.map((column) => (
          <div key={column.id} className="space-y-4">
            {/* Header colonne */}
            <div className={`bg-gradient-to-r from-${column.color}-950/50 to-${column.color}-900/30 
                            rounded-xl p-4 border-2 border-${column.color}-500/30`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{column.icon}</span>
                  <h3 className={`text-xl font-bold text-${column.color}-400`}>
                    {column.title}
                  </h3>
                </div>
                <div className={`text-2xl font-black text-${column.color}-400 font-orbitron`}>
                  {getTicketsByStatus(column.id).length}
                </div>
              </div>
            </div>

            {/* Tickets */}
            <div className="space-y-3">
              {getTicketsByStatus(column.id).map((ticket) => (
                <TicketCard 
                  key={ticket.id}
                  ticket={ticket}
                  onClick={() => setSelectedTicket(ticket)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Modal détails ticket */}
      {selectedTicket && (
        <TicketDetailModal 
          ticket={selectedTicket}
          onClose={() => setSelectedTicket(null)}
        />
      )}
    </div>
  );
};

export default TicketKanbanBoard;
