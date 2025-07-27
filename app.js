// Application data
const appData = {
  "brand": {
    "name": "SWARNA JEWELRY",
    "tagline": "Traditional Craftsmanship, Timeless Beauty",
    "description": "Since 1975, Swarna Jewelry has been a trusted name in traditional Indian jewelry. Our master craftsmen create exquisite pieces using time-honored techniques, bringing you the finest collection of gold, silver, and precious stone jewelry that celebrates India's rich heritage.",
    "heritage": "50 years of excellence",
    "locations": "12 stores across India"
  },
  "collections": [
    {
      "id": 1,
      "name": "Gold Necklaces",
      "description": "Traditional and contemporary designs",
      "image": "gold-necklaces.jpg",
      "productCount": 156,
      "category": "necklaces",
      "startingPrice": 25000
    },
    {
      "id": 2,
      "name": "Jhumkas & Earrings",
      "description": "Classic and modern ear ornaments",
      "image": "jhumkas-earrings.jpg",
      "productCount": 89,
      "category": "earrings",
      "startingPrice": 8000
    },
    {
      "id": 3,
      "name": "Gold Bangles",
      "description": "Traditional kada and modern bracelets",
      "image": "gold-bangles.jpg",
      "productCount": 67,
      "category": "bangles",
      "startingPrice": 15000
    },
    {
      "id": 4,
      "name": "Bridal Sets",
      "description": "Complete wedding jewelry collections",
      "image": "bridal-sets.jpg",
      "productCount": 34,
      "category": "bridal",
      "startingPrice": 75000
    },
    {
      "id": 5,
      "name": "Temple Jewelry",
      "description": "Sacred designs with divine motifs",
      "image": "temple-jewelry.jpg",
      "productCount": 45,
      "category": "temple",
      "startingPrice": 20000
    },
    {
      "id": 6,
      "name": "Mangalsutra",
      "description": "Sacred thread of matrimony",
      "image": "mangalsutra.jpg",
      "productCount": 28,
      "category": "mangalsutra",
      "startingPrice": 18000
    }
  ],
  "featuredProducts": [
    {
      "id": 1,
      "name": "Kundan Polki Necklace Set",
      "price": 85000,
      "originalPrice": 95000,
      "image": "kundan-necklace.jpg",
      "category": "necklaces",
      "material": "22K Gold",
      "weight": "45.5 grams",
      "gemstone": "Kundan, Polki Diamonds",
      "purity": "22K",
      "rating": 4.9,
      "reviews": 67,
      "occasion": "Wedding, Festival"
    },
    {
      "id": 2,
      "name": "Traditional Gold Jhumkas",
      "price": 22000,
      "image": "gold-jhumkas.jpg",
      "category": "earrings",
      "material": "22K Gold",
      "weight": "12.3 grams",
      "gemstone": "Ruby, Emerald",
      "purity": "22K",
      "rating": 4.8,
      "reviews": 143,
      "occasion": "Daily wear, Festival"
    },
    {
      "id": 3,
      "name": "Antique Gold Kada",
      "price": 48000,
      "image": "antique-kada.jpg",
      "category": "bangles",
      "material": "22K Gold",
      "weight": "28.7 grams",
      "gemstone": "None",
      "purity": "22K",
      "rating": 5.0,
      "reviews": 89,
      "occasion": "Festival, Wedding"
    },
    {
      "id": 4,
      "name": "Lakshmi Temple Pendant",
      "price": 35000,
      "image": "lakshmi-pendant.jpg",
      "category": "temple",
      "material": "22K Gold",
      "weight": "18.4 grams",
      "gemstone": "Ruby, Emerald",
      "purity": "22K",
      "rating": 4.9,
      "reviews": 112,
      "occasion": "Festival, Daily wear"
    },
    {
      "id": 5,
      "name": "Meenakari Bridal Set",
      "price": 125000,
      "originalPrice": 140000,
      "image": "meenakari-bridal.jpg",
      "category": "bridal",
      "material": "22K Gold",
      "weight": "78.2 grams",
      "gemstone": "Uncut Diamonds, Emerald, Ruby",
      "purity": "22K",
      "rating": 5.0,
      "reviews": 45,
      "occasion": "Wedding"
    },
    {
      "id": 6,
      "name": "Black Beads Mangalsutra",
      "price": 28000,
      "image": "black-beads-mangalsutra.jpg",
      "category": "mangalsutra",
      "material": "22K Gold",
      "weight": "15.6 grams",
      "gemstone": "Black Beads, Diamond",
      "purity": "22K",
      "rating": 4.8,
      "reviews": 198,
      "occasion": "Daily wear"
    }
  ],
  "testimonials": [
    {
      "name": "Priya Sharma",
      "rating": 5,
      "comment": "Absolutely beautiful craftsmanship! I bought my bridal jewelry from Swarna and it was perfect for my wedding. The gold quality is excellent.",
      "location": "Mumbai, Maharashtra",
      "verified": true
    },
    {
      "name": "Ravi Kumar",
      "rating": 5,
      "comment": "Trusted jeweler for our family for over 20 years. The traditional designs are authentic and the service is exceptional.",
      "location": "Chennai, Tamil Nadu",
      "verified": true
    },
    {
      "name": "Anjali Patel",
      "rating": 5,
      "comment": "The temple jewelry collection is divine! Perfect for festivals and special occasions. Highly recommend Swarna Jewelry.",
      "location": "Ahmedabad, Gujarat",
      "verified": true
    }
  ]
};

