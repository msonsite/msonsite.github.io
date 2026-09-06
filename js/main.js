/* M&S Onsite portfolio interactions */

const projects = [
  {
    id: 1,
    title: "Vuurtoren Inspectie",
    location: "Breskens, Nederland",
    status: "Voltooid",
    categories: ["Inspecties"],
    description:
      "Een historische vuurtoren in Breskens die dringend geïnspecteerd moest worden, maar waar traditionele inspectiemethoden te gevaarlijk waren. Met onze drone vlogen we rondom de toren en legden elk detail vast. De restauratieplanners kregen een complete visuele documentatie die precies liet zien wat er aan de hand was, zonder dat iemand een voet op het dak hoefde te zetten.",
    tasks: [
      "Rondom de vuurtoren vliegen met hoge-resolutie camera's",
      "Elk structureel detail van dichtbij vastleggen",
      "Een complete 360° visuele documentatie samenstellen",
      "Rapportage opstellen die de restauratieplanners direct kunnen gebruiken",
    ],
    previewVideo: "videos/vuurtoren.mp4",
    images: [
      "images/project-1/vuurtorenfoto.jpg",
      "images/project-1/vuurtoreninspectie.jpg",
      "images/project-1/inspectieanalyse2.png",
      "images/project-1/inspectieanalyse1.png",
    ],
  },
  {
    id: 2,
    title: "Volumetrische Meting",
    location: "Houthulst, België",
    status: "Voltooid",
    categories: ["Opmetingen"],
    description:
      "Hoeveel zand ligt er nu eigenlijk op die hoop? In plaats van dagenlang met meetstokken rondlopen, vlogen we er even overheen. Binnen een paar uur had de klant een nauwkeurig 3D-model met exacte volumes. Transport kon direct gepland worden, zonder giswerk.",
    tasks: [
      "Over het materiaal vliegen en honderden foto's maken",
      "Die foto's verwerken tot een nauwkeurige 3D-puntenwolk",
      "Met software de exacte volumes berekenen",
      "Duidelijke rapportage met visualisaties opstellen",
    ],
    preview: "images/project-2/previewimageproject2.png",
    images: [
      "images/project-2/puntenwolk.png",
      "images/project-2/gradientkaart.png",
      "images/project-2/volumeberekeningen.jpg",
    ],
  },
  {
    id: 3,
    title: "As-Built Plan",
    location: "Hamme-Mille, België",
    status: "Voltooid",
    categories: ["Opmetingen"],
    description:
      "Na een bodemsanering lagen er overal sleuven en leidingen door elkaar. De vraag: waar ligt alles precies? We maakten een complete luchtfoto en tekenden alle leidingtracés in. Nu heeft de opdrachtgever een helder plan dat direct gebruikt kan worden voor verdere werkzaamheden of controle.",
    tasks: [
      "Het hele terrein vanuit de lucht fotograferen",
      "De foto's verwerken tot een gedetailleerde 3D-puntenwolk",
      "Alle leidingtracés digitaal intekenen op de luchtfoto",
      "Het plan exporteren naar DXF-formaat voor gebruik in CAD-software",
    ],
    preview: "images/project-3/orthofoto.jpg",
    images: [
      "images/project-3/orthofoto.jpg",
      "images/project-3/leidingtrace.jpg",
      "images/project-3/dxf-export.png",
    ],
  },
  {
    id: 4,
    title: "Bodemsanering",
    location: "Sint-Truiden, België",
    status: "Voltooid",
    categories: ["Werfopvolging"],
    description:
      "Tijdens een bodemsanering in Sint-Truiden volgden we het hele proces op. We begonnen met de beginsituatie, vlogen regelmatig over tijdens de werkzaamheden en eindigden met een complete as-built documentatie. Elke fase werd vastgelegd: hoeveel grond werd verplaatst, welke oppervlaktes werden behandeld, en hoe het terrein er uiteindelijk uitzag. De opdrachtgever had zo altijd een actueel beeld van de voortgang.",
    tasks: [
      "Vastleggen van de beginsituatie van het terrein",
      "Regelmatig overvliegen tijdens de saneringswerkzaamheden",
      "3D-modellen opbouwen van elke fase",
      "Berekenen hoeveel grond verplaatst werd en welke oppervlaktes behandeld werden",
      "Complete as-built documentatie van het eindresultaat",
      "Voortgangsrapportage zodat de opdrachtgever altijd op de hoogte was",
    ],
    preview: "images/project-4/previewimageproject4.png",
    images: [
      "images/project-4/beginsituatie-terrein.png",
      "images/project-4/drone-opmeting-uitvoering.png",
      "images/project-4/puntenwolk-terrein.png",
      "images/project-4/oppervlakteberekeningen.png",
      "images/project-4/volume-analyse.png",
      "images/project-4/eindresultaat.png",
      "images/project-4/asbuilt-plan.png",
    ],
  },
  {
    id: 5,
    title: "Monitoring Waterbeheersing",
    location: "Rijmenam, België",
    status: "Voltooid",
    categories: ["Monitoring"],
    description:
      "Drie maanden lang monitorden we overstromingsgebieden in Rijmenam. Elke paar weken vlogen we over het gebied en zagen we precies hoe het water zich terugtrok. Door de beelden naast elkaar te leggen, ontstond er een duidelijk beeld van de waterdynamiek. Die data hielp bij het nemen van beslissingen over waterbeheer en gebiedsherstel.",
    tasks: [
      "Elke paar weken over de overstromingsgebieden vliegen",
      "De opnames verwerken tot gedetailleerde orthofoto's en 3D-modellen",
      "Analyseren hoe het wateroppervlak veranderde en zich terugtrok",
      "Kaarten en modellen opstellen die helpen bij waterbeheerbeslissingen",
    ],
    preview: "images/project-5/waterbeheersingbanner.jpg",
    images: [
      "images/project-5/2024-02-29-origineel.jpg",
      "images/project-5/2024-02-29-opmeting.jpg",
      "images/project-5/2024-03-25-origineel.jpg",
      "images/project-5/2024-03-25-opmeting.jpg",
      "images/project-5/2024-04-22-origineel.jpg",
      "images/project-5/2024-04-22-opmeting.jpg",
    ],
  },
  {
    id: 6,
    title: "Dakinspectie",
    location: "Izegem, België",
    status: "Voltooid",
    categories: ["Inspecties"],
    description:
      "Een dak inspecteren zonder erop te moeten klimmen? We vlogen er overheen, maakten honderden foto's en stelden daar één scherpe orthofoto van samen. Onze software markeerde automatisch alle probleemzones: losse dakpannen, een beschadigd raam, zelfs nestvorming. De klant kreeg een duidelijk rapport met precies aangegeven wat er moet gebeuren, zonder dat iemand het dak op hoefde.",
    tasks: [
      "Over het dak vliegen en honderden foto's maken",
      "Die foto's samenvoegen tot één scherpe orthofoto van het hele dak",
      "Met 3D-software automatisch alle probleemzones markeren",
      "Een visueel rapport opstellen met duidelijke aanbevelingen",
    ],
    preview: "images/project-6/analysezone.png",
    images: [
      "images/project-6/analysezone.png",
      "images/project-6/observatiepunten.png",
      "images/project-6/detail-schouw.png",
      "images/project-6/identificatie-losse-dakpannen.png",
      "images/project-6/detail-nestvorming.png",
      "images/project-6/detail-raam.png",
    ],
  },
  {
    id: 7,
    title: "Stockdepot Meting",
    location: "Brugge, België",
    status: "Voltooid",
    categories: ["Opmetingen"],
    description:
      "Een zand- en grinddepot in Brugge dat regelmatig geïnventariseerd moet worden. In plaats van dagenlang meten, vliegen we er even overheen. Binnen een dag heeft de klant een nauwkeurig overzicht van alle stockvolumes, met duidelijke visualisaties. Zo kunnen ze hun voorraadbeheer en planning veel beter afstemmen.",
    tasks: [
      "Flexibel inplannen wanneer de opmeting het beste uitkomt",
      "Over het hele depot vliegen en alle stocks fotograferen",
      "Voor elke stock het exacte volume berekenen",
      "Een overzichtelijke rapportage opstellen met duidelijke visualisaties",
    ],
    preview: "images/project-7/header.png",
    images: [
      "images/project-7/drone-depot.png",
      "images/project-7/sateliet-volumes.png",
      "images/project-7/volume-rapport.png",
    ],
  },
  {
    id: 8,
    title: "Plaatsbeschrijving",
    location: "Kruibeke, België",
    status: "Voltooid",
    categories: ["Plaatsbeschrijving"],
    description:
      "Voor een plaatsbeschrijving in Kruibeke moest de volledige gevel gedocumenteerd worden. We vlogen systematisch langs de gevel en maakten een grid van hoge-resolutie foto's. Elke steen, elke scheur, elk detail werd vastgelegd in een complete visuele documentatie, perfect geschikt voor renovatieplanning. Na de werkzaamheden kunnen we opnieuw vliegen en direct vergelijken wat er veranderd is.",
    tasks: [
      "De drone positioneren en een systematisch grid instellen",
      "Langs de hele gevel vliegen en hoge-resolutie foto's maken volgens het grid",
      "Alle detailfoto's bundelen in een gestructureerde rapportage",
    ],
    preview: "images/project-8/project8header.png",
    images: [
      "images/project-8/foto1.jpg",
      "images/project-8/foto2.jpg",
      "images/project-8/foto3.jpg",
      "images/project-8/foto4.jpg",
      "images/project-8/foto5.jpg",
      "images/project-8/foto6.jpg",
      "images/project-8/foto7.jpg",
      "images/project-8/foto8.jpg",
      "images/project-8/foto9.jpg",
    ],
  },
  {
    id: 9,
    title: "Uw volgende project?",
    location: "België / Nederland",
    status: "Open",
    categories: [],
    description:
      "Heeft u een project waarbij drone-opnames, inspecties of opmetingen kunnen helpen? Wij denken graag mee over de beste aanpak voor uw situatie. Van eenmalige inspecties tot langdurige monitoring: we passen onze werkwijze aan op wat u nodig heeft.",
    tasks: [
      "Samen uw projectbehoefte bespreken",
      "De beste drone-aanpak voor uw situatie bepalen",
      "Flexibele planning die aansluit op uw werkzaamheden",
      "Duidelijke rapportage die u direct kunt gebruiken",
    ],
    preview: "images/assets/projectsectionbackground.png",
    images: ["images/branding/MsOnsite%20LogoSpacing.png"],
    cta: true,
  },
];

