import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";
import ParticlesBackground from "@/components/leads/ParticlesBackground";
import LeadsEscapeAnimation from "@/components/leads/LeadsEscapeAnimation";
import EmailSequenceTimeline from "@/components/leads/EmailSequenceTimeline";
import EmailPreviewPanel from "@/components/leads/EmailPreviewPanel";
import RelanceROIResults from "@/components/leads/RelanceROIResults";
import { BenefitItem, TimingRule, BenchmarkStat } from "@/components/leads/SMSComponents";
import WorkflowDiagram from "@/components/leads/WorkflowDiagram";
import CTABooking from "@/components/CTABooking";

const EmailsRelances = () => {
  const [selectedStep, setSelectedStep] = useState('j0');
  const [nbVisites, setNbVisites] = useState(100);
  const [nbAgents, setNbAgents] = useState(5);
  const [tjm, setTjm] = useState(35);
  const [avgCommission, setAvgCommission] = useState(8000);

  const scrollToDemo = () => {
    document.getElementById('kpi-dashboard')?.scrollIntoView({ behavior: 'smooth' });
  };

  const emailTemplates = {
    j0: {
      title: 'Merci & Créneaux',
      subjectA: 'Merci pour votre visite du [Bien] 🏠',
      subjectB: 'Re: [Bien] - Vos prochaines étapes',
      body: `Bonjour [Prénom],

Un grand merci d'avoir pris le temps de visiter le [Type bien] situé [Adresse] ce matin/après-midi.

J'espère que le bien vous a plu autant qu'à moi quand je l'ai découvert ! 😊

Pour faciliter vos prochaines étapes, je vous ai préparé :
✅ Le dossier complet du bien (plans, diagnostics, charges)
✅ La simulation de financement personnalisée
✅ Les coordonnées du notaire partenaire

📅 Si vous souhaitez une deuxième visite ou poser des questions :
👉 Réserver un créneau (15 min) : [Lien Calendly]

Ou répondez simplement à cet email, je reviens vers vous en moins de 2h.

À très vite !
[Signature]

P.S. : Le bien intéresse d'autres acquéreurs. N'hésitez pas si vous avez des questions !`,
      stats: { open: 0.52, click: 0.095, reply: 0.13, book: 0.14 },
      tips: [
        'Envoyer 1h après la visite (intérêt encore chaud)',
        'Mentionner un détail précis de la visite pour personnaliser',
        'Toujours inclure un CTA clair (Calendly)',
        'Ajouter le dossier en PJ pour éviter les frictions'
      ]
    },
    j1: {
      title: 'Valeur & FAQ',
      subjectA: '3 raisons pour lesquelles [Adresse] est une opportunité',
      subjectB: 'Les questions que vous vous posez sur [Adresse]',
      body: `Bonjour [Prénom],

Après votre visite d'hier, j'imagine que vous comparez plusieurs biens.

Voici pourquoi [Adresse] se démarque vraiment :

🎯 Emplacement premium
• Métro ligne 1 à 3 min à pied
• Commerces de proximité (Carrefour, boulangerie, pharmacie)
• École primaire classée dans le top 5 du quartier

💰 Bon investissement
• Prix au m² : 4 820€ (vs 5 200€ en moyenne dans le secteur)
• Charges réduites : 85€/mois (copropriété bien gérée)
• Rentabilité locative potentielle : 4.2%/an

✨ État impeccable
• Cuisine équipée récente (2022)
• Isolation refaite (DPE: C)
• Balcon exposé Sud (rare dans le secteur)

Une question ? Répondez à cet email ou appelez-moi au [Téléphone].

Bonne journée,
[Signature]`,
      stats: { open: 0.48, click: 0.085, reply: 0.10, book: 0.11 },
      tips: [
        'Répondre aux objections implicites (prix, charges, état)',
        'Utiliser des données factuelles et comparatives',
        'Mettre en avant la rareté et l\'opportunité',
        'Rester factuel, éviter le marketing agressif'
      ]
    },
    j3: {
      title: 'Urgence & Preuve Sociale',
      subjectA: '⚠️ [Adresse] : 4 visites programmées cette semaine',
      subjectB: 'Autre acquéreur intéressé par [Adresse]',
      body: `Bonjour [Prénom],

Petite update concernant le [Type bien] [Adresse] que vous avez visité.

📊 Situation actuelle :
• 4 autres visites programmées cette semaine
• 2 dossiers de financement en cours de validation
• Le propriétaire souhaite une réponse rapide

Je ne veux pas vous mettre la pression, mais si ce bien vous intéresse vraiment, je vous conseille de ne pas trop attendre.

💡 Pour sécuriser votre position :
1️⃣ Me confirmer votre intérêt (même si vous avez encore des questions)
2️⃣ Préparer votre dossier de financement (je peux vous aider)
3️⃣ Programmer une 2ème visite si besoin

👉 On en parle 15 min ? [Lien Calendly]

Je reste dispo pour toute question.

À très vite,
[Signature]

P.S. : Si le bien ne vous convient finalement pas, dites-le-moi pour que je vous propose d'autres options similaires.`,
      stats: { open: 0.45, click: 0.12, reply: 0.15, book: 0.16 },
      tips: [
        'Créer l\'urgence de manière factuelle (pas de fausse urgence)',
        'Donner une porte de sortie (proposer des alternatives)',
        'Utiliser la preuve sociale (autres visiteurs)',
        'Offrir de l\'aide concrète (dossier financement)'
      ]
    },
    j7: {
      title: 'Alternatives',
      subjectA: 'Toujours intéressé par un bien similaire à [Adresse] ?',
      subjectB: '2 alternatives à [Adresse] (même budget, même secteur)',
      body: `Bonjour [Prénom],

Je n'ai pas eu de retour suite à votre visite du [Type bien] [Adresse].

Si ce bien ne correspond finalement pas à vos critères, j'ai 2 alternatives qui pourraient vous intéresser :

🏠 Option 1 : [Adresse 2]
• [Type bien] • [Prix] • [Surface]
• Similaire mais avec parking inclus
• Disponible immédiatement
→ Voir le dossier : [Lien]

🏠 Option 2 : [Adresse 3]
• [Type bien] • [Prix] • [Surface]
• Même quartier, étage supérieur
• Terrasse 15m² (vs balcon)
→ Voir le dossier : [Lien]

Souhaitez-vous que je vous envoie les dossiers complets + disponibilités pour visiter ?

Répondez simplement OUI ou NON.

Bonne journée,
[Signature]`,
      stats: { open: 0.41, click: 0.07, reply: 0.08, book: 0.08 },
      tips: [
        'Accepter que le prospect ne soit peut-être pas intéressé',
        'Proposer des alternatives concrètes et personnalisées',
        'Faciliter la réponse (OUI/NON)',
        'Garder la porte ouverte pour d\'autres opportunités'
      ]
    },
    noshow: {
      title: 'Récupération No-Show',
      subjectA: 'On a raté notre RDV ce matin - tout va bien ?',
      subjectB: '[Prénom], je peux vous aider ?',
      body: `Bonjour [Prénom],

Nous avions rendez-vous ce [Jour] à [Heure] pour [Raison RDV], mais je ne vous ai pas vu/entendu.

J'espère que tout va bien de votre côté ! 🙏

Pas de souci si vous avez eu un imprévu. Ça arrive à tout le monde.

Si vous êtes toujours intéressé par [Bien/Sujet], je peux vous proposer :

📅 Nouveaux créneaux disponibles :
• [Option 1 : Jour + heure]
• [Option 2 : Jour + heure]

👉 Réserver directement : [Lien Calendly]

Ou si vous préférez, répondez à cet email pour qu'on trouve un moment qui vous arrange.

À bientôt,
[Signature]

P.S. : Si vous n'êtes finalement plus intéressé, n'hésitez pas à me le dire. Aucun problème !`,
      stats: { open: 0.61, click: 0.28, reply: 0.25, book: 0.34 },
      tips: [
        'Envoyer immédiatement après le no-show (max 1h)',
        'Être empathique et non-culpabilisant',
        'Faciliter la reprogrammation (Calendly direct)',
        'Donner une porte de sortie (si plus intéressé)'
      ]
    },
    dossier: {
      title: 'Documents Manquants',
      subjectA: 'Il manque juste 2 docs pour finaliser votre dossier 📄',
      subjectB: 'Votre dossier [Bien] : dernière ligne droite !',
      body: `Bonjour [Prénom],

Bonne nouvelle : votre dossier pour [Bien] est presque complet ! 🎉

Il ne manque que 2 documents pour qu'on puisse le transmettre au propriétaire :

📄 Documents manquants :
❌ [Document 1] (ex: 3 derniers bulletins de salaire)
❌ [Document 2] (ex: attestation employeur)

Une fois que je les reçois, je transmets immédiatement au propriétaire et on avance sur la promesse de vente.

💡 Comment me les envoyer ?
• Répondre à cet email avec les PJ
• Les déposer sur [Lien Google Drive / Dropbox sécurisé]
• Me les transmettre via WhatsApp : [Numéro]

⏰ Timing : Le propriétaire attend 2 autres dossiers complets. Celui qui est prêt en premier aura la priorité.

Besoin d'aide pour un document ? Appelez-moi au [Téléphone].

À tout de suite,
[Signature]`,
      stats: { open: 0.55, click: 0.19, reply: 0.22, book: 0.12 },
      tips: [
        'Lister précisément ce qui manque (pas de flou)',
        'Faciliter l\'envoi (plusieurs options)',
        'Créer l\'urgence de manière factuelle',
        'Proposer de l\'aide si besoin'
      ]
    }
  };

  return (
    <div className="min-h-screen bg-deep-black">
      <Header />
      <BackgroundEffects />

      <main className="relative">
        {/* HERO SECTION */}
        <section className="relative min-h-screen bg-gradient-to-b from-deep-black via-orange-950/10 to-deep-black px-8 py-20 overflow-hidden">
          <ParticlesBackground color="orange" density={40} />

          <div className="max-w-7xl mx-auto text-center mb-16 relative z-10">
            <div className="inline-block mb-8">
              <div className="text-orange-500 text-sm font-bold uppercase tracking-widest mb-4">
                💔 LE DRAME QUOTIDIEN
              </div>
              <h1 className="text-6xl md:text-8xl font-black mb-6 font-orbitron">
                <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
                  ILS ONT VISITÉ... ET DISPARU
                </span>
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Vous passez 1h à faire visiter un bien.{' '}
                <span className="text-orange-500 font-black">Le prospect est conquis.</span>
                <br />
                Puis... plus rien. Radio silence.
              </p>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                <span className="text-red-500 font-bold">67% des prospects</span> qui visitent{' '}
                sans être relancés... achètent ailleurs.
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto mb-16">
              <LeadsEscapeAnimation />
            </div>

            {/* Stats réalité terrain */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="group bg-gradient-to-br from-red-950/50 to-red-900/30 
                              rounded-2xl p-8 border-2 border-red-500/30
                              hover:border-red-500 hover:shadow-[0_0_60px_rgba(239,68,68,0.4)]
                              transition-all duration-300">
                <div className="text-6xl mb-4">😭</div>
                <div className="text-7xl font-black text-red-500 mb-3 font-orbitron">67%</div>
                <p className="text-xl text-gray-300 mb-4">
                  Des prospects <span className="text-red-400 font-bold">jamais relancés</span> après visite
                </p>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="text-xs text-gray-500 bg-black/30 rounded px-3 py-2 inline-block">
                    📚 Source : NAR / Realtor.com
                  </div>
                </div>
              </div>

              <div className="group bg-gradient-to-br from-gray-900 to-gray-800 
                              rounded-2xl p-8 border-2 border-gray-700
                              hover:border-orange-500 hover:shadow-[0_0_60px_rgba(251,146,60,0.4)]
                              transition-all duration-300">
                <div className="text-6xl mb-4">⏰</div>
                <div className="text-7xl font-black text-orange-500 mb-3 font-orbitron">4h</div>
                <p className="text-xl text-gray-300 mb-4">
                  Perdues par agent chaque semaine en{' '}
                  <span className="text-orange-400 font-bold">relances manuelles</span>
                </p>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="text-xs text-gray-500 bg-black/30 rounded px-3 py-2 inline-block">
                    📚 Source : Luxury Presence
                  </div>
                </div>
              </div>

              <div className="group bg-gradient-to-br from-cyan-950/50 to-cyan-900/30 
                              rounded-2xl p-8 border-2 border-cyan-500/30
                              hover:border-cyan-500 hover:shadow-[0_0_60px_rgba(6,182,212,0.4)]
                              transition-all duration-300">
                <div className="text-6xl mb-4">📧</div>
                <div className="text-7xl font-black text-cyan-400 mb-3 font-orbitron">+35%</div>
                <p className="text-xl text-gray-300 mb-4">
                  De conversions avec{' '}
                  <span className="text-cyan-400 font-bold">séquence automatisée</span>
                </p>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="text-xs text-gray-500 bg-black/30 rounded px-3 py-2 inline-block">
                    📚 Source : HubSpot / Campaign Monitor
                  </div>
                </div>
              </div>
            </div>

            {/* Message de transition */}
            <div className="bg-gradient-to-r from-orange-950/50 via-red-950/50 to-pink-950/50 
                            rounded-2xl p-12 border-2 border-orange-500/30 mb-12">
              <h3 className="text-4xl font-black text-white mb-6">
                Et si vos prospects étaient relancés <span className="text-orange-500">automatiquement</span>,
                <br />
                au bon moment, avec le bon message, sur le bon canal ?
              </h3>
              <p className="text-xl text-gray-300 mb-8">
                Email + SMS + WhatsApp • Personnalisé selon leur comportement • Zéro effort manuel
              </p>
              <button 
                onClick={scrollToDemo}
                className="px-12 py-5 bg-gradient-to-r from-orange-500 to-red-600 text-white 
                           font-black text-2xl rounded-xl shadow-[0_0_40px_rgba(251,146,60,0.5)]
                           hover:shadow-[0_0_60px_rgba(251,146,60,0.7)] hover:scale-105 
                           transition-all duration-300">
                ⚡ VOIR LA SOLUTION EN ACTION
              </button>
            </div>
          </div>
        </section>

        {/* KPI DASHBOARD */}
        <section id="kpi-dashboard" className="px-8 py-20 bg-gradient-to-b from-black via-cyan-900/10 to-black">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
              📊 KPI Clés & Bénéfices
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              <div className="bg-gradient-to-br from-cyan-900/50 to-cyan-800/30 rounded-2xl p-8 border border-cyan-500/30 text-center">
                <div className="text-6xl mb-4">📧</div>
                <div className="text-5xl font-black text-cyan-400 mb-2 font-orbitron">52%</div>
                <div className="text-gray-400">Taux d'ouverture</div>
              </div>
              <div className="bg-gradient-to-br from-cyan-900/50 to-cyan-800/30 rounded-2xl p-8 border border-cyan-500/30 text-center">
                <div className="text-6xl mb-4">🖱️</div>
                <div className="text-5xl font-black text-cyan-400 mb-2 font-orbitron">9.5%</div>
                <div className="text-gray-400">Taux de clic</div>
              </div>
              <div className="bg-gradient-to-br from-cyan-900/50 to-cyan-800/30 rounded-2xl p-8 border border-cyan-500/30 text-center">
                <div className="text-6xl mb-4">🎯</div>
                <div className="text-5xl font-black text-cyan-400 mb-2 font-orbitron">14%</div>
                <div className="text-gray-400">Taux RDV pris</div>
              </div>
              <div className="bg-gradient-to-br from-cyan-900/50 to-cyan-800/30 rounded-2xl p-8 border border-cyan-500/30 text-center">
                <div className="text-6xl mb-4">⚠️</div>
                <div className="text-5xl font-black text-cyan-400 mb-2 font-orbitron">-18%</div>
                <div className="text-gray-400">Réduction no-show</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-700 to-cyan-500 rounded-2xl p-6 text-white text-center font-bold text-lg mb-20">
              4h économisées/agent/sem = 672€/mois + 35% conversions
            </div>
          </div>
        </section>

        {/* TIMELINE SÉQUENCE INTERACTIVE */}
        <section className="px-8 py-20 bg-gradient-to-b from-black via-orange-900/10 to-black">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
            {/* Left: Steps */}
            <EmailSequenceTimeline 
              selectedStep={selectedStep} 
              onSelectStep={setSelectedStep}
            />

            {/* Right: Preview */}
            <EmailPreviewPanel 
              step={selectedStep}
              emailData={emailTemplates[selectedStep as keyof typeof emailTemplates]}
            />
          </div>
        </section>

        {/* SMS NUDGE */}
        <section className="px-8 py-20 bg-gradient-to-b from-black via-pink-950/10 to-black">
          <div className="max-w-7xl mx-auto">
            
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
              📱 SMS Nudge : Le Coup de Pouce Qui Change Tout
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Simulateur SMS */}
              <div className="bg-gradient-to-br from-pink-950/50 to-purple-950/50 
                              rounded-2xl border-2 border-pink-500/30 overflow-hidden
                              shadow-[0_0_40px_rgba(236,72,153,0.2)]">
                
                {/* Header téléphone */}
                <div className="bg-gradient-to-r from-pink-600 to-purple-600 px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                      <span className="text-xl">🏠</span>
                    </div>
                    <div>
                      <div className="text-white font-bold">Spydercom Auto</div>
                      <div className="text-pink-200 text-xs">Message automatique</div>
                    </div>
                  </div>
                </div>

                {/* Corps SMS */}
                <div className="p-8 bg-gray-950">
                  <div className="space-y-4">
                    
                    {/* SMS J+2 si pas de clic */}
                    <div className="flex justify-end">
                      <div className="max-w-[85%]">
                        <div className="bg-gradient-to-br from-pink-600 to-purple-600 
                                        rounded-2xl rounded-tr-none px-6 py-4 text-white">
                          <p className="leading-relaxed">
                            Bonjour Sophie 👋
                            <br /><br />
                            Toujours partant(e) pour le T3 rue de la Paix ?
                            <br /><br />
                            2 créneaux libres aujourd'hui :
                            <br />
                            <span className="font-bold">1️⃣ 12h20</span> ou <span className="font-bold">2️⃣ 17h10</span>
                            <br /><br />
                            Répondez 1 ou 2 ✅
                          </p>
                        </div>
                        <div className="text-xs text-gray-500 text-right mt-1">
                          Envoyé • 10:23
                        </div>
                      </div>
                    </div>

                    {/* Réponse prospect */}
                    <div className="flex justify-start">
                      <div className="max-w-[85%]">
                        <div className="bg-gray-800 rounded-2xl rounded-tl-none px-6 py-4 text-white">
                          <p className="text-lg font-bold">2</p>
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          10:26 • Lu
                        </div>
                      </div>
                    </div>

                    {/* Confirmation auto */}
                    <div className="flex justify-end">
                      <div className="max-w-[85%]">
                        <div className="bg-gradient-to-br from-green-600 to-emerald-600 
                                        rounded-2xl rounded-tr-none px-6 py-4 text-white">
                          <p className="leading-relaxed">
                            ✅ <span className="font-bold">Parfait !</span>
                            <br /><br />
                            RDV confirmé aujourd'hui à <span className="font-bold">17h10</span>
                            <br />
                            📍 12 rue de la Paix, Paris 2e
                            <br /><br />
                            Vous recevrez un rappel 1h avant.
                            <br />
                            À tout à l'heure ! 🏠
                          </p>
                        </div>
                        <div className="text-xs text-gray-500 text-right mt-1">
                          Envoyé • 10:26
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer stats */}
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 px-6 py-4 
                                border-t border-pink-500/20">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-pink-400 text-sm mb-1">Taux réponse</div>
                      <div className="text-2xl font-black text-white">34%</div>
                    </div>
                    <div>
                      <div className="text-purple-400 text-sm mb-1">Réponse &lt; 2h</div>
                      <div className="text-2xl font-black text-white">78%</div>
                    </div>
                    <div>
                      <div className="text-green-400 text-sm mb-1">RDV pris</div>
                      <div className="text-2xl font-black text-white">61%</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Panneau explicatif */}
              <div className="space-y-6">
                
                {/* Pourquoi ça marche */}
                <div className="bg-gradient-to-br from-purple-950/50 to-purple-900/30 
                                rounded-2xl p-8 border border-purple-500/30">
                  <h3 className="text-2xl font-bold text-purple-400 mb-6 flex items-center gap-3">
                    <span className="text-3xl">💡</span>
                    Pourquoi le SMS est redoutable ?
                  </h3>
                  
                  <div className="space-y-4">
                    <BenefitItem 
                      icon="⚡"
                      title="Taux d'ouverture 98%"
                      description="vs 52% pour l'email. Le SMS est lu en moyenne 3 minutes après réception."
                    />
                    <BenefitItem 
                      icon="🎯"
                      title="Réponse ultra-rapide"
                      description="78% répondent en moins de 2h. Format court = action immédiate."
                    />
                    <BenefitItem 
                      icon="📱"
                      title="Toujours sur eux"
                      description="95% des gens ont leur téléphone à moins d'1 mètre d'eux."
                    />
                    <BenefitItem 
                      icon="🚀"
                      title="Complémentaire email"
                      description="Email pour le détail, SMS pour le nudge. Combo parfait."
                    />
                  </div>
                </div>

                {/* Quand envoyer */}
                <div className="bg-gradient-to-br from-orange-950/50 to-red-950/30 
                                rounded-2xl p-8 border border-orange-500/30">
                  <h3 className="text-2xl font-bold text-orange-400 mb-6 flex items-center gap-3">
                    <span className="text-3xl">⏰</span>
                    Timing stratégique
                  </h3>
                  
                  <div className="space-y-3">
                    <TimingRule 
                      trigger="Email ouvert mais pas de clic"
                      delay="24-48h après"
                      message="Nudge avec choix binaire simple (1 ou 2)"
                    />
                    <TimingRule 
                      trigger="RDV pris"
                      delay="1h avant le RDV"
                      message="Rappel avec adresse + contact agent"
                    />
                    <TimingRule 
                      trigger="No-show"
                      delay="30min après l'heure prévue"
                      message="Récupération immédiate avec 2 créneaux du jour"
                    />
                    <TimingRule 
                      trigger="Prospect inactif J+5"
                      delay="Si aucune réponse email"
                      message="Last chance avec urgence douce"
                    />
                  </div>
                </div>

                {/* Benchmark */}
                <div className="bg-gradient-to-br from-cyan-950/50 to-blue-950/30 
                                rounded-2xl p-8 border border-cyan-500/30">
                  <h3 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-3">
                    <span className="text-3xl">📊</span>
                    Benchmarks SMS Immobilier
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <BenchmarkStat label="Taux ouverture" value="98%" />
                    <BenchmarkStat label="Taux réponse" value="34%" />
                    <BenchmarkStat label="Délai lecture" value="3 min" />
                    <BenchmarkStat label="Rebook après no-show" value="+12%" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CALCULATEUR ROI */}
        <section className="px-8 py-20 bg-gradient-to-b from-black via-orange-950/20 to-black">
          <div className="max-w-6xl mx-auto">
            
            <div className="text-center mb-16">
              <div className="text-orange-500 text-sm font-bold uppercase tracking-widest mb-4">
                💸 CALCULATEUR D'IMPACT
              </div>
              <h2 className="text-6xl font-black mb-6 font-['Orbitron']">
                <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 
                               bg-clip-text text-transparent animate-gradient">
                  Combien de ventes perdez-vous ?
                </span>
              </h2>
              <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
                Calculez le coût réel de l'absence de relances automatiques
              </p>
            </div>

            {/* Formulaire interactif */}
            <div className="bg-gradient-to-br from-gray-900 via-orange-900/10 to-gray-900 
                            rounded-3xl p-12 border-2 border-orange-500/30
                            shadow-[0_0_60px_rgba(251,146,60,0.2)]">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                
                {/* Input 1 : Visites par mois */}
                <div>
                  <label className="flex items-center gap-3 text-xl font-bold text-white mb-4">
                    <span className="text-4xl">🏠</span>
                    Visites effectuées par mois
                  </label>
                  <div className="bg-black/30 rounded-xl p-6 border border-orange-500/30">
                    <input 
                      type="range"
                      min="20"
                      max="300"
                      step="10"
                      value={nbVisites}
                      onChange={(e) => setNbVisites(parseInt(e.target.value))}
                      className="w-full h-3 bg-gray-700 rounded-full appearance-none cursor-pointer
                                 [&::-webkit-slider-thumb]:appearance-none
                                 [&::-webkit-slider-thumb]:w-8
                                 [&::-webkit-slider-thumb]:h-8
                                 [&::-webkit-slider-thumb]:rounded-full
                                 [&::-webkit-slider-thumb]:bg-gradient-to-r
                                 [&::-webkit-slider-thumb]:from-orange-500
                                 [&::-webkit-slider-thumb]:to-red-500
                                 [&::-webkit-slider-thumb]:shadow-[0_0_20px_rgba(251,146,60,0.8)]
                                 [&::-webkit-slider-thumb]:hover:scale-125
                                 [&::-webkit-slider-thumb]:transition-transform"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-2">
                      <span>20</span>
                      <span>150</span>
                      <span>300</span>
                    </div>
                  </div>
                  <div className="text-center mt-4">
                    <div className="text-6xl font-black text-orange-400 font-['Orbitron'] tabular-nums">
                      {nbVisites}
                    </div>
                    <div className="text-sm text-gray-500">visites mensuelles</div>
                  </div>
                </div>

                {/* Input 2 : Agents */}
                <div>
                  <label className="flex items-center gap-3 text-xl font-bold text-white mb-4">
                    <span className="text-4xl">👥</span>
                    Nombre d'agents commerciaux
                  </label>
                  <div className="bg-black/30 rounded-xl p-6 border border-cyan-500/30">
                    <input 
                      type="range"
                      min="1"
                      max="30"
                      value={nbAgents}
                      onChange={(e) => setNbAgents(parseInt(e.target.value))}
                      className="w-full h-3 bg-gray-700 rounded-full appearance-none cursor-pointer
                                 [&::-webkit-slider-thumb]:appearance-none
                                 [&::-webkit-slider-thumb]:w-8
                                 [&::-webkit-slider-thumb]:h-8
                                 [&::-webkit-slider-thumb]:rounded-full
                                 [&::-webkit-slider-thumb]:bg-gradient-to-r
                                 [&::-webkit-slider-thumb]:from-cyan-500
                                 [&::-webkit-slider-thumb]:to-blue-500
                                 [&::-webkit-slider-thumb]:shadow-[0_0_20px_rgba(6,182,212,0.8)]"
                    />
                  </div>
                  <div className="text-center mt-4">
                    <div className="text-6xl font-black text-cyan-400 font-['Orbitron'] tabular-nums">
                      {nbAgents}
                    </div>
                    <div className="text-sm text-gray-500">agents dans l'équipe</div>
                  </div>
                </div>

                {/* Input 3 : TJM */}
                <div>
                  <label className="flex items-center gap-3 text-xl font-bold text-white mb-4">
                    <span className="text-4xl">💰</span>
                    Coût horaire agent (salaire chargé)
                  </label>
                  <div className="bg-black/30 rounded-xl p-6 border border-yellow-500/30">
                    <input 
                      type="number"
                      min="25"
                      max="80"
                      step="5"
                      value={tjm}
                      onChange={(e) => setTjm(parseInt(e.target.value))}
                      className="w-full bg-gray-800 border-2 border-yellow-500/30 rounded-lg 
                                 px-6 py-4 text-4xl font-bold text-white text-center
                                 focus:border-yellow-400 focus:outline-none font-['Orbitron']"
                    />
                  </div>
                  <div className="text-center mt-4">
                    <div className="text-4xl font-black text-yellow-400">
                      {tjm}€/heure
                    </div>
                  </div>
                </div>

                {/* Input 4 : Commission moyenne */}
                <div>
                  <label className="flex items-center gap-3 text-xl font-bold text-white mb-4">
                    <span className="text-4xl">🏆</span>
                    Commission moyenne par vente
                  </label>
                  <div className="bg-black/30 rounded-xl p-6 border border-green-500/30">
                    <input 
                      type="number"
                      min="2000"
                      max="15000"
                      step="500"
                      value={avgCommission}
                      onChange={(e) => setAvgCommission(parseInt(e.target.value))}
                      className="w-full bg-gray-800 border-2 border-green-500/30 rounded-lg 
                                 px-6 py-4 text-4xl font-bold text-white text-center
                                 focus:border-green-400 focus:outline-none font-['Orbitron']"
                    />
                  </div>
                  <div className="text-center mt-4">
                    <div className="text-4xl font-black text-green-400">
                      {avgCommission.toLocaleString()}€
                    </div>
                  </div>
                </div>
              </div>

              {/* Résultats calculés */}
              <RelanceROIResults 
                nbVisites={nbVisites}
                nbAgents={nbAgents}
                tjm={tjm}
                avgCommission={avgCommission}
              />
            </div>
          </div>
        </section>

        {/* WORKFLOW VISUEL N8N */}
        <section className="px-8 py-20 bg-black">
          <div className="max-w-7xl mx-auto">
            
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
              🔄 Comment Ça Fonctionne En Coulisses
            </h2>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-12 
                            border border-cyan-500/30">
              
              <WorkflowDiagram />

              {/* Légende */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-black/30 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-cyan-400 mb-4">🎯 Déclencheurs</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="text-cyan-400">▸</span>
                      <span>Visite effectuée (CRM webhook)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-cyan-400">▸</span>
                      <span>Email ouvert/cliqué (tracking pixel)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-cyan-400">▸</span>
                      <span>No-show détecté (calendrier)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-cyan-400">▸</span>
                      <span>Inactivité X jours (timer)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-black/30 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-purple-400 mb-4">⚙️ Actions</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="text-purple-400">▸</span>
                      <span>Personnalisation tokens (nom, adresse...)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-400">▸</span>
                      <span>Envoi email (SendGrid/SMTP)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-400">▸</span>
                      <span>Envoi SMS (Twilio/Vonage)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-400">▸</span>
                      <span>Mise à jour CRM (statut, tags)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-black/30 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-green-400 mb-4">📊 Tracking</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="text-green-400">▸</span>
                      <span>Open rate (pixel invisible)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-400">▸</span>
                      <span>Click rate (liens trackés)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-400">▸</span>
                      <span>Réponses (webhooks entrants)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-400">▸</span>
                      <span>Conversions (RDV pris, vente)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <CTABooking subtitle="Voyez nos scénarios email en action" />
      <Footer />
    </div>
  );
};

export default EmailsRelances;