// Global state
let cart = [];
let wishlist = [];
let currentFilter = 'all';

// Utility functions
function formatPrice(price) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(price);
}

function generateStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  let stars = '';
  
  for (let i = 0; i < fullStars; i++) {
    stars += '★';
  }
  
  if (hasHalfStar) {
    stars += '☆';
  }
  
  const emptyStars = 5 - Math.ceil(rating);
  for (let i = 0; i < emptyStars; i++) {
    stars += '☆';
  }
  
  return stars;
}

function getJewelryIcon(category) {
  const icons = {
    necklaces: '📿',
    earrings: '💎',
    bangles: '⭕',
    bridal: '👰',
    temple: '🕉️',
    mangalsutra: '🔗'
  };
  return icons[category] || '💍';
}

// DOM manipulation functions
function createCollectionCard(collection) {
  return `
    <div class="collection-card fade-in" data-category="${collection.category}">
      <div class="collection-image">
        ${getJewelryIcon(collection.category)}
      </div>
      <div class="collection-content">
        <h3>${collection.name}</h3>
        <p class="collection-description">${collection.description}</p>
        <div class="collection-meta">
          <span class="product-count">${collection.productCount} Items</span>
          <span class="collection-price">Starting ${formatPrice(collection.startingPrice)}</span>
        </div>
      </div>
    </div>
  `;
}

function createProductCard(product) {
  const hasOriginalPrice = product.originalPrice && product.originalPrice > product.price;
  const discount = hasOriginalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;
  
  return `
    <div class="product-card fade-in" data-category="${product.category}" data-product-id="${product.id}">
      <div class="product-image">
        ${getJewelryIcon(product.category)}
        <div class="product-actions">
          <button class="action-btn" onclick="addToWishlist(${product.id})" title="Add to Wishlist">
            ❤️
          </button>
          <button class="action-btn" onclick="quickView(${product.id})" title="Quick View">
            👁️
          </button>
        </div>
        ${discount > 0 ? `<div class="discount-badge">${discount}% OFF</div>` : ''}
      </div>
      <div class="product-info">
        <h3>${product.name}</h3>
        <div class="product-details">
          ${product.material} • ${product.weight} • ${product.purity}
        </div>
        <div class="product-price">
          <span class="current-price">${formatPrice(product.price)}</span>
          ${hasOriginalPrice ? `<span class="original-price">${formatPrice(product.originalPrice)}</span>` : ''}
        </div>
        <div class="product-rating">
          <span class="stars">${generateStars(product.rating)}</span>
          <span class="rating-text">${product.rating} (${product.reviews} reviews)</span>
        </div>
        <button class="add-to-cart" onclick="addToCart(${product.id})">
          Add to Cart
        </button>
      </div>
    </div>
  `;
}

function createTestimonialCard(testimonial) {
  return `
    <div class="testimonial-card fade-in">
      <div class="testimonial-rating">
        ${generateStars(testimonial.rating)}
      </div>
      <p class="testimonial-text">${testimonial.comment}</p>
      <div class="testimonial-author">
        <div>
          <div class="author-name">${testimonial.name}</div>
          <div class="author-location">${testimonial.location}</div>
        </div>
        ${testimonial.verified ? '<span class="verified-badge">✓ Verified</span>' : ''}
      </div>
    </div>
  `;
}

// Initialize collections
function initializeCollections() {
  const collectionsGrid = document.getElementById('collectionsGrid');
  if (collectionsGrid) {
    collectionsGrid.innerHTML = appData.collections.map(createCollectionCard).join('');
  }
}

