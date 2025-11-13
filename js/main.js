// Video Loading Optimization
document.addEventListener('DOMContentLoaded', function() {
  const video = document.getElementById('hero-video');
  const poster = document.getElementById('hero-poster');
   
   // Preload critical resources
   function preloadCriticalResources() {
// Hero poster is already loaded with fetchpriority="high" in HTML
// Load video after a small delay to not block initial render
if (video) {
  // Start loading video after page is interactive
  setTimeout(() => {
  video.load();
  }, 100);
  
  // Show video as soon as it can play (not wait for full buffer)
  video.addEventListener('canplay', function() {
    // Hide poster and show video smoothly
    if (poster) poster.style.opacity = '0';
    video.style.opacity = '1';
    
    setTimeout(() => {
      if (poster) poster.style.display = 'none';
    }, 1000);
  }, { once: true });
  
  // Fallback: if canplay doesn't fire quickly, use loadeddata
  video.addEventListener('loadeddata', function() {
    if (video.style.opacity === '0' || video.style.opacity === '') {
      if (poster) poster.style.opacity = '0';
      video.style.opacity = '1';
      
      setTimeout(() => {
        if (poster) poster.style.display = 'none';
      }, 1000);
    }
  }, { once: true });
  
  video.addEventListener('error', function() {
    // Fallback to poster image if video fails
    if (poster) poster.style.opacity = '1';
  }, { once: true });
}
   }
   
   // Start preloading immediately - don't wait for DOMContentLoaded
   // Video element might already exist
   if (document.readyState === 'loading') {
   preloadCriticalResources();
   } else {
     preloadCriticalResources();
   }
   
   // Intersection Observer for lazy loading videos in project cards
   // Only for cards that are not immediately visible
   if ('IntersectionObserver' in window) {
     const videoObserver = new IntersectionObserver((entries, observer) => {
       entries.forEach(entry => {
         if (entry.isIntersecting) {
           const container = entry.target;
           const img = container.querySelector('img[data-video-src]');
           const video = container.querySelector('video');
           
           if (img && video && video.dataset.loaded !== 'true') {
             // Load video when in viewport
             video.preload = 'auto';
             video.load();
             video.dataset.loaded = 'true';
             
             // Once video can play, show it and hide image
             video.addEventListener('canplay', function() {
               video.classList.remove('hidden');
               if (img) img.style.opacity = '0';
               setTimeout(() => {
                 if (img) img.style.display = 'none';
               }, 300);
             }, { once: true });
             
             observer.unobserve(container);
           }
         }
       });
     }, {
       rootMargin: '500px' // Start loading 500px before entering viewport for instant playback
     });

     // Observe all project cards with videos, but load first 3 immediately
     setTimeout(() => {
       document.querySelectorAll('[data-video-src]').forEach((img, index) => {
         const container = img.closest('.relative');
         if (container) {
           // Load first 3 videos immediately (likely visible)
           if (index < 3) {
             const video = container.querySelector('video');
             if (video && video.dataset.loaded !== 'true') {
               video.preload = 'auto';
               video.load();
               video.dataset.loaded = 'true';
               
               video.addEventListener('canplay', function() {
                 video.classList.remove('hidden');
                 const img = container.querySelector('img[data-video-src]');
                 if (img) img.style.opacity = '0';
                 setTimeout(() => {
                   if (img) img.style.display = 'none';
                 }, 300);
               }, { once: true });
             }
           } else {
             // Use observer for the rest with larger rootMargin
             videoObserver.observe(container);
           }
         }
       });
     }, 0); // Load immediately, no delay
   }
   
   // Scroll fade-in animations for section titles
   if ('IntersectionObserver' in window) {
     const scrollFadeObserver = new IntersectionObserver((entries, observer) => {
       entries.forEach(entry => {
         if (entry.isIntersecting) {
           const container = entry.target;
           const items = container.querySelectorAll('.scroll-fade-in-item');
           items.forEach(item => {
             item.classList.add('visible');
           });
           observer.unobserve(container);
         }
       });
     }, {
       rootMargin: '0px 0px -100px 0px', // Trigger when element is 100px from bottom of viewport
       threshold: 0.1
     });
     
     // Observe all section titles with scroll-fade-in class
     document.querySelectorAll('.scroll-fade-in').forEach(section => {
       scrollFadeObserver.observe(section);
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
    description: "Breng uw project snel en nauwkeurig in kaart. Inclusief as-built plannen, oppervlaktebepalingen en volumeberekeningen. Bespaar tijd én kosten.",
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
    description: "Gedetailleerde plaatsbeschrijvingen met dronebeelden voor een volledig overzicht van de omgeving, ideaal om de situatie voor en na een project vast te leggen.",
    icon: "fa-file-alt"
  },
  {
    title: "Monitoring",
    subtitle: "i.k.v. waterbeheersing",
    description: "Preventieve inspecties en continue monitoring. Drones maken waterbeheersing slimmer, veiliger en efficiënter.",
    icon: "fa-water"
  },
];
 
// Render Services with Clean Design and Subtle Background Numbers
const servicesContainer = document.getElementById('services-container');

const serviceGrid = `
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
    ${services.map((service, index) => {
      const serviceNumber = String(index + 1).padStart(2, '0');
      
      return `
        <div class="group relative bg-white rounded-2xl p-6 md:p-7 border-2 border-primary/50 shadow-xl cursor-pointer scroll-fade-in overflow-hidden" style="animation-delay: ${index * 50}ms">
          <!-- Subtle Background Number -->
          <div class="absolute top-0 right-0 text-[140px] md:text-[160px] font-black text-primary/[0.03] leading-none -mt-6 -mr-4 pointer-events-none">
            ${serviceNumber}
 </div>
          
          <!-- Icon -->
          <div class="relative z-10 mb-5">
            <div class="w-14 h-14 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center shadow-xl scale-110">
              <i class="fas ${service.icon} text-2xl text-white"></i>
            </div>
 </div>
 
          <!-- Content -->
 <div class="relative z-10">
            <h3 class="text-xl md:text-2xl font-bold text-primary mb-2 leading-relaxed">
     ${service.title}
   </h3>
   ${service.subtitle ? `
              <p class="text-sm text-primary font-semibold uppercase tracking-wide mb-3">
       ${service.subtitle}
     </p>
   ` : ''}
            <p class="text-gray-700 text-xs md:text-sm leading-relaxed">
     ${service.description}
   </p>
 </div>
 
          <!-- Background -->
          <div class="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-light/5 pointer-events-none"></div>
    </div>
  `;
    }).join('')}
  </div>
`;

servicesContainer.innerHTML = serviceGrid;
 
// Projects data is loaded from js/projects.js
// The projects array is now defined in a separate file for easier maintenance
 
// Projects Section - New Grid Layout
const projectsGrid = document.getElementById('projects-grid');
const projectsMobileGrid = document.getElementById('projects-mobile-grid');
const featuredProjectContainer = document.getElementById('featured-project-container');
const projectFiltersContainer = document.getElementById('project-filters');
const projectsEmpty = document.getElementById('projects-empty');
let currentFilter = 'all';

// Get unique categories from projects
function getUniqueCategories() {
  const allCategories = [];
  projects.forEach(project => {
    if (project.categories && Array.isArray(project.categories)) {
      allCategories.push(...project.categories);
    }
  });
  return [...new Set(allCategories)].sort();
}

// Get project categories (always returns an array)
function getProjectCategories(project) {
  return project.categories && Array.isArray(project.categories) ? project.categories : [];
}

// Create filter buttons
function renderFilters() {
  if (!projectFiltersContainer) return;
  
  const categories = getUniqueCategories();
  const filtersHTML = categories.map(category => `
    <button class="filter-btn px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 bg-white text-primary border-2 border-gray-200 hover:border-primary hover:shadow-lg transform hover:scale-105" data-filter="${category}">
      ${category}
    </button>
  `).join('');
  
  projectFiltersContainer.innerHTML = `
    <button class="filter-btn active px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 bg-primary text-white shadow-lg hover:shadow-xl transform hover:scale-105" data-filter="all">
      Alle Projecten
    </button>
    ${filtersHTML}
  `;
  
  // Add event listeners
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      renderProjects();
    });
  });
}

