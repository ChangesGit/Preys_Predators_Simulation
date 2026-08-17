# Spécifications — Simulateur d’écosystème

## 1. Informations générales

- **Nom provisoire :** Simulateur d’écosystème
- **Type :** application web interactive
- **Statut :** spécifications initiales
- **Langue de l’interface :** français
- **Principe de réalisation :** le code applicatif est écrit à la main afin de comprendre et maîtriser chaque mécanisme du projet.

Ce document constitue la source de vérité fonctionnelle et technique du projet. Toute évolution importante du comportement, de l’interface ou de l’architecture doit y être reportée.

## 2. Vision du projet

L’application permet d’observer un écosystème simplifié composé d’herbe, de lapins et de renards. Les espèces interagissent selon des règles déterministes ou probabilistes : l’herbe repousse, les lapins la consomment et les renards chassent les lapins.

L’utilisateur peut lancer, mettre en pause, accélérer et réinitialiser la simulation. Il peut modifier les principaux paramètres afin d’observer leurs effets sur l’évolution des populations.

La simulation animée est le cœur de l’application. L’interface doit rester claire et ne pas devenir un tableau de bord surchargé.

## 3. Objectifs

### 3.1 Objectifs principaux

1. Concevoir un moteur de simulation compréhensible et indépendant de l’affichage.
2. Représenter visuellement l’écosystème dans un élément HTML `canvas`.
3. Modéliser l’énergie, le vieillissement, l’alimentation, la reproduction et la mortalité des animaux.
4. Afficher l’évolution des trois populations dans le temps.
5. Permettre la création et la relance de scénarios configurables.
6. Dans une seconde phase, sauvegarder les scénarios et les résultats grâce à une application PHP organisée selon le modèle MVC.

### 3.2 Objectifs pédagogiques

- Écrire le moteur de simulation en JavaScript sans framework frontal.
- Manipuler directement l’API Canvas.
- Comprendre la boucle de jeu, la séparation entre état et rendu, et les interactions entre entités.
- Concevoir à la main une architecture PHP MVC simple.
- Concevoir une API JSON, valider les données et accéder à une base de données avec PDO.
- Être capable d’expliquer chaque partie importante du code dans un portfolio ou lors d’un entretien.

## 4. Contraintes de réalisation « à la main »

Pour la première version :

- utiliser HTML, CSS et JavaScript natifs ;
- ne pas utiliser React, Vue, Angular ou un autre framework frontal ;
- dessiner les espèces, le terrain et le graphique avec Canvas ou des éléments HTML/CSS créés pour le projet ;
- ne pas utiliser de moteur de jeu ou de bibliothèque de simulation ;
- ne pas utiliser de bibliothèque graphique pour la première version du graphique ;
- écrire la boucle de simulation, les déplacements, la détection et les règles biologiques dans le projet ;
- utiliser PHP natif pour la partie serveur, sans framework MVC ;
- utiliser PDO et des requêtes préparées pour la base de données ;
- éviter les générateurs de code et les composants copiés sans compréhension.

Les API natives du navigateur, les fonctions standard de PHP, les outils de développement du navigateur et les outils de test sont autorisés. Une dépendance externe ne pourra être ajoutée que si elle répond à un besoin clairement documenté et ne remplace pas un mécanisme que le projet cherche précisément à apprendre.

## 5. Périmètre

### 5.1 Première version : simulation locale

La première version fonctionne entièrement dans le navigateur et comprend :

- un terrain en deux dimensions ;
- une grille logique d’herbe ;
- des lapins et des renards mobiles ;
- la consommation de l’herbe par les lapins ;
- la chasse des lapins par les renards ;
- l’énergie, l’âge, la reproduction et la mort ;
- les commandes lecture, pause, vitesse et réinitialisation ;
- un compteur de jours ;
- les compteurs de populations ;
- un graphique de l’évolution des populations ;
- un panneau de paramètres ;
- des scénarios prédéfinis utilisables localement.

### 5.2 Deuxième version : persistance PHP MVC

Une fois la simulation locale stable :

- enregistrer un scénario ;
- charger, modifier et supprimer un scénario ;
- enregistrer le résumé et l’historique d’une simulation ;
- consulter les résultats précédents ;
- comparer deux résultats ;
- stocker les données dans une base relationnelle.

### 5.3 Hors périmètre initial

