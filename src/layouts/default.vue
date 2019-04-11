<template>
  <v-app dark>
    <v-tabs fixed-tabs hide-slider>
      <v-tab to="/">home</v-tab>
      <v-tab to="/authentication-not-required">
        authentication not required
      </v-tab>
      <v-tab to="/authentication-required">authentication required</v-tab>
    </v-tabs>

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { firebase } from '@/assets/script/firebase'

export default {
  mounted() {
    // It monitors login status and is processed if it is changed.
    // ログインステータスを監視し、変更された場合は処理されます。
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // If you are logged in
        // ログインしている場合
        this.$store.commit('login')

        // If there is a redirect in the URL query, redirect it.
        // URL のクエリにリダイレクトが存在する場合はリダイレクトします。
        if (this.$route.query.redirect) {
          this.$router.push(this.$route.query.redirect)
        }
      } else {
        // If you are not logged in
        // ログインしていない場合
        this.$store.commit('logout')
      }
    })
  }
}
</script>
