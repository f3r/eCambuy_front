<template>
  <v-main>
    <v-col cols="12" md="8" class="mx-auto">
      <v-card>
        <v-card-title>Vendedor:{{ owner && owner.username }}</v-card-title>
        <v-img class="white--text align-end" height="200px" :src="image">
        </v-img>
        <v-spacer></v-spacer>
        <v-card-title class="pb-0">{{ name }}</v-card-title>
        <v-spacer></v-spacer>
        <v-card-subtitle class="pb-0">Precio: {{ price }}</v-card-subtitle>
        <v-card-subtitle class="pb-0"
          >Municipio: {{ location }}</v-card-subtitle
        >
        <v-card-text class="text--primary">
          <div>Descripción: {{ description }}</div>
        </v-card-text>
        <v-divider></v-divider>
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
    <v-col cols="12" md="8" class="mx-auto mt-3">
      <v-card>
        <div v-if="isAuthenticated && loggedInUser._id === owner._id">
          <v-btn class="mb-2" block color="orange" @click="editProduct"
            >Editar Producto</v-btn
          >

          <v-btn block color="error" @click="deleteProduct"
            >Borrar Producto</v-btn
          >
        </div>
      </v-card>
    </v-col>
  </v-main>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  async asyncData({ $axios, params }) {
    const response = await $axios.$get(
      `http://localhost:3000/api/products/${params.id}`
    )
    return { ...response }
  },
  data() {
    return {
      id: this.$route.params.id,
      dialog: false,
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser']),
  },

  methods: {
    editProduct() {
      this.$router.push(`/editProduct/${this.id}`)
    },
    async deleteProduct() {
      const response = confirm('Estás seguro de borrar el producto?')
      if (response) {
        await this.$axios.$delete(`/products/me/${this.id}`)
        this.$router.push('/addProductForm')
      }
    },
  },
}
</script>
