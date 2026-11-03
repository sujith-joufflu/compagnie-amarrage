/* =====================================================================
   ✏️  CONTENU DU SITE — C'EST LE SEUL FICHIER À MODIFIER
   =====================================================================

   RÈGLES SIMPLES :
   1. Modifiez uniquement le texte placé entre les accents graves ` `
      Exemple :  titre: `Mon nouveau titre`,
   2. Ne supprimez pas les virgules en fin de ligne, ni les { } [ ].
   3. Apostrophes ' et guillemets " « » sont autorisés sans précaution.
   4. Pour passer à la ligne dans un paragraphe, laissez une ligne vide.
   5. Pour une image : déposez le fichier dans le dossier "images/"
      puis écrivez son nom, par ex.  image: `images/ma-photo.jpg`,
   6. Enregistrez, puis rechargez la page dans le navigateur pour vérifier.

   En cas de doute, consultez le fichier MODE-D-EMPLOI.md
   ===================================================================== */

const SITE = {

  /* ---------------------------------------------------------------
     INFORMATIONS GÉNÉRALES
     --------------------------------------------------------------- */
  nom: `Compagnie Amarrage`,
  slogan: `Création de spectacles vivants`,
  logo: `images/logo.jpg`,


  /* ---------------------------------------------------------------
     ACCUEIL (le grand bandeau en haut de page)
     --------------------------------------------------------------- */
  accueil: {
    accroche: `Théâtre, musique, danse, arts plastiques, littérature : des territoires poétiques où l'intime rejoint l'universel.`,
    bouton: `Découvrir nos spectacles`,
  },


  /* ---------------------------------------------------------------
     LA COMPAGNIE
     --------------------------------------------------------------- */
  compagnie: {
    titre: `La compagnie`,
    texte: `
Cette association a pour objet la recherche et la création théâtrale ainsi que la production et la diffusion de spectacles vivants, d'expositions et de performances à caractère artistique.

Son champ d'intérêt permet une interaction entre différents modes d'expression comme la musique, la danse, les arts plastiques, la littérature.

La compagnie a aussi pour but de promouvoir et de développer la pratique artistique par des actions de sensibilisation et de formation, de favoriser le développement de la vie culturelle au sein de la « Cité » et de renforcer ainsi le lien social.
    `,
  },


  /* ---------------------------------------------------------------
     SPECTACLES
     Pour ajouter un spectacle : copiez un bloc { ... }, (accolades
     comprises, avec la virgule finale) et collez-le juste en dessous.
     --------------------------------------------------------------- */
  spectacles: [
    {
      titre: `« À ma fille »`,
      sousTitre: `D'après les « Lettres à sa fille » de Calamity Jane`,
      genre: `Théâtre, musique, chant — théâtre contemporain`,
      public: `Tout public dès 12 ans`,
      duree: ``,   // ex : `1h10` — laisser vide pour ne pas afficher
      image: `images/affiche-a-ma-fille.jpg`,
      accroche: `Calamity Jane… Au-delà de la légende, la parole d'une femme où l'intime rejoint l'universel.`,
      description: `
Si Martha Jane Cannary, alias Calamity Jane, est une figure légendaire de l'Ouest américain, c'est avant tout une héroïne du quotidien, éprise de liberté ; une femme d'exception, assoiffée de vie et de justice, dans un monde où la seule loi en vigueur est celle du plus fort.

Au travers des lettres adressées à sa fille Janey, Calamity Jane se dévoile et nous livre un récit dont la portée universelle enjambe les époques. Un témoignage à la fois bouleversant et captivant !

La musique, très présente dans le spectacle, est partie intégrante du récit. C'est un partenaire, une seconde voix : la guitare d'Ugo Perez est créatrice de grands espaces comme de territoires intimes. Le travail entre le musicien et la comédienne a permis d'élaborer une partition musicale faite de compositions originales nées d'improvisations qui puisent dans une culture blues et populaire.
      `,
      distribution: [
        `Mise en scène : Bruno Ouzeau`,
        `Avec : Valérie Coué-Sibiril et Ugo Perez`,
        `Visuel : œuvre de Milos Sobaïc`,
      ],
      photos: [
        `images/valerie-coue-sibiril.jpg`,
        `images/galerie-1.jpg`,
        `images/galerie-2.jpg`,
      ],
      creditPhotos: `Photos : Anaïs Rotteleur`,
    },
  ],


  /* ---------------------------------------------------------------
     FORMATIONS – ATELIERS – RENCONTRES
     Laissez la liste "ateliers" vide [ ] pour afficher seulement
     le texte d'introduction.
     --------------------------------------------------------------- */
  ateliers: {
    titre: `Formations – Ateliers – Rencontres`,
    texte: `
La compagnie mène des actions de sensibilisation et de formation à la pratique artistique : ateliers, masterclass, lectures et rencontres avec les publics.

Vous souhaitez organiser un atelier dans votre structure (établissement scolaire, association, médiathèque…) ? Contactez-nous !
    `,
    ateliers: [
      // Exemple à copier et décommenter (retirer les // en début de ligne) :
      // { titre: `Les Lectures gustatives`, texte: `Une lecture à savourer…` },
    ],
  },


  /* ---------------------------------------------------------------
     AGENDA
     Format de la date : `AAAA-MM-JJ` (année-mois-jour).
     Le site range tout seul les dates "à venir" et "passées".
     --------------------------------------------------------------- */
  agenda: [
    {
      date: `2024-09-22`,
      heure: `15h00`,
      titre: `« À ma fille » — Journées du Matrimoine`,
      lieu: `Cité Audacieuse, 9 rue de Vaugirard, 75006 Paris`,
      info: `Entrée libre sur réservation`,
      lien: `https://www.helloasso.com/associations/hf-ile-de-france/evenements/jdm-2024-22-09-a-ma-fille`,
    },
  ],


  /* ---------------------------------------------------------------
     L'ÉQUIPE
     --------------------------------------------------------------- */
  equipe: [
    {
      nom: `Bruno Ouzeau`,
      role: `Comédien et metteur en scène`,
      photo: `images/bruno-ouzeau.jpg`,
      bio: `
Il a travaillé sous la direction, notamment, de Philippe Adrien, Dominique Pitoiset, Anne Sicco, Farid Paya, Carole Thibaut, Elisabeth Chailloux, Jean-Paul Tribout, Anthony Magnier. De 1997 à 2004, il participe au Théâtre Musical au Théâtre du Lierre comme comédien-chanteur et artiste associé. Il initie et dirige avec Valérie Coué-Sibiril les « Lectures gustatives ».

Il a dirigé ateliers et masterclass, et participé à des chantiers de recherche avec, entre autres, Michel Bernardy, Adel Hakim, Tapa Sudana, Jean-Marie Binoche, Jean-Yves Pénafiel.

Mises en scène : « Le récit de Clios » (adapté d'« Œdipe sur la route » d'Henry Bauchau), « Una voce poco fa, un chant de Maria Malibran » (Sandrine Willems), « La fille préférée » (d'après la nouvelle de Soledad Puertolas).
      `,
    },
    {
      nom: `Valérie Coué-Sibiril`,
      role: `Comédienne et chanteuse`,
      photo: `images/valerie-coue-sibiril.jpg`,
      bio: `
Formée au Cygnet Theater en Angleterre, elle a cherché à allier poésie, chant et danse — danse via laquelle elle est arrivée au théâtre. Elle a travaillé sous la direction, notamment, de Farid Paya, Philippe Adrien, Christina Castrillo, Carole Drouelle, Anna Andréotti, Benoît Lavigne, et en Angleterre avec Monica Shallis.

De 1997 à 2004, elle participe au Théâtre Musical au Théâtre du Lierre comme comédienne-chanteuse et artiste associée. Elle a fait partie du groupe vocal « Izegani ». Au cinéma, elle a tourné avec Claire Luton et Rob Knight.
      `,
    },
    {
      nom: `Ugo Perez`,
      role: `Guitariste, régisseur lumière`,
      photo: `images/ugo-perez.jpg`,
      bio: `
Il commence la guitare à 7 ans, se forme au Conservatoire de Montreuil puis au Conservatoire à Rayonnement Régional de Montpellier (diplôme de 3e cycle). Son champ musical va du classique au rock en passant par le blues, la bossa et le flamenco.

Également régisseur lumière et éclairagiste, il a travaillé notamment au Théâtre de la Ville, au Théâtre des Abbesses, au Théâtre des Bouffes du Nord, au Théâtre de l'Athénée, à la Maison de la Culture du Japon et au Théâtre des Amandiers.
      `,
    },
  ],


  /* ---------------------------------------------------------------
     PARTENAIRES (logo + lien). Liste vide [ ] = section masquée.
     --------------------------------------------------------------- */
  partenaires: [
    { nom: `HF Île-de-France`, logo: `images/logo-hf-idf.png`, lien: `https://www.hf-idf.org` },
  ],


  /* ---------------------------------------------------------------
     CONTACT
     Laisser vide `` pour ne pas afficher une ligne.
     --------------------------------------------------------------- */
  contact: {
    adresse: `98 boulevard Aristide Briand, 93100 Montreuil`,
    email: `cie.amarrage@gmail.com`,
    telephone: `06 87 16 00 69`,
    facebook: ``,
    instagram: ``,
  },


  /* ---------------------------------------------------------------
     BAS DE PAGE (mentions légales)
     --------------------------------------------------------------- */
  piedDePage: {
    mentions: `Association loi 1901`,   // ex : `Association loi 1901 — SIRET … — Licence PLATESV-…`
  },

};
