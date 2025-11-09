import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface DetectionExampleProps {
  title: string;
  beforeDesc: string;
  beforeImage?: string;
  afterDesc: string;
  afterImage?: string;
  badge: 'major' | 'minor' | 'normal';
  badgeText: string;
  aiAnalysis: string;
  amount: number;
}

const DetectionExample = ({ 
  title, 
  beforeDesc,
  beforeImage,
  afterDesc,
  afterImage,
  badge, 
  badgeText, 
  aiAnalysis, 
  amount 
}: DetectionExampleProps) => {
  const getBadgeColor = () => {
    switch (badge) {
      case 'major':
        return 'bg-spider-red/20 text-spider-red border-spider-red/30';
      case 'minor':
        return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'normal':
        return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-white/10 p-6 h-full">
        <h4 className="font-orbitron text-white text-lg mb-4">{title}</h4>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          {/* Before */}
          <div className="space-y-2">
            <div className="text-xs text-white/60 uppercase">Avant</div>
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg overflow-hidden h-32 flex items-center justify-center">
              {beforeImage ? (
                <img src={beforeImage} alt={beforeDesc} className="w-full h-full object-cover" />
              ) : (
                <div className="text-center text-sm text-white/80 p-3">{beforeDesc}</div>
              )}
            </div>
          </div>

          {/* After */}
          <div className="space-y-2">
            <div className="text-xs text-white/60 uppercase">Après</div>
            <div className={`border rounded-lg overflow-hidden h-32 flex items-center justify-center ${
              badge === 'major' ? 'bg-spider-red/10 border-spider-red/30' :
              badge === 'minor' ? 'bg-orange-500/10 border-orange-500/30' :
              'bg-emerald-500/10 border-emerald-500/30'
            }`}>
              {afterImage ? (
                <img src={afterImage} alt={afterDesc} className="w-full h-full object-cover" />
              ) : (
                <div className="text-center text-sm text-white/80 p-3">{afterDesc}</div>
              )}
            </div>
          </div>
        </div>

        <Badge className={`mb-3 ${getBadgeColor()}`}>
          {badgeText}
        </Badge>

        <div className="bg-black/30 border border-white/10 rounded-lg p-4 mb-3">
          <div className="text-xs text-white/60 mb-2">💬 L'IA dit :</div>
          <div className="text-sm text-white/90">{aiAnalysis}</div>
        </div>

        {amount > 0 && (
          <div className="text-right">
            <div className="font-orbitron text-2xl text-spider-red font-black">
              {amount}€
            </div>
          </div>
        )}
      </Card>
    </motion.div>
  );
};

export default DetectionExample;
