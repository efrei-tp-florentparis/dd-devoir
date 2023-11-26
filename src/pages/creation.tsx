import React from 'react';
import Image from 'next/image';

/* styles */
import styles from './creation.module.css';

/* Components */
import Text from '@/components/atoms/Text';
import Tableau from '@/components/templates/Tableau';
import Link from 'next/link';

export default function Creation() {
  return (
    <Tableau>
      <div className={styles.first_column}>
        <div className={styles.header}>
          <Text size="lg" weight="bold">
            Devoir - Développement Durable
          </Text>
          <Text weight="bold">Florent PARIS</Text>
        </div>

        <Text size="3xl" color="brown" weight="bold">
          COMMENT CE SITE EST-IL CONÇU ?
        </Text>

        <div className={styles.image_container}>
          <Image
            className={styles.image}
            src="/img/boy-tree.jpeg"
            alt="a boy against a tree with a laptop"
            width={540}
            height={1000}
          />
        </div>

        <Link href="/" className={styles.bottom_redirection}>
          <Image
            className={styles.redirect_icon}
            src="/icons/arrow_back.svg"
            alt="arrow back"
            width={80}
            height={80}
          />
          <Text
            style={{ maxWidth: '300px' }}
            size="2xl"
            color="dark-green"
            weight="regular"
          >
            Retour
          </Text>
        </Link>
      </div>
      <div className={styles.second_column}>
        <div className={styles.section_text}>
          <Text weight="semibold">1. Optimisation des ressources.</Text>
          <Text size="sm" color="green">
            Pour optimiser mon site web, j'ai mis en place une stratégie axée
            sur la sobriété numérique, en accordant une attention particulière à
            la compression intelligente des images et à l'optimisation du code.
            Grâce à l'utilisation d'outils de compression, j'ai réduit la taille
            des images tout en préservant leur qualité, améliorant ainsi la
            vitesse de chargement des pages et réduisant la consommation de
            bande passante. Parallèlement, j'ai minimisé, fusionné et compressé
            les fichiers CSS, JavaScript et HTML, allégeant ainsi la charge du
            serveur et créant une expérience utilisateur plus fluide. Cette
            approche globale vise à concilier performance digitale et
            responsabilité environnementale, contribuant ainsi à la sobriété
            numérique de mon site web.
          </Text>
        </div>
        <div className={styles.section_text}>
          <Text weight="semibold">2. Accessibilité.</Text>
          <Text size="sm" color="green">
            Mon site web a été conçu en mettant l'accessibilité au premier plan,
            garantissant une expérience inclusive pour tous les utilisateurs. En
            adhérant aux normes WCAG (Web Content Accessibility Guidelines),
            j'ai assuré que le site est accessible aux personnes ayant des
            besoins spécifiques. Des fonctionnalités telles que la navigation
            clavier, le contraste de couleurs adéquat et des descriptions
            d'images détaillées ont été intégrées pour faciliter l'accès aux
            contenus. De plus, une compatibilité multi-navigateurs a été
            rigoureusement testée, assurant une expérience cohérente quel que
            soit le navigateur ou l'appareil utilisé. Cette approche axée sur
            l'accessibilité vise à offrir une accessibilité universelle,
            alignant ainsi la conception de mon site avec les principes de
            conception inclusifs.
          </Text>
        </div>
        <div className={styles.section_text}>
          <Text weight="semibold">3. Analyse et optimisation.</Text>
          <Text size="sm" color="green">
            Mon engagement envers la performance et la durabilité
            environnementale se reflète dans la conception de mon site web, qui
            a fait l'objet d'une analyse approfondie et d'une optimisation
            continue. À travers l'utilisation d'outils d'analyse de performances
            tels que Google PageSpeed Insights, j'ai identifié et résolu les
            zones d'amélioration pour garantir une navigation rapide et
            efficace. En parallèle, une attention particulière a été portée à
            l'impact environnemental, en optimisant les ressources, en
            minimisant les requêtes serveur et en adoptant des pratiques
            éco-responsables. Cette approche résulte d'une démarche proactive
            visant à maintenir les plus hauts standards de performance tout en
            minimisant l'empreinte écologique de mon site web, en accord avec
            les impératifs de durabilité numérique.
          </Text>
        </div>
        <div className={styles.section_text}>
          <Text weight="semibold">4. Éco-conception.</Text>
          <Text size="sm" color="green">
            Mon site web incarne une approche d'éco-conception, mettant l'accent
            sur l'efficacité et la durabilité numérique. Pour minimiser
            l'empreinte écologique, j'ai choisi le framework léger Next.js,
            optimisé pour sa performance. En intégrant cette solution, non
            seulement j'ai pu bénéficier d'une architecture légère qui réduit la
            consommation de ressources, mais j'ai également participé à la
            réduction de l'impact environnemental global. Cette orientation
            éco-responsable s'inscrit dans une vision plus large de la
            conception web, conjuguant efficacité technique et engagement envers
            la préservation de notre environnement digital.
          </Text>
        </div>
      </div>
    </Tableau>
  );
}
