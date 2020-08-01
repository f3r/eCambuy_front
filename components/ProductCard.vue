<template>
  <v-main>
    <v-card>
      Nombre: {{ products.name }}
      Descripcion: {{ products.description }}
      Precio: {{ products.price }}
      Municipio: {{ products.location }}
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
