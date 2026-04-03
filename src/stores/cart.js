import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    // Загружаем данные из браузера, если они есть. Если нет — корзина пуста.
    items: JSON.parse(localStorage.getItem('cart')) || []
  }),
  actions: {
    addToCart(product) {
      if (!this.isInCart(product.id)) {
        // Добавляем только необходимые поля, чтобы не перегружать память
        this.items.push({
          id: product.id,
          title: product.title,
          short_text: product.short_text,
          image: product.image
        });
        this.saveToLocalStorage();
      }
    },
    removeFromCart(productId) {
      // Фильтруем массив, оставляя всё, кроме удаляемого ID
      this.items = this.items.filter(item => item.id !== productId);
      this.saveToLocalStorage();
    },
    isInCart(productId) {
      return this.items.some(item => item.id === productId);
    },
    saveToLocalStorage() {
      localStorage.setItem('cart', JSON.stringify(this.items));
    }
  }
});