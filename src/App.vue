<template>
  <div id="app">
    <header class="main-header border-bottom shadow-sm">
      <div class="container d-flex justify-content-between align-items-center">
        <router-link to="/" class="header-brand">
          <img src="/images/logo.png" alt="Agridera" class="main-logo-img">
        </router-link>

        <div class="header-right-block">
          <div class="search-bar-row mb-2 d-flex justify-content-end align-items-center">
            <span class="search-label">SEARCH</span>
            <div class="search-input-container">
              <input type="text" class="search-input">
              <i class="fas fa-search search-icon"></i>
            </div>
          </div>

          <nav class="header-nav d-flex justify-content-end">
            <router-link class="header-link" to="/" exact-active-class="active">HOME</router-link>
            <a class="header-link" href="#">COMPANY PROFILE</a>
            <router-link class="header-link" to="/products" active-class="active">PRODUCTS</router-link>
            <a class="header-link" href="#">SERVICES</a>
            <a class="header-link" href="#">R & D</a>
            <router-link class="header-link" to="/contact">CONTACT</router-link>
          </nav>
        </div>
      </div>
    </header>

    <router-view />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

/* БАЗОВЫЕ СТИЛИ ПРОЕКТА */
body { 
  margin: 0; 
  font-family: 'Roboto', sans-serif; 
  color: #333; 
  -webkit-font-smoothing: antialiased; /* Улучшение рендеринга шрифтов */
  -moz-osx-font-smoothing: grayscale;
}

/* СТИЛИ ШАПКИ (Header) */
.main-header { 
  background-color: white; 
  padding: 15px 0; 
}

.main-logo-img { 
  height: 80px; 
  width: auto; 
}

.search-label { 
  font-size: 0.7rem; 
  font-weight: 700; 
  margin-right: 8px; 
  color: #4b4b4b; 
}

.search-input { 
  border: 1px solid #ccc; 
  width: 150px; 
  height: 22px; 
  outline: none; 
  padding: 0 5px; 
}

.search-icon { 
  font-size: 0.8rem; 
  margin-left: 5px; 
  cursor: pointer; 
}

.header-nav { 
  gap: 20px; 
}

.header-link { 
  color: #4b4b4b; 
  font-weight: 700; 
  font-size: 0.85rem; 
  text-decoration: none !important; 
  transition: 0.3s; 
}

.header-link:hover, .header-link.active { 
  color: #8cb26a; 
}

/* ГЛОБАЛЬНЫЕ СТИЛИ ФУТЕРА */

/* Глобально меняем фон для всех футеров в проекте.
  Это ЕДИНСТВЕННОЕ место с !important, чтобы перекрасить синий фон каталога.
  Остальные элементы (навигация, иконки, копирайт) НЕ трогаем, 
  чтобы они сохранили зеленый цвет и структуру из ProductsDetail.vue.
*/
.site-footer {
  background-color: #3a3a3a !important; /* Тот самый темно-серый цвет */
  color: white;
  margin-top: 50px;
}

/* Гарантируем, что копирайт останется белым,
  так как темно-синий и темно-серый фоны похожи,
  и белый текст подходит для обоих.
*/
.site-footer .footer-copyright {
  color: rgba(255, 255, 255, 0.6);
}
</style>