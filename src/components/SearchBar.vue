<template>
  <div class="search-bar">
    <input type="text" v-model="searchQuery" @input="handleSearch" placeholder="Buscar por nombre" >
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: ''
    };
  },
  methods: {
    handleSearch() {
      this.$emit('search', this.searchQuery);
    }
  }
};
</script>

<style scoped>
input {
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