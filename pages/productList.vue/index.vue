<template>
    <div>
        <h2>Productos en venta</h2>
        <ProductCard v-for="(product, idx) in products" :key="idx" :products="product"/>

    </div>
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
      products: []
    }
  },
  methods: {
    async getProducts() {
      const response = await this.$axios.$get('/products')
      //console.log(response)
      return response
    }
  },
  async mounted () {
       this.products = await this.getProducts()
  }
}
</script>
