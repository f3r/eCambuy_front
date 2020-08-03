<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <v-sheet
            elevation="2"
            class="pa-12"
          >
            <v-text-field
              v-model="search"
              :placeholder="placeholder"
              :filled="filled"
              :clearable="clearable"
              :counter="counterEn ? counter : false"
            ></v-text-field>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>

    <h2>Productos en venta</h2>
    <ProductCard v-for="(product, idx) in filteredProducts" :key="idx" :products="product"/>

  </v-main>
</template>

<script>
import ProductCard from '~/components/ProductCard'

export default {
  name: 'ProductList',
  components: {
    ProductCard
  },
  data() {
    return {
      products: [],
      search:'',
      placeholder: 'Filtra los productos por nombre',
      filled: false,
      clearable: false,
      counterEn: false,
      counter: 0,
    }
  },
  computed: {
    filteredProducts() {
      return this.products.filter((product) => {
        return product.name.match(this.search)
      })
    }
  },
  methods: {
    async getListProducts() {
      const response = await this.$axios.$get('/products')
      //console.log(response)
      return response
    }
  },
  async mounted () {
       this.products = await this.getListProducts()
  }
}
</script>



