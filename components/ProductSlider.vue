<template>
  <v-carousel
    cycle
    height="400"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(lastProduct, idx) in lastProducts"
      :key="idx"
    >
      <v-sheet

        height="100%"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="display-3">
          <!--  <v-card>-->
              <img :src="lastProduct.image">
              Nombre: {{ lastProduct.name }}
          <!--  </v-card>-->
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    name: 'ProductSlider',
    data () {
      return {
        lastProducts: []
      }
    },
    methods: {
      async getLastProducts() {
        const response = await this.$axios.$get('/products/last')
        //console.log(this.id)
        console.log(response)
        return response
      }
    },
    async mounted () {
        this.lastProducts = await this.getLastProducts()
        console.log(this.lastProducts)
    }
  }
</script>

<style scoped>

</style>
