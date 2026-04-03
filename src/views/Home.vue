<template>
  <div class="home-page">
    <section class="hero-section" :style="{ backgroundImage: 'url(/images/bg.png)' }">
      <div class="hero-overlay">
        <div class="hero-content text-center">
          <h1 class="hero-title">Agridera Seeds and Agriculture Ltd</h1>
          <div class="mt-4">
            <button class="btn btn-read-more">READ MORE</button>
          </div>
        </div>
      </div>
    </section>

    <section class="products-banner-section">
      <div class="full-width-wrapper"> 
        <img src="/images/Products.png" alt="Products" class="products-img-full">
      </div>
    </section>

    <section class="py-5 info-outer-section">
      <div class="container">
        <div class="row align-items-center mb-5">
          <div class="col-md-6 order-md-2 p-0">
            <img src="/images/image3.png" alt="Vision" class="img-fluid section-image shadow-sm">
          </div>
          <div class="col-md-6 order-md-1 p-md-5">
            <h2 class="section-heading">Vision</h2>
            <div class="stars">*****</div>
            <p class="section-text">We believe in long-term growth with an emphasis on the potential of emerging markets. We also support the global need of feeding the growing population.</p>
          </div>
        </div>
        
        <div class="row align-items-center">
          <div class="col-md-6 p-0">
            <img src="/images/image2.png" alt="Mission" class="img-fluid section-image shadow-sm">
          </div>
          <div class="col-md-6 p-md-5 pl-md-5">
            <h2 class="section-heading">Mission</h2>
            <div class="stars">*****</div>
            <p class="section-text">Breeding and marketing seeds for advanced field crops and vegetable varieties that provide an added value to all supply chain partners.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="activities-section py-5">
      <div class="container text-center">
        <h2 class="section-heading">Agridera's main activities</h2>
        <div class="stars mb-5">*****</div>
        <div class="row">
          <div class="col-md-4 activity-item mb-4">
            <img src="/images/image4.png" alt="" class="activity-img mb-3">
            <h4 class="activity-title">Open field crop seeds</h4>
            <p class="activity-desc">wheat, cotton, legumes, hybrid confection sunflower</p>
          </div>
          <div class="col-md-4 activity-item mb-4">
            <img src="/images/image5.png" alt="" class="activity-img mb-3">
            <h4 class="activity-title">Vegetable seeds</h4>
            <p class="activity-desc">hybrid open field tomatoes, eggplant, onion, paprika, etc.</p>
          </div>
          <div class="col-md-4 activity-item mb-4">
            <img src="/images/image6.png" alt="" class="activity-img mb-3">
            <h4 class="activity-title">Ornamental seeds</h4>
            <p class="activity-desc">hybrid cut sunflowers, hybrid patio tomatoes, Bells of Ireland, etc.</p>
          </div>
        </div>
      </div>
    </section>

    <footer class="main-footer">
      <div class="container">
        <div class="footer-top-content d-flex justify-content-between align-items-center py-4">
          <nav class="footer-links">
            <a href="#">PROFILE</a>
            <a href="#">MANAGEMENT</a>
            <router-link to="/products" class="footer-link-active">PRODUCTS</router-link>
            <a href="#">R&D</a>
            <a href="#">LINKS</a>
            <a href="#">SITEMAP</a>
            <a href="#">CONTACT</a>
          </nav>
          
          <div class="footer-socials">
            <a href="#" class="social-circle"><i class="fab fa-linkedin-in"></i></a>
            <a href="#" class="social-circle"><i class="fab fa-instagram"></i></a>
            <a href="#" class="social-circle"><i class="fab fa-youtube"></i></a>
            <a href="#" class="social-circle"><i class="fab fa-twitter"></i></a>
            <a href="#" class="social-circle"><i class="fab fa-facebook-f"></i></a>
          </div>
        </div>
        
        <hr class="footer-line">
        
        <div class="footer-bottom text-center py-3">
          <span class="copyright">AGRIDERA SEEDS & AGRICULTURE LTD. © 2026</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>

.home-page { 
  background-color: #f7f7f7; 
}

.hero-section { 
  height: 650px; 
  background-size: cover; 
  background-position: center; 
  display: flex; 
  align-items: center; 
  justify-content: center; 
}
.hero-title { font-weight: 700; color: #4b4b4b; font-size: 3.5rem; text-shadow: 0 2px 4px rgba(255,255,255,0.5); }
.btn-read-more { 
  background: #8cb26a; color: white; border: none; padding: 12px 40px; 
  font-weight: bold; border-radius: 4px; transition: 0.3s; 
}

.section-heading { color: #4b4b4b; font-weight: 700; font-size: 2.2rem; }
.stars { color: #8cb26a; letter-spacing: 5px; font-size: 1.2rem; }
.section-text { color: #4b4b4b; line-height: 1.6; }
.section-image { border-radius: 4px; }

.products-banner-section {
  width: 100%;
  overflow: hidden;
  background-color: #fff;
  padding: 20px 0;
}
.full-width-wrapper { width: 100%; padding: 0; margin: 0; }
.products-img-full { width: 100%; height: auto; display: block; }

.activity-title { color: #8cb26a; font-weight: 700; margin-top: 15px; }
.activity-desc { font-size: 0.9rem; color: #666; }
.activity-img { height: 110px; object-fit: contain; }

.main-footer { 
  background-color: #3a3a3a; 
  color: white; 
  margin-top: 50px;
}

.footer-links a, .footer-link-active { 
  color: white !important; 
  text-decoration: none; 
  margin-right: 20px; 
  font-weight: 700; 
  font-size: 0.8rem; 
}
.footer-link-active { color: #8cb26a !important; }
.footer-links a:hover { color: #8cb26a !important; }

.footer-socials { display: flex; gap: 12px; }

.social-circle { 
  width: 35px; height: 35px; border: 1px solid #8cb26a; border-radius: 50%; 
  display: flex; align-items: center; justify-content: center; 
  color: #8cb26a; text-decoration: none; transition: 0.3s;
}
.social-circle:hover { background-color: #8cb26a; color: #3a3a3a; }

.footer-line { border-top: 1px solid rgba(255, 255, 255, 0.1); margin: 0; }
.footer-bottom { font-size: 0.75rem; color: white; opacity: 0.8; letter-spacing: 1px; }
</style>