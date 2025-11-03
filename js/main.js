// Video Loading Optimization
document.addEventListener('DOMContentLoaded', function() {
  const video = document.getElementById('hero-video');
  const poster = document.getElementById('hero-poster');
   
   // Preload critical resources
   function preloadCriticalResources() {
// Preload hero poster image
const posterImg = new Image();
posterImg.src = 'images/assets/heroframe.png';
posterImg.onload = function() {
  console.log('Hero poster preloaded');
};

// Load video immediately for faster playback
if (video) {
  // Start loading video immediately
  video.load();
  
  video.addEventListener('loadedmetadata', function() {
    console.log('Video metadata loaded');
  });
  
  video.addEventListener('canplaythrough', function() {
    // Hide poster and show video smoothly
    if (poster) poster.style.opacity = '0';
    video.style.opacity = '1';
    
    setTimeout(() => {
      if (poster) poster.style.display = 'none';
    }, 1000);
  });
  
  video.addEventListener('error', function() {
    // Fallback to poster image if video fails
    console.log('Video failed to load, using poster');
    if (poster) poster.style.opacity = '1';
  });
}
   }
   
   // Start preloading immediately
   preloadCriticalResources();
   
   // Intersection Observer for lazy loading non-critical images
   if ('IntersectionObserver' in window) {
const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.classList.remove('lazy');
      observer.unobserve(img);
    }
  });
});

// Observe all lazy images
document.querySelectorAll('img[data-src]').forEach(img => {
  imageObserver.observe(img);
});
   }
 });
 
// Mobile Menu Toggle
document.getElementById('mobile-menu-btn').addEventListener('click', function() {
  document.getElementById('mobile-menu').classList.toggle('hidden');
});
 
// Close mobile menu when clicking a link
document.querySelectorAll('#mobile-menu a').forEach(link => {
  link.addEventListener('click', function() {
    document.getElementById('mobile-menu').classList.add('hidden');
  });
});
 
// Parallax effect for floating elements
window.addEventListener('scroll', function() {
  const scrollY = window.scrollY;
  const floatingElements = document.querySelectorAll('.animate-float');
  floatingElements.forEach((element, index) => {
    const speed = 0.5 + (index * 0.1);
    const yPos = -(scrollY * speed);
    element.style.transform = `translateY(${yPos}px)`;
  });
});
 
// Services Data
const services = [
  {
    title: "Opmetingen",
    subtitle: "met fotogrammetrie",
    description: "Breng uw project snel en tot op de centimeter nauwkeurig in kaart. Inclusief as-built plannen, oppervlaktebepalingen en volumeberekeningen. Zo bespaart u tijd én kosten.",
    icon: "fa-ruler-combined"
  },
  {
    title: "Werfopvolging",
    subtitle: "vanuit de lucht",
    description: "Dronebeelden geven een duidelijk overzicht van uw werf, met overzichtelijke kaarten, 3D-modellen en rapportages.",
    icon: "fa-hard-hat"
  },
  {
    title: "Inspecties",
    subtitle: "sneller, veiliger, slimmer",
    description: "Inspecties op moeilijk bereikbare plaatsen, van gebouwen tot industriële installaties. Betrouwbare gegevens zonder risico voor personeel.",
    icon: "fa-search"
  },
  {
    title: "Visuals",
    subtitle: "unieke beelden",
    description: "Leg uw project vast met professionele luchtfoto's en video's die uw visie tot leven brengen.",
    icon: "fa-camera"
  },
  {
    title: "Plaatsbeschrijving",
    subtitle: "gedocumenteerd",
    description: "Opmaak gedetailleerde plaatsbeschrijvingen met dronebeelden die een duidelijk en volledig overzicht van de omgeving bieden, ideaal om de situatie voor en na een project nauwkeurig vast te leggen.",
    icon: "fa-file-alt"
  },
  {
    title: "Monitoring",
    subtitle: "i.k.v. waterbeheersing",
    description: "Preventieve inspecties en continue monitoring. Drones maken waterbeheersing slimmer, veiliger en efficiënter.",
    icon: "fa-water"
  },
];
 
