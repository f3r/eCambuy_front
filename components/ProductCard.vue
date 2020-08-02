<template>
  <v-main>
    <v-card class="mx-auto"
    max-width="400">
      <v-img
      class="white--text align-end"
      height="200px"
      :src="products.image"
      >
      <!--<v-card-title>{{ products.name }}</v-card-title>-->
      </v-img>
      <v-card-title class="pb-0">{{ products.name }}</v-card-title>
      <v-spacer></v-spacer>
      <v-card-subtitle class="pb-0">Precio: {{ products.price }}</v-card-subtitle>
      <v-card-subtitle class="pb-0">Municipio: {{ products.location }}</v-card-subtitle>
      <v-card-text class="text--primary">
        <div>Descripción: {{ products.description }}</div>
      </v-card-text>
      <v-card-actions>
      <v-btn
        color="orange"
        text
      >
        Ver producto
      </v-btn>
    </v-card-actions>

    </v-card>
  </v-main>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    products: Object
  }
}
</script>