- comptes utilisateurs et authentification ;
- interface d’administration ;
- météo détaillée ;
- plusieurs biomes ;
- génétique et mutations ;
- reproduction sexuée ;
- dizaines d’espèces ;
- animations complexes des membres ;
- application multijoueur ou temps réel en réseau ;
- modèle scientifique fidèle d’un écosystème réel.

## 6. Interface utilisateur

### 6.1 Écran principal

L’écran principal contient :

1. un grand Canvas représentant l’écosystème ;
2. les commandes toujours accessibles ;
3. un panneau présentant les paramètres et les populations actuelles ;
4. un graphique présentant l’évolution de l’herbe, des lapins et des renards ;
5. une légende permettant d’identifier chaque espèce ;
6. un compteur indiquant le jour ou le tour courant.

Le Canvas doit occuper la majeure partie de l’espace disponible sur un écran d’ordinateur. Sur un écran étroit, les panneaux peuvent être placés sous le Canvas.

### 6.2 Commandes

L’utilisateur peut :

- démarrer ou reprendre la simulation ;
- mettre la simulation en pause ;
- choisir une vitesse `×1`, `×2` ou `×4` ;
- réinitialiser la simulation avec les paramètres courants ;
- restaurer les paramètres par défaut ;
- sélectionner un scénario prédéfini ;
- modifier les paramètres avant une réinitialisation.

Une modification de paramètre qui ne peut pas être appliquée pendant l’exécution doit être signalée comme nécessitant une réinitialisation.

### 6.3 Sélection d’un animal

Lorsque l’utilisateur clique sur un animal, l’application affiche :

- son espèce ;
- son âge ;
- son énergie ;
- son nombre de descendants ;
- son état courant : se déplacer, chercher, fuir, manger ou chasser.

L’animal sélectionné est entouré d’une surbrillance. Sa fiche disparaît s’il meurt ou lorsque l’utilisateur clique sur une zone vide.

### 6.4 Représentation visuelle

Les éléments sont dessinés avec des formes vectorielles simples dans le Canvas :

- **herbe :** deux ou trois traits verts ; sa taille et sa teinte indiquent son niveau de croissance ;
- **lapin :** corps ovale, tête ronde et deux oreilles allongées ;
- **renard :** corps allongé, tête triangulaire et grande queue ;
- **sélection :** cercle ou halo autour de l’animal ;
- **terrain :** fond évoquant la terre, éventuellement complété par quelques obstacles ou zones d’eau.

Les renards et les lapins doivent se distinguer par leur silhouette, et pas uniquement par leur couleur, afin de préserver la lisibilité pour les personnes daltoniennes.

Les barres d’énergie de tous les animaux ne sont pas affichées en permanence.

## 7. Modèle de simulation

### 7.1 Représentation du monde

- Le monde possède une largeur et une hauteur logiques.
- L’herbe est stockée dans une grille, initialement prévue en `40 × 25` cellules.
- Chaque cellule possède un niveau d’herbe compris entre `0` et `100`.
- Les animaux utilisent des coordonnées libres `x` et `y`.
- Une structure spatiale simple peut répartir les animaux par zones pour accélérer la recherche de voisins.
- Les animaux ne peuvent pas sortir des limites du terrain ni traverser un obstacle infranchissable.

La première implémentation peut placer tous les éléments sur une grille. Des déplacements visuellement fluides peuvent ensuite être obtenus par interpolation, sans modifier les règles de la simulation.

### 7.2 Données communes aux animaux

Chaque animal possède au minimum :

- un identifiant unique ;
- une espèce ;
- une position `x`, `y` ;
- une direction ;
- un âge ;
- une énergie courante et une énergie maximale ;
- une vitesse ;
- un coût énergétique de déplacement ;
- un âge maximal ;
- un seuil énergétique de reproduction ;
- un délai minimal entre deux reproductions ;
- le nombre de descendants ;
- un état courant ;
- un indicateur vivant ou mort.

### 7.3 Comportement des lapins

Un lapin doit pouvoir :

- détecter l’herbe proche ;
- se diriger vers une cellule contenant de l’herbe lorsqu’il en a besoin ;
- manger l’herbe présente sous lui ou suffisamment proche ;
- récupérer de l’énergie en mangeant ;
- détecter un renard à proximité ;
- privilégier la fuite lorsqu’un renard est dangereux ;
- se déplacer de façon simple ou aléatoire en l’absence de besoin urgent ;
- se reproduire lorsque les conditions sont remplies ;
- mourir lorsqu’il n’a plus d’énergie ou atteint son âge maximal.

