<template>
  <v-main
    ><h2>Añadir producto</h2>
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="name"
              :rules="nameRules"
              label="name"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="image"
              :rules="imageRules"
              label="image"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-textarea
              v-model="description"
              :rules="descriptionRules"
              :counter="325"
              label="description"
              required
            ></v-textarea>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field label="price"></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="location"
              :rules="locationRules"
              label="location"
              required
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
      <v-spacer></v-spacer>
      <v-btn color="primary" nuxt @click="createProduct">
        Enviar
      </v-btn>
      <v-spacer></v-spacer>
    </v-form>
  </v-main>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    name: '',
    nameRules: [
      (v) => !!v || 'Name is required',
      (v) => v.length <= 40 || 'Name must be less than 40 characters',
    ],
    image: '',
    imageRules: [(v) => !!v || 'Image is required'],
    description: '',
    descriptionRules: [
      (v) => !!v || 'Description is required',
      (v) => v.length <= 325 || 'Description must be less than 325 characters',
    ],
    location: '',
    locationRules: [
      (v) => !!v || 'Location is required',
      (v) => v.length <= 325 || 'Description must be less than 325 characters',
    ],
  }),
}
</script>
