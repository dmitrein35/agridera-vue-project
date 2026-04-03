<template>
  <div class="product-detail-page" v-if="product">
    <header-component />

    <main class="product-main">
      <div class="container py-5">
        <div class="navigation-top mb-4">
          <router-link to="/products" class="back-link">← Return to all oranges</router-link>
        </div>

        <div class="row align-items-start">
          <div class="col-md-7">
            <h1 class="product-title uppercase">{{ product.title }}</h1>
            <h2 class="product-subtitle">{{ product.short_text }}</h2>
            <div class="stars mb-4">★★★★★</div>

            <div class="eco-badge-container mt-5">
              <img src="/images/natural.png" alt="100% Natural Organic" class="eco-badge">
            </div>
          </div>

          <div class="col-md-5 d-flex flex-column align-items-end">
            <div class="image-wrapper shadow-sm mb-3">
              <div class="img-fixed-box">
                <img :src="product.image" :alt="product.title" class="product-img-fit">
              </div>
            </div>
            
            <button 
              @click="handleCartAction" 
              class="btn-go-cart"
              :class="{ 'in-cart': cart.isInCart(product.id) }"
            >
              {{ cart.isInCart(product.id) ? 'Go to cart' : 'Add to cart' }}
            </button>
          </div>
        </div>
      </div>
    </main>

    <section class="characteristics-section py-5">
      <div class="container">
        <h3 class="section-title-underlined mb-5">CHARACTERISTICS</h3>
        
        <div class="key-description mb-5">
          <p class="mb-1"><strong>Key Description</strong></p>
          <p class="desc-text text-muted">{{ product.full_description }}</p>
        </div>

        <div class="row specs-grid">
          <div class="col-md-6 mb-5" v-for="(list, label) in product.specs" :key="label">
            <h4 class="spec-label-underlined text-capitalize">{{ label }}</h4>
            <ul class="spec-list">
              <template v-if="Array.isArray(list)">
                <li v-for="item in list" :key="item">{{ item }}</li>
              </template>
              <template v-else>
                <li>{{ list }}</li>
              </template>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <footer class="site-footer">
      <div class="container py-4">
        <div class="footer-content d-flex justify-content-between align-items-center">
          <nav class="footer-nav">
            <a href="#">PROFILE</a>
            <a href="#">MANAGEMENT</a>
            <router-link to="/products" class="footer-link">PRODUCTS</router-link>
            <a href="#">R&D</a>
            <a href="#">LINKS</a>
            <a href="#">SITEMAP</a>
            <a href="#">CONTACT</a>
          </nav>
          <div class="footer-socials">
            <a href="#" class="social-icon-circle"><i class="fab fa-linkedin-in"></i></a>
            <a href="#" class="social-icon-circle"><i class="fab fa-instagram"></i></a>
            <a href="#" class="social-icon-circle"><i class="fab fa-youtube"></i></a>
            <a href="#" class="social-icon-circle"><i class="fab fa-twitter"></i></a>
            <a href="#" class="social-icon-circle"><i class="fab fa-facebook-f"></i></a>
          </div>
        </div>
        <hr class="footer-divider">
        <div class="footer-copyright text-center">
          AGRIDERA SEEDS & AGRICULTURE LTD. © 2026
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { computed } from 'vue';
import { useCartStore } from '../stores/cart';

const route = useRoute();
const router = useRouter();
const cart = useCartStore();

