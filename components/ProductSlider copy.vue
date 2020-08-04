<template>
  <v-carousel cycle height="400" hide-delimiter-background show-arrows-on-hover>
    <v-carousel-item v-for="(lastProduct, idx) in lastProducts" :key="idx">
      <v-sheet height="100%">
        <v-row align="center" justify="center">
          <!--<div class="display-3">-->
          <v-card class="text-center">
            <v-card-title>{{ lastProduct.name }}</v-card-title>
            <v-img
              class="white--text"
              height="275px"
              width="800px"
              :src="lastProduct.image"
            />
          </v-card>
          <!--</div>-->
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: 'ProductSlider',
  data() {
    return {
      lastProducts: [],
    }
  },
  async mounted() {
    this.lastProducts = await this.getLastProducts()
  },
  methods: {
    async getLastProducts() {
      const response = await this.$axios.$get('/products/last')
      return response
    },
  },
}
</script>
