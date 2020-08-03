<template>
  <v-app>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-navigation-drawer
      v-model="drawer"

      app
      >
        <v-list >
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
            router
            exact
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
        </v-list>

      </v-navigation-drawer>

      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn text @click="logout">Logout</v-btn>
      <div v-if="$auth.loggedIn">
        {{ $auth.user._id }}
        <v-btn text @click="logout">Logout</v-btn>
        <!-- username -->
        <!-- logout button -->
      </div>
      <div v-else>
        <v-btn text to="/login">Login</v-btn>
        <v-btn text to="/signup">Register</v-btn>
        <!-- login -->
        <!-- logout button -->
      </div>
    </v-app-bar>

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>


    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {



      items: [
        {
          icon: 'mdi-home',
          title: 'Inicio',
          to: '/'
        },
        {
          icon: 'mdi-magnify',
          title: 'Buscar',
          to: '/productList'
        },
        {
          icon: 'mdi-format-list-checkbox',
          title: 'Lista de productos',
          to: '/productList'
        }
      ],
      drawer: false,
      title: 'eCambuy'
    }
  },
  methods: {
    async logout() {
      await this.$auth.logout();
    }
  }
}
</script>
