<template>
  <v-container>
    <v-row>
      <v-col>
        <p>
          <strong>Username:</strong>
          {{ loggedInUser.username }}
        </p>
        <p>
          <strong>Email:</strong>
          {{ loggedInUser.email }}
        </p>
        <p>
          <strong>Fecha de registro:</strong>
          {{ loggedInUser.signUpDate }}
        </p>
        <p>
          <strong>Productos creados:</strong>
          {{ loggedInUser.productsCreated }}
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['loggedInUser']),
  },
}
</script>