const allProducts = [
  { 
    id: 1, 
    title: 'BLOOD ORANGE', 
    short_text: 'Anthocyanin Rich Hybrid', 
    image: '/images/orange3.jpg',
    full_description: 'Deep ruby red internal pigmentation. Unique flavor with berry notes. Performs best in climates with cold nights.',
    specs: {
      plant: ['Vigorous growth with excellent cover.', 'High adaptation to various soil types.'],
      cycle: ['Winter', 'Spring'],
      fruit: ['Unique ruby-red internal flesh; high antioxidant content.'],
      color: 'Deep Orange with Red streaks'
    }
  },
  { 
    id: 2, 
    title: 'CARA CARA', 
    short_text: 'Pink Navel Selection', 
    image: '/images/orange4.jpg',
    full_description: 'Unique rose-pink internal color. Extremely sweet flavor profile. Lycopene rich; Seedless variety.',
    specs: {
      plant: ['Vigorous growth with excellent cover.', 'High adaptation to various soil types.'],
      cycle: ['Mid-season', 'Winter'],
      fruit: ['Seedless; extremely sweet and low acid profile.'],
      color: 'Orange skin; Pink internal flesh'
    }
  },
  { 
    id: 3, 
    title: 'SEVILLE ORANGE', 
    short_text: 'Bitter Orange Variety', 
    image: '/images/orange5.jpg',
    full_description: 'Rough, thick orange skin. Very sour and bitter juice. High Pectin content; Aromatic essential oils.',
    specs: {
      plant: ['Vigorous growth with excellent cover.', 'High adaptation to various soil types.'],
      cycle: ['Winter', 'Spring'],
      fruit: ['Rough skin; high pectin content for marmalades.'],
      color: 'Classic Bright Orange'
    }
  },
  { 
    id: 4, 
    title: 'VALENCIA ORANGE', 
    short_text: 'Juicing Specialist', 
    image: '/images/orange1.jpg',
    full_description: 'Excellent for fresh juice. Thin skin and high juice content. Very sweet and late maturing.',
    specs: {
      plant: ['Vigorous growth with excellent cover.', 'High adaptation to various soil types.'],
      cycle: ['Winter', 'Spring'],
      fruit: ['High juice content (min 50%); thin rind.'],
      color: 'Pale to Bright Orange'
    }
  },
  { 
    id: 5, 
    title: 'NAVEL ORANGE', 
    short_text: 'Classic Table Orange', 
    image: '/images/orange2.jpg',
    full_description: 'Seedless and easy to peel. Distinguished by the "navel" at the blossom end. Rich in Vitamin C.',
    specs: {
      plant: ['Vigorous growth with excellent cover.', 'High adaptation to various soil types.'],
      cycle: ['Winter', 'Spring'],
      fruit: ['Seedless; easy to peel; large fruit size.'],
      color: 'Golden Orange'
    }
  }
];

const product = computed(() => {
  return allProducts.find(p => p.id === parseInt(route.params.id));
});

const handleCartAction = () => {
  if (cart.isInCart(product.value.id)) {
    // Если уже в корзине — идем на страницу Contact
    router.push('/contact');
  } else {
    // Если нет — добавляем
    cart.addToCart(product.value);
  }
};
</script>

<style scoped>
@font-face {
  font-family: 'RobotoSlab';
  src: url('/fonts/RobotoSlab.ttf') format('truetype');
}

.product-detail-page {
  font-family: 'RobotoSlab', serif;
  background-color: #fdf5e6;
  min-height: 100vh;
  color: #333;
}

.back-link {
  color: #8cb26a;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
}

.product-title {
  font-size: 3.5rem;
  font-weight: 700;
  color: #455a64;
  margin: 10px 0;
  text-transform: uppercase;
}

.product-subtitle {
  font-size: 1.8rem;
  color: #8cb26a;
  font-weight: 400;
}

.stars { color: #8cb26a; font-size: 1.2rem; }

.image-wrapper {
  background: white;
  padding: 8px;
  border-radius: 15px;
  display: inline-block;
}

.img-fixed-box {
  width: 100%;
  max-width: 450px;
  height: 300px;
  overflow: hidden;
  border-radius: 10px;
}

.product-img-fit {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.eco-badge {
  max-width: 250px;
}

.btn-go-cart {
  background-color: #8cb26a;
  color: white;
  border: none;
  padding: 10px 50px;
  border-radius: 30px;
  font-weight: 700;
  font-size: 1.1rem;
  transition: 0.3s;
  cursor: pointer;
}

.btn-go-cart:hover {
  background-color: #76975a;
  transform: translateY(-2px);
}

/* Стиль когда товар в корзине */
.btn-go-cart.in-cart {
  background-color: #28a745;
}

.characteristics-section {
  background-color: #fdf5e6;
  border-top: 1px solid rgba(0,0,0,0.05);
}

.section-title-underlined {
  color: #8cb26a;
  border-bottom: 2px solid #8cb26a;
  display: inline-block;
  padding-bottom: 5px;
  font-weight: 700;
}

.spec-label-underlined {
  color: #8cb26a;
  border-bottom: 1px solid #ddd;
  padding-bottom: 8px;
  margin-bottom: 20px;
  font-weight: 700;
}

.spec-list { list-style: none; padding-left: 0; }
.spec-list li {
  position: relative;
  padding-left: 20px;
  margin-bottom: 10px;
  line-height: 1.4;
}

.spec-list li::before {
  content: "•";
  color: #8cb26a;
  position: absolute;
  left: 0;
  font-weight: bold;
}

.desc-text {
  font-size: 1.1rem;
  line-height: 1.6;
}

.site-footer {
  background-color: #3a3a3a;
  color: white;
  margin-top: 50px;
}

.footer-nav a {
  color: white;
  text-decoration: none;
  margin-right: 20px;
  font-weight: 700;
  font-size: 0.85rem;
}

.social-icon-circle {
  width: 32px;
  height: 32px;
  border: 1px solid #8cb26a;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #8cb26a;
  margin-left: 10px;
  text-decoration: none;
}

.footer-divider {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin: 20px 0;
}

.footer-copyright {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.6);
}
</style>