/* --------------------------------------------------------------------------
   DOM refs
   -------------------------------------------------------------------------- */

const header = document.getElementById("site-header");
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");
const projectsEmpty = document.getElementById("projects-empty");
const projectShowcase = document.getElementById("project-showcase");
const showcaseMedia = document.getElementById("showcase-media");
const showcaseCount = document.getElementById("showcase-count");
const showcaseMeta = document.getElementById("showcase-meta");
const showcaseTitle = document.getElementById("showcase-title");
const showcaseExcerpt = document.getElementById("showcase-excerpt");
const showcaseAction = document.getElementById("showcase-action");
const showcaseRail = document.getElementById("showcase-rail");
const showcasePrev = document.getElementById("showcase-prev");
const showcaseNext = document.getElementById("showcase-next");
const projectModal = document.getElementById("project-modal");
const certModal = document.getElementById("cert-modal");
const cookieBanner = document.getElementById("cookie-banner");

document.getElementById("year").textContent = new Date().getFullYear();

/* --------------------------------------------------------------------------
   Header scroll + mobile nav
   -------------------------------------------------------------------------- */

function updateHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 40);
}

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

let menuScrollY = 0;

function isMenuOpen() {
  return header.classList.contains("menu-open");
}

function openMenu() {
  menuScrollY = window.scrollY || window.pageYOffset || 0;
  header.classList.add("menu-open");
  document.body.classList.add("menu-open");
  document.body.style.top = `-${menuScrollY}px`;
  navToggle.setAttribute("aria-expanded", "true");
  navToggle.setAttribute("aria-label", "Menu sluiten");
}

