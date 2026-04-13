# Outils EDR / Tarifications / Pièces Justificatives - Pégase

Outil de paramétrage et de test des Éléments de Droit (EDR), Tarifications et Pièces Justificatives (PJ), conçu pour accompagner la migration vers **Pégase** à l'Université de Toulouse.

Fonctionne entièrement dans le navigateur, sans installation, sans serveur.

---

## Contenu du dépôt

```
├── outils-edr-pj-v4.html       # Application principale (ouvrir dans le navigateur)
├── config.js                   # Valeurs modifiables (dropdowns, listes)
├── Guide_Utilisation_Outils_EDR_PJ_v4.docx   # Guide complet d'utilisation
└── README.md
```

---

## Utilisation

1. Télécharger ou cloner le dépôt
2. Placer `outils-edr-pj-v4.html` et `config.js` dans le **même dossier**
3. Ouvrir `outils-edr-pj-v4.html` dans Firefox ou Chrome
4. Consulter le guide `.docx` pour la prise en main

> Le fichier `config.js` doit impérativement être dans le même dossier que le HTML, sinon les listes déroulantes ne se chargent pas.

---

## Fonctionnalités

### Module EDR / Tarifications
- Paramétrage des combinaisons de droits (régime, profil, bourse, césure)
- Test sur profil étudiant fictif avec affichage du résultat en temps réel
- Équivalent fonctionnel des paramétrages Pégase
- Export / Import des configurations en JSON
- Sauvegarde locale dans le navigateur (localStorage)

### Module Pièces Justificatives
- Définition des règles PJ par profil (contexte d'inscription, régime spécial, PIA, etc.)
- Test de correspondance par profil étudiant
- Export / Import des règles en JSON

---

## Personnalisation

Le fichier `config.js` contient toutes les valeurs modifiables sans risque :

- Listes de régimes d'inscription
- Profils spécifiques d'exonération
- Types de bourses et aides
- Critères PJ (régime spécial, situation militaire, type de diplôme, structure)

Modifier `config.js` suffit pour adapter l'outil à votre établissement, sans toucher au HTML.

---

## Données et confidentialité

- Toutes les données restent **locales dans le navigateur** (aucun serveur, aucune transmission)
- Export JSON pour partager des configurations entre collègues
- Pour réinitialiser : vider le localStorage du navigateur ou utiliser la fonction "Supprimer" dans l'outil

---

## Contexte

Développé dans le cadre de la migration Apogée vers Pégase, Université de Toulouse.  
Version actuelle : **v4**
