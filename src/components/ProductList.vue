<template>
  <div>
    <div class="nav">
    <SearchBar @search="handleSearch"></SearchBar>
    <div class="cat"><Label>Categorias: </Label> <CategoryList @category-selected="handleCategorySelected"></CategoryList></div> 
    <Cart></Cart>
  </div>
    <DataTable :value="filteredProducts" tableStyle="min-width: 50rem">
      <Column field="image" header="Image" :body-template="imageBodyTemplate"></Column>
      <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.header"></Column>
      <Column field="action" header="Action" :body-template="imageBodyTemplate">
        <template #body="rowData">
          <button class="add" @click="addToCart(rowData)">Añadir</button>
          <button class="rem" @click="removeFromCart(product)">Quitar</button>
        </template>
      </Column>
    
      
    </DataTable>
    
  </div>
</template>

<script>
import axios from 'axios';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import SearchBar from './SearchBar.vue';
import CategoryList from './CategoryList.vue';
import Cart from './Cart.vue';

export default {
  data() {
    return {
      products: [],
      filteredProducts: [],
      selectedCategory: 'All',
      columns: [
        { field: 'id', header: 'ID' },
        { field: 'title', header: 'Title' },
        { field: 'category', header: 'Category' },
        { field: 'price', header: 'Price' }
      ]
    };
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    fetchProducts() {
      axios.get('https://fakestoreapi.com/products')
        .then(response => {
          this.products = response.data;
          this.filteredProducts = this.products;
        })
        .catch(error => {
          console.error(error);
        });
    },
    imageBodyTemplate(rowData) {
        return `
          <div class="product-image">
             <a :href="{{rowData.image}}" target="_blank">
               <img :src="{{rowData.image}}" alt="Product Image">
             </a>
        </div>
  `;
},

    addToCart(product) {
    this.$refs.Cart.addToCart(product)
   },
   removeFromCart(itemId) {
    this.$refs.cart.removeFromCart(itemId);
  },
    handleCategorySelected(category) {
      if (category === 'All') {
        this.filteredProducts = this.products;
      } else {
        this.filteredProducts = this.products.filter(product => {
          return product.category === category;
        });
      }
    },
    handleSearch(query) {
      this.filteredProducts = this.products.filter(product => {
        return product.title.toLowerCase().includes(query.toLowerCase());
      });
    }
  },
  components: {
    DataTable,
    Column,
    SearchBar,
    CategoryList,
    Cart
  }
};
</script>

<style>
*{
  max-height: 100%;
}
.product-image {
  width: 100px;
  height: 100px;
}
.nav{
  display: flex;
  justify-content: center;
  justify-content: space-evenly;
  align-items: center;
  margin: 10px;

}
.cat{
  display: flex;
  justify-content: center;
  justify-content: space-evenly;
  align-items: center;
  
}
Label{
  margin: 10px;
}
.add{
  background-color: rgb(20, 153, 75);
  border: none;
}
.add:hover{
  bgcolorbackground-color: rgb(18, 112, 57);
}
.rem{
  background-color: red;
  border: none;
}
.rem:hover{
  background-color: rgb(150, 13, 13);
}
</style>