function unlockMenu() {
  if (!isMenuOpen()) return false;
  header.classList.remove("menu-open");
  document.body.classList.remove("menu-open");
  document.body.style.top = "";
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", "Menu openen");
  return true;
}

function closeMenu() {
  if (!unlockMenu()) return;
  restoreScrollY(menuScrollY);
}

function restoreScrollY(y) {
  const html = document.documentElement;
  const previous = html.style.scrollBehavior;
  html.style.scrollBehavior = "auto";
  window.scrollTo(0, y);
  requestAnimationFrame(() => {
    window.scrollTo(0, y);
    html.style.scrollBehavior = previous;
  });
}

function scrollToSection(id) {
  const target =
    !id || id === "top"
      ? document.getElementById("top") || document.body
      : document.getElementById(id);
  if (!target) return;

  const html = document.documentElement;
  const previous = html.style.scrollBehavior;
  html.style.scrollBehavior = "auto";
  window.scrollTo(0, menuScrollY);
  html.style.scrollBehavior = previous;

  requestAnimationFrame(() => {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

navToggle.addEventListener("click", () => {
  if (isMenuOpen()) closeMenu();
  else openMenu();
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href") || "";
    if (!href.startsWith("#")) {
      closeMenu();
      return;
    }

    e.preventDefault();
    const id = href.slice(1);
    if (unlockMenu()) {
      scrollToSection(id);
    } else {
      const target =
        !id || id === "top"
          ? document.getElementById("top") || document.body
          : document.getElementById(id);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    history.pushState(null, "", href);
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && isMenuOpen()) {
    closeMenu();
    navToggle.focus();
  }
});

/* --------------------------------------------------------------------------
   Scroll reveal
   -------------------------------------------------------------------------- */

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
);

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

/* --------------------------------------------------------------------------
   Projects showcase
   -------------------------------------------------------------------------- */

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

let filteredProjects = [];
let activeIndex = 0;

function getFiltered(filter = "all") {
  return projects.filter((p) => {
    if (filter === "all") return true;
    if (p.cta) return true;
    return p.categories.includes(filter);
  });
}

function projectThumb(p) {
  if (p.cta) return null;
  if (p.preview) return p.preview;
  if (p.images && p.images.length) return p.images[0];
  return "images/assets/projectsectionbackground.png";
}

function renderRail() {
  showcaseRail.innerHTML = filteredProjects
    .map((p, i) => {
      if (p.cta) {
        return `
          <button type="button" class="rail-item is-cta${i === activeIndex ? " is-active" : ""}" data-index="${i}" role="option" aria-selected="${i === activeIndex}" aria-label="${escapeHtml(p.title)}">
            <div class="rail-item-media"><span>Start</span></div>
            <span class="rail-item-label">${escapeHtml(p.title)}</span>
          </button>
        `;
      }

      const thumb = projectThumb(p);
      return `
        <button type="button" class="rail-item${i === activeIndex ? " is-active" : ""}" data-index="${i}" role="option" aria-selected="${i === activeIndex}" aria-label="${escapeHtml(p.title)}">
          <div class="rail-item-media">
            <img src="${thumb}" alt="" loading="lazy" width="160" height="110" />
          </div>
          <span class="rail-item-label">${escapeHtml(p.title)}</span>
        </button>
      `;
    })
    .join("");

  showcaseRail.querySelectorAll(".rail-item").forEach((item) => {
    item.addEventListener("click", () => {
      selectProject(Number(item.dataset.index));
    });
  });

  const active = showcaseRail.querySelector(".rail-item.is-active");
  if (active) {
    const left = active.offsetLeft - (showcaseRail.clientWidth - active.clientWidth) / 2;
    showcaseRail.scrollTo({ left: Math.max(0, left), behavior: "smooth" });
  }
}

function updateShowcase() {
  const p = filteredProjects[activeIndex];
  if (!p) return;

  const total = filteredProjects.length;
  showcaseCount.textContent = `${String(activeIndex + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;

  showcasePrev.disabled = total <= 1;
  showcaseNext.disabled = total <= 1;

  const statusClass = p.cta || p.status === "Open" || p.status === "Onvoltooid" ? "open" : "";
  const statusLabel = p.cta ? "Open" : p.status;
  const cats = p.categories.length ? p.categories.join(" · ") : "Nieuwe opdracht";

  showcaseMeta.innerHTML = `
    <span class="project-status ${statusClass}">${escapeHtml(statusLabel)}</span>
    <span>${escapeHtml(p.location)}</span>
    <span>${escapeHtml(cats)}</span>
  `;
  showcaseTitle.textContent = p.title;

  const excerpt =
    p.description.length > 220 ? `${p.description.slice(0, 217)}…` : p.description;
  showcaseExcerpt.textContent = excerpt;

  showcaseAction.textContent = p.cta ? "Neem contact op" : "Bekijk details";

  showcaseMedia.classList.remove("is-fading");
  void showcaseMedia.offsetWidth;
  showcaseMedia.classList.add("is-fading");

  if (p.cta) {
    showcaseMedia.innerHTML = `<img src="images/assets/projectsectionbackground.png" alt="" />`;
  } else if (p.previewVideo) {
    showcaseMedia.innerHTML = `<video src="${p.previewVideo}" muted loop playsinline autoplay></video>`;
  } else {
    showcaseMedia.innerHTML = `<img src="${projectThumb(p)}" alt="${escapeHtml(p.title)}" />`;
  }

  renderRail();
}

function selectProject(index) {
  if (!filteredProjects.length) return;
  activeIndex = ((index % filteredProjects.length) + filteredProjects.length) % filteredProjects.length;
  updateShowcase();
}

function setFilter(filter) {
  filteredProjects = getFiltered(filter);
  const empty = !filteredProjects.some((p) => !p.cta) && filter !== "all";

  projectsEmpty.classList.toggle("is-visible", empty);
  projectShowcase.classList.toggle("is-hidden", empty);

  if (empty) return;

  activeIndex = 0;
  updateShowcase();
}

showcasePrev.addEventListener("click", () => selectProject(activeIndex - 1));
showcaseNext.addEventListener("click", () => selectProject(activeIndex + 1));

showcaseAction.addEventListener("click", () => {
  const p = filteredProjects[activeIndex];
  if (!p) return;
  if (p.cta) {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    return;
  }
  openProjectModal(p);
});

/* Swipe on media (mobile) */
let touchStartX = 0;
showcaseMedia.addEventListener(
  "touchstart",
  (e) => {
    touchStartX = e.changedTouches[0].screenX;
  },
  { passive: true }
);
showcaseMedia.addEventListener(
  "touchend",
  (e) => {
    const dx = e.changedTouches[0].screenX - touchStartX;
    if (Math.abs(dx) < 50) return;
    selectProject(dx < 0 ? activeIndex + 1 : activeIndex - 1);
  },
  { passive: true }
);

document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    setFilter(btn.dataset.filter);
  });
});

setFilter("all");

/* --------------------------------------------------------------------------
   Project modal
   -------------------------------------------------------------------------- */

let activeMediaIndex = 0;
let activeProject = null;
const modalGalleryPrev = document.getElementById("modal-gallery-prev");
const modalGalleryNext = document.getElementById("modal-gallery-next");
const modalGalleryCounter = document.getElementById("modal-gallery-counter");

function setGalleryMedia(project, index) {
  activeMediaIndex = index;
  const main = document.getElementById("modal-gallery-main");
  const total = project.images.length;
  const src = project.images[index];

  if (index === 0 && project.previewVideo) {
    main.innerHTML = `<video src="${project.previewVideo}" controls playsinline muted loop preload="metadata"></video>`;
  } else {
    main.innerHTML = `<img src="${src}" alt="${escapeHtml(project.title)}, beeld ${index + 1}" />`;
  }

  modalGalleryCounter.textContent = `${String(index + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;
  modalGalleryPrev.disabled = total <= 1;
  modalGalleryNext.disabled = total <= 1;

  document.querySelectorAll(".modal-thumb").forEach((thumb, i) => {
    thumb.classList.toggle("is-active", i === index);
  });

  const activeThumb = document.querySelector(".modal-thumb.is-active");
  if (activeThumb) {
    const thumbs = document.getElementById("modal-thumbs");
    const left = activeThumb.offsetLeft - (thumbs.clientWidth - activeThumb.clientWidth) / 2;
    thumbs.scrollTo({ left: Math.max(0, left), behavior: "smooth" });
  }
}

function openProjectModal(project) {
  activeProject = project;
  const meta = document.getElementById("modal-meta");
  const title = document.getElementById("modal-title");
  const desc = document.getElementById("modal-desc");
  const tasks = document.getElementById("modal-tasks");
  const thumbs = document.getElementById("modal-thumbs");

  const chips = [
    `<span class="modal-chip status">${escapeHtml(project.status)}</span>`,
    `<span class="modal-chip">${escapeHtml(project.location)}</span>`,
    ...project.categories.map((c) => `<span class="modal-chip">${escapeHtml(c)}</span>`),
  ];
  meta.innerHTML = chips.join("");

  title.textContent = project.title;
  desc.textContent = project.description;
  tasks.innerHTML = project.tasks.map((t) => `<li>${escapeHtml(t)}</li>`).join("");

  thumbs.innerHTML = project.images
    .map(
      (src, i) => `
      <button type="button" class="modal-thumb${i === 0 ? " is-active" : ""}" data-index="${i}" aria-label="Beeld ${i + 1}">
        <img src="${src}" alt="" loading="lazy" />
      </button>
    `
    )
    .join("");

  thumbs.querySelectorAll(".modal-thumb").forEach((thumb) => {
    thumb.addEventListener("click", () => {
      setGalleryMedia(project, Number(thumb.dataset.index));
    });
  });

  setGalleryMedia(project, 0);
  openModal(projectModal);
}

modalGalleryPrev.addEventListener("click", () => {
  if (!activeProject) return;
  const next = (activeMediaIndex - 1 + activeProject.images.length) % activeProject.images.length;
  setGalleryMedia(activeProject, next);
});

modalGalleryNext.addEventListener("click", () => {
  if (!activeProject) return;
  const next = (activeMediaIndex + 1) % activeProject.images.length;
  setGalleryMedia(activeProject, next);
});

/* Swipe through modal gallery on mobile */
let modalTouchStartX = 0;
const modalGalleryMain = document.getElementById("modal-gallery-main");
modalGalleryMain.addEventListener(
  "touchstart",
  (e) => {
    modalTouchStartX = e.changedTouches[0].screenX;
  },
  { passive: true }
);
modalGalleryMain.addEventListener(
  "touchend",
  (e) => {
    if (!activeProject || activeProject.images.length < 2) return;
    const dx = e.changedTouches[0].screenX - modalTouchStartX;
    if (Math.abs(dx) < 45) return;
    const next =
      dx < 0
        ? (activeMediaIndex + 1) % activeProject.images.length
        : (activeMediaIndex - 1 + activeProject.images.length) % activeProject.images.length;
    setGalleryMedia(activeProject, next);
  },
  { passive: true }
);

document.querySelectorAll(".modal-contact-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    closeModal(projectModal);
    setTimeout(() => {
      document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    }, 320);
  });
});

let modalScrollY = 0;
let modalTrigger = null;

function openModal(modal) {
  if (typeof closeMenu === "function") closeMenu();
  modalTrigger = document.activeElement instanceof HTMLElement ? document.activeElement : null;
  modalScrollY = window.scrollY || window.pageYOffset || 0;
  modal.hidden = false;
  requestAnimationFrame(() => modal.classList.add("is-open"));
  document.body.classList.add("modal-open");
  document.body.style.top = `-${modalScrollY}px`;
  const closeBtn = modal.querySelector(".modal-close");
  if (closeBtn instanceof HTMLElement) {
    closeBtn.focus({ preventScroll: true });
  }
}

function closeModal(modal) {
  const y = modalScrollY;
  const trigger = modalTrigger;
  modal.classList.remove("is-open");
  document.body.classList.remove("modal-open");
  document.body.style.top = "";
  restoreScrollY(y);
  if (trigger && document.contains(trigger)) {
    trigger.focus({ preventScroll: true });
  }
  modalTrigger = null;
  setTimeout(() => {
    modal.hidden = true;
    const video = modal.querySelector("video");
    if (video) {
      video.pause();
      video.removeAttribute("src");
      video.load();
    }
  }, 300);
}

document.querySelectorAll("[data-close-modal]").forEach((el) => {
  el.addEventListener("click", () => {
    const modal = el.closest(".modal");
    if (modal) closeModal(modal);
  });
});

document.addEventListener("keydown", (e) => {
  if (projectModal.classList.contains("is-open") && activeProject) {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      const next = (activeMediaIndex - 1 + activeProject.images.length) % activeProject.images.length;
      setGalleryMedia(activeProject, next);
      return;
    }
    if (e.key === "ArrowRight") {
      e.preventDefault();
      const next = (activeMediaIndex + 1) % activeProject.images.length;
      setGalleryMedia(activeProject, next);
      return;
    }
  }

  if (e.key === "Escape") {
    if (projectModal.classList.contains("is-open")) closeModal(projectModal);
    if (certModal.classList.contains("is-open")) closeModal(certModal);
  }
});

