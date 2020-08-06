<template>
  <v-card elevation="4" max-width="750" class="mx-auto">
    <v-system-bar lights-out></v-system-bar>
    <v-carousel
      :continuous="true"
      :cycle="cycle"
      :show-arrows="true"
      hide-delimiter-background
      delimiter-icon="mdi-minus"
      height="300"
    >
      <v-carousel-item v-for="(lastProduct, idx) in lastProducts" :key="idx">
        <v-sheet height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-3">
              <v-img height="200px" :src="lastProduct.image" />
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </v-card>
</template>

<script>
export default {
  name: 'ProductSlider',
  data() {
    return {
      lastProducts: [],
      cycle: true,
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
