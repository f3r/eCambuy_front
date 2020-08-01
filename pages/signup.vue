<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
        <h2>Únete a eCambuy</h2>
        <h4>Crea una cuenta para intercambiar tus productos ecológicos</h4>
          <v-text-field
            v-model="username"
            :rules="nameRules"
            :counter="10"
            label="Name"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="password"
            :rules="nameRules"
            :counter="10"
            label="Password"
            required
          ></v-text-field>
        </v-col>

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
      </v-row>
    </v-container>
    <v-spacer></v-spacer>
    <v-btn
      color="primary"
      nuxt
      @click="signup"
      >
      Signup
      </v-btn>
  </v-form>
</template>

<script>
  export default {
    data: () => ({
      valid: false,
      username: '',
      password: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      email: 'f@f.com',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    }),
    methods: {
      async signup() {
        const data = {
          user_password: this.username,
          user_username: this.password,
          user_email: this.email
        }
        const ip = await this.$axios.$post('/auth/signup', data )
        this.ip = ip
      }
    }
  }
</script>
