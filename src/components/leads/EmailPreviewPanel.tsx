import { useState } from 'react';

interface EmailData {
  title: string;
  subjectA: string;
  subjectB: string;
  body: string;
  stats: {
    open: number;
    click: number;
    reply: number;
    book: number;
  };
  tips: string[];
}

interface EmailPreviewPanelProps {
  step: string;
  emailData: EmailData;
}

interface StatCardProps {
  label: string;
  value: string;
  icon: string;
  color: string;
}

function StatCard({ label, value, icon, color }: StatCardProps) {
  const colorClasses = {
    cyan: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400',
    purple: 'bg-purple-500/10 border-purple-500/30 text-purple-400',
    orange: 'bg-orange-500/10 border-orange-500/30 text-orange-400',
    green: 'bg-green-500/10 border-green-500/30 text-green-400'
  };

  return (
    <div className={`rounded-lg p-4 border ${colorClasses[color as keyof typeof colorClasses]}`}>
      <div className="text-2xl mb-2">{icon}</div>
      <div className="text-xs text-gray-500 mb-1">{label}</div>
      <div className={`text-2xl font-black font-orbitron ${colorClasses[color as keyof typeof colorClasses].split(' ')[2]}`}>
        {value}
      </div>
    </div>
  );
}

function EmailBodyWithTokens({ body }: { body: string }) {
  // Highlighter les tokens [Prénom], [Adresse], etc.
  const highlightTokens = (text: string) => {
    return text.split(/(\[.*?\])/).map((part, i) => {
      if (part.match(/\[.*?\]/)) {
        return (
          <span 
            key={i}
            className="bg-cyan-200 text-cyan-900 px-2 py-1 rounded font-bold">
            {part}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <div className="whitespace-pre-line">
      {highlightTokens(body)}
    </div>
  );
}

const EmailPreviewPanel = ({ step, emailData }: EmailPreviewPanelProps) => {
  const [selectedSubject, setSelectedSubject] = useState('A');

  if (!emailData) return null;

  const copyToClipboard = (data: EmailData) => {
    const text = `Sujet: ${selectedSubject === 'A' ? data.subjectA : data.subjectB}\n\n${data.body}`;
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl 
                    border-2 border-purple-500/30 overflow-hidden
                    shadow-[0_0_40px_rgba(168,85,247,0.2)] h-full">
      
      {/* Header de l'email */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-bold text-white">
            📧 Template : {emailData.title}
          </h3>
          <button 
            onClick={() => copyToClipboard(emailData)}
            className="px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg 
                       font-semibold text-white transition-all flex items-center gap-2">
            <span>📋</span>
            <span>Copier</span>
          </button>
        </div>
        
        {/* A/B Test Toggle */}
        <div className="flex items-center gap-4">
          <span className="text-sm text-white/80">Test A/B :</span>
          <div className="inline-flex bg-black/20 rounded-lg p-1">
            <button 
              onClick={() => setSelectedSubject('A')}
              className={`px-4 py-2 rounded-md font-semibold transition-all ${
                selectedSubject === 'A' 
                  ? 'bg-white text-purple-600' 
                  : 'text-white/70 hover:text-white'
              }`}>
              Sujet A
            </button>
            <button 
              onClick={() => setSelectedSubject('B')}
              className={`px-4 py-2 rounded-md font-semibold transition-all ${
                selectedSubject === 'B' 
                  ? 'bg-white text-purple-600' 
                  : 'text-white/70 hover:text-white'
              }`}>
              Sujet B
            </button>
          </div>
          <div className="flex items-center gap-2 text-sm text-white/80">
            <span>Winner:</span>
            <span className="px-3 py-1 bg-green-500 rounded-full font-bold text-white">
              {selectedSubject} (+{Math.floor(Math.random() * 15 + 5)}%)
            </span>
          </div>
        </div>
      </div>

      {/* Corps de l'email */}
      <div className="p-8">
        {/* Sujet */}
        <div className="mb-6 pb-6 border-b border-gray-700">
          <div className="text-xs text-gray-500 uppercase mb-2">Objet de l'email</div>
          <div className="text-xl font-bold text-white bg-gray-950/50 rounded-lg p-4 
                          border border-cyan-500/30">
            {selectedSubject === 'A' ? emailData.subjectA : emailData.subjectB}
          </div>
        </div>

        {/* Corps */}
        <div className="mb-6">
          <div className="text-xs text-gray-500 uppercase mb-3">Corps du message</div>
          <div className="bg-white rounded-lg p-8 text-gray-900 font-sans leading-relaxed 
                          shadow-2xl max-h-[500px] overflow-y-auto">
            <EmailBodyWithTokens body={emailData.body} />
          </div>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <StatCard 
            label="Ouverture"
            value={`${(emailData.stats.open * 100).toFixed(1)}%`}
            icon="📧"
            color="cyan"
          />
          <StatCard 
            label="Clic"
            value={`${(emailData.stats.click * 100).toFixed(1)}%`}
            icon="🖱️"
            color="purple"
          />
          <StatCard 
            label="Réponse"
            value={`${(emailData.stats.reply * 100).toFixed(1)}%`}
            icon="💬"
            color="orange"
          />
          <StatCard 
            label="Booking"
            value={`${(emailData.stats.book * 100).toFixed(1)}%`}
            icon="📅"
            color="green"
          />
        </div>

        {/* Tips d'optimisation */}
        <div className="bg-gradient-to-r from-cyan-950/30 to-blue-950/30 
                        rounded-xl p-6 border border-cyan-500/30">
          <h4 className="text-lg font-bold text-cyan-400 mb-3 flex items-center gap-2">
            <span>💡</span>
            <span>Tips d'optimisation</span>
          </h4>
          <ul className="space-y-2 text-sm text-gray-300">
            {emailData.tips.map((tip, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-cyan-400">▸</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EmailPreviewPanel;