document.getElementById("open-cert").addEventListener("click", () => {
  openModal(certModal);
});

/* --------------------------------------------------------------------------
   Cookie consent
   -------------------------------------------------------------------------- */

const COOKIE_KEY = "ms_onsite_cookie_consent";

function showCookieBanner() {
  cookieBanner.hidden = false;
  requestAnimationFrame(() => cookieBanner.classList.add("is-visible"));
}

function hideCookieBanner(value) {
  localStorage.setItem(COOKIE_KEY, value);
  cookieBanner.classList.remove("is-visible");
  setTimeout(() => {
    cookieBanner.hidden = true;
  }, 400);
}

if (!localStorage.getItem(COOKIE_KEY)) {
  setTimeout(showCookieBanner, 800);
}

document.getElementById("cookie-accept").addEventListener("click", () => {
  hideCookieBanner("accepted");
});

document.getElementById("cookie-reject").addEventListener("click", () => {
  hideCookieBanner("rejected");
});

/* --------------------------------------------------------------------------
   Before / after compare slider
   -------------------------------------------------------------------------- */

const comparePairs = {
  water: {
    before: "images/project-5/2024-02-29-origineel.jpg",
    after: "images/project-5/2024-04-22-origineel.jpg",
    beforeLabel: "Februari",
    afterLabel: "April",
    caption:
      "Monitoring waterbeheersing in Rijmenam: dezelfde locatie in februari en april. Zo ziet u hoe het water zich terugtrekt.",
  },
  sanering: {
    before: "images/project-4/beginsituatie-terrein.png",
    after: "images/project-4/eindresultaat.png",
    beforeLabel: "Begin",
    afterLabel: "Eind",
    caption:
      "Bodemsanering in Sint-Truiden: van beginsituatie tot eindresultaat. Duidelijke voortgang vanaf dezelfde hoogte.",
  },
  analyse: {
    before: "images/project-5/2024-02-29-origineel.jpg",
    after: "images/project-5/2024-02-29-opmeting.jpg",
    beforeLabel: "Luchtbeeld",
    afterLabel: "Analyse",
    caption:
      "Van luchtbeeld naar bruikbare analyse: het overstromingsgebied wordt afgebakend op dezelfde opname.",
  },
};

