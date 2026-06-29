import type { CSSProperties, ReactNode } from "react";
import { Cover } from "./cover";
import { DcHeader } from "./dc-header";
import { DownloadFab } from "./download-fab";
import { Footer } from "./footer";
import { ScrollReveal } from "./scroll-reveal";
import { SectionHeader } from "./primitives";
import { ChapterBand } from "./chapter-band";
import styles from "./devis.module.css";

/* ------------------------------------------------------------------ */
/* Shared inline-style fragments (lifted verbatim from the source).   */
/* ------------------------------------------------------------------ */

const SECTION_DOTS: CSSProperties = {
  width: "100%",
};

const CONTAINER: CSSProperties = {
  maxWidth: "1040px",
  margin: "0 auto",
  padding: "clamp(56px,7vw,94px) clamp(24px,5vw,48px)",
};

const CARD: CSSProperties = {
  background: "linear-gradient(180deg,#fff,#EDF4FF)",
  border: "1px solid #D6E3F1",
  borderRadius: "14px",
  padding: "22px 24px",
  boxShadow: "var(--shadow)",
};

const CARD_TITLE: CSSProperties = {
  fontFamily: "var(--font-disp)",
  fontSize: "15px",
  color: "var(--navy)",
  fontWeight: 600,
  margin: "0 0 7px",
  display: "flex",
  alignItems: "center",
  gap: "9px",
};

const CARD_TEXT: CSSProperties = {
  fontSize: "14px",
  margin: 0,
  color: "var(--slate)",
  lineHeight: 1.6,
};

const ROUND_BADGE: CSSProperties = {
  width: "30px",
  height: "30px",
  borderRadius: "50%",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  color: "#fff",
  fontSize: "13px",
  fontWeight: 700,
  fontFamily: "var(--font-disp)",
};

const GRID_AUTO: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,340px),1fr))",
  gap: "16px",
};

const H3_DIAMOND: CSSProperties = {
  fontFamily: "var(--font-disp)",
  fontSize: "19px",
  color: "var(--navy)",
  fontWeight: 600,
  margin: "34px 0 12px",
  display: "flex",
  alignItems: "center",
  gap: "10px",
};

const INFOBOX: CSSProperties = {
  background: "var(--tint-2)",
  border: "1px solid #D5EAFB",
  borderRadius: "14px",
  padding: "18px 22px",
  margin: "16px 0",
  display: "flex",
  gap: "14px",
  alignItems: "flex-start",
};

const INFOBOX_ICON: CSSProperties = {
  flexShrink: 0,
  width: "30px",
  height: "30px",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  fontWeight: 700,
  fontSize: "14px",
  fontFamily: "var(--font-disp)",
  background: "var(--cyan)",
};

const INFOBOX_TITLE: CSSProperties = {
  fontFamily: "var(--font-disp)",
  fontSize: "14px",
  margin: "0 0 4px",
  color: "var(--navy)",
  fontWeight: 600,
};

const INFOBOX_TEXT: CSSProperties = {
  fontSize: "13.6px",
  margin: 0,
  color: "var(--slate)",
  lineHeight: 1.55,
};

const STRONG_INK: CSSProperties = { color: "var(--ink)", fontWeight: 600 };

const TH: CSSProperties = {
  background: "var(--navy)",
  color: "#fff",
  textAlign: "left",
  padding: "11px 15px",
  fontFamily: "var(--font-disp)",
  fontWeight: 600,
  fontSize: "11px",
  letterSpacing: ".6px",
  textTransform: "uppercase",
};

const TAG_BASE: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  fontFamily: "var(--font-disp)",
  fontWeight: 600,
  fontSize: "10.5px",
  letterSpacing: ".6px",
  textTransform: "uppercase",
  padding: "4px 11px",
  borderRadius: "999px",
  whiteSpace: "nowrap",
};

const STEP_CARD: CSSProperties = {
  flex: "1 1 180px",
  background: "linear-gradient(180deg,#fff,#EDF4FF)",
  border: "1px solid #D6E3F1",
  borderRadius: "14px",
  padding: "16px 14px",
  boxShadow: "var(--shadow)",
};

const STEP_EYEBROW: CSSProperties = {
  fontFamily: "var(--font-disp)",
  fontWeight: 700,
  fontSize: "11px",
  color: "var(--cyan-ink)",
  letterSpacing: ".5px",
};

const STEP_TITLE: CSSProperties = {
  fontFamily: "var(--font-disp)",
  fontWeight: 600,
  fontSize: "14px",
  color: "var(--navy)",
  margin: "6px 0 4px",
};

const STEP_DESC: CSSProperties = {
  fontSize: "12.5px",
  color: "var(--slate)",
  lineHeight: 1.5,
};

const STEP_RULE: CSSProperties = {
  height: "6px",
  borderRadius: "6px",
  background: "linear-gradient(90deg,var(--cyan),var(--navy))",
  margin: "14px 0 0",
};

const ARCH_NODE: CSSProperties = {
  background: "#fff",
  border: "1.5px solid var(--line)",
  borderRadius: "11px",
  padding: "12px 14px",
  minWidth: "130px",
  textAlign: "center",
  boxShadow: "var(--shadow)",
};