// Initialize products
function initializeProducts() {
  const productsGrid = document.getElementById('productsGrid');
  if (productsGrid) {
    productsGrid.innerHTML = appData.featuredProducts.map(createProductCard).join('');
  }
}

// Initialize testimonials
function initializeTestimonials() {
  const testimonialsGrid = document.getElementById('testimonialsGrid');
  if (testimonialsGrid) {
    testimonialsGrid.innerHTML = appData.testimonials.map(createTestimonialCard).join('');
  }
}

// Filter functionality
function filterProducts(category) {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');
  
  // Update active filter button
  filterBtns.forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.category === category) {
      btn.classList.add('active');
    }
  });
  
  // Filter products
  productCards.forEach(card => {
    if (category === 'all' || card.dataset.category === category) {
      card.style.display = 'block';
      setTimeout(() => card.classList.add('visible'), 100);
    } else {
      card.style.display = 'none';
      card.classList.remove('visible');
    }
  });
  
  currentFilter = category;
}

// Cart functionality
function addToCart(productId) {
  const product = appData.featuredProducts.find(p => p.id === productId);
  if (!product) return;
  
  const existingItem = cart.find(item => item.id === productId);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  
  updateCartCount();
  showNotification(`${product.name} added to cart!`, 'success');
  
  // Add animation to cart button
  const cartBtn = document.getElementById('cartBtn');
  cartBtn.classList.add('shimmer');
  setTimeout(() => cartBtn.classList.remove('shimmer'), 1000);
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCartCount();
  updateCartModal();
}

function updateCartQuantity(productId, quantity) {
  const item = cart.find(item => item.id === productId);
  if (item) {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      item.quantity = quantity;
      updateCartCount();
      updateCartModal();
    }
  }
}

function updateCartCount() {
  const cartCount = document.getElementById('cartCount');
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = totalItems;
  cartCount.style.display = totalItems > 0 ? 'inline' : 'none';
}

function updateCartModal() {
  const cartItems = document.getElementById('cartItems');
  const cartTotal = document.getElementById('cartTotal');
  
  if (cart.length === 0) {
    cartItems.innerHTML = '<p class="text-center">Your cart is empty</p>';
    cartTotal.textContent = 'Total: ₹0';
    return;
  }
  
  const cartHTML = cart.map(item => `
    <div class="cart-item" style="display: flex; justify-content: space-between; align-items: center; padding: 1rem; border-bottom: 1px solid #eee;">
      <div>
        <h4 style="margin: 0 0 0.5rem 0;">${item.name}</h4>
        <p style="margin: 0; color: #666; font-size: 0.9rem;">${formatPrice(item.price)} × ${item.quantity}</p>
      </div>
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <button onclick="updateCartQuantity(${item.id}, ${item.quantity - 1})" style="background: #f0f0f0; border: none; padding: 0.2rem 0.5rem; border-radius: 3px; cursor: pointer;">-</button>
        <span>${item.quantity}</span>
        <button onclick="updateCartQuantity(${item.id}, ${item.quantity + 1})" style="background: #f0f0f0; border: none; padding: 0.2rem 0.5rem; border-radius: 3px; cursor: pointer;">+</button>
        <button onclick="removeFromCart(${item.id})" style="background: #ff4444; color: white; border: none; padding: 0.2rem 0.5rem; border-radius: 3px; cursor: pointer; margin-left: 0.5rem;">×</button>
      </div>
    </div>
  `).join('');
  
  cartItems.innerHTML = cartHTML;
  
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  cartTotal.textContent = `Total: ${formatPrice(total)}`;
}

// Wishlist functionality
function addToWishlist(productId) {
  const product = appData.featuredProducts.find(p => p.id === productId);
  if (!product) return;
  
  const existingItem = wishlist.find(item => item.id === productId);
  
  if (existingItem) {
    showNotification(`${product.name} is already in your wishlist!`, 'info');
    return;
  }
  
  wishlist.push(product);
  updateWishlistCount();
  showNotification(`${product.name} added to wishlist!`, 'success');
  
  // Add animation to wishlist button
  const wishlistBtn = document.getElementById('wishlistBtn');
  wishlistBtn.classList.add('shimmer');
  setTimeout(() => wishlistBtn.classList.remove('shimmer'), 1000);
}

function updateWishlistCount() {
  const wishlistCount = document.getElementById('wishlistCount');
  wishlistCount.textContent = wishlist.length;
  wishlistCount.style.display = wishlist.length > 0 ? 'inline' : 'none';
}

