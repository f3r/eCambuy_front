<template>
  <v-main>
    <v-col cols="12" md="8" class="mx-auto">
      <v-card>
        <v-card-title>Vendedor:{{ product.owner }} ID: {{ id }}</v-card-title>
        <v-img
          class="white--text align-end"
          height="200px"
          :src="product.image"
        >
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
          <v-btn color="success" text to="/productList">
            Lista de productos
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn color="info" text>
            Chat
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col cols="12" md="4" class="mx-auto mt-3">
      <v-card>
        <div v-if="$auth.loggedIn">
          <!--<div v-if="$auth.user.username === product.owner.username">-->
          <v-btn class="mb-2" block color="orange" @click="editProduct"
            >Editar Producto</v-btn
          >

          <v-btn block color="error" @click="deleteProduct"
            >Borrar Producto</v-btn
          >
          <!--</div>-->
        </div>
        <div v-else>
          <p class="text-center">
            Inicia sesión o regístrate para comprar este producto
          </p>
        </div>
      </v-card>
    </v-col>
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
      console.log('id prod soy ->' + typeof response._id)
      console.log(response._id)
      console.log('owner soy ->' + typeof response.owner)
      console.log(response.owner)
      console.log('owner id soy ->' + typeof response.owner._id)
      console.log(response.owner._id)

      return response
    },
    editProduct() {
      alert('con este edito')
    },
    async deleteProduct() {
      await this.$axios.$delete(`/products/me/${this.id}`)
      this.$router.push('/productList')
    },
  },
}
</script>