// Render Services with Enhanced Design
const servicesContainer = document.getElementById('services-container');
services.forEach((service, index) => {
  const serviceCard = `
    <div class="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 p-5 border border-gray-100 hover:border-primary/30 transform hover:-translate-y-2 cursor-pointer fade-in-up overflow-hidden service-card-${index + 1}" style="animation-delay: ${index * 100}ms">
 <!-- Animated Background Gradient -->
 <div class="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-light/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
 
 <!-- Floating Background Elements - Smaller -->
 <div class="absolute top-3 right-3 w-12 h-12 bg-gradient-to-br from-primary/10 to-primary-light/10 rounded-full blur-lg group-hover:scale-125 transition-transform duration-500 animate-pulse-glow"></div>
 <div class="absolute bottom-3 left-3 w-10 h-10 bg-gradient-to-br from-primary-light/10 to-primary/10 rounded-full blur-md group-hover:scale-110 transition-transform duration-500 animate-pulse-glow" style="animation-delay: 1s;"></div>
 
 <!-- Icon Container - Compact -->
 <div class="relative z-10 mb-4">
   <div class="bg-gradient-to-br from-primary via-primary-light to-primary-dark text-white w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl relative">
     <i class="fas ${service.icon} text-lg group-hover:scale-110 transition-transform duration-300"></i>
     <!-- Icon Inner Glow -->
     <div class="absolute inset-1.5 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
 </div>
   <!-- Icon Glow Effect - Smaller -->
   <div class="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-light/20 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300"></div>
 </div>
 
 <!-- Content - Compact -->
 <div class="relative z-10">
   <h3 class="text-lg font-bold text-gray-800 mb-1.5 group-hover:text-primary transition-colors duration-300 group-hover:translate-x-1">
     ${service.title}
   </h3>
   ${service.subtitle ? `
     <p class="text-xs text-primary font-semibold mb-3 uppercase tracking-wide group-hover:translate-x-1 transition-transform duration-300">
       ${service.subtitle}
     </p>
   ` : ''}
   <p class="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
     ${service.description}
   </p>
 </div>
 
 <!-- Bottom Accent Line - Smaller -->
 <div class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary-light group-hover:w-full transition-all duration-500"></div>
 
 <!-- Hover Overlay -->
 <div class="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
 
 <!-- Subtle Border Animation -->
 <div class="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/20 transition-colors duration-300"></div>
    </div>
  `;
  servicesContainer.innerHTML += serviceCard;
});
 
// Projects data is loaded from js/projects.js
// The projects array is now defined in a separate file for easier maintenance
 
// Render Projects Grid
const projectsGrid = document.getElementById('projects-grid');
const projectsMobileGrid = document.getElementById('projects-mobile-grid');

