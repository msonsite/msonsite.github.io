   
   // Intersection Observer for lazy loading videos in project cards
   // Only for cards that are not immediately visible
  // Optimized with reduced rootMargin to prevent excessive checks
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
      rootMargin: '200px' // Reduced from 500px to prevent excessive checks during scroll
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
   
   // Scroll fade-in animations for section titles - Optimized with throttling
   if ('IntersectionObserver' in window) {
     const scrollFadeObserver = new IntersectionObserver((entries, observer) => {
       entries.forEach(entry => {
         if (entry.isIntersecting) {
           const container = entry.target;
           const items = container.querySelectorAll('.scroll-fade-in-item');
           // Use requestAnimationFrame to batch DOM updates
           requestAnimationFrame(() => {
             items.forEach(item => {
               item.classList.add('visible');
             });
           });
           observer.unobserve(container);
         }
       });
     }, {
       rootMargin: '50px', // Reduced from -100px to trigger earlier but less aggressively
       threshold: 0.01 // Lower threshold for better performance
     });
     
     // Observe all section titles with scroll-fade-in class
     document.querySelectorAll('.scroll-fade-in').forEach(section => {
       scrollFadeObserver.observe(section);
     });
   }
 
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
// Optimized scroll handler with requestAnimationFrame throttling to prevent lag
let scrollRafId = null;
window.addEventListener('scroll', function() {
  // Cancel previous RAF if still pending
  if (scrollRafId !== null) {
    cancelAnimationFrame(scrollRafId);
  }
  
  // Throttle with requestAnimationFrame for smooth 60fps updates
  scrollRafId = requestAnimationFrame(() => {
  const scrollY = window.scrollY;
  const floatingElements = document.querySelectorAll('.animate-float');
    
    // Batch DOM reads and writes to prevent forced reflows
  floatingElements.forEach((element, index) => {
    const speed = 0.5 + (index * 0.1);
    const yPos = -(scrollY * speed);
    element.style.transform = `translateY(${yPos}px)`;
  });
    
    scrollRafId = null;
});
}, { passive: true }); // Use passive listener for better scroll performance
 
