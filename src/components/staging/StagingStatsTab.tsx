import { styleDistribution, weeklyData, stagingStats, conversionData, revenueData } from "@/data/stagingMockData";
import { Bar, BarChart, Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";

export const StagingStatsTab = () => {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Style Distribution */}
      <div className="rounded-xl border border-border bg-card p-6">
        <h3 className="mb-6 text-xl font-bold text-foreground">
          Distribution par style
        </h3>
        <div className="space-y-4">
          {styleDistribution.map((item, index) => (
            <div key={item.style} className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-foreground">{item.style}</span>
                <span className="font-bold text-primary">{item.percentage}%</span>
              </div>
              <div className="h-3 w-full overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-primary/50 transition-all duration-1000"
                  style={{
                    width: `${item.percentage}%`,
                    animationDelay: `${index * 100}ms`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Processing Time Card */}
      <div className="rounded-xl border border-border bg-card p-6">
        <h3 className="mb-6 text-xl font-bold text-foreground">
          Temps de traitement
        </h3>
        <div className="text-center">
          <p className="text-6xl font-black text-primary">
            {stagingStats.avgProcessingTime}s
          </p>
          <div className="mt-6 flex justify-around text-sm">
            <div>
              <p className="text-muted-foreground">Plus rapide</p>
              <p className="font-semibold text-green-500">1.2s</p>
            </div>
            <div>
              <p className="text-muted-foreground">Plus lent</p>
              <p className="font-semibold text-yellow-500">3.8s</p>
            </div>
          </div>
        </div>
      </div>

      {/* Weekly History */}
      <div className="rounded-xl border border-border bg-card p-6">
        <h3 className="mb-6 text-xl font-bold text-foreground">
          Historique 7 derniers jours
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={weeklyData}>
            <XAxis
              dataKey="day"
              stroke="hsl(var(--muted-foreground))"
              style={{ fontSize: '12px' }}
            />
            <YAxis
              stroke="hsl(var(--muted-foreground))"
              style={{ fontSize: '12px' }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
              }}
              cursor={{ fill: 'hsl(var(--muted))' }}
            />
            <Bar
              dataKey="photos"
              fill="url(#barGradient)"
              radius={[8, 8, 0, 0]}
            />
            <defs>
              <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(var(--primary))" />
                <stop offset="100%" stopColor="hsl(var(--primary) / 0.5)" />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Conversion Rate */}
      <div className="rounded-xl border border-border bg-card p-6">
        <h3 className="mb-6 text-xl font-bold text-foreground">
          Taux de conversion facilité par l'automatisation
        </h3>
        <div className="mb-4 text-center">
          <p className="text-5xl font-black text-primary">
            6.1%
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Taux actuel (Juin 2025)
          </p>
        </div>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={conversionData}>
            <XAxis
              dataKey="month"
              stroke="hsl(var(--muted-foreground))"
              style={{ fontSize: '12px' }}
            />
            <YAxis
              stroke="hsl(var(--muted-foreground))"
              style={{ fontSize: '12px' }}
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
              }}
              formatter={(value) => [`${value}%`, 'Taux']}
            />
            <Line
              type="monotone"
              dataKey="rate"
              stroke="hsl(var(--primary))"
              strokeWidth={3}
              dot={{ fill: 'hsl(var(--primary))', r: 5 }}
              activeDot={{ r: 7 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Revenue */}
      <div className="rounded-xl border border-border bg-card p-6">
        <h3 className="mb-6 text-xl font-bold text-foreground">
          Chiffre d'affaires réalisé grâce à l'automatisation
        </h3>
        <div className="mb-4 text-center">
          <p className="text-5xl font-black text-primary">
            42 600€
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Revenus de Juin 2025
          </p>
          <p className="mt-1 text-xs text-green-500 font-semibold">
            +21% vs mois précédent
          </p>
        </div>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={revenueData}>
            <XAxis
              dataKey="month"
              stroke="hsl(var(--muted-foreground))"
              style={{ fontSize: '12px' }}
            />
            <YAxis
              stroke="hsl(var(--muted-foreground))"
              style={{ fontSize: '12px' }}
              tickFormatter={(value) => `${(value / 1000).toFixed(0)}k€`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
              }}
              formatter={(value) => [`${value.toLocaleString('fr-FR')}€`, 'Revenus']}
              cursor={{ fill: 'hsl(var(--muted))' }}
            />
            <Bar
              dataKey="revenue"
              fill="url(#revenueGradient)"
              radius={[8, 8, 0, 0]}
            />
            <defs>
              <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(var(--primary))" />
                <stop offset="100%" stopColor="hsl(var(--primary) / 0.5)" />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