// Function to create project card HTML for desktop (horizontal scroller)
function createDesktopProjectCard(project, index) {
  return `
    <div class="group bg-white/10 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer w-80 flex-shrink-0 flex flex-col"
    onclick="openProjectModal(${project.id})">
 
 <!-- Project Image/Video -->
 <div class="relative h-48 overflow-hidden flex-shrink-0">
   ${project.previewImage ? `
     <img src="${project.previewImage}" alt="${project.title}" 
          class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
   ` : project.previewVideo ? `
     <video class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 pointer-events-none" 
            muted loop autoplay playsinline preload="metadata">
       <source src="${project.previewVideo}" type="video/mp4">
       <img src="${project.images[project.previewImageIndex || 0].src}" alt="${project.images[project.previewImageIndex || 0].alt}" 
            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
     </video>
   ` : `
     <img src="${project.images[project.previewImageIndex || 0].src}" alt="${project.images[project.previewImageIndex || 0].alt}" 
          class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
   `}
   <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
   
   <!-- Status Badge -->
   <div class="absolute top-4 right-4">
     <span class="px-3 py-1 rounded-full text-xs font-semibold ${
       project.status === 'Voltooid' 
         ? 'bg-green-500/90 text-white' 
         : 'bg-yellow-500/90 text-white'
     }">
       ${project.status}
       </span>
   </div>
 
   <!-- Category Badge -->
   <div class="absolute top-4 left-4">
     <span class="px-3 py-1 rounded-full text-xs font-semibold bg-primary/90 text-white">
       ${project.category}
     </span>
       </div>
     </div>
    
 <!-- Project Content - Flexbox for equal distribution -->
 <div class="flex flex-col flex-1 p-6">
   
   <!-- Title Container -->
   <div class="mb-4 flex-shrink-0">
     <h3 class="text-xl font-bold text-white group-hover:text-primary-light transition-colors leading-tight">
       ${project.title}
     </h3>
       </div>
   
   <!-- Location Container -->
   <div class="mb-4 flex-shrink-0">
     <div class="flex items-center text-gray-300 text-sm">
       <span class="text-lg mr-2 flex-shrink-0">${project.flag}</span>
       <span class="truncate">${project.location}</span>
     </div>
       </div>
   
   <!-- Description Container - Flexible height -->
   <div class="mb-4 flex-1 min-h-[60px]">
     <p class="text-gray-300 text-sm leading-relaxed line-clamp-3">
       ${project.description}
     </p>
     </div>
   
   <!-- Tasks Container - Fixed height for alignment -->
   <div class="mb-4 flex-shrink-0 min-h-[80px]">
     <h4 class="text-sm font-semibold text-white mb-2">Uitgevoerde opdrachten:</h4>
     <ul class="space-y-1">
       ${project.tasks.slice(0, 2).map(task => `
         <li class="text-gray-300 text-xs flex items-start">
           <i class="fas fa-check text-green-400 mr-2 text-xs flex-shrink-0 mt-0.5"></i>
           <span class="line-clamp-1">${task}</span>
         </li>
       `).join('')}
       ${project.tasks.length > 2 ? `
         <li class="text-primary-light text-xs">
           +${project.tasks.length - 2} meer taken...
         </li>
       ` : ''}
     </ul>
   </div>
 
   <!-- View Details Button - Fixed at bottom -->
   <div class="flex items-center justify-between flex-shrink-0 mt-auto">
     <span class="text-primary-light text-sm font-medium group-hover:text-white transition-colors">
       Bekijk details
     </span>
     <i class="fas fa-arrow-right text-primary-light group-hover:translate-x-1 transition-transform"></i>
         </div>
       </div>
         </div>
  `;
}

// Function to create project card HTML for mobile (horizontal scroller)
function createMobileProjectCard(project, index) {
  return `
    <div class="group bg-white/10 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer w-80 flex-shrink-0 flex flex-col"
    onclick="openProjectModal(${project.id})">
 
 <!-- Project Image/Video -->
 <div class="relative h-48 overflow-hidden flex-shrink-0">
   ${project.previewImage ? `
     <img src="${project.previewImage}" alt="${project.title}" 
          class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
   ` : project.previewVideo ? `
     <video class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 pointer-events-none" 
            muted loop autoplay playsinline preload="metadata" 
            onloadstart="this.play()" oncanplay="this.play()">
       <source src="${project.previewVideo}" type="video/mp4">
       <img src="${project.images[project.previewImageIndex || 0].src}" alt="${project.images[project.previewImageIndex || 0].alt}" 
            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
     </video>
   ` : `
     <img src="${project.images[project.previewImageIndex || 0].src}" alt="${project.images[project.previewImageIndex || 0].alt}" 
          class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
   `}
   <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
   
   <!-- Status Badge -->
   <div class="absolute top-4 right-4">
     <span class="px-3 py-1 rounded-full text-xs font-semibold ${
       project.status === 'Voltooid' 
         ? 'bg-green-500/90 text-white' 
         : 'bg-yellow-500/90 text-white'
     }">
       ${project.status}
       </span>
       </div>
 
   <!-- Category Badge -->
   <div class="absolute top-4 left-4">
     <span class="px-3 py-1 rounded-full text-xs font-semibold bg-primary/90 text-white">
       ${project.category}
     </span>
         </div>
       </div>
    
 <!-- Project Content - Flexbox for equal distribution -->
 <div class="flex flex-col flex-1 p-6">
   
   <!-- Title Container -->
   <div class="mb-4 flex-shrink-0">
     <h3 class="text-xl font-bold text-white group-hover:text-primary-light transition-colors leading-tight">
       ${project.title}
     </h3>
     </div>
   
   <!-- Location Container -->
   <div class="mb-4 flex-shrink-0">
     <div class="flex items-center text-gray-300 text-sm">
       <span class="text-lg mr-2 flex-shrink-0">${project.flag}</span>
       <span class="truncate">${project.location}</span>
   </div>
 </div>
   
   <!-- Description Container - Flexible height -->
   <div class="mb-4 flex-1 min-h-[60px]">
     <p class="text-gray-300 text-sm leading-relaxed line-clamp-3">
       ${project.description}
     </p>
   </div>
 
   <!-- Tasks Container - Fixed height for alignment -->
   <div class="mb-4 flex-shrink-0 min-h-[80px]">
     <h4 class="text-sm font-semibold text-white mb-2">Uitgevoerde opdrachten:</h4>
     <ul class="space-y-1">
       ${project.tasks.slice(0, 2).map(task => `
         <li class="text-gray-300 text-xs flex items-start">
           <i class="fas fa-check text-green-400 mr-2 text-xs flex-shrink-0 mt-0.5"></i>
           <span class="line-clamp-1">${task}</span>
         </li>
       `).join('')}
       ${project.tasks.length > 2 ? `
         <li class="text-primary-light text-xs">
           +${project.tasks.length - 2} meer taken...
         </li>
       ` : ''}
     </ul>
       </div>

   <!-- View Details Button - Fixed at bottom -->
   <div class="flex items-center justify-between flex-shrink-0 mt-auto">
     <span class="text-primary-light text-sm font-medium group-hover:text-white transition-colors">
       Bekijk details
     </span>
     <i class="fas fa-arrow-right text-primary-light group-hover:translate-x-1 transition-transform"></i>
     </div>
       </div>
     </div>
  `;
}

