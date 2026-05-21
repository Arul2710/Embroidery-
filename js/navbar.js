document.addEventListener('DOMContentLoaded', function () {
  const navbarHTML = `
  <style>
    #mobileMenu .mobile-nav-link:hover,
    #mobileMenu button:hover,
    #mobileMenu a:hover {
      color: var(--gold) !important;
    }
    #mobileMenu .mobile-nav-link:hover i:first-child,
    #mobileMenu button:hover i:first-child,
    #mobileMenu a:hover i:first-child {
      color: var(--gold) !important;
    }
  </style>
  <nav id="mainNavbar" class="fixed top-0 left-0 w-full z-[9999]" style="background: var(--glass-bg); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border-bottom: 1px solid var(--glass-border); transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);" dir="ltr">
    <div class="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 md:h-20">
        <!-- Logo -->
        <a href="index.html" class="flex items-center gap-3 group">
          <div class="w-10 h-10 rounded-lg gradient-gold flex items-center justify-center text-charcoal font-bold text-lg transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"/></svg>
          </div>
          <span class="text-base font-bold tracking-wide" style="color: var(--gold);">Embroidery</span>
        </a>

        <!-- Desktop Navigation - Hidden on mobile/tablet -->
        <div id="desktopNav" class="hidden xl:flex items-center gap-1">
          <div class="relative group" data-nav="home">
            <button class="nav-link px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 hover:text-gold flex items-center gap-1.5 relative">
              Home
              <i class="fas fa-chevron-down text-xs transition-transform duration-300 group-hover:rotate-180"></i>
            </button>
            <div class="dropdown-menu absolute top-full left-0 mt-2 w-48 rounded-2xl p-2 shadow-hard opacity-0 invisible translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0" style="background: var(--card-bg); border: 1px solid var(--border-color);">
              <a href="index.html" class="block px-4 py-3 rounded-xl text-sm transition-all duration-300 hover:bg-gold hover:text-charcoal hover:pl-6">Home 1</a>
              <a href="home2.html" class="block px-4 py-3 rounded-xl text-sm transition-all duration-300 hover:bg-gold hover:text-charcoal hover:pl-6">Home 2</a>
            </div>
          </div>
          <a href="about.html" class="nav-link px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 hover:text-gold">About</a>
          <a href="services.html" class="nav-link px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 hover:text-gold">Services</a>
          <a href="portfolio.html" class="nav-link px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 hover:text-gold">Portfolio</a>
          <a href="pricing.html" class="nav-link px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 hover:text-gold">Pricing</a>
          <a href="contact.html" class="nav-link px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 hover:text-gold">Contact</a>
          <div class="relative group" data-nav="dashboard">
            <button class="nav-link px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 hover:text-gold flex items-center gap-1.5">
              Dashboard
              <i class="fas fa-chevron-down text-xs transition-transform duration-300 group-hover:rotate-180"></i>
            </button>
            <div class="dropdown-menu absolute top-full left-0 mt-2 w-56 rounded-2xl p-2 shadow-hard opacity-0 invisible translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0" style="background: var(--card-bg); border: 1px solid var(--border-color);">
              <a href="admin-dashboard.html" class="block px-4 py-3 rounded-xl text-sm transition-all duration-300 hover:bg-gold hover:text-charcoal hover:pl-6">
                <div class="flex items-center gap-3">
                  <div>
                    <div class="font-medium">Admin Dashboard</div>
                  </div>
                </div>
              </a>
              <a href="user-dashboard.html" class="block px-4 py-3 rounded-xl text-sm transition-all duration-300 hover:bg-gold hover:text-charcoal hover:pl-6">
                <div class="flex items-center gap-3">
                  <div>
                    <div class="font-medium">User Dashboard</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <!-- Right side buttons - Desktop only (XL screens 1280px and above) -->
        <div class="hidden xl:flex items-center gap-2">
          <button id="rtlToggle" class="rtl-toggle" title="Toggle RTL/LTR">
            <i class="fas fa-language"></i>
            <span class="text-xs font-bold">EN</span>
          </button>
          <button id="themeToggle" class="theme-toggle" title="Toggle theme">
            <i class="fas fa-sun sun-icon"></i>
            <i class="fas fa-moon moon-icon" style="display:none"></i>
          </button>
          <div class="flex items-center gap-2">
            <a href="login.html" class="px-5 py-2.5 text-sm font-medium rounded-full border border-gold text-gold hover:bg-gold hover:text-charcoal transition-all duration-300">Login</a>
            <a href="signup.html" class="px-5 py-2.5 text-sm font-medium rounded-full gradient-gold text-charcoal hover:shadow-lg hover:shadow-gold/30 transition-all duration-300">Sign Up</a>
          </div>
        </div>

        <!-- Hamburger Button - Visible on tablet and mobile (below 1280px) -->
        <div class="flex xl:hidden items-center gap-2">
          <button id="hamburgerBtn" class="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-glass-bg transition-all duration-300" style="color: var(--text-primary);">
            <i class="fas fa-bars text-xl"></i>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile/Tablet Menu -->
    <div id="mobileMenu" class="fixed top-16 md:top-20 left-0 w-full h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] translate-x-full transition-transform duration-300 ease-in-out z-[10000] overflow-y-auto" style="background: var(--card-bg); border-top: 1px solid var(--border-color);">
      <div class="p-6 space-y-3">
        <!-- Navigation Links -->
        <div class="space-y-2">
          <div class="mb-2">
            <button class="mobile-nav-link w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all duration-300" onclick="toggleMobileDropdown('homeDropdown')" style="color: var(--text-primary);">
              <span class="flex items-center gap-3">
                <i class="fas fa-home w-5" style="color: var(--gold);"></i>
                Home
              </span>
              <i class="fas fa-chevron-down text-xs transition-transform duration-300" id="homeDropdownArrow"></i>
            </button>
            <div id="homeDropdown" class="hidden pl-8 space-y-1 mt-1">
              <a href="index.html" class="block px-4 py-2.5 rounded-xl text-sm transition-all duration-300 hover:bg-gold hover:text-charcoal">Home 1</a>
              <a href="home2.html" class="block px-4 py-2.5 rounded-xl text-sm transition-all duration-300 hover:bg-gold hover:text-charcoal">Home 2</a>
            </div>
          </div>
          <a href="about.html" class="mobile-nav-link flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300" style="color: var(--text-primary);"><i class="fas fa-info-circle w-5" style="color: var(--gold);"></i>About</a>
          <a href="services.html" class="mobile-nav-link flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300" style="color: var(--text-primary);"><i class="fas fa-concierge-bell w-5" style="color: var(--gold);"></i>Services</a>
          <a href="portfolio.html" class="mobile-nav-link flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300" style="color: var(--text-primary);"><i class="fas fa-briefcase w-5" style="color: var(--gold);"></i>Portfolio</a>
          <a href="pricing.html" class="mobile-nav-link flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300" style="color: var(--text-primary);"><i class="fas fa-tags w-5" style="color: var(--gold);"></i>Pricing</a>
          <a href="contact.html" class="mobile-nav-link flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300" style="color: var(--text-primary);"><i class="fas fa-envelope w-5" style="color: var(--gold);"></i>Contact</a>
          <div class="mb-2">
            <button class="mobile-nav-link w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all duration-300" onclick="toggleMobileDropdown('dashboardDropdown')" style="color: var(--text-primary);">
              <span class="flex items-center gap-3">
                <i class="fas fa-tachometer-alt w-5" style="color: var(--gold);"></i>
                Dashboard
              </span>
              <i class="fas fa-chevron-down text-xs transition-transform duration-300" id="dashboardDropdownArrow"></i>
            </button>
            <div id="dashboardDropdown" class="hidden pl-8 space-y-1 mt-1">
              <a href="admin-dashboard.html" class="block px-4 py-2.5 rounded-xl text-sm transition-all duration-300 hover:bg-gold hover:text-charcoal">Admin Dashboard</a>
              <a href="user-dashboard.html" class="block px-4 py-2.5 rounded-xl text-sm transition-all duration-300 hover:bg-gold hover:text-charcoal">User Dashboard</a>
            </div>
          </div>
        </div>

        <!-- Mobile/Tablet Action Buttons - NO ICONS on Login/Signup -->
        <div class="border-t pt-5 mt-3" style="border-color: var(--border-color);">
          <div class="grid grid-cols-2 gap-3">
            <a href="login.html" class="flex items-center justify-center px-4 py-3 text-sm font-medium rounded-xl border border-gold text-gold hover:bg-gold hover:text-charcoal transition-all duration-300">
              Login
            </a>
            <a href="signup.html" class="flex items-center justify-center px-4 py-3 text-sm font-medium rounded-xl gradient-gold text-charcoal transition-all duration-300">
              Sign Up
            </a>
            <button id="rtlToggleMobile" class="flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300" style="border: 1px solid var(--border-color); color: var(--text-primary); background: var(--glass-bg);">
              <i class="fas fa-language"></i>
              <span class="text-xs font-bold">EN</span>
            </button>
            <button id="themeToggleMobile" class="flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300" style="border: 1px solid var(--border-color); color: var(--text-primary); background: var(--glass-bg);">
              <i class="fas fa-sun sun-icon"></i>
              <i class="fas fa-moon moon-icon" style="display:none"></i>
              <span class="text-xs font-bold ml-1">Theme</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <div class="scroll-progress" id="scrollProgress"></div>
  `;

  const navbarContainer = document.getElementById('navbar');
  if (navbarContainer) {
    navbarContainer.innerHTML = navbarHTML;
    initNavbar();
  }
});

