<template>
  <div class="products-page">
    <header-component /> 
    
    <section class="hero-banner">
      <img src="/images/orangebanner.jpg" alt="Orange Banner" class="banner-img">
    </section>

    <div class="container py-5">
      <section class="text-center mb-5">
        <h1 class="main-title mb-2">Agridera Fresh Market Orange Hybrids</h1>
        <div class="stars mb-4">*****</div>
        <div class="intro-text text-left">
          <p>Agridera aims to be one of the world's leading companies in the breeding, production, and marketing of citrus seeds. <strong>We invest intensively in research and development to provide solutions to growers and consumers in numerous countries around the world.</strong> In particular, we breed improved disease-resistant cultivars adapted to different markets globally.</p>
          <p>Currently, emphasis is placed on combining Citrus Tristeza Virus (CTV) and Citrus Stubborn Disease resistances with other soil-borne diseases into superior orange breeding lines and hybrids. Moreover, comprehensive efforts are being undertaken to develop varieties resistance to Mal Secco and other fungal pathogens.</p>
          <p>In terms of horticultural traits, breeding is for earliness, different fruit sizes, rind thickness, deep orange color, flavor, seedlessness, shelf life, and high juice content. Combinations of quality features and disease resistance are sought in a variety of types, namely navel, common, and pigmented oranges.</p>
        </div>
      </section>

      <div class="red-line-text mb-4">
        Agridera Orange breeding programs are focusing on three main segments: Early Season Navels, Mid-Season Universal Hybrids, and Late-Season Juice Varieties.
      </div>

      <div class="programs-white-container shadow-sm mb-4">
        <div class="row m-0">
          <div class="col-md-4 program-section" v-for="prog in programs" :key="prog.title">
            <div class="program-inner-content">
              <h4>{{ prog.title }}</h4>
              <div class="card-line"></div>
              <p class="program-description" v-html="prog.desc"></p>
            </div>
          </div>
        </div>
      </div>

      <div class="distributor-info mb-5">
        <div class="red-sidebar-msg">
          Agridera operates through international and local distributors around the world.
        </div>
      </div>

      <div class="row orange-grid pt-4" v-if="products && products.length">
        <div v-for="product in products" :key="product.id" class="col-md-4 mb-5 text-center">
          <router-link :to="'/product/' + product.id" class="product-link">
            <div class="image-container mb-3 shadow-sm">
                <img :src="product.image" :alt="product.title" class="orange-img">
            </div>
            <h5 class="orange-title">{{ product.title }}</h5>
            <p class="orange-subtitle">{{ product.short_text }}</p>
          </router-link>
        </div>
      </div>
    </div>

    <footer class="site-footer">
      <div class="container py-4">
        <div class="footer-content d-flex justify-content-between align-items-center">
          <nav class="footer-nav">
            <a href="#">PROFILE</a>
            <a href="#">MANAGEMENT</a>
            <router-link to="/products" class="footer-link active-link">PRODUCTS</router-link>
            <a href="#">R&D</a>
            <a href="#">LINKS</a>
            <a href="#">SITEMAP</a>
            <router-link to="/contact" class="footer-link">CONTACT</router-link>
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
const programs = [
  { title: 'Early Navel Program', desc: '<strong>This breeding is aimed for the Spanish and Turkish markets</strong>. For early harvest, easy peeling, large fruit size and resistances to common citrus viruses. Some hybrids may include more resistances, such as cold tolerance.' },
  { title: 'Universal Hybrids', desc: 'This breeding is for <strong>Moroccan, Egyptian, and Brazilian markets</strong>. The main focus is on large round shape fruits (220 grams plus); high Brix levels and resistance to Phytophthora and CTV. In the near future, F3 selections will be included.' },
  { title: 'Juice & Industrial Varieties', desc: '<strong>This breeding is for Mediterranean processing markets</strong>. We breed round and oval shapes, standard sizes (160-200 grams), and high-yield juice types (min 50% juice content). We combine the resistances to Nematodes as basic resistances.' }
]

const products = [
  { id: 1, title: 'BLOOD ORANGE', short_text: 'Anthocyanin Rich Hybrid', image: '/images/orange3.jpg' },
  { id: 2, title: 'CARA CARA', short_text: 'Pink Navel Selection', image: '/images/orange4.jpg' },
  { id: 3, title: 'SEVILLE ORANGE', short_text: 'Bitter Orange Variety', image: '/images/orange5.jpg' },
  { id: 4, title: 'VALENCIA ORANGE', short_text: 'Juicing Specialist', image: '/images/orange1.jpg' },
  { id: 5, title: 'NAVEL ORANGE', short_text: 'Classic Table Orange', image: '/images/orange2.jpg' }
]
</script>

<style scoped>
@font-face {
  font-family: 'RobotoSlab';
  src: url('/fonts/RobotoSlab.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

.products-page { 
  background-color: #fdf5e6; 
  font-family: 'RobotoSlab', serif;
  color: #333;
}

.hero-banner {
  width: 100%;
  height: 650px; 
  overflow: hidden;
}

.banner-img { 
  width: 100%; 
  height: 100%; 
  object-fit: cover; 
  display: block;
}

.main-title { color: #4b4b4b; font-weight: 700; font-family: 'RobotoSlab', serif; }
.stars { color: #8cb26a; letter-spacing: 5px; }
.intro-text p { line-height: 1.6; margin-bottom: 1.2rem; font-family: 'RobotoSlab', serif; }

.red-line-text { 
  border-left: 4px solid #bc3c3c; 
  padding-left: 15px; 
  font-weight: 700; 
  color: #333;
  font-family: 'RobotoSlab', serif;
}

.programs-white-container {
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 2px;
  padding: 40px 20px;
}

.program-section {
  border-right: 1px solid #eeeeee;
}
.program-section:last-child {
  border-right: none;
}

.program-inner-content h4 { 
  color: #4b4b4b; 
  font-weight: 700; 
  font-size: 1.2rem;
  font-family: 'RobotoSlab', serif;
}

.card-line { height: 1px; background-color: #8cb26a; margin: 15px 0; width: 100%; }

.program-description { 
  font-size: 0.95rem; 
  line-height: 1.5; 
  color: #444;
  font-family: 'RobotoSlab', serif;
}

.red-sidebar-msg {
  border-left: 5px solid #bc3c3c;
  padding-left: 15px;
  font-weight: 700;
  color: #333;
  font-size: 1.15rem;
  font-family: 'RobotoSlab', serif;
}

.orange-img { width: 100%; aspect-ratio: 4/3; object-fit: cover; border-radius: 4px; }
.orange-title { font-weight: 700; color: #000; text-transform: uppercase; margin-top: 15px; font-family: 'RobotoSlab', serif; }
.orange-subtitle { font-family: 'RobotoSlab', serif; }
.product-link { text-decoration: none; color: inherit; }

.site-footer { background-color: #3a3a3a; color: white; font-family: 'RobotoSlab', serif; }
.footer-nav a { color: white !important; text-decoration: none; margin-right: 20px; font-weight: 700; font-size: 0.85rem; }
.active-link { color: #8cb26a !important; }
.footer-divider { border-top: 1px solid rgba(255,255,255,0.1); margin: 20px 0; }
.footer-socials { display: flex; gap: 10px; }
.social-icon-circle { 
  width: 36px; height: 36px; border: 1px solid #8cb26a; border-radius: 50%; 
  display: flex; align-items: center; justify-content: center; color: #8cb26a; text-decoration: none;
}
.footer-copyright { font-size: 0.8rem; opacity: 0.8; }
</style>