// Render for desktop (horizontal scroller)
projects.forEach((project, index) => {
  projectsGrid.innerHTML += createDesktopProjectCard(project, index);
});

// Render for mobile (grid)
projects.forEach((project, index) => {
  projectsMobileGrid.innerHTML += createMobileProjectCard(project, index);
});

// Project Modal Function
function openProjectModal(projectId) {
  const project = projects.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4';
  modal.onclick = function(e) {
    if (e.target === modal) {
 closeProjectModal();
    }
  };
  modal.innerHTML = `
    <div class="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
 <!-- Modal Header -->
 <div class="bg-gradient-to-r from-primary to-primary-dark text-white p-6">
   <div class="flex justify-between items-start">
     <div>
       <h2 class="text-2xl font-bold mb-2">${project.title}</h2>
       <div class="flex items-center text-primary-light">
         <span class="flex items-center">
           <span class="text-lg mr-2">${project.flag}</span>
           ${project.location}
         </span>
       </div>
     </div>
     <button onclick="closeProjectModal()" class="text-white hover:text-gray-300 transition-colors">
       <i class="fas fa-times text-2xl"></i>
     </button>
   </div>
 </div>
 
 <!-- Modal Content -->
 <div class="p-6 max-h-[70vh] overflow-y-auto">
   <!-- Description -->
   <div class="mb-6">
     <h3 class="text-lg font-semibold text-gray-800 mb-3">Projectbeschrijving</h3>
     <p class="text-gray-600 leading-relaxed">${project.description}</p>
   </div>
 
   <!-- Tasks -->
   <div class="mb-6">
     <h3 class="text-lg font-semibold text-gray-800 mb-3">Uitgevoerde opdrachten</h3>
     <ul class="space-y-2">
       ${project.tasks.map(task => `
         <li class="flex items-start text-gray-600">
           <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
           <span>${task}</span>
         </li>
       `).join('')}
     </ul>
       </div>
   
   <!-- Images Gallery -->
   <div class="mb-6">
     <h3 class="text-lg font-semibold text-gray-800 mb-4">Projectbeelden</h3>
     <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
       ${project.images.map((img, index) => `
         <div class="group cursor-pointer bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden" onclick="openImageLightbox('${img.src}', '${img.alt}')">
           <div class="relative overflow-hidden">
             <img src="${img.src}" alt="${img.alt}" 
                  class="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-500">
             <div class="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
             <div class="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
               <i class="fas fa-expand text-gray-700 text-sm"></i>
     </div>
       </div>
           <div class="p-4">
             <p class="text-sm font-medium text-gray-800 group-hover:text-primary transition-colors">${img.caption}</p>
     </div>
       </div>
       `).join('')}
     </div>
       </div>
     </div>
       </div>
  `;
  
  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden';
}