const ARCH_NODE_TITLE: CSSProperties = {
  fontFamily: "var(--font-disp)",
  fontWeight: 600,
  fontSize: "12.5px",
  color: "var(--navy)",
};

const ARCH_NODE_SUB: CSSProperties = {
  fontSize: "11px",
  color: "var(--muted)",
  marginTop: "2px",
};

const ARCH_COL_LABEL: CSSProperties = {
  textAlign: "center",
  fontFamily: "var(--font-disp)",
  fontSize: "10px",
  letterSpacing: "1.2px",
  textTransform: "uppercase",
  color: "var(--muted)",
  marginBottom: "4px",
};

const ARCH_ARROW: CSSProperties = {
  display: "flex",
  alignItems: "center",
  color: "var(--cyan)",
  fontSize: "18px",
  fontWeight: 700,
};

const A_GRAD = "linear-gradient(150deg,var(--cyan-deep),var(--cyan))";
const N_GRAD = "linear-gradient(150deg,var(--navy),var(--navy-700))";

/* ------------------------------------------------------------------ */
/* Small presentational helpers                                        */
/* ------------------------------------------------------------------ */

function Strong({ children }: { children: ReactNode }) {
  return <strong style={STRONG_INK}>{children}</strong>;
}

/** Subsection heading with the cyan diamond marker, with custom top margin. */
function DiamondHeading({
  children,
  marginTop = "34px",
}: {
  children: ReactNode;
  marginTop?: string;
}) {
  return (
    <h3 style={{ ...H3_DIAMOND, margin: `${marginTop} 0 12px` }}>
      <span style={{ color: "var(--cyan)", fontSize: "13px" }} aria-hidden="true">
        ◆
      </span>
      {children}
    </h3>
  );
}

function FeatureCard({
  icon,
  iconBg,
  title,
  children,
}: {
  icon: ReactNode;
  iconBg: string;
  title: ReactNode;
  children: ReactNode;
}) {
  return (
    <div style={CARD}>
      <h4 style={CARD_TITLE}>
        <span style={{ ...ROUND_BADGE, background: iconBg }} aria-hidden="true">
          {icon}
        </span>
        {title}
      </h4>
      <p style={CARD_TEXT}>{children}</p>
    </div>
  );
}

