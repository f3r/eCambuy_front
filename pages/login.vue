<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            :counter="10"
            label="password"
            required
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
    <v-spacer></v-spacer>
    <v-btn class="mb-3" color="primary" nuxt @click="login">
      Enviar
    </v-btn>
    <v-divider></v-divider>
    <p>No tienes cuenta? Crea una</p>
    <v-btn color="primary" nuxt to="/signup">
      signup
    </v-btn>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    password: '',
    passwordRules: [
      (v) => !!v || 'Password is required',
      (v) => v.length >= 6 || 'Password must be at least 6 characters',
    ],
    email: '',
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
  }),
  methods: {
    login() {
      const data = {
        user_email: this.email,
        user_password: this.password,
      }
      this.$auth.loginWith('local', { data })
      this.$router.push('/productList')
    },
  },
}
</script>
