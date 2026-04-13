/**
 * CONFIGURATION MODIFIABLE
 * Ce fichier contient toutes les valeurs des dropdowns et listes
 * qui peuvent être modifiées par les utilisateurs sans risque d'erreur.
 * 
 * Les valeurs NON MODIFIABLES restent dans le fichier HTML principal.
 */

const CONFIG_MODIFIABLE = {
  
  // ============================================
  // ÉLÉMENTS DE DROIT (EDR) - VALEURS MODIFIABLES
  // ============================================
  EDR: {
    // Régime d'inscription
    regime: [
      "Formation Initiale",
      "Formation Continue",
      "Apprentissage",
      "Aucune"
    ],
    
    // Profils spécifiques d'exonération
    profilsSpecifiques: [
      "Aucun",
      "Exonération sur critères Etablissement",
      "Exonération sur critères d'emploi",
      "Exonération sur critères sociaux",
      "Exonération sur critères de handicap",
      "B1-Etudiants en situation de handicap",
      "B2-Etudiants boursiers Etat",
      "B3-Etudiants exonérés (Réfugiés, Apatride, Protection Subsidiaire, etc.)",
      "B4-Etudiants extracomm (Réfugiés, Apatride, Protection Subsidiaire, etc.)"
    ],
    
    // Bourses et aides
    boursesAides: [
      "Aucune",
      "Boursier sur critères sociaux",
      "Boursier Etat",
      "Boursier Région",
      "Autre aide"
    ],
    
    // Césure
    cesure: [
      "Oui",
      "Non"
    ]
  },
  
  // ============================================
  // PIÈCES JUSTIFICATIVES (PJ) - VALEURS MODIFIABLES
  // ============================================
  PJ: {
    // Régime d'inscription
    // NOTE: Ces valeurs ne sont actuellement pas utilisées dans l'application
    // CONTEXTE_INSCRIPTION utilise des valeurs fixes
    REGIME_INSCRIPTION: [
      "PRIMO-ENTRANT",
      "REINSCRIPTION",
      "NEO BACHELIER"
    ],
    
    // Régime spécial d'étude
    REGIME_SPECIAL_ETUDE: [
      "AUCUN",
      "Sportif de Haut Niveau",
      "Etudiant Entrepreneur"
    ],
    
    // Situation militaire
    SITUATION_MILITAIRE: [
      "AUCUNE",
      "RECENSE",
      "SOUMIS"
    ],
    
    // PIA (Procédure Individuelle d'Admission)
    PIA: [
      "OUI",
      "NON"
    ],
    
    // Type de diplôme
    TYPE_DIPLOME: [
      "LICENCE",
      "MASTER",
      "DOCTORAT",
      "AUTRE"
    ],
    
    // Structure principale
    STRUCTURE_PRINCIPALE: [
      "UFR SCIENCES",
      "IUT",
      "ECOLE",
      "AUTRE"
    ]
  }
};

// ============================================
// VALEURS PAR DÉFAUT
// ============================================
const CONFIG_DEFAULTS = {
  EDR: {
    regime: CONFIG_MODIFIABLE.EDR.regime[0],
    profilsSpecifiques: CONFIG_MODIFIABLE.EDR.profilsSpecifiques[CONFIG_MODIFIABLE.EDR.profilsSpecifiques.length - 1],
    boursesAides: CONFIG_MODIFIABLE.EDR.boursesAides[0],
    cesure: CONFIG_MODIFIABLE.EDR.cesure[1]
  },
  
  PJ: {
    REGIME_INSCRIPTION: CONFIG_MODIFIABLE.PJ.REGIME_INSCRIPTION[0],
    REGIME_SPECIAL_ETUDE: CONFIG_MODIFIABLE.PJ.REGIME_SPECIAL_ETUDE[0],
    SITUATION_MILITAIRE: CONFIG_MODIFIABLE.PJ.SITUATION_MILITAIRE[0],
    PIA: CONFIG_MODIFIABLE.PJ.PIA[0],
    TYPE_DIPLOME: CONFIG_MODIFIABLE.PJ.TYPE_DIPLOME[0],
    STRUCTURE_PRINCIPALE: CONFIG_MODIFIABLE.PJ.STRUCTURE_PRINCIPALE[0]
  }
};
