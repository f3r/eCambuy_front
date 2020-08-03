<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <div class="text-center">
        <!--<logo />-->
        <!--<vuetify-logo />-->
        <h1>Comercia con productos ecológicos</h1>
        <h3>Locales, Saludables y Sabrosos</h3>
      </div>
      <v-card>
        <v-card-title class="headline">
          Para comprar o vender productos
        </v-card-title>
        <v-card-text>

        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            nuxt
            to="/signup"
          >
            Register
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-spacer></v-spacer>
      <v-card>
        <v-card-title class="headline">
          Ver todos los productos
        </v-card-title>
        <v-card-text>

        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            nuxt
            to="productList"
          >
          Ver productos
          </v-btn>

        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>


export default {
  components: {

  }
}
</script>