const baSlider = document.getElementById("ba-slider");
const baBefore = document.getElementById("ba-before");
const baAfter = document.getElementById("ba-after");
const baHandle = document.getElementById("ba-handle");
const baLabelBefore = document.getElementById("ba-label-before");
const baLabelAfter = document.getElementById("ba-label-after");
const compareCaption = document.getElementById("compare-caption");

function setBaPosition(pct) {
  if (!baBefore || !baHandle) return;
  const clamped = Math.min(Math.max(pct, 0), 100);
  baBefore.style.clipPath = `inset(0 ${100 - clamped}% 0 0)`;
  baHandle.style.left = `${clamped}%`;
}

function loadComparePair(key) {
  const pair = comparePairs[key];
  if (!pair || !baBefore || !baAfter) return;

  const beforeImg = baBefore.querySelector("img");
  const afterImg = baAfter.querySelector("img");
  if (beforeImg) beforeImg.src = pair.before;
  if (afterImg) afterImg.src = pair.after;

  if (baLabelBefore) baLabelBefore.textContent = pair.beforeLabel;
  if (baLabelAfter) baLabelAfter.textContent = pair.afterLabel;
  if (compareCaption) compareCaption.textContent = pair.caption;

  setBaPosition(50);
}

if (baSlider) {
  setBaPosition(50);

  let dragging = false;

  function pctFromEvent(e) {
    const rect = baSlider.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    return ((clientX - rect.left) / rect.width) * 100;
  }

  baSlider.addEventListener("mousedown", (e) => {
    dragging = true;
    setBaPosition(pctFromEvent(e));
  });

  window.addEventListener("mousemove", (e) => {
    if (dragging) setBaPosition(pctFromEvent(e));
  });

  window.addEventListener("mouseup", () => {
    dragging = false;
  });

  baSlider.addEventListener(
    "touchstart",
    (e) => {
      dragging = true;
      setBaPosition(pctFromEvent(e));
    },
    { passive: true }
  );

  baSlider.addEventListener(
    "touchmove",
    (e) => {
      if (!dragging) return;
      e.preventDefault();
      setBaPosition(pctFromEvent(e));
    },
    { passive: false }
  );

  window.addEventListener("touchend", () => {
    dragging = false;
  });

  baSlider.addEventListener("keydown", (e) => {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    e.preventDefault();
    const current = parseFloat(baHandle.style.left) || 50;
    setBaPosition(current + (e.key === "ArrowRight" ? 4 : -4));
  });

  baSlider.tabIndex = 0;
}

document.querySelectorAll(".compare-tab").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".compare-tab").forEach((tab) => {
      tab.classList.remove("is-active");
      tab.setAttribute("aria-selected", "false");
    });
    btn.classList.add("is-active");
    btn.setAttribute("aria-selected", "true");
    loadComparePair(btn.dataset.compare);
  });
});