// Quick view functionality
function quickView(productId) {
  const product = appData.featuredProducts.find(p => p.id === productId);
  if (!product) return;
  
  const quickViewTitle = document.getElementById('quickViewTitle');
  const quickViewBody = document.getElementById('quickViewBody');
  
  quickViewTitle.textContent = product.name;
  
  const hasOriginalPrice = product.originalPrice && product.originalPrice > product.price;
  const discount = hasOriginalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;
  
  quickViewBody.innerHTML = `
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; align-items: start;">
      <div style="text-align: center; padding: 2rem; background: #f9f9f9; border-radius: 10px;">
        <div style="font-size: 4rem; margin-bottom: 1rem;">${getJewelryIcon(product.category)}</div>
        ${discount > 0 ? `<div style="background: #ff4444; color: white; padding: 0.5rem; border-radius: 20px; display: inline-block; margin-bottom: 1rem;">${discount}% OFF</div>` : ''}
      </div>
      <div>
        <div style="margin-bottom: 1rem;">
          <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
            <span style="font-size: 1.5rem; font-weight: bold; color: #DAA520;">${formatPrice(product.price)}</span>
            ${hasOriginalPrice ? `<span style="text-decoration: line-through; color: #999;">${formatPrice(product.originalPrice)}</span>` : ''}
          </div>
          <div style="color: #666; margin-bottom: 1rem;">
            <strong>Material:</strong> ${product.material}<br>
            <strong>Weight:</strong> ${product.weight}<br>
            <strong>Purity:</strong> ${product.purity}<br>
            <strong>Gemstone:</strong> ${product.gemstone}<br>
            <strong>Occasion:</strong> ${product.occasion}
          </div>
          <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem;">
            <span style="color: #DAA520; font-size: 1.2rem;">${generateStars(product.rating)}</span>
            <span>${product.rating} (${product.reviews} reviews)</span>
          </div>
        </div>
        <div style="display: flex; gap: 1rem;">
          <button onclick="addToCart(${product.id}); closeModal('quickViewModal');" style="flex: 1; background: linear-gradient(135deg, #FFD700 0%, #B8860B 50%, #DAA520 100%); color: white; border: none; padding: 1rem; border-radius: 8px; cursor: pointer; font-weight: bold;">Add to Cart</button>
          <button onclick="addToWishlist(${product.id})" style="background: #f0f0f0; border: 1px solid #ddd; padding: 1rem; border-radius: 8px; cursor: pointer;">❤️</button>
        </div>
      </div>
    </div>
  `;
  
  openModal('quickViewModal');
}

// Modal functionality
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.classList.add('hidden');
  document.body.style.overflow = 'auto';
}

// Enhanced search functionality
function performSearch(query = null) {
  const searchInput = document.getElementById('searchInput');
  const searchQuery = query || searchInput.value.toLowerCase().trim();
  const productCards = document.querySelectorAll('.product-card');
  const filterBtns = document.querySelectorAll('.filter-btn');
  
  if (!searchQuery) {
    // Show all products if search is empty
    productCards.forEach(card => {
      card.style.display = 'block';
    });
    
    // Reset filter to show all
    filterBtns.forEach(btn => {
      btn.classList.remove('active');
      if (btn.dataset.category === 'all') {
        btn.classList.add('active');
      }
    });
    
    showNotification('Showing all products', 'info');
    scrollToSection('products');
    return;
  }
  
  let foundCount = 0;
  
  productCards.forEach(card => {
    const productId = parseInt(card.dataset.productId);
    const product = appData.featuredProducts.find(p => p.id === productId);
    
    if (product) {
      const searchText = `${product.name} ${product.category} ${product.material} ${product.gemstone} ${product.occasion}`.toLowerCase();
      
      if (searchText.includes(searchQuery)) {
        card.style.display = 'block';
        foundCount++;
      } else {
        card.style.display = 'none';
      }
    }
  });
  
  // Update filter buttons to show search is active
  filterBtns.forEach(btn => btn.classList.remove('active'));
  
  if (foundCount > 0) {
    showNotification(`Found ${foundCount} items for "${searchQuery}"`, 'success');
    scrollToSection('products');
  } else {
    showNotification(`No items found for "${searchQuery}". Try searching for "gold", "jhumkas", or "temple"`, 'error');
  }
}