// Close Modal Function
function closeProjectModal() {
  const modal = document.querySelector('.fixed.inset-0.bg-black\\/80');
  if (modal) {
    modal.remove();
    document.body.style.overflow = 'auto';
  }
}

// Image Lightbox Function
function openImageLightbox(src, alt) {
  const lightbox = document.createElement('div');
  lightbox.className = 'fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4';
  lightbox.onclick = function(e) {
    if (e.target === lightbox) {
 closeImageLightbox();
    }
  };
  lightbox.innerHTML = `
    <div class="relative max-w-4xl max-h-full">
 <img src="${src}" alt="${alt}" class="max-w-full max-h-full object-contain rounded-lg">
 <button onclick="closeImageLightbox()" 
         class="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors">
   <i class="fas fa-times text-2xl"></i>
 </button>
    </div>
  `;
  
  document.body.appendChild(lightbox);
}

// Close Image Lightbox Function
function closeImageLightbox() {
  const lightbox = document.querySelector('.fixed.inset-0.bg-black\\/90');
  if (lightbox) {
    lightbox.remove();
  }
}

// Auto-generate video poster from first frame
function generateVideoPoster() {
  const video = document.getElementById('hero-video');
  if (!video) return;

  // Wait for video to load
  video.addEventListener('loadeddata', function() {
    // Create canvas to capture first frame
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // Set canvas dimensions to match video
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    
    // Seek to first frame (0 seconds)
    video.currentTime = 0;
    
    // Wait for seek to complete, then capture frame
    video.addEventListener('seeked', function() {
 // Draw video frame to canvas
 ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
 
 // Convert canvas to data URL (base64 image)
 const dataURL = canvas.toDataURL('image/jpeg', 0.8);
 
 // Set as poster image
 video.poster = dataURL;
 
 // Clean up event listeners
 video.removeEventListener('seeked', arguments.callee);
    }, { once: true });
  }, { once: true });
}

 // Initialize video poster generation
 generateVideoPoster();

 // Contact Info Toggle Function
 function toggleContactInfo() {
   const basicContact = document.getElementById('basic-contact');
   const detailedContact = document.getElementById('detailed-contact');
   const toggleButton = document.querySelector('#toggle-contact-btn i');
   const clickIndicators = document.querySelectorAll('#toggle-contact-btn .absolute');
   const clickText = document.querySelector('.text-white\\/70');
   
   if (basicContact.classList.contains('hidden')) {
basicContact.classList.remove('hidden');
detailedContact.classList.add('hidden');
// Show info icon for basic view
toggleButton.className = 'fas fa-info-circle text-white text-lg group-hover:text-white';
// Show click indicators
clickIndicators.forEach(indicator => indicator.style.display = 'block');
if (clickText) clickText.style.display = 'block';
   } else {
basicContact.classList.add('hidden');
detailedContact.classList.remove('hidden');
// Show return icon for detailed view
toggleButton.className = 'fas fa-undo text-white text-lg group-hover:text-white';
// Hide click indicators
clickIndicators.forEach(indicator => indicator.style.display = 'none');
if (clickText) clickText.style.display = 'none';
   }
 }

 // Certificate Preview Functions
 function showCertificatePreview() {
   const modal = document.getElementById('certificateModal');
   if (modal) {
modal.classList.remove('hidden');
modal.style.display = 'flex';
document.body.style.overflow = 'hidden';
   }
 }
 
 
 function closeCertificateModal() {
   const modal = document.getElementById('certificateModal');
   if (modal) {
modal.classList.add('hidden');
modal.style.display = 'none';
document.body.style.overflow = 'auto';
   }
 }

 function openCertificateLightbox() {
   document.getElementById('certificateLightbox').classList.remove('hidden');
 }

 function closeCertificateLightbox() {
   document.getElementById('certificateLightbox').classList.add('hidden');
 }

 // Close modals when clicking outside
 document.getElementById('certificateModal').addEventListener('click', function(e) {
   if (e.target === this) {
closeCertificateModal();
   }
 });

 document.getElementById('certificateLightbox').addEventListener('click', function(e) {
   if (e.target === this) {
closeCertificateLightbox();
   }
 });

 // Close modals with Escape key
 document.addEventListener('keydown', function(e) {
   if (e.key === 'Escape') {
closeCertificateModal();
closeCertificateLightbox();
   }
 });
 
