<template>
  <div class="contact-page">
    <header-component />

    <section class="hero-section">
      <img src="/images/pole.jpg" alt="Contact Us Banner" class="banner-img">
    </section>

    <main class="main-content container py-5">
      <section class="contact-header mb-4 text-left">
        <h1 class="main-title">Contact us</h1>
        <div class="stars">*****</div>
      </section>

      <section v-if="submitted" class="success-section my-5">
        <div class="success-card p-5 text-center">
          <h2 class="success-title">Thank you, {{ formData.name }}!</h2>
          <p class="success-subtitle">Your order has been successfully placed.</p>
          <hr class="success-divider">
          
          <div class="details-sent text-start d-inline-block">
            <p class="details-label text-center">Details sent:</p>
            <ul class="details-list">
              <li>
                <span class="detail-key">Email:</span>
                <span class="detail-value">{{ formData.email }}</span>
              </li>
              <li>
                <span class="detail-key">Company:</span>
                <span class="detail-value">{{ formData.company || 'N/A' }}</span>
              </li>
              <li>
                <span class="detail-key">Interest:</span>
                <span class="detail-value">{{ formData.interest || 'No details provided' }}</span>
              </li>
            </ul>
          </div>

          <div class="mt-4">
            <router-link to="/products" class="btn-return">Return to Products</router-link>
          </div>
        </div>
      </section>

      <div v-else>
        <section class="order-section mb-5" v-if="cart.items.length > 0">
          <h3 class="section-subtitle mb-3">Your Order</h3>
          <div class="table-responsive">
            <table class="order-table table">
              <thead>
                <tr>
                  <th class="text-muted border-0">Image</th>
                  <th class="text-muted border-0">Name</th>
                  <th class="text-muted border-0">Description</th>
                  <th class="text-center text-muted border-0">Remove</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in cart.items" :key="item.id">
                  <td class="align-middle product-img-cell">
                    <img :src="item.image" :alt="item.title" class="table-product-img">
                  </td>
                  <td class="align-middle fw-bold">{{ item.title }}</td>
                  <td class="align-middle text-muted">{{ item.short_text }}</td>
                  <td class="align-middle text-center">
                    <button @click="cart.removeFromCart(item.id)" class="btn-remove">&times;</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section class="form-section mb-5">
          <form @submit.prevent="submitForm">
            <div class="row">
              <div class="col-md-6 mb-3">
                <div class="mb-3">
                  <label class="form-label">Name *</label>
                  <input v-model="formData.name" type="text" class="form-control" required>
                </div>
                <div class="mb-3">
                  <label class="form-label">Company Name</label>
                  <input v-model="formData.company" type="text" class="form-control">
                </div>
                <div class="mb-3">
                  <label class="form-label">Position</label>
                  <input type="text" class="form-control">
                </div>
                <div class="mb-3">
                  <label class="form-label">City</label>
                  <input type="text" class="form-control">
                </div>
                <div class="mb-3">
                  <label class="form-label">Country</label>
                  <input type="text" class="form-control">
                </div>
                <div class="mb-3">
                  <label class="form-label">Telephone</label>
                  <input type="tel" class="form-control">
                </div>
                <div class="mb-3">
                  <label class="form-label">Email *</label>
                  <input v-model="formData.email" type="email" class="form-control" required>
                </div>
              </div>

              <div class="col-md-6 mb-3">
                <div class="mb-3">
                  <label class="form-label">You are a</label>
                  <select class="form-select custom-select">
                    <option value="" disabled selected>Choose...</option>
                    <option value="seed_producer">seed producer</option>
                    <option value="distributor">distributor</option>
                    <option value="grower">grower</option>
                  </select>
                </div>
                <div class="mb-3">
                  <label class="form-label">If other, please specify</label>
                  <input type="text" class="form-control">
                </div>
                <div class="mb-3">
                  <label class="form-label">You are interested in</label>
                  <textarea v-model="formData.interest" class="form-control" rows="12"></textarea>
                </div>
              </div>
            </div>

            <div class="row mt-2">
              <div class="col-md-6"></div>
              <div class="col-md-6">
                <div class="d-flex align-items-center justify-content-between">
                  <div class="d-flex align-items-center gap-2">
                    <div class="captcha-box">7 c j 3</div>
                    <input type="text" class="form-control captcha-input">
                  </div>
                  <button type="submit" class="btn-send">Send Message</button>
                </div>
              </div>
            </div>
          </form>
        </section>
      </div>

      <section class="address-section text-center py-5">
        <h3 class="address-title">Our Address</h3>
        <div class="address-content mt-4">
          <p class="mb-1 fw-bold">AGRIDERA Seeds & Agriculture Ltd.</p>
          <p class="mb-1">P.O. Box 103,</p>
          <p class="mb-1">Gedera 70750, Israel.</p>
          <p class="mb-0">Telephone: <span class="green-text">+972 8 944 9222</span></p>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="container py-4">
        <div class="footer-top d-flex justify-content-between align-items-center">
          <nav class="footer-nav">
            <a href="#">PROFILE</a>
            <a href="#">MANAGEMENT</a>
            <router-link to="/products" class="footer-link">PRODUCTS</router-link>
            <a href="#">R&D</a>
            <a href="#">LINKS</a>
            <a href="#">SITEMAP</a>
            <router-link to="/contact" class="active-link">CONTACT</router-link>
          </nav>
          <div class="footer-socials">
            <a href="#" class="social-btn"><i class="fab fa-linkedin-in"></i></a>
            <a href="#" class="social-btn"><i class="fab fa-instagram"></i></a>
            <a href="#" class="social-btn"><i class="fab fa-youtube"></i></a>
            <a href="#" class="social-btn"><i class="fab fa-twitter"></i></a>
            <a href="#" class="social-btn"><i class="fab fa-facebook-f"></i></a>
          </div>
        </div>
        <hr class="footer-line">
        <div class="footer-bottom text-center">
          AGRIDERA SEEDS & AGRICULTURE LTD. © 2026
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useCartStore } from '../stores/cart';

