/**
 * Faithful content for the Progix "Devis contractuel" — RotaPro. List-shaped
 * data lives here; prose with inline emphasis is authored in the section JSX.
 *
 * All copy uses French typography (’ « » … —) — keep it that way.
 */

export const cover = {
  tag: "Devis contractuel · Bon de commande",
  title: "Développement de votre",
  titleLight: "plateforme de remplacement",
  subtitle:
    "Application mobile de mise en relation pour le remplacement professionnel rotatif : publication de missions, matching intelligent, calendrier de disponibilités, messagerie et évaluations — plus back-office, landing page et accompagnement marketing jusqu’à la mise en marché. Un prix fixe, une équipe senior, votre propriété à 100 %.",
  badges: [
    { l: "Montant total", v: "5 200 €", u: "" },
    { l: "Délai de livraison", v: "60", u: " jours" },
    { l: "Accompagnement", v: "90", u: " jours" },
  ],
  meta: [
    { l: "Projet", v: "RotaPro" },
    { l: "Client", v: "Karim" },
    { l: "Prestataire", v: "Progix Inc. · NEQ 1181317117" },
    { l: "Référence · Date", v: "DEVIS-PROGIX-2026 · ____________" },
  ],
} as const;

export const trust = [
  { n: "12", l: "ingénieurs dédiés" },
  { n: "100+", l: "projets livrés" },
  { n: "100 %", l: "propriété au Client" },
  { n: "CA · FR", l: "équipe Canada & France" },
] as const;

/** Section 02 — prestations included, grouped. `b` is emphasized, `t` follows. */
export const incl1 = [
  { b: "Application mobile iOS & Android", t: ", design sur mesure inclus" },
  { b: "Inscription & profils vérifiés", t: " (titulaire, remplaçant ou les deux)" },
  { b: "Publication de missions de remplacement", t: " ponctuelles ou rotatives" },
  { b: "Recherche & matching intelligent", t: " par domaine, disponibilité et qualifications" },
  { b: "Calendrier de disponibilités", t: " et de missions" },
  { b: "Candidature, confirmation & évaluations", t: " mutuelles" },
  { b: "Messagerie interne & notifications", t: " temps réel" },
  { b: "Back-office d’administration", t: " (profils, domaines, modération)" },
  { b: "Landing page", t: " de présentation, optimisée acquisition" },
  { b: "3 révisions de maquettes", t: " incluses dans le forfait" },
] as const;

export const incl2 = [
  { b: "Système d’abonnement / monétisation in-app", t: " (Apple App Store & Google Play)" },
  { b: "Gestion de compte", t: " et des préférences utilisateur" },
  { b: "Hébergement cloud scalable", t: " selon la charge utilisateur" },
  { b: "Publication", t: " sur l’App Store & le Google Play Store" },
] as const;

export const incl3 = [
  { b: "Formation marketing complète", t: " : UGC, Meta Ads, Apple Search Ads (scripts fournis)" },
  { b: "Suivi hebdomadaire", t: " des KPIs pendant 90 jours" },
  { b: "Optimisation du coût d’acquisition", t: " (tests de paywalls, A/B testing)" },
  { b: "Support technique 90 jours", t: " + documentation technique complète" },
] as const;

/** Section 03 — investment table, poste par poste. `alt` rows get the tinted
 * background; the priced lines sum to the 5 200 € all-inclusive total. */
export const investment = [
  {
    strong: "Application mobile iOS + Android",
    text: " (design sur mesure)",
    amount: "1 650 €",
    alt: false,
  },
  { text: "Inscription, profils vérifiés & gestion des rôles", amount: "500 €", alt: true },
  { text: "Publication de missions, matching & calendrier", amount: "650 €", alt: false },
  { text: "Candidature, confirmation, messagerie & évaluations", amount: "550 €", alt: true },
  { text: "Back-office d’administration & gestion de contenu", amount: "600 €", alt: false },
  { text: "Intégration de l’abonnement / monétisation in-app", amount: "350 €", alt: true },
  { text: "Landing page de présentation", amount: "250 €", alt: false },
  { text: "Publication App Store + Play Store", amount: "150 €", alt: true },
  {
    text: "Accompagnement marketing 90 j (formation, scripts, suivi)",
    amount: "500 €",
    alt: false,
  },
  {
    text: "Hébergement cloud (mise en place) & support 90 jours",
    amount: "Inclus",
    included: true,
    alt: true,
  },
] as const;

export const payments = [
  {
    pct: "30 % · ACOMPTE",
    when: "Au démarrage",
    desc: "À la signature et à la réunion de cadrage",
    amount: "1 560 €",
  },
  {
    pct: "40 % · LIVRAISON",
    when: "À la livraison",
    desc: "Application livrée et publiée sur les stores",
    amount: "2 080 €",
  },
  {
    pct: "30 % · LANCEMENT",
    when: "Après accompagnement",
    desc: "À l’issue de la formation marketing",
    amount: "1 560 €",
  },
] as const;

/** Section 06 — delivery phases. */
export const phases = [
  {
    tag: "PHASE 1",
    title: "Cadrage",
    desc: "≈ J1 – J8 · spécifications & architecture",
  },
  {
    tag: "PHASE 2",
    title: "Design UI/UX",
    desc: "≈ J9 – J18 · maquettes (3 révisions incluses)",
  },
  {
    tag: "PHASE 3",
    title: "Développement",
    desc: "≈ J19 – J54 · profils, missions, matching, messagerie",
  },
] as const;

/** Header / footer navigation across the document set. */
export const navLinks = [
  { key: "accueil", label: "Présentation", href: "/" },
  { key: "cahier", label: "Cahier des charges", href: "/cahier-des-charges" },
  { key: "calendrier", label: "Calendrier", href: "/calendrier" },
  { key: "devis", label: "Devis contractuel", href: "/devis" },
] as const;
