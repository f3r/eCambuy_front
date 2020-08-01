<template>
    <div>
        <h2>Productos en venta</h2>

        <div v-for="(product, idx) in products" :key="idx">
          {{ product.name }}
        </div>
    </div>
</template>

<script>
//import productService from '../../services/productService'

export default {
  methods: {
      async getProducts() {
        const response = await this.$axios.$get('/products')
        //console.log(response)
        return response
      }
    },
  data() {
    return {
      products: []
    }
  },
  async mounted () {
       this.products = await this.getProducts()
  }
}
</script>