### 7.4 Comportement des renards

Un renard doit pouvoir :

- détecter les lapins dans son rayon de perception ;
- choisir une cible selon une règle simple et explicable, par exemple le lapin le plus proche ;
- poursuivre sa cible ;
- consommer un lapin lorsqu’il se trouve à portée ;
- récupérer de l’énergie après une capture ;
- errer lorsqu’aucune proie n’est détectée ;
- se reproduire lorsque les conditions sont remplies ;
- mourir lorsqu’il n’a plus d’énergie ou atteint son âge maximal.

### 7.5 Herbe

- L’herbe repousse à chaque tour jusqu’à un maximum de `100`.
- La vitesse de repousse est configurable.
- Un lapin réduit le niveau d’herbe de la cellule consommée.
- Le niveau est toujours borné entre `0` et `100`.
- L’apparence d’une touffe dépend du niveau de la cellule.

### 7.6 Reproduction

Une reproduction est possible uniquement lorsque :

- l’animal est vivant ;
- son énergie atteint le seuil requis ;
- son délai de reproduction est écoulé ;
- la population n’a pas atteint une éventuelle limite de sécurité.

La reproduction :

- crée un nouvel animal de la même espèce près du parent ;
- retire une quantité d’énergie au parent ;
- réinitialise son délai de reproduction ;
- incrémente son nombre de descendants.

La première version utilise une reproduction asexuée simplifiée. Cette simplification doit être expliquée dans la présentation du projet.

### 7.7 Mortalité

Un animal meurt si :

- son énergie devient inférieure ou égale à zéro ;
- son âge atteint son âge maximal ;
- il est consommé par un prédateur.

Les animaux morts sont retirés de la collection active à la fin du tour, et non pendant l’itération principale.

### 7.8 Ordre obligatoire d’un tour

Le moteur centralise l’ordre des opérations :

1. faire repousser l’herbe ;
2. faire analyser l’environnement par les animaux ;
3. calculer leurs intentions ;
4. déplacer les animaux ;
5. faire manger l’herbe aux lapins ;
6. résoudre les captures des lapins par les renards ;
7. appliquer les coûts énergétiques et le vieillissement ;
8. résoudre les reproductions ;
9. identifier et retirer les animaux morts ;
10. enregistrer les statistiques ;
11. incrémenter le temps de simulation.

Les intentions sont calculées avant leur application afin de limiter les résultats dépendant de l’ordre des animaux dans un tableau.

## 8. Temps, boucle et reproductibilité

- Le moteur utilise un pas de simulation fixe.
- Le rendu visuel est séparé de la mise à jour de l’état.
- La vitesse choisie modifie le nombre de tours simulés, pas les règles biologiques.
- Mettre en pause arrête l’évolution de l’état, mais l’interface reste utilisable.
- La réinitialisation reconstruit entièrement le monde à partir des paramètres courants.
- Chaque simulation reçoit une graine aléatoire (`seed`) enregistrable.
- Deux simulations lancées avec la même graine, les mêmes paramètres et la même version du moteur doivent produire les mêmes résultats.

La fonction générant les nombres pseudo-aléatoires doit être centralisée afin d’assurer cette reproductibilité.

## 9. Paramètres configurables

Les paramètres suivants doivent être regroupés dans un objet de configuration, sans nombres importants dispersés dans le code :

### Monde et temps

- dimensions du terrain ;
- dimensions de la grille d’herbe ;
- nombre de tours par jour ;
- graine aléatoire ;
- densité et position des obstacles.

### Herbe

- niveau initial minimal et maximal ;
- vitesse de repousse ;
- quantité consommée par un lapin ;
- énergie transmise par unité consommée.

### Lapins

- population initiale ;
- énergie initiale et maximale ;
- vitesse ;
- coût de déplacement ;
- rayon de perception de l’herbe ;
- rayon de perception des renards ;
- seuil et coût de reproduction ;
- délai entre deux reproductions ;
- âge maximal.

### Renards

- population initiale ;
- énergie initiale et maximale ;
- vitesse ;
- coût de déplacement ;
- rayon de perception des lapins ;
- portée de capture ;
- énergie obtenue par capture ;
- seuil et coût de reproduction ;
- délai entre deux reproductions ;
- âge maximal.

