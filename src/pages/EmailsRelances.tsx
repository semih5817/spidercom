import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";
import ParticlesBackground from "@/components/leads/ParticlesBackground";
import LeadsEscapeAnimation from "@/components/leads/LeadsEscapeAnimation";
import EmailSequenceTimeline from "@/components/leads/EmailSequenceTimeline";
import EmailPreviewPanel from "@/components/leads/EmailPreviewPanel";

const EmailsRelances = () => {
  const [selectedStep, setSelectedStep] = useState('j0');

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
                <span className="text-red-500 font-bold">67% des prospects</span> qui visitent 
                sans être relancés... achètent ailleurs.
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto mb-16">
              <LeadsEscapeAnimation />
            </div>

            {/* Stats réalité terrain */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              
              {/* Stat 1 */}
              <div className="group bg-gradient-to-br from-red-950/50 to-red-900/30 
                              rounded-2xl p-8 border-2 border-red-500/30
                              hover:border-red-500 hover:shadow-[0_0_60px_rgba(239,68,68,0.4)]
                              transition-all duration-300">
                <div className="text-6xl mb-4">😭</div>
                <div className="text-7xl font-black text-red-500 mb-3 font-orbitron">
                  67%
                </div>
                <p className="text-xl text-gray-300 mb-4">
                  Des prospects <span className="text-red-400 font-bold">jamais relancés</span> après visite
                </p>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="text-xs text-gray-500 bg-black/30 rounded px-3 py-2 inline-block">
                    📚 Source : NAR / Realtor.com
                  </div>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="group bg-gradient-to-br from-gray-900 to-gray-800 
                              rounded-2xl p-8 border-2 border-gray-700
                              hover:border-orange-500 hover:shadow-[0_0_60px_rgba(251,146,60,0.4)]
                              transition-all duration-300">
                <div className="text-6xl mb-4">⏰</div>
                <div className="text-7xl font-black text-orange-500 mb-3 font-orbitron">
                  4h
                </div>
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

              {/* Stat 3 */}
              <div className="group bg-gradient-to-br from-cyan-950/50 to-cyan-900/30 
                              rounded-2xl p-8 border-2 border-cyan-500/30
                              hover:border-cyan-500 hover:shadow-[0_0_60px_rgba(6,182,212,0.4)]
                              transition-all duration-300">
                <div className="text-6xl mb-4">📧</div>
                <div className="text-7xl font-black text-cyan-400 mb-3 font-orbitron">
                  +35%
                </div>
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
                onClick={() => scrollToDemo()}
                className="px-12 py-5 bg-gradient-to-r from-orange-500 to-red-600 text-white 
                           font-black text-2xl rounded-xl shadow-[0_0_40px_rgba(251,146,60,0.5)]
                           hover:shadow-[0_0_60px_rgba(251,146,60,0.7)] hover:scale-105 
                           transition-all duration-300">
                ⚡ VOIR LA SOLUTION EN ACTION
              </button>
            </div>
          </div>
        </section>

        {/* KPI + TIMELINE SECTIONS */}
        <section id="kpi-dashboard" className="px-8 py-20 bg-deep-black">
          <EmailSequenceTimeline selectedStep={selectedStep} onSelectStep={setSelectedStep} />
          <EmailPreviewPanel step={selectedStep} emailData={emailTemplates[selectedStep as keyof typeof emailTemplates]} />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default EmailsRelances;
