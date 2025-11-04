import { useState } from 'react';

interface EmailCardProps {
  day: string;
  title: string;
  timing: string;
  openRate: number;
  clickRate: number;
  replyRate: number;
  subject: string;
  body: string;
  color: 'green' | 'orange' | 'cyan';
}

const EmailCard = ({
  day,
  title,
  timing,
  openRate,
  clickRate,
  replyRate,
  subject,
  body,
  color,
}: EmailCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const colorClasses = {
    green: 'from-green-950/50 to-green-900/30 border-green-500/30',
    orange: 'from-orange-950/50 to-orange-900/30 border-orange-500/30',
    cyan: 'from-cyan-950/50 to-cyan-900/30 border-spider-cyan/30',
  };

  return (
    <div
      className={`bg-gradient-to-br ${colorClasses[color]} rounded-2xl border-2 overflow-hidden hover:scale-105 transition-all duration-300`}
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 px-6 py-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-2xl font-black text-white font-orbitron">{day}</span>
          <span className="text-3xl">📧</span>
        </div>
        <h4 className="text-xl font-bold text-white mb-1">{title}</h4>
        <p className="text-xs text-gray-400">{timing}</p>
      </div>

      {/* Stats */}
      <div className="px-6 py-4 space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-400">Ouverture</span>
          <div className="flex items-center gap-2">
            <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-green-500 rounded-full" style={{ width: `${openRate}%` }} />
            </div>
            <span className="text-sm font-bold text-white w-10">{openRate}%</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-400">Clic</span>
          <div className="flex items-center gap-2">
            <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-spider-cyan rounded-full" style={{ width: `${clickRate * 10}%` }} />
            </div>
            <span className="text-sm font-bold text-white w-10">{clickRate}%</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-400">Réponse</span>
          <div className="flex items-center gap-2">
            <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-yellow-500 rounded-full" style={{ width: `${replyRate * 10}%` }} />
            </div>
            <span className="text-sm font-bold text-white w-10">{replyRate}%</span>
          </div>
        </div>
      </div>

      {/* Preview/Expand */}
      <div className="px-6 pb-6">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg font-semibold text-sm text-white transition-all"
        >
          {isExpanded ? "👁️ Masquer l'email" : "👁️ Voir l'email"}
        </button>

        {isExpanded && (
          <div className="mt-4 bg-black/30 rounded-lg p-4 space-y-3 animate-fade-in">
            <div>
              <div className="text-xs text-gray-500 mb-1">Objet :</div>
              <div className="text-sm font-bold text-white">{subject}</div>
            </div>
            <div>
              <div className="text-xs text-gray-500 mb-2">Corps :</div>
              <div className="text-xs text-gray-300 whitespace-pre-line leading-relaxed max-h-64 overflow-y-auto">
                {body}
              </div>
            </div>
            <button className="w-full py-2 bg-spider-cyan/20 border border-spider-cyan/30 text-spider-cyan rounded-lg text-xs font-semibold hover:bg-spider-cyan/30 transition-all">
              📋 Copier le template
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmailCard;