Les valeurs biologiques définitives sont à déterminer pendant la phase d’équilibrage. Les premières valeurs choisies doivent être documentées dans le code et centralisées dans la configuration par défaut.

## 10. Statistiques

À intervalles réguliers, l’application enregistre :

- le temps ou jour courant ;
- la quantité totale d’herbe ;
- le nombre de lapins vivants ;
- le nombre de renards vivants ;
- le nombre de naissances et de morts depuis le relevé précédent.

Le graphique affiche au minimum trois courbes : herbe, lapins et renards. Comme leurs échelles peuvent être très différentes, l’interface doit soit normaliser clairement les valeurs, soit employer des axes lisibles et explicitement légendés.

Un nombre maximal de points affichés peut être appliqué pour préserver les performances lors des longues simulations, sans supprimer les données nécessaires à une sauvegarde finale.

## 11. Scénarios prédéfinis

L’application propose au minimum :

1. **Équilibre :** les populations oscillent et coexistent pendant une durée raisonnable.
2. **Surpopulation de lapins :** l’herbe diminue fortement, puis la population de lapins décline.
3. **Trop de prédateurs :** les lapins disparaissent, puis les renards déclinent faute de nourriture.

Chaque scénario définit un nom, une description, une graine et l’ensemble de ses paramètres. L’équilibre parfait n’est pas exigé : le scénario doit surtout illustrer clairement une dynamique explicable.

## 12. Architecture JavaScript

### 12.1 Principe

L’état de la simulation ne doit jamais dépendre directement du Canvas. Le moteur modifie des données ; le système de rendu lit ces données et les dessine.

### 12.2 Classes principales

- `Simulation` : contrôle le temps et l’ordre des opérations d’un tour.
- `World` : contient les dimensions, la grille d’herbe et les obstacles.
- `Animal` : classe de base limitée aux données et comportements communs.
- `Rabbit` : comportement spécialisé du lapin.
- `Fox` : comportement spécialisé du renard.
- `Renderer` : dessine le monde sans modifier son état.
- `Statistics` : collecte et expose l’historique.
- `Controls` : relie les contrôles HTML au moteur.
- `RandomGenerator` : fournit les valeurs pseudo-aléatoires à partir de la graine.

L’héritage reste volontairement peu profond : `Animal` est uniquement étendue par `Rabbit` et `Fox`. Les paramètres, directions, intentions et points statistiques peuvent être de simples objets. Chaque cellule d’herbe est représentée par une valeur numérique, pas par une instance de classe.

### 12.3 Règles de code

- une classe possède une responsabilité principale ;
- le rendu ne modifie jamais l’état biologique ;
- le code de l’interface ne modifie pas directement les collections d’animaux ;
- les animaux produisent des intentions, que `Simulation` résout dans un ordre contrôlé ;
- les paramètres sont injectés ou transmis explicitement ;
- aucune variable globale modifiable ne contient l’état du monde ;
- les fonctions courtes et nommées sont préférées aux blocs difficiles à expliquer ;
- les noms du code sont en anglais et les textes visibles par l’utilisateur en français ;
- les commentaires expliquent une décision ou une règle, sans répéter simplement le code.

### 12.4 Organisation cible

```text
project/
├── index.html
├── SPECIFICATIONS.md
├── assets/
│   └── css/
│       ├── reset.css
│       └── app.css
├── src/
│   ├── app.js
│   ├── config/
│   │   ├── defaultSettings.js
│   │   └── scenarios.js
│   ├── simulation/
│   │   ├── Simulation.js
│   │   ├── World.js
│   │   ├── Animal.js
│   │   ├── Rabbit.js
│   │   ├── Fox.js
│   │   └── RandomGenerator.js
│   ├── rendering/
│   │   ├── Renderer.js
│   │   └── ChartRenderer.js
│   ├── statistics/
│   │   └── Statistics.js
│   └── ui/
│       └── Controls.js
└── tests/
    └── simulation/
```

Cette structure est une cible, pas une obligation dès le premier écran statique. Les dossiers sont introduits progressivement afin d’éviter une architecture vide ou prématurée.

## 13. Architecture PHP MVC

La partie PHP est ajoutée uniquement lorsque la simulation locale répond aux critères de la première version.

### 13.1 Responsabilités

- le JavaScript exécute la simulation ;
- PHP valide, sauvegarde, charge et compare les données ;
- PHP ne réimplémente pas les règles des lapins et des renards ;
- les échanges entre le navigateur et PHP utilisent JSON ;
- la base de données n’est jamais appelée directement depuis une vue.