// Services Data
const services = [
  {
    title: "Inspecties",
    subtitle: "sneller, veiliger, slimmer",
    description: "Inspecties op moeilijk bereikbare plaatsen, van gebouwen tot industriële installaties. Betrouwbare gegevens zonder risico voor personeel.",
    icon: "fa-search"
  },
  {
    title: "Monitoring",
    subtitle: "i.k.v. waterbeheersing",
    description: "Preventieve inspecties en continue monitoring. Drones maken waterbeheersing slimmer, veiliger en efficiënter.",
    icon: "fa-water"
  },
  {
    title: "Opmetingen",
    subtitle: "met fotogrammetrie",
    description: "Breng uw project snel en nauwkeurig in kaart. Inclusief as-built plannen, oppervlaktebepalingen en volumeberekeningen. Bespaar tijd én kosten.",
    icon: "fa-ruler-combined"
  },
  {
    title: "Plaatsbeschrijving",
    subtitle: "gedocumenteerd",
    description: "Gedetailleerde plaatsbeschrijvingen met dronebeelden voor een volledig overzicht van de omgeving, ideaal om de situatie voor en na een project vast te leggen.",
    icon: "fa-file-alt"
  },
  {
    title: "Visuals",
    subtitle: "unieke beelden",
    description: "Leg uw project vast met professionele luchtfoto's en video's die uw visie tot leven brengen.",
    icon: "fa-camera"
  },
  {
    title: "Werfopvolging",
    subtitle: "vanuit de lucht",
    description: "Dronebeelden geven een duidelijk overzicht van uw werf, met overzichtelijke kaarten, 3D-modellen en rapportages.",
    icon: "fa-hard-hat"
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
            <img src="${imageSrc}" alt="${project.title}" class="w-full h-full object-cover" loading="eager" fetchpriority="high" decoding="async" width="800" height="500">
          `}
          <div class="absolute inset-0 bg-gradient-to-r from-primary/15 via-primary/8 to-transparent"></div>
          
          <!-- Badge - Status only (category tag removed) -->
          <div class="absolute top-6 right-6 z-10 pointer-events-none">
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
          <img src="${imageSrc}" alt="${project.title}" class="w-full h-full object-cover" loading="lazy" decoding="async" width="400" height="192">
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
          <img src="${imageSrc}" alt="${project.title}" style="width: 100%; height: 100%; object-fit: cover;" loading="lazy" decoding="async">
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
  // Optimized with throttling to prevent scroll lag
  let updateRafId = null;
  const updateMobileScrollButtons = () => {
    // Cancel previous RAF if still pending
    if (updateRafId !== null) {
      cancelAnimationFrame(updateRafId);
    }
    
    // Throttle with requestAnimationFrame for smooth updates
    updateRafId = requestAnimationFrame(() => {
      // Cache all layout reads in variables first (batch reads)
      const scrollLeft = mobileScrollContainer.scrollLeft;
      const scrollWidth = mobileScrollContainer.scrollWidth;
      const clientWidth = mobileScrollContainer.clientWidth;
      const maxScroll = scrollWidth - clientWidth;
      
      // Calculate button states (no DOM reads after this point)
      const canScrollLeft = scrollLeft > 10;
      const canScrollRight = scrollLeft < maxScroll - 10;
      
      // Batch all DOM writes together
      // Left button updates
      const leftOpacity = canScrollLeft ? '1' : '0.5';
      const leftDisabled = !canScrollLeft;
      const leftCursor = canScrollLeft ? 'pointer' : 'not-allowed';
      
      // Right button updates
      const rightOpacity = canScrollRight ? '1' : '0.5';
      const rightDisabled = !canScrollRight;
      const rightCursor = canScrollRight ? 'pointer' : 'not-allowed';
      
      // Apply all DOM writes in a single batch
      mobileScrollLeftBtn.style.opacity = leftOpacity;
      mobileScrollLeftBtn.disabled = leftDisabled;
      mobileScrollLeftBtn.style.cursor = leftCursor;
      
      mobileScrollRightBtn.style.opacity = rightOpacity;
      mobileScrollRightBtn.disabled = rightDisabled;
      mobileScrollRightBtn.style.cursor = rightCursor;
      
      updateRafId = null;
    });
  };
  
  // Use passive listener for better scroll performance
  mobileScrollContainer.addEventListener('scroll', updateMobileScrollButtons, { passive: true });
  // Defer initial state update to avoid forced reflow after DOM writes
  requestAnimationFrame(() => {
    updateMobileScrollButtons();
  });
}

// Start initialization
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', waitForProjects);
} else {
  waitForProjects();
}

// Removed unused createDesktopProjectCard function - not referenced anywhere

// Old rendering code removed - now using initProjectsSection() instead

// Project Modal Function - Completely Redesigned
function openProjectModal(projectId) {
  const project = projects.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 md:p-8';
  modal.style.cssText = 'animation: fadeIn 0.2s ease-out; will-change: opacity;';
  modal.onclick = function(e) {
    if (e.target === modal) {
 closeProjectModal();
    }
  };
  
  modal.innerHTML = `
    <div class="bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[95vh] overflow-hidden flex flex-col" style="animation: slideUp 0.3s ease-out;">
      <!-- Clean Header with Close Button -->
      <div class="flex items-center justify-between p-6 md:p-8 border-b border-gray-100 relative">
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-3 mb-3 flex-wrap">
            <span class="category-tag flex-shrink-0">${getProjectCategories(project)[0] || 'Project'}</span>
       </div>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-3">${project.title}</h2>
          <div class="flex items-center gap-2 text-gray-600">
            <span class="text-2xl">${project.flag}</span>
            <span class="text-base font-medium">${project.location}</span>
     </div>
        </div>
        <button onclick="closeProjectModal()" class="ml-6 p-2 rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors" aria-label="Sluiten">
          <i class="fas fa-times text-xl"></i>
     </button>
 </div>
 
      <!-- Scrollable Content Area -->
      <div class="flex-1 overflow-y-auto" style="scrollbar-width: thin; scrollbar-color: #e5e7eb transparent; will-change: scroll-position; transform: translateZ(0); -webkit-overflow-scrolling: touch;">
        <div class="p-6 md:p-12 space-y-12">
          
          <!-- Project Description Section -->
          <section>
            <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Projectbeschrijving</h3>
            <p class="text-base md:text-lg text-gray-700 leading-relaxed max-w-4xl">${project.description}</p>
          </section>
          
          <!-- Tasks Section -->
          <section>
            <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Uitgevoerde opdrachten</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
       ${project.tasks.map(task => `
                <div class="flex items-start p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-primary/30 hover:bg-primary/5 transition-colors duration-200">
                  <div class="flex-shrink-0 mt-0.5">
                    <div class="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <i class="fas fa-check text-primary text-sm"></i>
                    </div>
                  </div>
                  <p class="ml-4 text-base md:text-lg text-gray-700 leading-relaxed">${task}</p>
                </div>
       `).join('')}
       </div>
          </section>
          
          <!-- Images Gallery Section -->
          ${project.id !== 9 ? `
          <section>
            <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Projectbeelden</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
       ${project.images.map((img, index) => `
                <div class="group relative bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-primary/50 shadow-sm hover:shadow-lg transition-colors duration-200 cursor-pointer" onclick="openImageLightbox('${img.src}', '${img.alt || ''}')" style="will-change: transform;">
                  <div class="relative aspect-video overflow-hidden bg-gray-100">
             <img src="${img.src}" alt="${img.alt || ''}" 
                         class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                         loading="lazy"
                         decoding="async"
                         style="will-change: transform; transform: translateZ(0);">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                    <div class="absolute top-4 right-4 bg-white/90 rounded-full p-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg">
                      <i class="fas fa-expand text-primary text-sm"></i>
     </div>
       </div>
                  ${img.caption ? `
                    <div class="p-4 md:p-5">
                      <p class="text-sm md:text-base font-medium text-gray-800 group-hover:text-primary transition-colors leading-relaxed">${img.caption}</p>
     </div>
                  ` : ''}
       </div>
       `).join('')}
     </div>
          </section>
          ` : ''}
          
       </div>
     </div>
       </div>
    
    <style>
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      @keyframes slideUp {
        from { 
          opacity: 0;
          transform: translateY(20px) scale(0.95);
        }
        to { 
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }
      .fixed.inset-0::-webkit-scrollbar {
        width: 8px;
      }
      .fixed.inset-0::-webkit-scrollbar-track {
        background: transparent;
      }
      .fixed.inset-0::-webkit-scrollbar-thumb {
        background: #e5e7eb;
        border-radius: 4px;
      }
      .fixed.inset-0::-webkit-scrollbar-thumb:hover {
        background: #d1d5db;
      }
    </style>
  `;
  
  document.body.appendChild(modal);
  
  // Prevent body scroll when modal is open - simpler approach without position:fixed
  const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
  modal.dataset.scrollY = scrollY;
  
  // Prevent scrolling without changing position - this prevents jump
  document.body.style.overflow = 'hidden';
  document.documentElement.style.overflow = 'hidden';
  
  // Store current scroll position in data attribute for restoration
  document.body.dataset.modalScrollY = scrollY;
}

// Close Modal Function
function closeProjectModal() {
  const modal = document.querySelector('.fixed.inset-0.bg-black\\/70') || document.querySelector('.fixed.inset-0.bg-black\\/80');
  if (modal) {
    // Get stored scroll position
    const scrollY = modal.dataset.scrollY ? parseInt(modal.dataset.scrollY) : 
                    (document.body.dataset.modalScrollY ? parseInt(document.body.dataset.modalScrollY) : 0);
    
    // Fade out modal first
    modal.style.opacity = '0';
    modal.style.transition = 'opacity 0.15s ease-out';
    
    // Wait for fade, then restore everything
    setTimeout(() => {
      // Restore overflow styles
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      
      // Remove data attribute
      delete document.body.dataset.modalScrollY;
      
      // Remove modal from DOM
    modal.remove();
      
      // Restore scroll position synchronously - no delay, no animation
      // Set scroll position directly on both elements to prevent any jump
      document.documentElement.scrollTop = scrollY;
      document.body.scrollTop = scrollY;
      
      // Also use scrollTo as backup
      if (window.scrollTo) {
        window.scrollTo(0, scrollY);
      }
    }, 150); // Match fade duration
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
 
// Partners data is loaded from partners.js
 
// Simple Infinite Carousel Implementation
function initInfiniteCarousel() {
 const partnersTrack = document.getElementById('partners-track');
 if (!partnersTrack) return;
 
 // Function to create partner HTML with clickable links
 function createPartnerHTML() {
   return partners.map(partner => `
<div class="partner-item mx-3 sm:mx-4 md:mx-6">
  <a href="${partner.url}" target="_blank" rel="noopener noreferrer" 
     class="block bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 sm:p-6 transform hover:scale-105 border border-gray-100 w-48 h-24 sm:w-56 sm:h-28 md:w-64 md:h-32 flex items-center justify-center cursor-pointer">
    <img src="${partner.img}" alt="${partner.alt}" class="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition duration-500" loading="lazy" decoding="async" width="200" height="100">
  </a>
  </div>
`).join('');
 }
 
 // Initial render
 const partnerHTML = createPartnerHTML();
 partnersTrack.innerHTML = partnerHTML + partnerHTML;
 
 // Handle window resize to re-render
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

// Lazy load projects section background image - Optimized
function initProjectsBackground() {
  const projectsSection = document.getElementById('projecten');
  const bgImageDiv = document.getElementById('projects-bg-image');
  
  if (!projectsSection || !bgImageDiv) return;
  
  // Create image element for preloading
  const img = new Image();
  let loaded = false;
  
  // Intersection Observer to load when section is near viewport
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !loaded) {
        loaded = true;
        // Start loading the image
        img.src = 'images/assets/projectsectionbackground.png';
        
        // Once loaded, apply to background and fade in
        img.onload = function() {
          requestAnimationFrame(() => {
            bgImageDiv.style.backgroundImage = `url('${img.src}')`;
            bgImageDiv.style.opacity = '1';
          });
        };
        
        // Stop observing after loading starts
        observer.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: '100px', // Reduced from 200px
    threshold: 0.01
  });
  
  observer.observe(projectsSection);
}

// Initialize background loading
initProjectsBackground();

// Removed unused project scroller functionality - elements don't exist in HTML
 
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