function InfoCallout({
  iconBg = "var(--cyan)",
  icon = "i",
  title,
  titleColor = "var(--navy)",
  borderColor = "#D5EAFB",
  background = "var(--tint-2)",
  children,
}: {
  iconBg?: string;
  icon?: ReactNode;
  title: string;
  titleColor?: string;
  borderColor?: string;
  background?: string;
  children: ReactNode;
}) {
  return (
    <div style={{ ...INFOBOX, background, border: `1px solid ${borderColor}` }}>
      <div style={{ ...INFOBOX_ICON, background: iconBg }} aria-hidden="true">
        {icon}
      </div>
      <div>
        <h4 style={{ ...INFOBOX_TITLE, color: titleColor }}>{title}</h4>
        <p style={INFOBOX_TEXT}>{children}</p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Data lifted from the renderVals() island.                           */
/* ------------------------------------------------------------------ */

const meta = [
  { l: "Projet", v: "RotaPro" },
  { l: "Client", v: "Karim" },
  { l: "Prestataire", v: "Progix Inc. · NEQ 1181317117" },
  { l: "Référence · Version", v: "CDC-PROGIX-2026 · v1.0" },
] as const;

const toc = [
  { n: "01", t: "Contexte & vision" },
  { n: "02", t: "Objectifs" },
  { n: "03", t: "Public cible" },
  { n: "04", t: "Fonctionnalités" },
  { n: "05", t: "Parcours utilisateur type" },
  { n: "06", t: "Approche technique" },
  { n: "07", t: "Livrables & accompagnement" },
] as const;

type Tag = { label: string; bg: string; fg: string; bd: string };
type Feat = { b: string; t: string };
type Module = {
  n: string;
  iconBg: string;
  title: string;
  hasBadge: boolean;
  badge: string;
  desc: string;
  feats: Feat[];
  tags: Tag[];
};

const ok: Tag = { label: "Inclus V1", bg: "var(--ok-bg)", fg: "var(--ok)", bd: "none" };
const cy = (label: string): Tag => ({
  label,
  bg: "var(--tint)",
  fg: "var(--cyan-ink)",
  bd: "none",
});
const nv = (label: string): Tag => ({ label, bg: "#E9EEF6", fg: "var(--navy)", bd: "none" });
const gh = (label: string): Tag => ({
  label,
  bg: "#fff",
  fg: "var(--muted)",
  bd: "1px solid var(--line)",
});
const F = (b: string, t: string): Feat => ({ b, t });

const modules: Module[] = [
  {
    n: "01",
    iconBg: N_GRAD,
    title: "Inscription & profils",
    hasBadge: true,
    badge: "Cœur de la plateforme",
    desc: "Création de compte avec sélection du ou des domaines d’activité et du rôle (titulaire, remplaçant ou les deux).",
    feats: [
      F("", "Inscription par courriel, téléphone et options tierces (Google, Apple)."),
      F("Profil professionnel", " : domaine, spécialité, expérience, qualifications."),
      F("", "Vérification de profil et des justificatifs par l’administration."),
      F("", "Photo, présentation et zone géographique d’intervention."),
    ],
    tags: [ok],
  },
  {
    n: "02",
    iconBg: N_GRAD,
    title: "Publication d’un besoin de remplacement",
    hasBadge: true,
    badge: "Cœur de la plateforme",
    desc: "Le titulaire publie une mission de remplacement en précisant tous les paramètres utiles.",
    feats: [
      F("", "Domaine, type de mission, date(s) et plage horaire."),
      F("Remplacement ponctuel ou récurrent / rotatif", " (gardes planifiées)."),
      F("", "Lieu, conditions et rémunération proposée."),
      F("", "Description et exigences spécifiques (qualifications requises)."),
    ],
    tags: [ok],
  },
  {
    n: "03",
    iconBg: A_GRAD,
    title: "Recherche & matching intelligent",
    hasBadge: true,
    badge: "Fonction clé",
    desc: "Les remplaçants découvrent les missions pertinentes grâce à un matching basé sur leur profil et leur disponibilité.",
    feats: [
      F("Matching", " par domaine, localisation, disponibilité et qualifications."),
      F("", "Filtres avancés (date, distance, type de mission, rémunération)."),
      F("", "Suggestions personnalisées et alertes en temps réel."),
    ],
    tags: [ok],
  },
  {
    n: "04",
    iconBg: A_GRAD,
    title: "Calendrier de disponibilité",
    hasBadge: true,
    badge: "Fonction clé",
    desc: "Au cœur de la logique « rotative » : chaque utilisateur gère ses disponibilités et son planning.",
    feats: [
      F("", "Calendrier personnel de disponibilités du remplaçant."),
      F("", "Visualisation des missions acceptées et à venir."),
      F("Gestion des remplacements", " récurrents et rotatifs."),
    ],
    tags: [ok],
  },
  {
    n: "05",
    iconBg: N_GRAD,
    title: "Candidature & confirmation",
    hasBadge: false,
    badge: "",
    desc: "Le processus de mise en relation, de la candidature à la confirmation de la mission.",
    feats: [
      F("", "Candidature du remplaçant à une mission."),
      F("", "Acceptation / refus par le titulaire."),
      F("", "Confirmation et récapitulatif de la mission."),
      F("Statuts", " : en attente, confirmée, réalisée, annulée."),
    ],
    tags: [ok],
  },
  {
    n: "06",
    iconBg: A_GRAD,
    title: "Messagerie & notifications",
    hasBadge: false,
    badge: "",
    desc: "Communication directe entre les parties et notifications à chaque étape clé.",
    feats: [
      F("", "Messagerie interne entre titulaire et remplaçant."),
      F("", "Notifications : nouvelle mission, candidature, confirmation, rappel."),
    ],
    tags: [ok],
  },
  {
    n: "07",
    iconBg: N_GRAD,
    title: "Confiance & évaluations",
    hasBadge: true,
    badge: "Socle de confiance",
    desc: "Le socle de confiance qui distingue RotaPro d’une simple mise en relation informelle.",
    feats: [
      F("", "Profils vérifiés (qualifications, justificatifs)."),
      F("", "Système d’évaluation mutuelle après chaque mission."),
      F("", "Historique des remplacements réalisés."),
      F("", "Signalement d’un comportement inapproprié."),
    ],
    tags: [ok],
  },
  {
    n: "08",
    iconBg: A_GRAD,
    title: "Gestion de compte & abonnement",
    hasBadge: false,
    badge: "",
    desc: "Gestion du compte et accès aux fonctionnalités selon le modèle de monétisation retenu.",
    feats: [
      F("", "Gestion du profil, des préférences et des notifications."),
      F("", "Intégration du système d’abonnement / monétisation in-app."),
      F("", "Historique et suivi des missions."),
    ],
    tags: [ok, cy("Monétisation")],
  },
  {
    n: "09",
    iconBg: N_GRAD,
    title: "Back-office d’administration",
    hasBadge: false,
    badge: "",
    desc: "Panneau d’administration complet pour piloter la plateforme.",
    feats: [
      F("", "Validation et vérification des profils et justificatifs."),
      F("", "Gestion des domaines, catégories et utilisateurs."),
      F("Modération", " des évaluations et signalements."),
      F("", "Tableau de bord : utilisateurs, missions, taux de remplissage."),
    ],
    tags: [ok, gh("Web sécurisé")],
  },
];

/* ------------------------------------------------------------------ */
/* The page                                                            */
/* ------------------------------------------------------------------ */

/**
 * Full "Cahier des charges" document — header, hero cover, the table of
 * contents, the thirteen content sections, and the footer. A Server Component
 * composing the shared client leaves (header, FAB, scroll-reveal) at the edges.
 */
export function CahierDocument() {
  return (
    <div className={styles.root} data-devis-root>
      <DcHeader active="cahier" />
      <main className={styles.main}>
        <DownloadFab />
        <Cover
          tag="Cahier des charges · Document de cadrage"
          title="Plateforme de mise en relation"
          titleLight="pour remplacements professionnels"
          subtitle="Application mobile de mise en relation pour le remplacement professionnel rotatif : publication de missions, matching intelligent, calendrier de disponibilités, candidature, messagerie et évaluations. Un « Doctolib du remplacement », ouvert à plusieurs domaines (santé, restauration, commerce…)."
          badges={[]}
          meta={meta}
        />

        {/* SOMMAIRE */}
        <section data-dc-section style={{ ...SECTION_DOTS, backgroundColor: "var(--band-a)" }}>
          <div style={CONTAINER}>
            <span
              style={{
                fontFamily: "var(--font-disp)",
                fontWeight: 600,
                fontSize: "11px",
                letterSpacing: "1.8px",
                textTransform: "uppercase",
                color: "var(--cyan-ink)",
                display: "inline-flex",
                alignItems: "center",
                gap: "9px",
              }}
            >
              <span
                style={{
                  width: "22px",
                  height: "2px",
                  background: "var(--cyan)",
                  borderRadius: "2px",
                  display: "inline-block",
                }}
                aria-hidden="true"
              />
              Sommaire
            </span>
            <h2
              style={{
                fontFamily: "var(--font-disp)",
                fontSize: "clamp(23px,3vw,28px)",
                color: "var(--navy)",
                fontWeight: 600,
                letterSpacing: "-.01em",
                margin: "12px 0 0",
              }}
            >
              Ce que couvre ce document
            </h2>
            <p
              style={{
                margin: "12px 0 0",
                fontSize: "15.5px",
                color: "var(--slate)",
                maxWidth: "66ch",
                lineHeight: 1.62,
              }}
            >
              Ce cahier des charges définit le périmètre fonctionnel et technique de l’Application,
              les livrables attendus et la démarche de réalisation. Il sert de base contractuelle au
              devis associé.
            </p>
            <div style={{ marginTop: "24px", borderTop: "1px solid var(--line)" }}>
              {toc.map((row) => (
                <div
                  key={row.n}
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "14px",
                    padding: "13px 2px",
                    borderBottom: "1px solid var(--line)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-disp)",
                      fontWeight: 600,
                      color: "var(--cyan-ink)",
                      fontSize: "13px",
                      width: "30px",
                      flexShrink: 0,
                    }}
                  >
                    {row.n}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-disp)",
                      fontWeight: 500,
                      color: "var(--navy)",
                      fontSize: "15px",
                    }}
                  >
                    {row.t}
                  </span>
                  <span
                    style={{
                      flex: 1,
                      borderBottom: "1px dotted var(--line)",
                      transform: "translateY(-4px)",
                      minWidth: "20px",
                    }}
                    aria-hidden="true"
                  />
                  <span
                    style={{
                      fontFamily: "var(--font-disp)",
                      color: "var(--muted)",
                      fontSize: "13px",
                    }}
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 01 — CONTEXTE */}
        <section
          id="s1"
          data-dc-section
          style={{ ...SECTION_DOTS, backgroundColor: "var(--band-b)" }}
        >
          <div style={CONTAINER}>
            <SectionHeader
              num="01 — CONTEXTE"
              title="Contexte & vision du projet"
              lead="Dans de nombreux secteurs — santé, paramédical, bien-être, restauration, commerce — les professionnels font face à un même besoin récurrent : trouver rapidement un remplaçant fiable pour assurer la continuité de leur activité, qu’il s’agisse d’un congé, d’une absence ponctuelle ou de gardes rotatives planifiées. Aujourd’hui, ce besoin est couvert de façon informelle (bouche-à-oreille, groupes de messagerie), avec peu de fiabilité et beaucoup de temps perdu."
            />
            <p
              style={{
                fontSize: "15.5px",
                color: "var(--ink)",
                margin: "0 0 13px",
                lineHeight: 1.62,
              }}
            >
              RotaPro est une <Strong>plateforme de mise en relation</Strong> qui connecte les
              professionnels ayant besoin d’un remplaçant avec des <Strong>remplaçants qualifiés et
              disponibles</Strong>, à travers plusieurs domaines d’activité — à la manière d’un
              « Doctolib du remplacement », ouvert à plusieurs secteurs.
            </p>
            <DiamondHeading>Positionnement</DiamondHeading>
            <p
              style={{
                fontSize: "14.5px",
                color: "var(--slate)",
                margin: "0 0 13px",
                lineHeight: 1.62,
              }}
            >
              RotaPro se concentre sur un besoin précis et transversal : le <Strong>remplacement
              professionnel rotatif</Strong>. Là où les plateformes d’emploi classiques gèrent du
              recrutement long terme, RotaPro gère la mise en relation rapide et récurrente entre un
              titulaire et son remplaçant, la confiance et la qualification au cœur de l’expérience.
            </p>
            <div
              style={{
                background:
                  "linear-gradient(155deg,var(--navy-900),var(--navy) 60%,var(--navy-800))",
                color: "#DDE8F4",
                borderRadius: "22px",
                padding: "30px clamp(24px,4vw,34px)",
                margin: "22px 0",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  position: "absolute",
                  right: "18px",
                  bottom: "-22px",
                  fontSize: "120px",
                  color: "rgba(56,182,255,.10)",
                  fontFamily: "var(--font-disp)",
                  fontWeight: 700,
                  lineHeight: 1,
                }}
              >
                ↗
              </span>
              <span
                style={{
                  fontFamily: "var(--font-disp)",
                  fontWeight: 600,
                  fontSize: "11px",
                  letterSpacing: "1.8px",
                  textTransform: "uppercase",
                  color: "var(--cyan)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "9px",
                  position: "relative",
                }}
              >
                <span
                  style={{
                    width: "22px",
                    height: "2px",
                    background: "var(--cyan)",
                    borderRadius: "2px",
                    display: "inline-block",
                  }}
                  aria-hidden="true"
                />
                Une plateforme transversale
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-disp)",
                  color: "#fff",
                  fontSize: "19px",
                  fontWeight: 600,
                  margin: "12px 0 6px",
                  position: "relative",
                  lineHeight: 1.3,
                }}
              >
                Un « Doctolib du remplacement », ouvert à plusieurs domaines
              </h3>
              <p
                style={{
                  color: "#B9CCE2",
                  margin: 0,
                  fontSize: "14px",
                  lineHeight: 1.6,
                  position: "relative",
                }}
              >
                RotaPro structure un besoin aujourd’hui informel (bouche-à-oreille, groupes de
                messagerie) en une plateforme dédiée, fiable et rapide, où la confiance et la
                qualification sont au cœur de chaque mise en relation.
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,160px),1fr))",
                  gap: "22px",
                  marginTop: "18px",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-disp)",
                      fontWeight: 700,
                      fontSize: "26px",
                      color: "#fff",
                      letterSpacing: "-.02em",
                    }}
                  >
                    1 000
                    <small style={{ color: "var(--cyan)", fontSize: "15px", fontWeight: 600 }}>
                      {" "}
                      actifs
                    </small>
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#9FB6CE",
                      marginTop: "3px",
                      lineHeight: 1.4,
                    }}
                  >
                    utilisateurs actifs visés en phase 1
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-disp)",
                      fontWeight: 700,
                      fontSize: "26px",
                      color: "#fff",
                      letterSpacing: "-.02em",
                    }}
                  >
                    2
                    <small style={{ color: "var(--cyan)", fontSize: "15px", fontWeight: 600 }}>
                      {" "}
                      rôles
                    </small>
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#9FB6CE",
                      marginTop: "3px",
                      lineHeight: 1.4,
                    }}
                  >
                    titulaire & remplaçant, rôles interchangeables
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-disp)",
                      fontWeight: 700,
                      fontSize: "26px",
                      color: "#fff",
                      letterSpacing: "-.02em",
                    }}
                  >
                    Multi
                    <small style={{ color: "var(--cyan)", fontSize: "15px", fontWeight: 600 }}>
                      {" "}
                      domaines
                    </small>
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#9FB6CE",
                      marginTop: "3px",
                      lineHeight: 1.4,
                    }}
                  >
                    santé, paramédical, restauration, commerce…
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 02 — OBJECTIFS */}
        <section
          id="s2"
          data-dc-section
          style={{ ...SECTION_DOTS, backgroundColor: "var(--band-a)" }}
        >
          <div style={CONTAINER}>
            <SectionHeader num="02 — OBJECTIFS" title="Objectifs" />
            <div style={GRID_AUTO}>
              <FeatureCard icon="1" iconBg="var(--cyan)" title="Publier en quelques secondes">
                Permettre à un professionnel de publier un besoin de remplacement en quelques
                secondes, en précisant domaine, dates et conditions.
              </FeatureCard>
              <FeatureCard icon="2" iconBg="var(--navy)" title="Trouver & accepter des missions">
                Permettre à un remplaçant de trouver et d’accepter des missions correspondant à
                son profil et à sa disponibilité.
              </FeatureCard>
              <FeatureCard icon="3" iconBg="var(--cyan)" title="Garantir la confiance">
                Sécuriser la mise en relation via la vérification des profils et un système
                d’évaluation mutuelle.
              </FeatureCard>
              <FeatureCard icon="4" iconBg="var(--navy)" title="Couvrir plusieurs domaines">
                Adresser plusieurs domaines professionnels (santé, restauration, commerce…)
                avec une logique de catégories.
              </FeatureCard>
            </div>
            <InfoCallout title="Objectif de déploiement">
              Atteindre une base de <Strong>1 000 utilisateurs actifs</Strong> sur la première phase
              de déploiement, en s’appuyant sur l’accompagnement marketing de Progix pour acquérir
              les premiers utilisateurs.
            </InfoCallout>
          </div>
        </section>

        {/* 03 — UTILISATEURS */}
        <section
          id="s3"
          data-dc-section
          style={{ ...SECTION_DOTS, backgroundColor: "var(--band-b)" }}
        >
          <div style={CONTAINER}>
            <SectionHeader
              num="03 — PUBLIC"
              title="Public cible"
              lead="RotaPro s’adresse à deux profils complémentaires : les professionnels titulaires qui cherchent à se faire remplacer (praticiens, gérants, indépendants), et les remplaçants qualifiés qui souhaitent accéder à des missions ponctuelles ou récurrentes. Un même utilisateur peut, selon les domaines, être titulaire et remplaçant."
            />
            <UserCard
              letter="A"
              letterBg="linear-gradient(150deg,var(--cyan-deep),var(--cyan))"
              title="Le professionnel titulaire"
              desc="Praticien, gérant ou indépendant qui cherche à se faire remplacer pour un congé, une absence ponctuelle ou des gardes rotatives."
              rows={[
                {
                  b: "Attentes :",
                  t: " trouver rapidement un remplaçant fiable et qualifié pour assurer la continuité de son activité.",
                },
                { b: "Support :", t: " application mobile (iOS + Android)." },
              ]}
              tags={[cy("Publie des missions"), gh("Multi-domaine")]}
            />
            <UserCard
              letter="B"
              letterBg="linear-gradient(150deg,var(--navy),var(--navy-700))"
              title="Le remplaçant qualifié"
              desc="Professionnel qui souhaite accéder à des missions de remplacement ponctuelles ou récurrentes, selon son profil et sa disponibilité."
              rows={[
                {
                  b: "Attentes :",
                  t: " trouver des missions correspondant à ses qualifications et à son calendrier, et être contacté en confiance.",
                },
                { b: "Support :", t: " application mobile (iOS + Android)." },
              ]}
              tags={[nv("Trouve des missions"), cy("Calendrier de disponibilité")]}
            />
          </div>
        </section>

        {/* 05 — PÉRIMÈTRE FONCTIONNEL */}
        <section
          id="s5"
          data-dc-section
          style={{ ...SECTION_DOTS, backgroundColor: "var(--band-b)" }}
        >
          <div style={CONTAINER}>
            <SectionHeader
              num="04 — FONCTIONNALITÉS"
              title="Fonctionnalités"
              lead="L’application s’articule autour de modules pensés pour fluidifier la mise en relation et instaurer la confiance entre les parties. L’ensemble ci-dessous constitue le périmètre de la première version (MVP)."
            />
            {modules.map((m) => (
              <div
                key={m.n}
                style={{
                  background: "linear-gradient(180deg,#fff,#EDF4FF)",
                  border: "1px solid #D6E3F1",
                  borderRadius: "14px",
                  margin: "16px 0",
                  boxShadow: "var(--shadow)",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "14px",
                    alignItems: "flex-start",
                    padding: "20px 22px 14px",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "11px",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      fontWeight: 600,
                      fontFamily: "var(--font-disp)",
                      fontSize: "15px",
                      boxShadow: "0 6px 14px rgba(12,35,64,.22)",
                      background: m.iconBg,
                    }}
                    aria-hidden="true"
                  >
                    {m.n}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h4
                      style={{
                        fontFamily: "var(--font-disp)",
                        fontSize: "16px",
                        color: "var(--navy)",
                        fontWeight: 600,
                        margin: "2px 0 3px",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        flexWrap: "wrap",
                      }}
                    >
                      {m.title}
                      {m.hasBadge ? (
                        <span
                          style={{
                            ...TAG_BASE,
                            background: "var(--tint)",
                            color: "var(--cyan-ink)",
                          }}
                        >
                          {m.badge}
                        </span>
                      ) : null}
                    </h4>
                    <div
                      style={{
                        fontSize: "13.5px",
                        color: "var(--slate)",
                        lineHeight: 1.55,
                      }}
                    >
                      {m.desc}
                    </div>
                  </div>
                </div>
                <div style={{ padding: "4px 22px 14px clamp(22px,4vw,76px)" }}>
                  {m.feats.map((f, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        gap: "10px",
                        padding: "6px 0",
                        fontSize: "13.6px",
                        color: "var(--slate)",
                        lineHeight: 1.5,
                      }}
                    >
                      <span
                        style={{
                          color: "var(--cyan-ink)",
                          flexShrink: 0,
                          fontWeight: 700,
                          fontSize: "12px",
                          marginTop: "3px",
                        }}
                        aria-hidden="true"
                      >
                        ✓
                      </span>
                      <span>
                        {f.b ? <Strong>{f.b}</Strong> : null}
                        {f.t}
                      </span>
                    </div>
                  ))}
                </div>
                <div
                  style={{
                    padding: "0 22px 18px clamp(22px,4vw,76px)",
                    display: "flex",
                    gap: "8px",
                    flexWrap: "wrap",
                  }}
                >
                  {m.tags.map((t) => (
                    <span
                      key={t.label}
                      style={{
                        ...TAG_BASE,
                        background: t.bg,
                        color: t.fg,
                        border: t.bd,
                      }}
                    >
                      {t.label}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 06 — PARCOURS */}
        <section
          id="s6"
          data-dc-section
          style={{ ...SECTION_DOTS, backgroundColor: "var(--band-a)" }}
        >
          <div style={CONTAINER}>
            <SectionHeader num="05 — PARCOURS" title="Parcours utilisateur type" />
            <JourneyHeading letter="▸">Le parcours, étape par étape</JourneyHeading>
            <JourneyRow
              steps={[
                {
                  n: "ÉTAPE 1",
                  t: "Inscription & vérification",
                  d: "L’utilisateur crée son profil, choisit son domaine et son rôle, et fait vérifier ses qualifications.",
                },
                {
                  n: "ÉTAPE 2",
                  t: "Publication ou recherche",
                  d: "Le titulaire publie un besoin ; le remplaçant consulte les missions correspondant à son profil.",
                },
                {
                  n: "ÉTAPE 3",
                  t: "Matching & candidature",
                  d: "Le remplaçant candidate à une mission ; le titulaire reçoit la candidature et la valide.",
                },
                {
                  n: "ÉTAPE 4",
                  t: "Confirmation & réalisation",
                  d: "La mission est confirmée, les parties communiquent, le remplacement est réalisé.",
                },
                {
                  n: "ÉTAPE 5",
                  t: "Évaluation",
                  d: "Titulaire et remplaçant s’évaluent mutuellement, renforçant la confiance sur la plateforme.",
                },
              ]}
            />
          </div>
        </section>

        {/* 06 — APPROCHE TECHNIQUE */}
        <section
          id="s7"
          data-dc-section
          style={{ ...SECTION_DOTS, backgroundColor: "var(--band-b)" }}
        >
          <div style={CONTAINER}>
            <SectionHeader
              num="06 — APPROCHE TECHNIQUE"
              title="Approche technique"
              lead="Progix sélectionne les technologies les plus adaptées au besoin, en privilégiant la performance, la rapidité de développement et la maintenabilité. Le choix final de la stack relève de l’expertise de Progix."
            />
            <div style={{ overflowX: "auto", margin: "16px 0" }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontSize: "13.6px",
                  border: "1px solid var(--line)",
                  borderRadius: "14px",
                  overflow: "hidden",
                  minWidth: "520px",
                }}
              >
                <thead>
                  <tr>
                    <th style={TH}>Composant</th>
                    <th style={TH}>Approche</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={TD_NB}>
                      <Strong>Application mobile</Strong>
                    </td>
                    <td style={TD_NB}>Développement cross-platform (iOS + Android).</td>
                  </tr>
                  <tr>
                    <td style={TD_NB_ALT}>
                      <Strong>Back-office</Strong>
                    </td>
                    <td style={TD_NB_ALT}>Panneau web d’administration et de gestion.</td>
                  </tr>
                  <tr>
                    <td style={TD_NB}>
                      <Strong>Matching</Strong>
                    </td>
                    <td style={TD_NB}>Moteur de recherche et de mise en relation optimisé.</td>
                  </tr>
                  <tr>
                    <td style={TD_NB_ALT}>
                      <Strong>Notifications</Strong>
                    </td>
                    <td style={TD_NB_ALT}>Notifications push temps réel.</td>
                  </tr>
                  <tr>
                    <td style={{ ...TD_NB, borderBottom: "none" }}>
                      <Strong>Hébergement</Strong>
                    </td>
                    <td style={{ ...TD_NB, borderBottom: "none" }}>
                      Infrastructure cloud scalable.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <InfoCallout title="Périmètre de la première version">
              Le présent cahier des charges définit le périmètre d’un <Strong>MVP solide et
              complet</Strong> couvrant le cœur de la mise en relation. Les fonctionnalités avancées
              (paiement en ligne intégré, modules sectoriels spécifiques, fonctionnalités
              additionnelles) pourront faire l’objet d’évolutions ultérieures, affinées
              conjointement au fil du projet et de la croissance de la base d’utilisateurs.
            </InfoCallout>
          </div>
        </section>

        {/* 09 — LIVRABLES */}
        <section
          id="s9"
          data-dc-section
          style={{ ...SECTION_DOTS, backgroundColor: "var(--band-b)" }}
        >
          <div style={CONTAINER}>
            <SectionHeader num="07 — LIVRABLES" title="Livrables & accompagnement" />
            <div
              style={{
                background: "linear-gradient(180deg,#fff,#EDF4FF)",
                border: "1px solid #D6E3F1",
                borderRadius: "14px",
                padding: "8px 24px",
                boxShadow: "var(--shadow)",
                margin: "14px 0",
              }}
            >
              {[
                {
                  n: "1",
                  t: "Application mobile iOS & Android",
                  d: "Publiée sur l’App Store et le Google Play Store, avec un design sur mesure.",
                },
                {
                  n: "2",
                  t: "Back-office d’administration",
                  d: "Interface web de pilotage : profils, vérification, domaines, utilisateurs, modération, tableau de bord.",
                },
                {
                  n: "3",
                  t: "Landing page",
                  d: "Page de présentation responsive, optimisée pour l’acquisition.",
                },
                {
                  n: "4",
                  t: "Support technique — 90 jours",
                  d: "Correction des bugs et ajustements mineurs pendant 90 jours suivant la livraison.",
                },
                {
                  n: "5",
                  t: "Documentation technique complète",
                  d: "Transfert de propriété progressif au fil des paiements ; documentation permettant la reprise par tout développeur.",
                },
                {
                  n: "6",
                  t: "Accompagnement marketing — 90 jours",
                  d: "Formation UGC + Meta/Apple Ads (scripts fournis) et suivi hebdomadaire des KPIs sur 90 jours.",
                },
              ].map((d, i, arr) => (
                <div
                  key={d.n}
                  style={{
                    display: "flex",
                    gap: "16px",
                    padding: "16px 0",
                    borderBottom: i < arr.length - 1 ? "1px solid var(--line)" : "none",
                  }}
                >
                  <div
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "10px",
                      background: "var(--tint)",
                      color: "var(--cyan-ink)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--font-disp)",
                      fontWeight: 700,
                      flexShrink: 0,
                    }}
                    aria-hidden="true"
                  >
                    {d.n}
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-disp)",
                        fontWeight: 600,
                        fontSize: "15px",
                        color: "var(--navy)",
                        marginBottom: "3px",
                      }}
                    >
                      {d.t}
                    </div>
                    <div
                      style={{
                        fontSize: "13.4px",
                        color: "var(--slate)",
                        lineHeight: 1.5,
                      }}
                    >
                      {d.d}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <InfoCallout title="Au-delà du développement">
              Progix accompagne le Client sur la commercialisation de RotaPro, de l’acquisition des
              premiers utilisateurs jusqu’à l’objectif de <Strong>1 000 utilisateurs actifs</Strong>,
              en mettant à profit ses process éprouvés sur de nombreuses applications mobiles.
            </InfoCallout>
          </div>
        </section>

        <Footer
          heading="Prêts à construire RotaPro"
          text="Ce cahier des charges fixe le périmètre de la première version (MVP) et sert de base au devis contractuel associé. Toute évolution du périmètre fera l’objet d’un accord écrit entre les parties."
        />
      </main>
      <ScrollReveal />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Section-03 user cards & Section-06 journey rows (local helpers).    */
