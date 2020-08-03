<template>
  <v-main>
    <v-card class="mx-auto" max-width="400">
      <v-card-title>Vendedor:{{ product.owner }}</v-card-title>
      <v-img class="white--text align-end" height="200px" :src="product.image">
      </v-img>
      <v-spacer></v-spacer>
      <v-card-title class="pb-0">{{ product.name }}</v-card-title>
      <v-spacer></v-spacer>
      <v-card-subtitle class="pb-0"
        >Precio: {{ product.price }}</v-card-subtitle
      >
      <v-card-subtitle class="pb-0"
        >Municipio: {{ product.location }}</v-card-subtitle
      >
      <v-card-text class="text--primary">
        <div>Descripción: {{ product.description }}</div>
      </v-card-text>
      <v-card-actions>
        <v-btn color="orange" text to="/productList">
          Lista de productos
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn color="info" text>
          Chat
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      product: {},
    }
  },
  async mounted() {
    this.product = await this.getProduct()
  },
  methods: {
    async getProduct() {
      const response = await this.$axios.$get(`/products/${this.id}`)
      return response
    },
  },
}
</script>
