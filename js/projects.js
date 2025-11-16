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
    description: "Een historische vuurtoren in Breskens die dringend geïnspecteerd moest worden, maar waar traditionele inspectiemethoden te gevaarlijk waren. Met onze drone vlogen we rondom de toren en legden elk detail vast. De restauratieplanners kregen een complete visuele documentatie die precies liet zien wat er aan de hand was, zonder dat iemand een voet op het dak hoefde te zetten.",
    tasks: [
      "Rondom de vuurtoren vliegen met hoge-resolutie camera's",
      "Elk structureel detail van dichtbij vastleggen",
      "Een complete 360° visuele documentatie samenstellen",
      "Rapportage opstellen die de restauratieplanners direct kunnen gebruiken"
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
    description: "Hoeveel zand ligt er nu eigenlijk op die hoop? In plaats van dagenlang met meetstokken rondlopen, vlogen we er even overheen. Binnen een paar uur had de klant een nauwkeurig 3D-model met exacte volumes. Transport kon direct gepland worden, zonder giswerk.",
    tasks: [
      "Over het materiaal vliegen en honderden foto's maken",
      "Die foto's verwerken tot een nauwkeurige 3D-puntenwolk",
      "Met software de exacte volumes berekenen",
      "Duidelijke rapportage met visualisaties opstellen"
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
    description: "Na een bodemsanering lagen er overal sleuven en leidingen door elkaar. De vraag: waar ligt alles precies? We maakten een complete luchtfoto en tekenden alle leidingtracés in. Nu heeft de opdrachtgever een helder plan dat direct gebruikt kan worden voor verdere werkzaamheden of controle.",
    tasks: [
      "Het hele terrein vanuit de lucht fotograferen",
      "De foto's verwerken tot een gedetailleerde 3D-puntenwolk",
      "Alle leidingtracés digitaal intekenen op de luchtfoto",
      "Het plan exporteren naar DXF-formaat voor gebruik in CAD-software"
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
    description: "Tijdens een bodemsanering in Sint-Truiden volgden we het hele proces op. We begonnen met de beginsituatie, vlogen regelmatig over tijdens de werkzaamheden en eindigden met een complete as-built documentatie. Elke fase werd vastgelegd: hoeveel grond werd verplaatst, welke oppervlaktes werden behandeld, en hoe het terrein er uiteindelijk uitzag. De opdrachtgever had zo altijd een actueel beeld van de voortgang.",
    tasks: [
      "Vastleggen van de beginsituatie van het terrein",
      "Regelmatig overvliegen tijdens de saneringswerkzaamheden",
      "3D-modellen opbouwen van elke fase",
      "Berekenen hoeveel grond verplaatst werd en welke oppervlaktes behandeld werden",
      "Complete as-built documentatie van het eindresultaat",
      "Voortgangsrapportage zodat de opdrachtgever altijd op de hoogte was"
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
    description: "Drie maanden lang monitorden we overstromingsgebieden in Rijmenam. Elke paar weken vlogen we over het gebied en zagen we precies hoe het water zich terugtrok. Door de beelden naast elkaar te leggen, ontstond er een duidelijk beeld van de waterdynamiek. Die data hielp bij het nemen van beslissingen over waterbeheer en gebiedsherstel.",
    tasks: [
      "Elke paar weken over de overstromingsgebieden vliegen",
      "De opnames verwerken tot gedetailleerde orthofoto's en 3D-modellen",
      "Analyseren hoe het wateroppervlak veranderde en zich terugtrok",
      "Kaarten en modellen opstellen die helpen bij waterbeheerbeslissingen"
    ],
    images: [
      { src: "images/project-5/2024-02-29-origineel.jpg" },
      { src: "images/project-5/2024-02-29-opmeting.jpg" },
      { src: "images/project-5/2024-03-25-origineel.jpg" },
      { src: "images/project-5/2024-03-25-opmeting.jpg" },
      { src: "images/project-5/2024-04-22-origineel.jpg" },
      { src: "images/project-5/2024-04-22-opmeting.jpg" }
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
    description: "Een dak inspecteren zonder erop te moeten klimmen? We vlogen er overheen, maakten honderden foto's en stelden daar één scherpe orthofoto van samen. Onze software markeerde automatisch alle probleemzones: losse dakpannen, een beschadigd raam, zelfs nestvorming. De klant kreeg een duidelijk rapport met precies aangegeven wat er moet gebeuren, zonder dat iemand het dak op hoefde.",
    tasks: [
      "Over het dak vliegen en honderden foto's maken",
      "Die foto's samenvoegen tot één scherpe orthofoto van het hele dak",
      "Met 3D-software automatisch alle probleemzones markeren",
      "Een visueel rapport opstellen met duidelijke aanbevelingen"
    ],
    images: [
      { src: "images/project-6/analysezone.png" },
      { src: "images/project-6/observatiepunten.png" },
      { src: "images/project-6/detail-schouw.png" },
      { src: "images/project-6/identificatie-losse-dakpannen.png" },
      { src: "images/project-6/detail-nestvorming.png" },
      { src: "images/project-6/detail-raam.png" }
    ],
    previewImageIndex: 1,
    categories: ["Inspecties"],
    status: "Voltooid"
  },
  {
    id: 7,
    title: "Stockdepot Meting",
    location: "Brugge, België",
    flag: "🇧🇪",
    description: "Een zand- en grinddepot in Brugge dat regelmatig geïnventariseerd moet worden. In plaats van dagenlang meten, vliegen we er even overheen. Binnen een dag heeft de klant een nauwkeurig overzicht van alle stockvolumes, met duidelijke visualisaties. Zo kunnen ze hun voorraadbeheer en planning veel beter afstemmen.",
    tasks: [
      "Flexibel inplannen wanneer de opmeting het beste uitkomt",
      "Over het hele depot vliegen en alle stocks fotograferen",
      "Voor elke stock het exacte volume berekenen",
      "Een overzichtelijke rapportage opstellen met duidelijke visualisaties"
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
  },
  {
    id: 8,
    title: "Plaatsbeschrijving",
    location: "Kruibeke, België",
    flag: "🇧🇪",
    description: "Voor een plaatsbeschrijving in Kruibeke moest de volledige gevel gedocumenteerd worden. We vlogen systematisch langs de gevel en maakten een grid van hoge-resolutie foto's. Elke steen, elke scheur, elk detail werd vastgelegd in een complete visuele documentatie, perfect geschikt voor renovatieplanning. Na de werkzaamheden kunnen we opnieuw vliegen en direct vergelijken wat er veranderd is.",
    tasks: [
      "De drone positioneren en een systematisch grid instellen",
      "Langs de hele gevel vliegen en hoge-resolutie foto's maken volgens het grid",
      "Alle detailfoto's bundelen in een gestructureerde rapportage"
    ],
    images: [
      { src: "images/project-8/foto1.jpg" },
      { src: "images/project-8/foto2.jpg" },
      { src: "images/project-8/foto3.jpg" },
      { src: "images/project-8/foto4.jpg" },
      { src: "images/project-8/foto5.jpg" },
      { src: "images/project-8/foto6.jpg" },
      { src: "images/project-8/foto7.jpg" },
      { src: "images/project-8/foto8.jpg" },
      { src: "images/project-8/foto9.jpg" }
    ],
    previewImage: "images/project-8/project8header.png",
    categories: ["Plaatsbeschrijving"],
    status: "Voltooid"
  },
  {
    id: 9,
    title: "Uw volgende project?",
    location: "België / Nederland",
    flag: "🇧🇪🇳🇱",
    description: "Heeft u een project waarbij drone-opnames, inspecties of opmetingen kunnen helpen? Wij denken graag mee over de beste aanpak voor uw specifieke situatie. Van eenmalige inspecties tot langdurige monitoring: we passen onze werkwijze aan op wat u nodig heeft.",
    tasks: [
      "Samen uw projectbehoefte bespreken",
      "De beste drone-aanpak voor uw situatie bepalen",
      "Flexibele planning die aansluit op uw werkzaamheden",
      "Duidelijke rapportage die u direct kunt gebruiken"
    ],
    images: [
      { src: "images/branding/MsOnsite LogoSpacing.png" }
    ],
    previewImage: "images/assets/projectsectionbackground.png",
    status: "Onvoltooid"
  }
];

