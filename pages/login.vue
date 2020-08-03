<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4" class="mx-auto">
        <v-form v-model="valid">
          <h2>Bienvenido</h2>
          <h4>Inicia sesión para comprar y vender productos</h4>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>

          <v-text-field
            v-model="password"
            :rules="passwordRules"
            type="password"
            label="password"
            required
          ></v-text-field>

          <v-btn color="primary" nuxt @click="login">
            Enviar
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="4" class="mx-auto pt-3">
        <v-divider></v-divider>
        <p class="mt-4">
          No tienes cuenta? Crea una
          <v-btn color="primary" text nuxt to="/signup">
            signup
          </v-btn>
        </p>
      </v-col>
    </v-row>
  </v-container>
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