// Partners Data
const partners = [
  { img: "images/customers/groupdecloedt.png", alt: "Group De Cloedt" },
  { img: "images/customers/agentschapnatuur.png", alt: "Agentschap voor Natuur en Bos" },
  { img: "images/customers/bioterra.png", alt: "Bioterra" },
  { img: "images/customers/vlaamsewaterweg.png", alt: "De Vlaamse Waterweg" },
  { img: "images/customers/hdr.jpg", alt: "Heyrman - De Roeck" },
  { img: "images/customers/nhm.webp", alt: "NHM" },
  { img: "images/customers/evsinfrabouw.jpeg", alt: "EVS Infrabouw" },
];
 
 // Partner click handler to prevent carousel interruption
 function handlePartnerClick(event) {
   event.preventDefault();
   event.stopPropagation();
   
   // Temporarily pause the carousel
   const partnersTrack = document.getElementById('partners-track');
   partnersTrack.classList.add('paused');
   
   // Resume after a short delay
   setTimeout(() => {
partnersTrack.classList.remove('paused');
partnersTrack.classList.add('resumed');

// Remove the resumed class after animation restarts
setTimeout(() => {
  partnersTrack.classList.remove('resumed');
}, 100);
   }, 2000);
 }
 
// Simple Infinite Carousel Implementation
function initInfiniteCarousel() {
 const partnersTrack = document.getElementById('partners-track');
 
 // Function to create partner HTML with conditional click handling
 function createPartnerHTML() {
   const isMobile = window.innerWidth < 768;
   
   return partners.map(partner => `
<div class="partner-item mx-3 sm:mx-4 md:mx-6">
  <div class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 sm:p-6 transform hover:scale-105 border border-gray-100 w-48 h-24 sm:w-56 sm:h-28 md:w-64 md:h-32 flex items-center justify-center ${isMobile ? '' : 'cursor-pointer'}" 
       ${isMobile ? '' : 'onclick="handlePartnerClick(event)"'}>
    <img src="${partner.img}" alt="${partner.alt}" class="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition duration-500">
    </div>
  </div>
`).join('');
 }
 
 // Initial render
 const partnerHTML = createPartnerHTML();
 partnersTrack.innerHTML = partnerHTML + partnerHTML;
 
 // Handle window resize to update click behavior
 let resizeTimeout;
 window.addEventListener('resize', function() {
   clearTimeout(resizeTimeout);
   resizeTimeout = setTimeout(function() {
const newPartnerHTML = createPartnerHTML();
partnersTrack.innerHTML = newPartnerHTML + newPartnerHTML;
   }, 250); // Debounce resize events
 });
   }

// Initialize the carousel
initInfiniteCarousel();

// Project Scroller Functionality
const scrollContainer = document.getElementById('projects-scroll-container');
const scrollLeftBtn = document.getElementById('scroll-left');
const scrollRightBtn = document.getElementById('scroll-right');

if (scrollContainer && scrollLeftBtn && scrollRightBtn) {
  // Click scroll functionality
  scrollLeftBtn.addEventListener('click', () => {
    scrollContainer.scrollBy({ left: -344, behavior: 'smooth' }); // 320px card + 24px gap
  });
  
  scrollRightBtn.addEventListener('click', () => {
    scrollContainer.scrollBy({ left: 344, behavior: 'smooth' }); // 320px card + 24px gap
  });
  
  // Mouse drag functionality
  let isDown = false;
  let startX;
  let scrollLeft;
  
  scrollContainer.addEventListener('mousedown', (e) => {
    isDown = true;
    scrollContainer.style.cursor = 'grabbing';
    startX = e.pageX - scrollContainer.offsetLeft;
    scrollLeft = scrollContainer.scrollLeft;
  });
  
  scrollContainer.addEventListener('mouseleave', () => {
    isDown = false;
    scrollContainer.style.cursor = 'grab';
  });
  
  scrollContainer.addEventListener('mouseup', () => {
    isDown = false;
    scrollContainer.style.cursor = 'grab';
  });
  
  scrollContainer.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollContainer.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollContainer.scrollLeft = scrollLeft - walk;
  });
  
  // Touch support for mobile
  let touchStartX;
  let touchScrollLeft;
  
  scrollContainer.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].pageX - scrollContainer.offsetLeft;
    touchScrollLeft = scrollContainer.scrollLeft;
  });
  
  scrollContainer.addEventListener('touchmove', (e) => {
    if (!touchStartX) return;
    const x = e.touches[0].pageX - scrollContainer.offsetLeft;
    const walk = (x - touchStartX) * 2;
    scrollContainer.scrollLeft = touchScrollLeft - walk;
  });
  
  // Update button visibility based on scroll position
  const updateScrollButtons = () => {
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
    scrollLeftBtn.style.opacity = scrollLeft > 0 ? '1' : '0.5';
    scrollRightBtn.style.opacity = scrollLeft < scrollWidth - clientWidth ? '1' : '0.5';
  };
  
  scrollContainer.addEventListener('scroll', updateScrollButtons);
  updateScrollButtons(); // Initial state
}

