/**
 * Projects Data for M&S Onsite Website
 * 
 * This file contains all project information displayed on the website.
 * To add a new project, simply add a new object to the projects array below.
 * 
 * Project Structure:
 * - id: Unique identifier (number)
 * - title: Project title
 * - location: Project location
 * - flag: Country flag emoji
 * - description: Detailed project description
 * - tasks: Array of completed tasks
 * - images: Array of image objects with src, alt, and caption
 * - previewVideo: (optional) Video path for preview
 * - previewImage: (optional) Custom preview image path
 * - previewImageIndex: Index of image to use as preview (if no previewVideo/previewImage)
 * - categories: Array of categories (e.g., ["Inspecties", "Opmetingen"])
 *   - Single category projects: ["Inspecties"]
 *   - Multiple category projects: ["Inspecties", "Opmetingen", "Monitoring"]
 * - status: Project status (e.g., "Voltooid", "In uitvoering")
 */

const projects = [
  {
    id: 1,
    title: "Vuurtoren Inspectie",
    location: "Breskens, Nederland",
    flag: "🇳🇱",
    description: "Gedetailleerde inspectie van een historische vuurtoren met drone-technologie. Hoge-resolutie beelden en diepgaande analyse onthulden structurele details en onderhoudsbehoeften zonder risico voor inspecteurs. Het resultaat: een complete visuele documentatie voor restauratieplanning en onderhoud.",
    tasks: [
      "Hoge-resolutie drone-inspectie",
      "Structurele detailopnames",
      "360° visuele documentatie",
      "Restauratieplanning rapportage"
    ],
    images: [
      { src: "images/project-1/vuurtorenfoto.jpg", alt: "Vuurtoren overzicht", caption: "Vuurtoren overzicht" },
      { src: "images/project-1/vuurtoreninspectie.jpg", alt: "Inspectie detail", caption: "Inspectie detail" },
      { src: "images/project-1/inspectieanalyse2.png", alt: "Analyse resultaat 1", caption: "Close-up inspectie" },
      { src: "images/project-1/inspectieanalyse1.png", alt: "Analyse resultaat 2", caption: "Close-up inspectie details" }
    ],
    previewVideo: "videos/vuurtoren.mp4",
    previewImageIndex: 0,
    categories: ["Inspecties"],
    status: "Voltooid"
  },
  {
    id: 2,
    title: "Volumetrische Meting",
    location: "Houthulst, België",
    flag: "🇧🇪",
    description: "Met onze drones brengen we snel en nauwkeurig het volume van zand, grind, aarde en andere materialen in kaart. Zo krijgt u overzicht in hoeveel materiaal aanwezig is of verplaatst moet worden, zodat het transport vlot en efficiënt kan worden gepland.",
    tasks: [
      "Drone-opmeting met fotogrammetrie",
      "3D-puntenwolk generatie",
      "Volumeberekening software analyse",
      "Rapportage en visualisatie"
    ],
    images: [
      { src: "images/project-2/puntenwolk.png", alt: "Puntenwolk", caption: "3D Puntenwolk" },
      { src: "images/project-2/gradientkaart.png", alt: "Gradiëntkaart", caption: "Gradiëntkaart" },
      { src: "images/project-2/volumeberekeningen.jpg", alt: "Volumeberekeningen", caption: "Volumeberekeningen" }
    ],
    previewImage: "images/project-2/previewimageproject2.png",
    categories: ["Opmetingen"],
    status: "Voltooid"
  },
  {
    id: 3,
    title: "As-Built Plan",
    location: "Hamme-Mille, België",
    flag: "🇧🇪",
    description: "Voor een bodemsaneringsproject hebben we met drones een volledig overzicht gemaakt van alle sleuven en leidingtracés. Het resultaat is een helder en betrouwbaar plan dat eenvoudig gebruikt kan worden voor verdere bewerkingen of controle op de werf.",
    tasks: [
      "Drone-fotogrammetrie uitvoering",
      "3D-puntenwolk verwerking",
      "Leidingtracé digitalisatie",
      "DXF-export voor CAD-software"
    ],
    images: [
      { src: "images/project-3/orthofoto.jpg", alt: "As-built", caption: "Orthofoto" },
      { src: "images/project-3/leidingtrace.jpg", alt: "Leidingtracé", caption: "As-built Leidingtracé" },
      { src: "images/project-3/dxf-export.png", alt: "DXF-export", caption: "DXF-export" }
    ],
    previewImageIndex: 2,
    categories: ["Opmetingen"],
    status: "Voltooid"
  },
  {
    id: 4,
    title: "Bodemsanering",
    location: "Sint-Truiden, België",
    flag: "🇧🇪",
    description: "Voor dit bodemsaneringsproject in Sint-Truiden hebben we met drones de volledige werfopvolging verzorgd. Van beginsituatie tot eindresultaat: elke fase werd gedocumenteerd met precisie-opmetingen, 3D-modellen en gedetailleerde berekeningen voor een complete as-built documentatie.",
    tasks: [
      "Beginsituatie terrein in kaart gebracht",
      "Periodieke drone-opmetingen tijdens sanering",
      "3D-puntenwolk generatie per fase",
      "Oppervlakte- en volumeberekeningen",
      "As-built documentatie eindresultaat",
      "Progressie rapportage aan opdrachtgever"
    ],
    images: [
      { src: "images/project-4/beginsituatie-terrein.png", alt: "Beginsituatie terrein", caption: "Beginsituatie van het terrein" },
      { src: "images/project-4/drone-opmeting-uitvoering.png", alt: "Drone-opmeting in uitvoering", caption: "Drone-opmeting tijdens werkzaamheden" },
      { src: "images/project-4/puntenwolk-terrein.png", alt: "3D-puntenwolk generatie", caption: "3D-puntenwolk van het terrein" },
      { src: "images/project-4/oppervlakteberekeningen.png", alt: "Oppervlakteberekeningen", caption: "Gedetailleerde oppervlakteberekeningen" },
      { src: "images/project-4/volume-analyse.png", alt: "Volume-analyse", caption: "Volume-analyse van de werkzaamheden" },
      { src: "images/project-4/eindresultaat.png", alt: "Eindresultaat", caption: "Eindresultaat " },
      { src: "images/project-4/asbuilt-plan.png", alt: "As-built", caption: "As-built plan" }
    ],
    previewImage: "images/project-4/previewimageproject4.png",
    categories: ["Werfopvolging"],
    status: "Voltooid"
  },
  {
    id: 5,
    title: "Monitoring Waterbeheersing",
    location: "Rijmenam, België",
    flag: "🇧🇪",
    description: "Tijdens een drie maanden durend monitoringsproject werden meerdere overstromingsgebieden opgevolgd met behulp van drones en fotogrammetrie. Deze methode maakte het mogelijk om nauwkeurige orthofoto's en 3D-modellen te genereren, waarmee veranderingen in wateroppervlak en waterterugtrekking in kaart werden gebracht. De verkregen data leverden waardevolle inzichten op voor waterbeheer, gebiedsherstel en risicobeoordeling.",
    tasks: [
      "Drone-opnames over overstromingsgebieden",
      "Fotogrammetrische verwerking tot orthofoto's en 3D-modellen",
      "Analyse van wateroppervlak en -terugtrekking",
      "Kaart- en modelrapportage voor waterbeheer"
    ],
    images: [
      { src: "images/project-5/2024-02-29-origineel.jpg", alt: "29 februari - Origineel", caption: "29/02 - Origineel" },
      { src: "images/project-5/2024-02-29-opmeting.jpg", alt: "29 februari - Opmeting", caption: "29/02 - Opmeting" },
      { src: "images/project-5/2024-03-25-origineel.jpg", alt: "25 maart - Origineel", caption: "25/03 - Origineel" },
      { src: "images/project-5/2024-03-25-opmeting.jpg", alt: "25 maart - Opmeting", caption: "25/03 - Opmeting" },
      { src: "images/project-5/2024-04-22-origineel.jpg", alt: "22 april - Origineel", caption: "22/04 - Origineel" },
      { src: "images/project-5/2024-04-22-opmeting.jpg", alt: "22 april - Opmeting", caption: "22/04 - Opmeting" }
    ],
    previewImage: "images/project-5/waterbeheersingbanner.jpg",
    previewImageIndex: 1,
    categories: ["Monitoring"],
    status: "Voltooid"
  },
  {
    id: 6,
    title: "Dakinspectie",
    location: "Izegem, België",
    flag: "🇧🇪",
    description: "Met onze dronetechnologie inspecteren we daken zonder stellingen of risico's. Meer dan honderd luchtfoto's worden met fotogrammetrie omgezet in één haarscherpe orthofoto. Onze 3D-software markeert automatisch probleemzones: van losse dakpannen tot een beschadigd dakvenster of zelfs nestvorming. Het resultaat? Een duidelijk, visueel inspectierapport met praktische aanbevelingen. U ziet precies wat er speelt, zonder het dak te betreden.",
    tasks: [
      "Dronevluchten voor dakinspectie uitgevoerd",
      "Fotogrammetrische verwerking tot orthofoto's",
      "Automatische detectie van schadezones in 3D-software",
      "Opmaak van visueel inspectierapport met aanbevelingen"
    ],
    images: [
      { src: "images/project-6/analysezone.png", alt: "Analysezone", caption: "Analysezone" },
      { src: "images/project-6/observatiepunten.png", alt: "Observatiepunten", caption: "Observatiepunten" },
      { src: "images/project-6/detail-schouw.png", alt: "Detail schouw", caption: "Detail schouw" },
      { src: "images/project-6/identificatie-losse-dakpannen.png", alt: "Identificatie losse dakpannen", caption: "Identificatie losse dakpannen" },
      { src: "images/project-6/detail-nestvorming.png", alt: "Detail nestvorming", caption: "Detail nestvorming" },
      { src: "images/project-6/detail-raam.png", alt: "Detail raam", caption: "Detail raam" }
    ],
    previewImageIndex: 1,
    categories: ["Inspecties"],
    status: "Voltooid"
  },
  {
    id: 7,
    title: "Stockdepot Meting",
    location: "Blankenberge, België",
    flag: "🇧🇪",
    description: "Voor een toonaangevende speler in de zand- en grindsector voeren wij regelmatig stockinventarissen met drones uit. Dankzij nauwkeurige luchtmetingen brengen we de aanwezige volumes snel en betrouwbaar in kaart. Onze methode bespaart tijd, levert heldere rapportages en visuele overzichten die het voorraadbeheer en de planning van onze klant optimaliseren.",
    tasks: [
      "Flexibele inplanning opmeting",
      "Drone fotogrammetrie depot",
      "Volumeberekening aanwezige stocks",
      "Duidelijke rapportage"
    ],
    images: [
      { src: "images/project-7/drone-depot.png", alt: "Drone-opname depot", caption: "Drone-opname van het stockdepot" },
      { src: "images/project-7/sateliet-volumes.png", alt: "Satelietweergave met volumeberekeningen", caption: "Satelietweergave met gemarkeerde volumes per stock" },
      { src: "images/project-7/volume-rapport.png", alt: "Volume rapportage", caption: "Rapportage met volumes per stock" }
    ],
    previewImage: "images/project-7/header.png",
    previewImageIndex: 0,
    categories: ["Opmetingen"],
    status: "Voltooid"
  }
];