// Search functionality
function initializeSearch() {
  const searchInput = document.getElementById('searchInput');
  const searchBtn = document.querySelector('.search-btn');
  
  if (searchInput && searchBtn) {
    // Handle search button click
    searchBtn.addEventListener('click', (e) => {
      e.preventDefault();
      performSearch();
    });
    
    // Handle enter key press
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        performSearch();
      }
    });
    
    // Handle input changes for real-time search
    searchInput.addEventListener('input', () => {
      const query = searchInput.value.trim();
      if (query.length === 0) {
        performSearch(''); // Reset to show all products
      }
    });
    
    // Add search suggestions
    const jewelryTerms = [
      'gold necklace', 'jhumkas', 'temple jewelry', 'bridal sets', 
      'mangalsutra', 'bangles', 'earrings', 'rings', 'kundan', 
      'polki', 'antique', 'traditional', '22k gold', '18k gold'
    ];
    
    searchInput.addEventListener('focus', () => {
      searchInput.placeholder = jewelryTerms[Math.floor(Math.random() * jewelryTerms.length)];
    });
    
    searchInput.addEventListener('blur', () => {
      searchInput.placeholder = 'Search jewelry...';
    });
  }
}

// Mobile menu functionality
function initializeMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
  });
  
  // Close menu when clicking on a link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      hamburger.classList.remove('active');
    });
  });
}

// Smooth scrolling
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// Form handling
function initializeForms() {
  // Contact form
  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Validate Indian phone number
    const phoneRegex = /^(\+91|91)?[6-9]\d{9}$/;
    if (!phoneRegex.test(data.phone.replace(/\s+/g, ''))) {
      showNotification('Please enter a valid Indian phone number', 'error');
      return;
    }
    
    showNotification('Thank you for your message! We will contact you soon.', 'success');
    contactForm.reset();
  });
  
  // Newsletter form
  const newsletterForm = document.getElementById('newsletterForm');
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = e.target.querySelector('input[type="email"]').value;
    
    if (!email) {
      showNotification('Please enter a valid email address', 'error');
      return;
    }
    
    showNotification('Successfully subscribed to our newsletter! 🎉', 'success');
    e.target.reset();
  });
}

// Filter button functionality
function initializeFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.dataset.category;
      filterProducts(category);
      
      // Clear search when using filters
      const searchInput = document.getElementById('searchInput');
      if (searchInput) {
        searchInput.value = '';
      }
    });
  });
}

// Notification system
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: ${type === 'success' ? '#10B981' : type === 'error' ? '#EF4444' : '#3B82F6'};
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    z-index: 3000;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transform: translateX(400px);
    transition: transform 0.3s ease;
    max-width: 300px;
    font-weight: 500;
  `;
  
  notification.textContent = message;
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 100);
  
  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.transform = 'translateX(400px)';
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

// Scroll animations
function initializeScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  // Observe elements for animation
  setTimeout(() => {
    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });
  }, 500);
}

// Cart modal functionality
function initializeCartModal() {
  const cartBtn = document.getElementById('cartBtn');
  
  cartBtn.addEventListener('click', () => {
    updateCartModal();
    openModal('cartModal');
  });
}

// Checkout functionality
function checkout() {
  if (cart.length === 0) {
    showNotification('Your cart is empty!', 'error');
    return;
  }
  
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  showNotification(`Order placed successfully! Total: ${formatPrice(total)}. Thank you for choosing Swarna Jewelry! 🎉`, 'success');
  
  cart = [];
  updateCartCount();
  closeModal('cartModal');
}

// Navigation scroll effect
function initializeNavigation() {
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      navbar.style.background = 'rgba(255, 255, 255, 0.98)';
      navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
      navbar.style.background = 'rgba(255, 255, 255, 0.95)';
      navbar.style.boxShadow = 'none';
    }
  });
}

// Initialize application
document.addEventListener('DOMContentLoaded', () => {
  // Initialize all components
  initializeCollections();
  initializeProducts();
  initializeTestimonials();
  initializeSearch();
  initializeMobileMenu();
  initializeForms();
  initializeFilters();
  initializeCartModal();
  initializeNavigation();
  
  // Initialize scroll animations after a short delay
  setTimeout(initializeScrollAnimations, 1000);
  
  // Add click handlers for modal close on background
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal(modal.id);
      }
    });
  });
  
  // Initialize smooth scrolling for navigation links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const href = link.getAttribute('href');
      if (href.startsWith('#')) {
        scrollToSection(href.substring(1));
      }
    });
  });
  
  console.log('Swarna Jewelry website initialized successfully! 🎉');
});