// Mobile Project Scroller Functionality
const mobileScrollContainer = document.getElementById('projects-mobile-scroll-container');
const mobileScrollLeftBtn = document.getElementById('mobile-scroll-left');
const mobileScrollRightBtn = document.getElementById('mobile-scroll-right');

if (mobileScrollContainer && mobileScrollLeftBtn && mobileScrollRightBtn) {
  // Click scroll functionality
  mobileScrollLeftBtn.addEventListener('click', () => {
    mobileScrollContainer.scrollBy({ left: -336, behavior: 'smooth' }); // 320px card + 16px gap
  });
  
  mobileScrollRightBtn.addEventListener('click', () => {
    mobileScrollContainer.scrollBy({ left: 336, behavior: 'smooth' }); // 320px card + 16px gap
  });
  
  // Touch support for mobile
  let mobileTouchStartX;
  let mobileTouchScrollLeft;
  
  mobileScrollContainer.addEventListener('touchstart', (e) => {
    mobileTouchStartX = e.touches[0].pageX - mobileScrollContainer.offsetLeft;
    mobileTouchScrollLeft = mobileScrollContainer.scrollLeft;
  });
  
  mobileScrollContainer.addEventListener('touchmove', (e) => {
    if (!mobileTouchStartX) return;
    const x = e.touches[0].pageX - mobileScrollContainer.offsetLeft;
    const walk = (x - mobileTouchStartX) * 2;
    mobileScrollContainer.scrollLeft = mobileTouchScrollLeft - walk;
  });
  
  // Update button visibility based on scroll position
  const updateMobileScrollButtons = () => {
    const { scrollLeft, scrollWidth, clientWidth } = mobileScrollContainer;
    mobileScrollLeftBtn.style.opacity = scrollLeft > 0 ? '1' : '0.5';
    mobileScrollRightBtn.style.opacity = scrollLeft < scrollWidth - clientWidth ? '1' : '0.5';
  };
  
  mobileScrollContainer.addEventListener('scroll', updateMobileScrollButtons);
  updateMobileScrollButtons(); // Initial state
}
 
// WhatsApp Form Submit
document.getElementById('whatsappForm').addEventListener('submit', function(e) {
  e.preventDefault();
 
  const name = document.getElementById('name').value;
  const project = document.getElementById('project').value;
  const message = document.getElementById('message').value;
 
  const whatsappMessage = `Hallo, mijn naam is ${name}.%0A%0AOnderwerp: ${project}%0A%0A${message}`;
  const phoneNumber = '32491150887';
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
 
  window.open(whatsappURL, '_blank');
});

// Expose functions for onclick handlers
window.openProjectModal = openProjectModal;
window.closeProjectModal = closeProjectModal;
window.openImageLightbox = openImageLightbox;
window.closeImageLightbox = closeImageLightbox;
window.toggleContactInfo = toggleContactInfo;
window.showCertificatePreview = showCertificatePreview;
window.closeCertificateModal = closeCertificateModal;
window.openCertificateLightbox = openCertificateLightbox;
window.closeCertificateLightbox = closeCertificateLightbox;
window.handlePartnerClick = handlePartnerClick;