/* ------------------------------------------------------------------ */

const TD: CSSProperties = {
  padding: "11px 15px",
  borderBottom: "1px solid var(--line)",
  verticalAlign: "top",
  color: "var(--slate)",
  lineHeight: 1.5,
};

const TD_ALT: CSSProperties = { ...TD, background: "var(--paper)" };

const TD_NB: CSSProperties = {
  padding: "11px 15px",
  borderBottom: "1px solid var(--line)",
  color: "var(--slate)",
  lineHeight: 1.5,
};

const TD_NB_ALT: CSSProperties = { ...TD_NB, background: "var(--paper)" };

type UserRow = { b: string; t?: string; node?: ReactNode };

function UserCard({
  letter,
  letterBg,
  title,
  desc,
  rows,
  tags,
}: {
  letter: string;
  letterBg: string;
  title: string;
  desc: string;
  rows: UserRow[];
  tags: Tag[];
}) {
  return (
    <div
      style={{
        background: "linear-gradient(180deg,#fff,#EDF4FF)",
        border: "1px solid #D6E3F1",
        borderRadius: "14px",
        margin: "16px 0",
        boxShadow: "var(--shadow)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "14px",
          alignItems: "flex-start",
          padding: "20px 22px 14px",
        }}
      >
        <div
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "11px",
            background: letterBg,
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            fontWeight: 600,
            fontFamily: "var(--font-disp)",
            fontSize: "15px",
            boxShadow: "0 6px 14px rgba(12,35,64,.22)",
          }}
          aria-hidden="true"
        >
          {letter}
        </div>
        <div style={{ flex: 1 }}>
          <h4
            style={{
              fontFamily: "var(--font-disp)",
              fontSize: "16px",
              color: "var(--navy)",
              fontWeight: 600,
              margin: "2px 0 3px",
            }}
          >
            {title}
          </h4>
          <div style={{ fontSize: "13.5px", color: "var(--slate)", lineHeight: 1.55 }}>{desc}</div>
        </div>
      </div>
      <div style={{ padding: "4px 22px 14px clamp(22px,4vw,76px)" }}>
        {rows.map((r, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              gap: "10px",
              padding: "6px 0",
              fontSize: "13.6px",
              color: "var(--slate)",
              lineHeight: 1.5,
            }}
          >
            <span
              style={{
                color: "var(--cyan-ink)",
                flexShrink: 0,
                fontWeight: 700,
                fontSize: "12px",
                marginTop: "3px",
              }}
              aria-hidden="true"
            >
              ▸
            </span>
            <span>
              {r.node ? (
                r.node
              ) : (
                <>
                  <Strong>{r.b}</Strong>
                  {r.t}
                </>
              )}
            </span>
          </div>
        ))}
      </div>
      <div
        style={{
          padding: "0 22px 18px clamp(22px,4vw,76px)",
          display: "flex",
          gap: "8px",
          flexWrap: "wrap",
        }}
      >
        {tags.map((t) => (
          <span key={t.label} style={{ ...TAG_BASE, background: t.bg, color: t.fg, border: t.bd }}>
            {t.label}
          </span>
        ))}
      </div>
    </div>
  );
}

function JourneyHeading({
  letter,
  children,
  marginTop = "14px",
}: {
  letter: string;
  children: ReactNode;
  marginTop?: string;
}) {
  return (
    <h3
      style={{
        fontFamily: "var(--font-disp)",
        fontSize: "18px",
        color: "var(--navy)",
        fontWeight: 600,
        margin: `${marginTop} 0 12px`,
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <span style={{ color: "var(--cyan)", fontSize: "13px", fontWeight: 700 }} aria-hidden="true">
        {letter}
      </span>
      {children}
    </h3>
  );
}

function JourneyRow({ steps }: { steps: ReadonlyArray<{ n: string; t: string; d: string }> }) {
  return (
    <div style={{ margin: "0 0 8px" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {steps.map((s) => (
          <div key={s.n} style={STEP_CARD}>
            <div style={STEP_EYEBROW}>{s.n}</div>
            <div style={STEP_TITLE}>{s.t}</div>
            <div style={STEP_DESC}>{s.d}</div>
          </div>
        ))}
      </div>
      <div style={STEP_RULE} aria-hidden="true" />
    </div>
  );
}
