/* Remplit la page à partir de contenu.js — rien à modifier ici. */
(function () {
  if (typeof SITE === "undefined") {
    document.body.insertAdjacentHTML("afterbegin",
      '<div class="erreur">⚠️ Le fichier <b>contenu.js</b> contient une erreur de frappe ' +
      "(virgule, accent grave ` ou accolade manquante). Annulez la dernière modification puis réessayez.</div>");
    return;
  }

  const lire = (chemin) => chemin.split(".").reduce((o, k) => (o ? o[k] : undefined), SITE);
  const echapper = (t) => String(t ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  // Texte multi-lignes -> paragraphes (une ligne vide = nouveau paragraphe)
  const paragraphes = (t) => String(t ?? "").trim().split(/\n\s*\n/).filter(Boolean)
    .map((p) => `<p>${echapper(p.trim()).replace(/\n/g, "<br>")}</p>`).join("");
  const remplir = (id, html) => { const el = document.getElementById(id); if (el) el.innerHTML = html; };
  const masquer = (id) => { const el = document.getElementById(id); if (el) el.hidden = true; };

  // Champs simples
  document.querySelectorAll("[data-champ]").forEach((el) => { el.textContent = lire(el.dataset.champ) ?? ""; });
  document.querySelectorAll("[data-texte]").forEach((el) => { el.innerHTML = paragraphes(lire(el.dataset.texte)); });
  document.querySelectorAll("[data-image]").forEach((el) => { el.src = lire(el.dataset.image); el.alt = SITE.nom; });
  document.getElementById("annee").textContent = new Date().getFullYear();

  // Spectacles
  remplir("liste-spectacles", (SITE.spectacles || []).map((s) => `
    <article class="spectacle">
      ${s.image ? `<img class="spectacle__affiche" src="${echapper(s.image)}" alt="Affiche : ${echapper(s.titre)}" loading="lazy">` : ""}
      <div class="spectacle__corps">
        <h3>${echapper(s.titre)}</h3>
        ${s.sousTitre ? `<p class="spectacle__sous-titre">${echapper(s.sousTitre)}</p>` : ""}
        <ul class="etiquettes">
          ${[s.genre, s.public, s.duree].filter(Boolean).map((e) => `<li>${echapper(e)}</li>`).join("")}
        </ul>
        ${s.accroche ? `<blockquote>${echapper(s.accroche)}</blockquote>` : ""}
        <div class="texte">${paragraphes(s.description)}</div>
        ${(s.distribution || []).length ? `<ul class="distribution">${s.distribution.map((d) => `<li>${echapper(d)}</li>`).join("")}</ul>` : ""}
      </div>
      ${(s.photos || []).length ? `
        <div class="galerie">
          ${s.photos.map((p) => `<img src="${echapper(p)}" alt="Photo du spectacle ${echapper(s.titre)}" loading="lazy">`).join("")}
        </div>
        ${s.creditPhotos ? `<p class="credit">${echapper(s.creditPhotos)}</p>` : ""}` : ""}
    </article>`).join(""));

  // Ateliers
  remplir("liste-ateliers", (SITE.ateliers?.ateliers || []).map((a) => `
    <div class="carte"><h3>${echapper(a.titre)}</h3>${paragraphes(a.texte)}</div>`).join(""));

  // Agenda : tri automatique à venir / passé
  const aujourdHui = new Date().toISOString().slice(0, 10);
  const formatDate = (d) => new Date(d + "T12:00:00").toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
  const ligneAgenda = (e) => `
    <li class="evenement">
      <div class="evenement__date">${echapper(formatDate(e.date))}${e.heure ? ` · ${echapper(e.heure)}` : ""}</div>
      <div>
        <strong>${echapper(e.titre)}</strong>
        ${e.lieu ? `<div>${echapper(e.lieu)}</div>` : ""}
        ${e.info ? `<div class="evenement__info">${echapper(e.info)}</div>` : ""}
        ${e.lien && e.date >= aujourdHui ? `<a href="${echapper(e.lien)}" target="_blank" rel="noopener">Réserver / en savoir plus →</a>` : ""}
      </div>
    </li>`;
  const agenda = [...(SITE.agenda || [])].sort((a, b) => a.date.localeCompare(b.date));
  const aVenir = agenda.filter((e) => e.date >= aujourdHui);
  const passes = agenda.filter((e) => e.date < aujourdHui).reverse();
  remplir("liste-agenda", `
    <h3 class="agenda__titre">À venir</h3>
    ${aVenir.length ? `<ul class="agenda">${aVenir.map(ligneAgenda).join("")}</ul>`
                    : `<p class="agenda__vide">Prochaines dates bientôt annoncées. Pour programmer un spectacle, <a href="#contact">contactez-nous</a>.</p>`}
    ${passes.length ? `<details class="agenda__passes"><summary>Dates passées (${passes.length})</summary><ul class="agenda">${passes.map(ligneAgenda).join("")}</ul></details>` : ""}`);

  // Équipe
  remplir("liste-equipe", (SITE.equipe || []).map((m) => `
    <article class="membre">
      ${m.photo ? `<img src="${echapper(m.photo)}" alt="${echapper(m.nom)}" loading="lazy">` : ""}
      <h3>${echapper(m.nom)}</h3>
      <p class="membre__role">${echapper(m.role)}</p>
      <details><summary>Lire la biographie</summary><div class="texte">${paragraphes(m.bio)}</div></details>
    </article>`).join(""));

  // Partenaires
  const partenaires = SITE.partenaires || [];
  if (!partenaires.length) masquer("partenaires");
  remplir("liste-partenaires", partenaires.map((p) => {
    const contenu = p.logo ? `<img src="${echapper(p.logo)}" alt="${echapper(p.nom)}" loading="lazy">` : `<span>${echapper(p.nom)}</span>`;
    return p.lien ? `<a href="${echapper(p.lien)}" target="_blank" rel="noopener" title="${echapper(p.nom)}">${contenu}</a>` : `<div>${contenu}</div>`;
  }).join(""));

  // Contact
  const c = SITE.contact || {};
  remplir("infos-contact", [
    c.adresse && `<p><span class="contact__label">Adresse</span>${echapper(c.adresse)}</p>`,
    c.email && `<p><span class="contact__label">E-mail</span><a href="mailto:${echapper(c.email)}">${echapper(c.email)}</a></p>`,
    c.telephone && `<p><span class="contact__label">Téléphone</span><a href="tel:${echapper(c.telephone.replace(/\s/g, ""))}">${echapper(c.telephone)}</a></p>`,
    c.facebook && `<p><span class="contact__label">Facebook</span><a href="${echapper(c.facebook)}" target="_blank" rel="noopener">Notre page</a></p>`,
    c.instagram && `<p><span class="contact__label">Instagram</span><a href="${echapper(c.instagram)}" target="_blank" rel="noopener">Notre compte</a></p>`,
  ].filter(Boolean).join(""));

  // Menu mobile
  const bouton = document.querySelector(".menu-bouton");
  const menu = document.getElementById("menu");
  bouton.addEventListener("click", () => {
    const ouvert = menu.classList.toggle("menu--ouvert");
    bouton.setAttribute("aria-expanded", ouvert);
  });
  menu.addEventListener("click", (e) => {
    if (e.target.tagName === "A") { menu.classList.remove("menu--ouvert"); bouton.setAttribute("aria-expanded", false); }
  });
})();