### 13.2 Éléments principaux

- modèle `Scenario` ;
- modèle `SimulationResult` ;
- contrôleur `ScenarioController` ;
- contrôleur `SimulationResultController` ;
- services ou dépôts responsables de PDO ;
- vues de simulation, de gestion des scénarios et de comparaison ;
- routeur frontal minimal écrit pour le projet.

### 13.3 Données d’un scénario

- identifiant ;
- nom ;
- description ;
- paramètres JSON ;
- graine ;
- date de création ;
- date de modification.

### 13.4 Données d’un résultat

- identifiant ;
- scénario associé, si applicable ;
- version du moteur ;
- paramètres et graine réellement utilisés ;
- durée simulée ;
- cause de fin ;
- populations finales ;
- historique statistique ;
- date d’exécution.

### 13.5 API minimale envisagée

- `GET /api/scenarios` : lister les scénarios ;
- `GET /api/scenarios/{id}` : charger un scénario ;
- `POST /api/scenarios` : créer un scénario ;
- `PUT /api/scenarios/{id}` : modifier un scénario ;
- `DELETE /api/scenarios/{id}` : supprimer un scénario ;
- `GET /api/results` : lister les résultats ;
- `GET /api/results/{id}` : consulter un résultat ;
- `POST /api/results` : enregistrer un résultat.

Toutes les entrées sont validées côté serveur. Les erreurs utilisent un statut HTTP approprié et une réponse JSON homogène. Les requêtes SQL utilisent des paramètres préparés.

## 14. Performance et robustesse

- La simulation doit rester utilisable avec les populations prévues par les scénarios fournis.
- Les recherches de voisins ne doivent pas comparer systématiquement chaque animal avec tous les autres lorsque la population devient importante.
- Une limite configurable de population peut prévenir le blocage du navigateur.
- Une valeur invalide dans le panneau de paramètres doit être refusée avec un message compréhensible.
- Une erreur de rendu ne doit pas modifier silencieusement l’état de la simulation.
- La simulation doit s’arrêter proprement si toutes les espèces animales ont disparu ou lorsqu’une limite de durée configurée est atteinte.

Les objectifs chiffrés de performance seront définis après le premier prototype mesurable.

## 15. Accessibilité et adaptation aux écrans

- les commandes sont utilisables au clavier ;
- chaque contrôle de formulaire possède un libellé ;
- l’état lecture/pause n’est pas indiqué uniquement par une couleur ;
- les espèces se distinguent par leur forme ;
- les couleurs et textes possèdent un contraste suffisant ;
- le Canvas possède une description textuelle courte ;
- les compteurs fournissent une alternative textuelle aux informations principales du graphique ;
- l’interface reste utilisable sur ordinateur et tablette ;
- sur téléphone, la priorité reste l’observation et les commandes essentielles.

## 16. Tests

### 16.1 Tests du moteur

Les règles du moteur doivent pouvoir être testées sans créer de Canvas. Il faut notamment vérifier que :

- l’herbe ne dépasse jamais `100` et ne descend jamais sous `0` ;
- un animal perd la quantité d’énergie prévue ;
- manger restitue l’énergie prévue sans dépasser le maximum ;
- un animal sans énergie meurt ;
- un animal trop âgé meurt ;
- la reproduction respecte le seuil, le coût et le délai ;
- un lapin consommé ne peut pas être consommé une deuxième fois dans le même tour ;
- les animaux restent dans les limites du monde ;
- les collections ne sont pas modifiées pendant leur parcours principal ;
- une même graine et les mêmes paramètres produisent le même résultat.

### 16.2 Tests de l’interface

Vérifier manuellement ou automatiquement que :

- lecture, pause, changement de vitesse et réinitialisation fonctionnent ;
- les compteurs correspondent à l’état du moteur ;
- les paramètres invalides sont signalés ;
- la sélection et la désélection d’un animal fonctionnent ;
- le graphique évolue sans bloquer la simulation ;
- la mise en page reste utilisable aux largeurs d’écran ciblées.

### 16.3 Tests PHP ultérieurs

- validation des données reçues ;
- création, lecture, modification et suppression d’un scénario ;
- sauvegarde et relecture fidèle d’un résultat ;
- gestion d’un identifiant absent ;
- refus de JSON invalide ;
- vérification des requêtes préparées et des réponses d’erreur.

