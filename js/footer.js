document.addEventListener('DOMContentLoaded', function () {
  const footerHTML = `
  <footer class="relative overflow-hidden">
    <div class="animated-gradient pt-20 pb-0">
      <div class="absolute inset-0 bg-noise pointer-events-none"></div>
      <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></div>

      <div class="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          <div class="space-y-6" data-anim="fade-up">
            <a href="index.html" class="flex items-center gap-3 group">
              <div class="w-12 h-12 rounded-xl gradient-gold flex items-center justify-center text-charcoal font-bold text-xl transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"/></svg>
              </div>
            </a>
            <p class="text-white/70 text-sm leading-relaxed">
              We transform threads into art. Premium custom embroidery, patches, and apparel branding for fashion labels, businesses, and individuals who demand excellence.
            </p>
            <div class="flex gap-3">
              <a href="#" class="social-btn border-white/20 text-white/60 hover:text-gold hover:border-gold"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
              <a href="#" class="social-btn border-white/20 text-white/60 hover:text-gold hover:border-gold"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg></a>
              <a href="#" class="social-btn border-white/20 text-white/60 hover:text-gold hover:border-gold"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg></a>
              <a href="#" class="social-btn border-white/20 text-white/60 hover:text-gold hover:border-gold"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg></a>
            </div>
          </div>

          <div data-anim="fade-up" data-anim-delay="100">
            <h4 class="font-serif text-white text-lg font-bold mb-6 relative inline-block">
              Quick Links
              <span class="absolute -bottom-2 left-0 w-8 h-0.5 bg-gold"></span>
            </h4>
            <ul class="space-y-3">
              <li><a href="index.html" class="text-white/60 hover:text-gold text-sm transition-all duration-300 flex items-center gap-2 group"><span class="w-0 group-hover:w-2 h-0.5 bg-gold transition-all duration-300"></span>Home</a></li>
              <li><a href="about.html" class="text-white/60 hover:text-gold text-sm transition-all duration-300 flex items-center gap-2 group"><span class="w-0 group-hover:w-2 h-0.5 bg-gold transition-all duration-300"></span>About Us</a></li>
              <li><a href="services.html" class="text-white/60 hover:text-gold text-sm transition-all duration-300 flex items-center gap-2 group"><span class="w-0 group-hover:w-2 h-0.5 bg-gold transition-all duration-300"></span>Services</a></li>
              <li><a href="portfolio.html" class="text-white/60 hover:text-gold text-sm transition-all duration-300 flex items-center gap-2 group"><span class="w-0 group-hover:w-2 h-0.5 bg-gold transition-all duration-300"></span>Portfolio</a></li>
              <li><a href="pricing.html" class="text-white/60 hover:text-gold text-sm transition-all duration-300 flex items-center gap-2 group"><span class="w-0 group-hover:w-2 h-0.5 bg-gold transition-all duration-300"></span>Pricing</a></li>
              <li><a href="contact.html" class="text-white/60 hover:text-gold text-sm transition-all duration-300 flex items-center gap-2 group"><span class="w-0 group-hover:w-2 h-0.5 bg-gold transition-all duration-300"></span>Contact</a></li>
            </ul>
          </div>

          <div data-anim="fade-up" data-anim-delay="200">
            <h4 class="font-serif text-white text-lg font-bold mb-6 relative inline-block">
              Our Services
              <span class="absolute -bottom-2 left-0 w-8 h-0.5 bg-gold"></span>
            </h4>
            <ul class="space-y-3">
              <li><a href="services.html" class="text-white/60 hover:text-gold text-sm transition-all duration-300">Custom Embroidery</a></li>
              <li><a href="services.html" class="text-white/60 hover:text-gold text-sm transition-all duration-300">Chenille Patches</a></li>
              <li><a href="services.html" class="text-white/60 hover:text-gold text-sm transition-all duration-300">Logo Digitizing</a></li>
              <li><a href="services.html" class="text-white/60 hover:text-gold text-sm transition-all duration-300">Leather Patches</a></li>
              <li><a href="services.html" class="text-white/60 hover:text-gold text-sm transition-all duration-300">3D Puff Embroidery</a></li>
              <li><a href="services.html" class="text-white/60 hover:text-gold text-sm transition-all duration-300">Bulk Production</a></li>
            </ul>
          </div>

          <div data-anim="fade-up" data-anim-delay="300">
            <h4 class="font-serif text-white text-lg font-bold mb-6 relative inline-block">
              Newsletter
              <span class="absolute -bottom-2 left-0 w-8 h-0.5 bg-gold"></span>
            </h4>
            <p class="text-white/60 text-sm mb-4">Subscribe for exclusive design drops, studio news, and embroidery inspiration.</p>
            <div class="flex gap-2">
              <input type="email" placeholder="Your email" class="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white text-sm placeholder-white/40 focus:outline-none focus:border-gold transition-all duration-300">
              <button class="px-5 py-3 rounded-xl gradient-gold text-charcoal font-semibold text-sm hover:shadow-lg hover:shadow-gold/30 transition-all duration-300 whitespace-nowrap"><i class="fas fa-paper-plane mr-1"></i>Subscribe</button>
            </div>
            <div class="mt-6 space-y-3">
              <div class="flex items-center gap-3 text-white/60 text-sm">
                <svg class="w-4 h-4 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                <span>studio@embroiderystudio.com</span>
              </div>
              <div class="flex items-center gap-3 text-white/60 text-sm">
                <svg class="w-4 h-4 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                <span>+1 (555) 123-4567</span>
              </div>
              <div class="flex items-center gap-3 text-white/60 text-sm">
                <svg class="w-4 h-4 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                <span>245 Fashion Ave, New York, NY 10001</span>
              </div>
            </div>
          </div>
        </div>

        <div class="border-t border-white/10 mt-12 pt-8 pb-8">
          <div class="flex flex-col md:flex-row items-center justify-between gap-4">
            <p class="text-white/40 text-xs text-center md:text-left">
              &copy; 2026 Embroidery Studio. All rights reserved. Crafted with precision &amp; passion.
            </p>
            <div class="flex gap-6">
              <a href="#" class="text-white/40 hover:text-gold text-xs transition-all duration-300">Privacy Policy</a>
              <a href="#" class="text-white/40 hover:text-gold text-xs transition-all duration-300">Terms of Service</a>
              <a href="#" class="text-white/40 hover:text-gold text-xs transition-all duration-300">FAQ</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  `;

  const footerContainer = document.getElementById('footer');
  if (footerContainer) {
    footerContainer.innerHTML = footerHTML;
  }
});
