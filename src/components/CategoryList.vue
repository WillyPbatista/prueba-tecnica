<template>
  <div class="category-list">
    <select v-model="selectedCategory" @change="handleCategoryChange">
      <option value="All">All</option>
      <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
    </select>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      categories: [],
      selectedCategory: 'All'
    };
  },
  mounted() {
    this.fetchCategories();
  },
  methods: {
    fetchCategories() {
      axios.get('https://fakestoreapi.com/products/categories')
        .then(response => {
          this.categories = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
    handleCategoryChange() {
      this.$emit('category-selected', this.selectedCategory);
    }
  }
};
</script>

<style scoped>
.category-list select {

  min-width: 5rem;
  min-height: 3rem;
  border: none;
  border-radius: 10px;
  padding: 1rem;
  background: #1f2937;
  color: #fff;
  font-size: 1rem;

}
</style>