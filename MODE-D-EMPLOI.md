# Mode d'emploi : modifier le site de la Compagnie Amarrage

Tous les textes du site se trouvent dans **un seul fichier : `contenu.js`**.
Vous n'avez pas besoin de toucher aux autres fichiers.

## 1. Ouvrir le fichier

Ouvrez `contenu.js` avec un éditeur de texte simple :
- Windows : **Bloc-notes**, ou mieux, [Notepad++](https://notepad-plus-plus.org) (gratuit)
- Mac : **TextEdit**, en mode « texte brut » (menu Format → Convertir au format texte), ou [VS Code](https://code.visualstudio.com) (gratuit)

⚠️ N'utilisez pas Word ni LibreOffice Writer.

## 2. Modifier un texte

Le texte à modifier se trouve **entre deux accents graves** `` ` `` :

```js
slogan: `Création de spectacles vivants`,
```

Changez seulement ce qui se trouve entre les deux `` ` ``. Gardez la virgule à la fin de la ligne.

- Apostrophes `'`, guillemets `" « »` et accents peuvent être tapés normalement.
- **Une ligne vide** dans un texte crée un nouveau paragraphe.
- L'accent grave `` ` `` s'obtient avec `AltGr + 7` sur un PC, ou avec la touche à gauche de Entrée sur un Mac.

## 3. Ajouter une date à l'agenda

Dans la partie `agenda: [ ... ]`, copiez un bloc complet `{ ... },` et collez-le en dessous :

```js
{
  date: `2027-03-15`,          // année-mois-jour
  heure: `20h30`,
  titre: `« À ma fille »`,
  lieu: `Théâtre de …, Montreuil`,
  info: `Tarif : 12 € / 8 €`,
  lien: `https://…`,           // lien de réservation, ou laisser ``
},
```

Le site classe automatiquement les dates **à venir** et **passées**. Inutile de supprimer les anciennes dates.

## 4. Ajouter un spectacle, un membre de l'équipe ou un partenaire

Même méthode : copiez un bloc `{ ... },` existant, du `{` jusqu'au `},`, collez-le juste en dessous et changez les textes.

## 5. Changer ou ajouter une photo

1. Déposez la photo dans le dossier `images/`, sans espace ni accent dans le nom (par ex. `nouvelle-photo.jpg`).
2. Dans `contenu.js`, indiquez son nom : `` photo: `images/nouvelle-photo.jpg`, ``
3. Conseil : réduisez les photos à environ 1 500 pixels de large pour que le site reste rapide.

## 6. Vérifier

Double-cliquez sur `index.html` pour voir le site dans votre navigateur. Après chaque modification, enregistrez `contenu.js` puis rechargez la page (F5).

**Si un bandeau rouge « contenu.js contient une erreur » apparaît**, il manque sans doute une virgule, un `` ` `` ou une accolade. Annulez la dernière modification (Ctrl+Z), enregistrez, puis recommencez.

## 7. Mettre en ligne

Envoyez le dossier complet, mis à jour, chez votre hébergeur (OVH, o2switch, Netlify…), à la place de l'ancien dossier.
Avec **Netlify Drop** (gratuit, https://app.netlify.com/drop), il suffit de glisser-déposer le dossier dans la page.
