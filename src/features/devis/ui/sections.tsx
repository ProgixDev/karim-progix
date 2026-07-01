import { cn } from "@/lib/utils";
import { BadgeHeading, InfoBox, Pill, SectionHeader, Strong, SubHeading } from "./primitives";
import { incl1, incl2, incl3, investment, payments, phases, trust } from "./content";
import styles from "./devis.module.css";

/** A styled reference to another (not-yet-implemented) document in the set. */
function DocRef({ children }: { children: React.ReactNode }) {
  return <span className={styles.link}>{children}</span>;
}

function CheckList({ items }: { items: ReadonlyArray<{ b: string; t: string }> }) {
  return (
    <div className={styles.checkGrid}>
      {items.map((i) => (
        <div key={i.b} className={styles.check}>
          <span className={styles.checkMark} aria-hidden="true">
            ✓
          </span>
          <span>
            <Strong>{i.b}</Strong>
            {i.t}
          </span>
        </div>
      ))}
    </div>
  );
}

/** Sections 01–08 of the devis (section 09, the signature block, is separate). */
export function BodySections() {
  return (
    <>
      {/* 01 — OBJET */}
      <section id="s1" data-dc-section className={cn(styles.section, styles.sectionA)}>
        <div className={styles.container}>
          <SectionHeader num="01 — OBJET" title="Objet du devis" />
          <p className={styles.pLead}>
            Le présent devis contractuel (le « Devis ») définit les modalités selon lesquelles{" "}
            <Strong>Progix Inc.</Strong> (le « Prestataire ») s’engage à concevoir, développer et
            livrer <Strong>RotaPro</Strong> (l’« Application »), une plateforme mobile de mise en
            relation pour le remplacement professionnel rotatif, pour le compte du client signataire
            (le « Client »).
          </p>
          <p className={styles.p}>
            Il précise les prestations incluses, l’investissement et son échéancier,
            l’accompagnement marketing, ainsi que les engagements respectifs des Parties. Le
            périmètre fonctionnel et technique détaillé fait l’objet du{" "}
            <DocRef>cahier des charges</DocRef> associé, qui complète le présent Devis. La signature
            du Devis vaut acceptation de l’ensemble de ses termes et engagement ferme.
          </p>
          <div className={styles.trust}>
            {trust.map((t) => (
              <div key={t.l} className={styles.trustCell}>
                <div className={styles.trustNum}>{t.n}</div>
                <div className={styles.trustLabel}>{t.l}</div>
              </div>
            ))}
          </div>
          <InfoBox icon="i" title="Un partenaire, pas un simple prestataire">
            Un freelance exécute une commande. Une ESN facture 15 000 à 20 000 €. Progix se situe
            entre les deux : l’expertise d’une équipe senior et un accompagnement business complet,
            au prix d’un lancement.
          </InfoBox>
        </div>
      </section>

      {/* 02 — PRESTATIONS */}
      <section id="s2" data-dc-section className={cn(styles.section, styles.sectionB)}>
        <div className={styles.container}>
          <SectionHeader
            num="02 — PRESTATIONS"
            title="Tout ce qui est inclus"
            lead="Une prestation complète, de la conception jusqu’à la mise en marché et au lancement commercial. Rien à gérer en plus."
          />
          <SubHeading first>Conception & développement</SubHeading>
          <CheckList items={incl1} />
          <SubHeading>Abonnement, hébergement & mise en ligne</SubHeading>
          <CheckList items={incl2} />
          <SubHeading>Lancement & accompagnement</SubHeading>
          <CheckList items={incl3} />
        </div>
      </section>

      {/* 03 — INVESTISSEMENT */}
      <section id="s3" data-dc-section className={cn(styles.section, styles.sectionA)}>
        <div className={styles.container}>
          <SectionHeader
            num="03 — INVESTISSEMENT"
            title="Votre investissement"
            lead="Décomposition transparente, poste par poste. Un forfait fixe, tout compris jusqu’à la mise en marché."
          />
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Composante de la prestation</th>
                  <th className={styles.thRight}>Montant</th>
                </tr>
              </thead>
              <tbody>
                {investment.map((row, idx) => (
                  <tr key={idx} className={row.alt ? styles.tableAlt : undefined}>
                    <td>
                      {"strong" in row && row.strong ? (
                        <>
                          <Strong>{row.strong}</Strong>
                          {row.text}
                        </>
                      ) : (
                        row.text
                      )}
                    </td>
                    <td
                      className={cn(
                        styles.tableNum,
                        "included" in row && row.included && styles.tableIncluded,
                      )}
                    >
                      {row.amount}
                    </td>
                  </tr>
                ))}
                <tr className={styles.tableTotal}>
                  <td>
                    <strong>Total — forfait, tout compris</strong>
                  </td>
                  <td className={styles.tableTotalAmount}>5 200 €</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={cn(styles.totalPanel, styles.lift)}>
            <div className={styles.totalPanelInner}>
              <span className={styles.totalArrow} aria-hidden="true">
                —
              </span>
              <div className={styles.totalEyebrow}>Montant total · forfait fixe</div>
              <div className={styles.totalValue}>5 200 €</div>
              <div className={styles.totalNote}>
                Prix ferme, tout compris jusqu’à la mise en marché. Aucun coût caché.
              </div>
            </div>
          </div>
          <InfoBox icon="€" title="Aucune taxe applicable">
            Progix étant une entreprise <Strong>canadienne</Strong> et le Client étant établi en{" "}
            <Strong>France</Strong>, la prestation n’est pas assujettie à la TVA ni à aucune taxe de
            vente (service transfrontalier — autoliquidation par le preneur le cas échéant).{" "}
            <Strong>Le montant de 5 200 € correspond au montant net à payer.</Strong>
          </InfoBox>
          <SubHeading>Échéancier de paiement</SubHeading>
          <div className={styles.grid3} style={{ margin: "6px 0 16px" }}>
            {payments.map((p) => (
              <div key={p.pct} className={cn(styles.payCard, styles.lift)}>
                <div className={styles.payPct}>{p.pct}</div>
                <div className={styles.payWhen}>{p.when}</div>
                <div className={styles.payDesc}>{p.desc}</div>
                <div className={styles.payAmount}>{p.amount}</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: "13px", color: "var(--slate)", margin: 0, lineHeight: 1.6 }}>
            Paiements par <Strong>Stripe</Strong> ou <Strong>virement bancaire</Strong>, en euros.
            Aucun travail de développement ne débute avant réception de l’acompte. La monétisation
            de l’Application repose sur un <Strong>système d’abonnement / in-app</Strong>, dont les
            modalités seront retenues avec le Client.
          </p>
        </div>
      </section>

      {/* 04 — ACCOMPAGNEMENT */}
      <section id="s4" data-dc-section className={cn(styles.section, styles.sectionB)}>
        <div className={styles.container}>
          <SectionHeader
            num="04 — ACCOMPAGNEMENT"
            title="Accompagnement marketing"
            lead="On ne vous laisse pas avec une application — on vous laisse avec un business qui acquiert ses premiers utilisateurs. Accompagnement inclus pendant 90 jours."
          />
          <div className={styles.grid2}>
            <div className={cn(styles.card, styles.lift)}>
              <h3 className={styles.cardTitle}>
                <span className={styles.cardNum} aria-hidden="true">
                  1
                </span>
                Formation complète (3 h)
              </h3>
              <p className={styles.cardText}>
                Créer des vidéos publicitaires (UGC) qui convertissent, lancer et optimiser des
                campagnes <Strong>Meta Ads</Strong> et <Strong>Apple Search Ads</Strong>.
              </p>
            </div>
            <div className={cn(styles.card, styles.lift)}>
              <h3 className={styles.cardTitle}>
                <span className={cn(styles.cardNum, styles.cardNumNavy)} aria-hidden="true">
                  2
                </span>
                Scripts publicitaires fournis
              </h3>
              <p className={styles.cardText}>
                Progix fournit les scripts des vidéos publicitaires (UGC), issus de son playbook
                interne.
              </p>
            </div>
            <div className={cn(styles.card, styles.lift)}>
              <h3 className={styles.cardTitle}>
                <span className={styles.cardNum} aria-hidden="true">
                  3
                </span>
                Suivi hebdomadaire
              </h3>
              <p className={styles.cardText}>
                Revue des KPIs, validation des actions réalisées et consignes concrètes pour la
                semaine suivante.
              </p>
            </div>
            <div className={cn(styles.card, styles.lift)}>
              <h3 className={styles.cardTitle}>
                <span className={cn(styles.cardNum, styles.cardNumNavy)} aria-hidden="true">
                  4
                </span>
                Optimisation & A/B testing
              </h3>
              <p className={styles.cardText}>
                Tests de paywalls et A/B testing pour optimiser le coût d’acquisition et le taux de
                conversion.
              </p>
            </div>
          </div>
          <p className={styles.note}>
            Le Client prévoit un <Strong>budget publicitaire minimum de 2 000 €</Strong> au
            lancement, réparti entre Meta Ads, Apple Search Ads et la production de vidéos UGC. Ce
            budget est distinct du montant du présent devis.
          </p>
        </div>
      </section>

      {/* 05 — APRÈS-LIVRAISON */}
      <section id="s5" data-dc-section className={cn(styles.section, styles.sectionA)}>
        <div className={styles.container}>
          <SectionHeader num="05 — APRÈS-LIVRAISON" title="Support, maintenance & propriété" />
          <InfoBox variant="ok" icon="★" title="Vous êtes propriétaire à 100 %">
            Le Client est propriétaire de l’intégralité de l’Application. La propriété
            intellectuelle est <Strong>transférée progressivement à mesure des paiements</Strong> :
            chaque jalon réglé transfère la portion correspondante des travaux. À la livraison
            finale, une documentation technique complète est remise — l’Application peut être
            reprise par tout développeur de votre choix. <Strong>Aucun verrouillage.</Strong>
          </InfoBox>
          <SubHeading>Support inclus — 90 jours</SubHeading>
          <ul className={styles.arrowList}>
            <li className={styles.arrowItem}>
              Correction des bugs et ajustements mineurs de workflow (hors nouvelles
              fonctionnalités).
            </li>
            <li className={styles.arrowItem}>
              Temps de réponse sous <Strong>24 heures</Strong> + point de suivi hebdomadaire.
            </li>
          </ul>
          <SubHeading>
            Au-delà des 90 jours <Pill>Optionnel</Pill>
          </SubHeading>
          <div className={styles.grid2}>
            <div className={cn(styles.card, styles.lift)}>
              <h3 className={styles.cardTitle}>
                <span className={cn(styles.cardNum, styles.cardNumNavy)} aria-hidden="true">
                  ♲
                </span>
                Maintenance mensuelle
              </h3>
              <p className={styles.cardText}>
                <Strong>90 € / mois</Strong> — support continu, correction de bugs et petites
                corrections, disponibilité étendue grâce à l’équipe sur plusieurs fuseaux horaires.
              </p>
            </div>
            <div className={cn(styles.card, styles.lift)}>
              <h3 className={styles.cardTitle}>
                <span className={styles.cardNum} aria-hidden="true">
                  +
                </span>
                Évolutions & nouvelles fonctionnalités
              </h3>
              <p className={styles.cardText}>
                <Strong>80 $ / heure</Strong> — pour toute évolution postérieure de l’Application
                (paiement en ligne intégré, modules sectoriels spécifiques, fonctionnalités
                additionnelles…).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 06 — DÉLAI */}
      <section id="s6" data-dc-section className={cn(styles.section, styles.sectionB)}>
        <div className={styles.container}>
          <SectionHeader
            num="06 — DÉLAI"
            title="Délai & démarche de réalisation"
            lead="Livraison sous 60 jours à compter de la date de démarrage (réception de l’acompte + réunion de cadrage). Réalisation itérative, avec validation du Client à chaque étape clé."
          />
          <div className={styles.grid3} style={{ margin: "16px 0" }}>
            {phases.map((p) => (
              <div key={p.tag} className={cn(styles.payCard, styles.lift)}>
                <div className={styles.payPct}>{p.tag}</div>
                <div className={styles.payWhen}>{p.title}</div>
                <div className={styles.phaseDesc}>{p.desc}</div>
              </div>
            ))}
          </div>
          <InfoBox icon="i" title="Recette, publication & calendrier détaillé">
            La phase finale (≈ J55 – J60) couvre les tests qualité, les corrections et la
            publication sur les stores. Le découpage précis en sprints fait l’objet d’un document
            dédié (<DocRef>« Calendrier des sprints »</DocRef>), aligné sur le présent échéancier de
            paiement.
          </InfoBox>
        </div>
      </section>

      {/* 07 — ENGAGEMENTS */}
      <section id="s7" data-dc-section className={cn(styles.section, styles.sectionA)}>
        <div className={styles.container}>
          <SectionHeader num="07 — ENGAGEMENTS" title="Engagements du Client & pénalités" />
          <BadgeHeading badge="A" first>
            Engagements du Client
          </BadgeHeading>
          <p className={styles.p}>
            Pour permettre la tenue du délai et la qualité de la livraison, le Client s’engage à :
          </p>
          <ul className={styles.arrowList}>
            <li className={styles.arrowItem}>
              Fournir en temps utile les <Strong>contenus, informations et validations</Strong>{" "}
              nécessaires à l’avancement.
            </li>
            <li className={styles.arrowItem}>
              Créer les comptes <Strong>Apple Developer</Strong> (99 $/an) et{" "}
              <Strong>Google Play Console</Strong> (25 $ une fois) et fournir les accès — Progix
              accompagne la création et publie pour le Client.
            </li>
            <li className={styles.arrowItem}>
              Créer un compte <Strong>Stripe</Strong> et fournir un accès développeur pour les
              paiements le cas échéant.
            </li>
            <li className={styles.arrowItem}>
              Prévoir le <Strong>budget publicitaire minimum</Strong> de 2 000 € pour le lancement.
            </li>
            <li className={styles.arrowItem}>
              Participer aux <Strong>points hebdomadaires</Strong> et appliquer les recommandations
              marketing.
            </li>
          </ul>
          <BadgeHeading badge="B">Pénalités de retard</BadgeHeading>
          <p className={styles.p}>
            En cas de retard de livraison imputable au Prestataire excédant{" "}
            <Strong>dix (10) jours</Strong> par rapport au délai convenu, une compensation
            financière progressive est appliquée sous forme de réduction du montant total,
            augmentant proportionnellement à la durée du retard. Les retards imputables au Client
            (absence de validation, de contenu ou d’accès) ne sont pas pris en compte dans ce
            calcul.
          </p>
        </div>
      </section>

      {/* 08 — DISPOSITIONS */}
      <section id="s8" data-dc-section className={cn(styles.section, styles.sectionB)}>
        <div className={styles.container}>
          <SectionHeader num="08 — DISPOSITIONS" title="Dispositions générales" />
          <BadgeHeading badge="1" first>
            Droit applicable & juridiction
          </BadgeHeading>
          <p className={styles.p}>
            Le présent Devis est régi par les lois de la province de Québec et les lois fédérales du
            Canada applicables. Tout litige est soumis à la compétence exclusive des tribunaux de la
            province de Québec, district de Montréal.
          </p>
          <BadgeHeading badge="2">Intégralité de l’entente</BadgeHeading>
          <p className={styles.p}>
            Le présent Devis, complété par le <DocRef>cahier des charges</DocRef> associé, constitue
            l’intégralité de l’entente entre les Parties relativement à son objet et remplace toute
            entente ou communication antérieure.
          </p>
          <BadgeHeading badge="3">Modifications</BadgeHeading>
          <p className={styles.p}>
            Toute modification du présent Devis ou du périmètre convenu doit faire l’objet d’un
            écrit signé par les deux Parties.
          </p>
          <BadgeHeading badge="4">Divisibilité</BadgeHeading>
          <p className={styles.p}>
            Si une disposition du présent Devis est jugée invalide ou inapplicable, les autres
            dispositions demeurent en vigueur et de plein effet.
          </p>
        </div>
      </section>
    </>
  );
}