## 17. Étapes de réalisation et critères d’acceptation

### Étape 1 — Monde statique

- le terrain, l’herbe, dix lapins et deux ou trois renards sont visibles ;
- les éléments sont dessinés à la main dans le Canvas ;
- les positions initiales peuvent être générées à partir d’une graine.

### Étape 2 — Boucle temporelle

- lecture et pause fonctionnent ;
- les vitesses `×1`, `×2` et `×4` fonctionnent ;
- le compteur de temps progresse ;
- mise à jour et dessin sont séparés ;
- les animaux se déplacent sans sortir du terrain.

### Étape 3 — Herbe et lapins

- l’herbe repousse et peut être consommée ;
- les lapins cherchent de l’herbe, mangent et perdent de l’énergie ;
- les lapins meurent et se reproduisent selon les règles définies ;
- les règles principales possèdent des tests.

### Étape 4 — Renards

- les renards détectent, poursuivent et capturent les lapins ;
- les lapins peuvent fuir ;
- les conflits de capture au cours d’un même tour sont résolus sans incohérence.

### Étape 5 — Observation et équilibrage

- les compteurs et les trois courbes sont visibles ;
- les paramètres importants sont modifiables ;
- les valeurs par défaut peuvent être restaurées ;
- les trois scénarios prédéfinis illustrent des comportements différents ;
- une simulation prolongée ne bloque pas le navigateur dans les conditions normales.

### Étape 6 — PHP MVC

- les scénarios peuvent être créés, chargés, modifiés et supprimés ;
- un résultat peut être enregistré et consulté ;
- deux résultats peuvent être comparés ;
- les données reçues sont validées et les accès SQL sont sécurisés.

### Étape 7 — Finalisation

- l’interface est adaptée aux écrans ciblés et accessible ;
- le projet possède une documentation d’installation et d’utilisation ;
- les limites scientifiques du modèle sont expliquées ;
- aucune fonctionnalité hors périmètre n’empêche de présenter une version stable.

## 18. Définition de « terminé » pour la première version

La version locale est considérée comme terminée lorsque :

- l’utilisateur peut lancer une simulation herbe–lapins–renards sans serveur ;
- chaque population évolue selon des règles visibles et explicables ;
- la pause, les vitesses et la réinitialisation sont fiables ;
- les paramètres principaux peuvent être modifiés ;
- les populations et leur historique sont affichés ;
- les trois scénarios prédéfinis sont disponibles ;
- le moteur est indépendant du rendu ;
- les règles critiques sont testées ;
- aucune erreur bloquante connue ne survient pendant une utilisation normale ;
- l’ensemble du code important peut être expliqué par son auteur.

## 19. Questions restant à décider

Les décisions suivantes doivent être prises au moment indiqué, puis intégrées à ce document :

- dimensions exactes du Canvas et comportement lors du redimensionnement ;
- présence et règles exactes des obstacles ou zones d’eau ;
- unité de temps et nombre de tours correspondant à un jour ;
- formule de sélection d’une direction et gestion des égalités ;
- valeurs par défaut d’énergie, de vitesse, de perception, d’âge et de reproduction ;
- distance exacte permettant de manger ou de capturer ;
- règle utilisée si plusieurs renards ciblent le même lapin ;
- limite de population et limite de durée ;
- choix de la base de données pour la partie PHP ;
- format précis de comparaison de deux simulations ;
- stratégie de test sans dépendance ou avec un outil de test léger.

## 20. Principes à préserver pendant le développement

1. Faire fonctionner et tester une règle avant d’en ajouter une nouvelle.
2. Commencer par l’herbe et les lapins avant d’introduire les renards.
3. Garder la simulation indépendante du Canvas et de PHP.
4. Centraliser l’ordre des événements dans `Simulation`.
5. Centraliser les paramètres et les nombres aléatoires.
6. Favoriser un code simple, lisible et explicable plutôt qu’une abstraction prématurée.
7. Utiliser les classes lorsque l’objet possède un état et un comportement durables, notamment pour les animaux, le monde et le moteur.
8. Ne pas créer une classe pour chaque petite donnée : les cellules d’herbe restent des nombres et les paramètres de simples objets.
9. Stabiliser la simulation locale avant la base de données, les comptes ou les fonctions avancées.
10. Mettre ce document à jour lorsqu’une décision modifie le comportement attendu de l’application.
