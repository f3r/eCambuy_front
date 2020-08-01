<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
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
    <v-btn
      color="primary"
      nuxt
      @click="login"

      >
      Login
      </v-btn>
      <v-spacer></v-spacer>
      <p>No tienes cuenta? Crea una</p>
      <v-btn
      color="primary"
      nuxt
      to="/signup"
      >
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
        v => !!v || 'Password is required',
        v => v.length >= 6 || 'Password must be at least 6 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    }),
    methods: {
      async login() {
        const data = {
          user_email: this.email,
          user_password: this.password
        }
        const ip = await this.$axios.$post('/auth/login', data )
        this.ip = ip
        //console.log(this.ip)
        //console.log(this.ip.token)
        localStorage.setItem('token', this.ip.token)
        localStorage.setItem('email', this.ip.email)
        //this.$router.push('/productList')
      }
    }
  }
</script>
