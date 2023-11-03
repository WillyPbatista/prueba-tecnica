<template>
  <div class="cart">
    <h2>Compra</h2>
    <ul v-if="cartItems.length > 0">
      <li v-for="item in cartItems" :key="item.id">
        {{ item.title }} (Quantity: {{ item.quantity }})
        <button @click="removeFromCart(item.id)">Remove</button>
      </li>
    </ul>
    <p v-else>No hay elementos seleccionados</p>
    <p>Total Price: {{ totalPrice }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartItems: []
    };
  },
  computed: {
    totalPrice() {
      return this.cartItems.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
    }
  },
  methods: {
    addToCart(product) {
      const cartItem = this.cartItems.find(item => item.id === product.id);
      if (cartItem) {
        cartItem.quantity++;
      } else {
        this.cartItems.push({
          id: product.id,
          title: product.title,
          price: product.price,
          quantity: 1
        });
      }
    },
    removeFromCart(itemId) {
      this.cartItems = this.cartItems.filter(item => item.id !== itemId);
    }
  }
};
</script>

<style scoped>
.cart {
  margin-top: 20px;
}

.cart ul {
  list-style-type: none;
  padding: 0;
}

.cart li {
  margin-bottom: 5px;
}

.cart button {
  margin-left: 10px;
}
</style>