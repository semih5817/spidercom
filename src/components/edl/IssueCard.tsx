import { AlertCircle, AlertTriangle, XCircle } from "lucide-react";

interface Issue {
  id: number;
  type: string;
  description: string;
  severity: "low" | "medium" | "high";
  location: { x: number; y: number };
}

interface IssueCardProps {
  issue: Issue;
  thumbnail?: string;
}

export default function IssueCard({ issue, thumbnail }: IssueCardProps) {
  const severityConfig = {
    low: {
      bg: "bg-orange-500/10",
      text: "text-orange-400",
      icon: AlertCircle,
      label: "Légère",
    },
    medium: {
      bg: "bg-spider-cyan/10",
      text: "text-spider-cyan",
      icon: AlertTriangle,
      label: "Moyenne",
    },
    high: {
      bg: "bg-spider-red/10",
      text: "text-spider-red",
      icon: XCircle,
      label: "Importante",
    },
  };

  const config = severityConfig[issue.severity];
  const Icon = config.icon;

  return (
    <div className="p-3 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg border border-white/10 hover:border-white/20 transition-all">
      <div className="flex items-start gap-3">
        {thumbnail && (
          <div className="relative flex-shrink-0">
            <img
              src={thumbnail}
              alt={issue.description}
              className="w-12 h-12 rounded object-cover"
            />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-spider-cyan rounded-full animate-pulse" />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <p className="font-medium text-sm text-white mb-1">{issue.description}</p>
          <div className="flex items-center gap-2">
            <span
              className={`text-xs px-2 py-0.5 rounded-full ${config.bg} ${config.text} flex items-center gap-1`}
            >
              <Icon className="w-3 h-3" />
              {config.label}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