function initNavbar() {
  const themeToggle = document.getElementById('themeToggle');
  const themeToggleMobile = document.getElementById('themeToggleMobile');
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const rtlToggle = document.getElementById('rtlToggle');
  const rtlToggleMobile = document.getElementById('rtlToggleMobile');
  const scrollProgress = document.getElementById('scrollProgress');

  // Theme toggle
  if (themeToggle) {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    themeToggle.addEventListener('click', function () {
      toggleTheme();
    });
  }

  if (themeToggleMobile) {
    themeToggleMobile.addEventListener('click', function () {
      toggleTheme();
    });
  }

  // Hamburger menu toggle - Works on all tablet dimensions
  if (hamburgerBtn && mobileMenu) {
    hamburgerBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      const isOpen = !mobileMenu.classList.contains('translate-x-full');
      if (isOpen) {
        mobileMenu.classList.add('translate-x-full');
        hamburgerBtn.innerHTML = '<i class="fas fa-bars text-xl"></i>';
        document.body.style.overflow = '';
      } else {
        mobileMenu.classList.remove('translate-x-full');
        hamburgerBtn.innerHTML = '<i class="fas fa-times text-xl"></i>';
        document.body.style.overflow = 'hidden';
      }
    });
  }

  // Close mobile menu when clicking outside
  document.addEventListener('click', function (e) {
    if (mobileMenu && hamburgerBtn && !mobileMenu.classList.contains('translate-x-full')) {
      if (!mobileMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
        mobileMenu.classList.add('translate-x-full');
        hamburgerBtn.innerHTML = '<i class="fas fa-bars text-xl"></i>';
        document.body.style.overflow = '';
      }
    }
  });

  // Handle resize for all dimensions (1180x820, 1204x768, 1024x1366)
  function handleResize() {
    const width = window.innerWidth;
    // Show hamburger on screens below 1280px (includes all tablet dimensions)
    if (width < 1280) {
      if (mobileMenu && !mobileMenu.classList.contains('translate-x-full')) {
        // If menu is open on resize, close it
        mobileMenu.classList.add('translate-x-full');
        if (hamburgerBtn) {
          hamburgerBtn.innerHTML = '<i class="fas fa-bars text-xl"></i>';
        }
        document.body.style.overflow = '';
      }
    }
  }

  window.addEventListener('resize', handleResize);
  
  // Initial call to set correct state
  handleResize();

  // RTL Toggle
  if (rtlToggle) {
    const savedRTL = localStorage.getItem('rtl') || 'ltr';
    document.documentElement.dir = savedRTL;
    updateRTLIcon(rtlToggle, savedRTL);

    rtlToggle.addEventListener('click', function () {
      toggleRTL();
    });
  }

  if (rtlToggleMobile) {
    const savedRTL = localStorage.getItem('rtl') || 'ltr';
    updateRTLIcon(rtlToggleMobile, savedRTL);

    rtlToggleMobile.addEventListener('click', function () {
      toggleRTL();
    });
  }

  // Scroll progress bar
  if (scrollProgress) {
    window.addEventListener('scroll', function () {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      scrollProgress.style.width = progress + '%';
    });
  }

  // Active link highlighting
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';

  const activePages = {
    'index.html': { group: 'home' },
    'home2.html': { group: 'home' },
    'about.html': {},
    'services.html': {},
    'portfolio.html': {},
    'pricing.html': {},
    'contact.html': {},
    'admin-dashboard.html': { group: 'dashboard' },
    'user-dashboard.html': { group: 'dashboard' }
  };

  const activeInfo = activePages[currentPath];

  if (activeInfo) {
    // 1. Highlight desktop direct nav links (About, Services, etc.)
    document.querySelectorAll('#desktopNav a.nav-link[href]').forEach(link => {
      if (link.getAttribute('href') === currentPath) {
        link.classList.add('text-gold');
      }
    });

    // 2. Highlight desktop dropdown groups (Home, Dashboard)
    if (activeInfo.group) {
      const group = document.querySelector(`#desktopNav [data-nav="${activeInfo.group}"]`);
      if (group) {
        // Highlight parent dropdown button
        const parentBtn = group.querySelector('button.nav-link');
        if (parentBtn) parentBtn.classList.add('text-gold');
        // Highlight child link in dropdown
        const childLink = group.querySelector(`.dropdown-menu a[href="${currentPath}"]`);
        if (childLink) {
          childLink.style.background = 'rgba(201, 168, 76, 0.15)';
          childLink.style.color = 'var(--gold)';
          childLink.style.fontWeight = '700';
        }
      }
    }

    // 3. Highlight mobile nav
    const mobileNav = document.querySelector('#mobileMenu .space-y-2');
    if (mobileNav) {
      // Highlight direct mobile nav links (About, Services, etc.)
      mobileNav.querySelectorAll('a.mobile-nav-link[href]').forEach(link => {
        if (link.getAttribute('href') === currentPath) {
          link.style.background = 'rgba(201, 168, 76, 0.15)';
          link.style.color = 'var(--gold)';
          link.style.fontWeight = '700';
        }
      });

      // Highlight mobile dropdown groups (Home, Dashboard)
      mobileNav.querySelectorAll('.mb-2').forEach(group => {
        group.querySelectorAll('a[href]').forEach(link => {
          if (link.getAttribute('href') === currentPath) {
            link.style.background = 'rgba(201, 168, 76, 0.15)';
            link.style.color = 'var(--gold)';
            link.style.fontWeight = '700';
            // Highlight parent toggle button
            const toggle = group.querySelector('button');
            if (toggle) {
              toggle.style.color = 'var(--gold)';
              const icon = toggle.querySelector('i:first-child');
              if (icon) icon.style.color = 'var(--gold)';
            }
          }
        });
      });
    }
  }

  // Navbar scroll effect
  const navbar = document.getElementById('mainNavbar');
  window.addEventListener('scroll', function () {
    const currentScroll = window.pageYOffset;
    if (navbar) {
      navbar.style.boxShadow = currentScroll > 50 ? '0 4px 30px rgba(0,0,0,0.1)' : 'none';
    }
  });
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
  document.querySelectorAll('.sun-icon').forEach(el => {
    el.style.display = theme === 'dark' ? 'none' : 'inline-block';
  });
  document.querySelectorAll('.moon-icon').forEach(el => {
    el.style.display = theme === 'dark' ? 'inline-block' : 'none';
  });
}

function toggleRTL() {
  const currentDir = document.documentElement.dir || 'ltr';
  const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
  document.documentElement.dir = newDir;
  localStorage.setItem('rtl', newDir);
  document.querySelectorAll('.rtl-toggle').forEach(el => {
    updateRTLIcon(el, newDir);
  });
}

function updateRTLIcon(el, dir) {
  const span = el.querySelector('span.text-xs.font-bold');
  if (span) {
    span.textContent = dir === 'rtl' ? 'AR' : 'EN';
  }
}

function toggleMobileDropdown(id) {
  const dropdown = document.getElementById(id);
  const arrow = document.getElementById(id + 'Arrow');
  if (dropdown) {
    dropdown.classList.toggle('hidden');
    if (arrow) {
      arrow.classList.toggle('rotate-180');
    }
  }
}