const cart = useCartStore();
const submitted = ref(false);

const formData = reactive({
  name: '',
  email: '',
  company: '',
  interest: ''
});

const submitForm = () => {
  submitted.value = true;
  cart.items = [];
  localStorage.removeItem('cart');
};
</script>

<style scoped>
@font-face {
  font-family: 'RobotoSlab';
  src: url('/fonts/RobotoSlab.ttf') format('truetype');
}

.contact-page {
  font-family: 'RobotoSlab', serif;
  background-color: #fff;
  color: #333;
}

.hero-section { width: 100%; height: 450px; overflow: hidden; }
.banner-img { width: 100%; height: 100%; object-fit: cover; }

.main-title { color: #455a64; font-weight: 700; font-size: 3rem; margin-bottom: 0; }
.stars { color: #8cb26a; letter-spacing: 5px; font-size: 1.2rem; margin-top: -5px; }

.section-subtitle { color: #8cb26a; font-weight: 700; text-decoration: underline; text-underline-offset: 10px; font-size: 1.6rem; }
.order-table th { border: none; font-size: 0.9rem; text-transform: none; }
.table-product-img { width: 55px; height: 40px; object-fit: cover; border-radius: 2px; }

.btn-remove { 
  border: none; 
  background: none; 
  color: #bc3c3c; 
  font-size: 1.6rem; 
  font-weight: bold; 
  cursor: pointer;
  transition: 0.2s;
}
.btn-remove:hover { transform: scale(1.2); }

.form-label { font-weight: bold; color: #4b4b4b; font-size: 0.95rem; margin-bottom: 8px; display: block; }
.form-control, .form-select { border-radius: 2px; border: 1px solid #ced4da; padding: 10px; font-family: Arial, sans-serif; }

.custom-select {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23333' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 8px 10px;
}

.captcha-box {
  background: white;
  border: 1px solid #ccc;
  padding: 6px 18px;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
  letter-spacing: 6px;
  font-size: 1.2rem;
  color: #000;
}
.captcha-input { width: 85px; height: 42px; text-align: center; border-radius: 2px; }
.btn-send {
  background-color: #8cb26a;
  color: white;
  border: none;
  padding: 10px 40px;
  border-radius: 25px;
  font-weight: bold;
  font-size: 1rem;
  transition: 0.3s;
}
.btn-send:hover { background-color: #76975a; }

/* СТИЛИ УСПЕШНОЙ ОТПРАВКИ */
.success-card {
  background-color: #e8f5e9;
  border-radius: 8px;
  border: 1px solid #c8e6c9;
}
.success-title { color: #2e4d31; font-weight: 700; font-size: 2.2rem; }
.success-subtitle { color: #4f6f52; font-size: 1.1rem; }
.success-divider { border-top: 1px solid rgba(0,0,0,0.1); margin: 20px 0; }

.details-sent {
  margin-top: 20px;
  min-width: 280px;
}
.details-label { font-weight: bold; color: #2e4d31; margin-bottom: 15px; }

/* Выравнивание Email, Company, Interest в колонку */
.details-list { 
  list-style: none; 
  padding: 0; 
  margin: 0; 
}
.details-list li { 
  display: flex; 
  justify-content: flex-start;
  margin-bottom: 10px;
  color: #2e4d31;
}
.detail-key {
  font-weight: bold;
  width: 85px; /* Фиксированная ширина для левой колонки */
  text-align: left;
  flex-shrink: 0;
}
.detail-value {
  text-align: left;
}

.btn-return {
  display: inline-block;
  background-color: #8cb26a;
  color: white;
  padding: 8px 25px;
  border-radius: 20px;
  text-decoration: none;
  font-weight: bold;
  transition: 0.3s;
}
.btn-return:hover { background-color: #76975a; color: white; }

.address-title { color: #8cb26a; font-weight: 700; text-decoration: underline; text-underline-offset: 10px; font-size: 1.6rem; }
.address-content p { font-family: Arial, sans-serif; color: #555; }
.green-text { color: #8cb26a; font-weight: bold; }

.site-footer { background-color: #333; color: white; margin-top: 50px; }
.footer-nav a { color: white !important; text-decoration: none; margin-right: 20px; font-weight: bold; font-size: 0.85rem; }
.active-link { color: #8cb26a !important; }
.footer-socials { display: flex; gap: 12px; }
.social-btn {
  width: 36px; height: 36px; border: 1px solid #8cb26a; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  color: #8cb26a; text-decoration: none; transition: 0.3s;
}
.social-btn:hover { background-color: #8cb26a; color: #333; }
.footer-line { border-top: 1px solid rgba(255,255,255,0.1); margin: 20px 0; }
.footer-bottom { font-size: 0.8rem; opacity: 0.8; letter-spacing: 1px; padding-bottom: 20px; }
</style>