// Create featured project hero
function createFeaturedProject(project) {
  const imageSrc = project.previewImage || project.images[project.previewImageIndex || 0].src;
  
  return `
    <div class="featured-project group" onclick="openProjectModal(${project.id})">
      <div class="grid md:grid-cols-2 gap-0 h-full min-h-[400px] md:min-h-[500px]">
        <!-- Image/Video Section -->
        <div class="relative overflow-hidden h-full">
          ${project.previewVideo ? `
            <video class="w-full h-full object-cover" autoplay muted loop playsinline>
         <source src="${project.previewVideo}" type="video/mp4">
       </video>
          ` : `
            <img src="${imageSrc}" alt="${project.title}" class="w-full h-full object-cover" loading="eager">
          `}
          <div class="absolute inset-0 bg-gradient-to-r from-primary/15 via-primary/8 to-transparent"></div>
          
          <!-- Badges - positioned at same height to align -->
          <div class="absolute top-6 left-6 right-6 z-10 flex items-center justify-between pointer-events-none">
            <span class="category-tag pointer-events-auto">${getProjectCategories(project)[0] || 'Project'}</span>
            <span class="project-badge ${project.status === 'Voltooid' ? 'bg-green-500/90 text-white' : 'bg-yellow-500/90 text-white'} pointer-events-auto">
       ${project.status}
       </span>
          </div>
   </div>
 
        <!-- Content Section -->
        <div class="p-8 md:p-12 flex flex-col justify-center text-white bg-gradient-to-br from-primary to-primary-dark h-full">
          <div class="flex items-center gap-2 mb-4 text-white/80">
            <span class="text-2xl">${project.flag}</span>
            <span class="text-sm font-medium">${project.location}</span>
          </div>
          <h3 class="text-3xl md:text-4xl font-bold mb-4 group-hover:text-primary-light transition-colors">
            ${project.title}
          </h3>
          <p class="text-white/90 text-lg leading-relaxed mb-6 line-clamp-3">
            ${project.description}
          </p>
          <div class="flex flex-wrap gap-2 mb-6">
            ${project.tasks.slice(0, 3).map(task => `
              <span class="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">${task}</span>
            `).join('')}
            ${project.tasks.length > 3 ? `<span class="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">+${project.tasks.length - 3} meer</span>` : ''}
          </div>
          <div class="flex items-center gap-2 text-white/80 group-hover:text-white transition-colors">
            <span class="font-medium">Bekijk details</span>
            <i class="fas fa-arrow-right group-hover:translate-x-2 transition-transform"></i>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Create modern project card
function createModernProjectCard(project, index) {
  const imageSrc = project.previewImage || project.images[project.previewImageIndex || 0].src;
  
  return `
    <div class="modern-project-card" onclick="openProjectModal(${project.id})" style="animation-delay: ${index * 0.1}s">
      <!-- Image -->
      <div class="project-card-image h-48 overflow-hidden">
        ${project.previewVideo ? `
          <video class="w-full h-full object-cover" autoplay muted loop playsinline>
            <source src="${project.previewVideo}" type="video/mp4">
          </video>
        ` : `
          <img src="${imageSrc}" alt="${project.title}" class="w-full h-full object-cover" loading="lazy">
        `}
        <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        
        <!-- Badge -->
        <div class="absolute top-4 right-4">
          <span class="project-badge ${project.status === 'Voltooid' ? 'bg-green-500/90 text-white' : 'bg-yellow-500/90 text-white'}">
            ${project.status}
     </span>
       </div>
     </div>
    
      <!-- Content -->
      <div class="p-6">
        <div class="flex items-center justify-between mb-3">
          <span class="category-tag">${getProjectCategories(project)[0] || 'Project'}</span>
          <span class="text-lg">${project.flag}</span>
        </div>
        
        <h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
       ${project.title}
     </h3>
        
        <p class="text-gray-500 text-sm mb-3 flex items-center">
          <i class="fas fa-map-marker-alt mr-2 text-primary"></i>
          ${project.location}
        </p>
        
        <p class="text-gray-600 text-sm leading-relaxed line-clamp-2 mb-4">
       ${project.description}
     </p>
        
        <div class="flex items-center justify-between pt-4 border-t border-gray-100">
          <span class="text-primary text-sm font-medium">Bekijk details</span>
          <i class="fas fa-arrow-right text-primary group-hover:translate-x-1 transition-transform"></i>
   </div>
      </div>
    </div>
  `;
}

// Render projects based on filter
function renderProjects() {
  if (!projectsGrid || !featuredProjectContainer) return;
  
  const filteredProjects = currentFilter === 'all' 
    ? projects 
    : projects.filter(p => {
        const projectCategories = getProjectCategories(p);
        return projectCategories.includes(currentFilter);
      });
  
  if (filteredProjects.length === 0) {
    projectsGrid.innerHTML = '';
    if (projectsMobileGrid) projectsMobileGrid.innerHTML = '';
    featuredProjectContainer.innerHTML = '';
    if (projectsEmpty) projectsEmpty.classList.remove('hidden');
    return;
  }
  
  if (projectsEmpty) projectsEmpty.classList.add('hidden');
  
  // Featured project (first one) - Only show on "Alle Projecten" filter, Desktop only
  if (currentFilter === 'all' && filteredProjects.length > 0) {
    const featured = filteredProjects[0];
    if (featuredProjectContainer) {
      featuredProjectContainer.innerHTML = createFeaturedProject(featured);
    }
    
    // Grid projects (rest) - Desktop
    const gridProjects = filteredProjects.slice(1);
    if (projectsGrid) {
      projectsGrid.innerHTML = gridProjects.map((project, index) => 
        createModernProjectCard(project, index)
      ).join('');
    }
  } else {
    // No featured project for category filters - show all in grid
    if (featuredProjectContainer) {
      featuredProjectContainer.innerHTML = '';
    }
    if (projectsGrid) {
      projectsGrid.innerHTML = filteredProjects.map((project, index) => 
        createModernProjectCard(project, index)
      ).join('');
    }
  }
  
  // Mobile horizontal scroller - All projects (always show all, no featured on mobile)
  if (projectsMobileGrid) {
    projectsMobileGrid.innerHTML = filteredProjects.map((project, index) => 
      createMobileProjectCard(project, index)
    ).join('');
  }
  
  // Animate cards
  setTimeout(() => {
    document.querySelectorAll('.modern-project-card').forEach(card => {
      card.classList.add('visible');
    });
  }, 100);
}

// Create mobile project card for horizontal scroller - Completely redesigned
function createMobileProjectCard(project, index) {
  const imageSrc = project.previewImage || project.images[project.previewImageIndex || 0].src;
  
  return `
    <div onclick="openProjectModal(${project.id})" 
         style="flex-shrink: 0; width: 320px; margin-right: 1rem; border-radius: 1.5rem; overflow: hidden; cursor: pointer; background: linear-gradient(135deg, #417580 0%, #2d5561 100%); box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 4px 10px -2px rgba(0, 0, 0, 0.15); border: 2px solid rgba(255, 255, 255, 0.1);">
      <!-- Image -->
      <div style="position: relative; height: 192px; overflow: hidden; background: #f3f4f6;">
        ${project.previewVideo ? `
          <video style="width: 100%; height: 100%; object-fit: cover;" autoplay muted loop playsinline>
            <source src="${project.previewVideo}" type="video/mp4">
          </video>
        ` : `
          <img src="${imageSrc}" alt="${project.title}" style="width: 100%; height: 100%; object-fit: cover;" loading="lazy">
        `}
        <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent);"></div>
        
        <!-- Badge -->
        <div style="position: absolute; top: 1rem; right: 1rem;">
          <span style="padding: 0.5rem 1rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 600; ${project.status === 'Voltooid' ? 'background: rgba(34, 197, 94, 0.9);' : 'background: rgba(234, 179, 8, 0.9);'} color: white; backdrop-filter: blur(10px);">
            ${project.status}
     </span>
        </div>
      </div>
      
      <!-- Content -->
      <div style="padding: 1.5rem;">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem;">
          <span style="display: inline-flex; align-items: center; padding: 0.375rem 0.75rem; border-radius: 0.5rem; font-size: 0.75rem; font-weight: 500; background: rgba(255, 255, 255, 0.2); color: white;">${getProjectCategories(project)[0] || 'Project'}</span>
          <span style="font-size: 1.125rem; color: white;">${project.flag}</span>
        </div>
        
        <h3 style="font-size: 1.25rem; font-weight: 700; color: white; margin-bottom: 0.5rem; line-height: 1.3;">
          ${project.title}
        </h3>
        
        <p style="color: rgba(255, 255, 255, 0.8); font-size: 0.875rem; margin-bottom: 0.75rem; display: flex; align-items: center;">
          <i class="fas fa-map-marker-alt" style="margin-right: 0.5rem; color: #5a9aa8;"></i>
          ${project.location}
        </p>
        
        <p style="color: rgba(255, 255, 255, 0.8); font-size: 0.875rem; line-height: 1.5; margin-bottom: 1rem; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
          ${project.description}
        </p>
        
        <div style="display: flex; align-items: center; justify-content: space-between; padding-top: 1rem; border-top: 1px solid rgba(255, 255, 255, 0.2);">
          <span style="color: #5a9aa8; font-size: 0.875rem; font-weight: 500;">Bekijk details</span>
          <i class="fas fa-arrow-right" style="color: #5a9aa8; transition: transform 0.3s;"></i>
         </div>
       </div>
         </div>
  `;
}

// Initialize projects section
function initProjectsSection() {
  renderFilters();
  renderProjects();
}

// Initialize when projects are loaded
function waitForProjects() {
  if (typeof projects !== 'undefined' && projects.length > 0) {
    initProjectsSection();
    initMobileScrollButtons();
  } else {
    // Wait a bit and try again if projects.js hasn't loaded yet
    setTimeout(waitForProjects, 100);
  }
}

// Initialize mobile scroll buttons
function initMobileScrollButtons() {
  const mobileScrollContainer = document.getElementById('projects-mobile-scroll');
  const mobileScrollLeftBtn = document.getElementById('mobile-scroll-left-btn');
  const mobileScrollRightBtn = document.getElementById('mobile-scroll-right-btn');
  
  if (!mobileScrollContainer || !mobileScrollLeftBtn || !mobileScrollRightBtn) return;
  
  // Scroll functions
  const scrollAmount = 340; // 320px card + 1rem gap
  
  mobileScrollLeftBtn.addEventListener('click', () => {
    mobileScrollContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });
  
  mobileScrollRightBtn.addEventListener('click', () => {
    mobileScrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });
  
  // Update button states based on scroll position
  const updateMobileScrollButtons = () => {
    const { scrollLeft, scrollWidth, clientWidth } = mobileScrollContainer;
    const maxScroll = scrollWidth - clientWidth;
    
    // Left button
    if (scrollLeft > 10) {
      mobileScrollLeftBtn.style.opacity = '1';
      mobileScrollLeftBtn.disabled = false;
      mobileScrollLeftBtn.style.cursor = 'pointer';
    } else {
      mobileScrollLeftBtn.style.opacity = '0.5';
      mobileScrollLeftBtn.disabled = true;
      mobileScrollLeftBtn.style.cursor = 'not-allowed';
    }
    
    // Right button
    if (scrollLeft < maxScroll - 10) {
      mobileScrollRightBtn.style.opacity = '1';
      mobileScrollRightBtn.disabled = false;
      mobileScrollRightBtn.style.cursor = 'pointer';
    } else {
      mobileScrollRightBtn.style.opacity = '0.5';
      mobileScrollRightBtn.disabled = true;
      mobileScrollRightBtn.style.cursor = 'not-allowed';
    }
  };
  
  mobileScrollContainer.addEventListener('scroll', updateMobileScrollButtons);
  updateMobileScrollButtons(); // Initial state
}

// Start initialization
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', waitForProjects);
} else {
  waitForProjects();
}

// Function to create project card HTML for desktop (horizontal scroller)
function createDesktopProjectCard(project, index) {
  return `
    <div class="group bg-white/10 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer w-80 flex-shrink-0 flex flex-col"
    onclick="openProjectModal(${project.id})">
 
 <!-- Project Image/Video -->
 <div class="relative h-48 overflow-hidden flex-shrink-0">
   ${project.previewImage ? `
     <img src="${project.previewImage}" alt="${project.title}" 
          class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="${index < 3 ? 'eager' : 'lazy'}"
          fetchpriority="${index < 3 ? 'high' : 'auto'}">
   ` : project.previewVideo ? `
     <div class="w-full h-full relative">
       <img src="${project.images[project.previewImageIndex || 0].src}" alt="${project.images[project.previewImageIndex || 0].alt}" 
            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            loading="${index < 3 ? 'eager' : 'lazy'}"
            fetchpriority="${index < 3 ? 'high' : 'auto'}"
            data-video-src="${project.previewVideo}">
       <video class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 pointer-events-none hidden" 
              muted loop autoplay playsinline preload="${index < 3 ? 'auto' : 'none'}">
         <source src="${project.previewVideo}" type="video/mp4">
       </video>
     </div>
   ` : `
     <img src="${project.images[project.previewImageIndex || 0].src}" alt="${project.images[project.previewImageIndex || 0].alt}" 
          class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="${index < 3 ? 'eager' : 'lazy'}"
          fetchpriority="${index < 3 ? 'high' : 'auto'}">
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
       ${getProjectCategories(project)[0] || 'Project'}
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

// OLD MOBILE CARD FUNCTION REMOVED - Using new createMobileProjectCard at line 456

// Old rendering code removed - now using initProjectsSection() instead

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
                  class="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy">
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
 <img src="${src}" alt="${alt}" class="max-w-full max-h-full object-contain rounded-lg" loading="eager">
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

 // Contact Info Toggle Function - Removed as cards are now always visible

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
    <img src="${partner.img}" alt="${partner.alt}" class="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition duration-500" loading="lazy">
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
 
// WhatsApp Form Submit - Removed as form was replaced with professional info

// Expose functions for onclick handlers
window.openProjectModal = openProjectModal;
window.closeProjectModal = closeProjectModal;
window.openImageLightbox = openImageLightbox;
window.closeImageLightbox = closeImageLightbox;
window.showCertificatePreview = showCertificatePreview;
window.closeCertificateModal = closeCertificateModal;
window.openCertificateLightbox = openCertificateLightbox;
window.closeCertificateLightbox = closeCertificateLightbox;
window.handlePartnerClick = handlePartnerClick;