<template>
  <v-layout column>
    <template v-if="$store.state.loggedIn">
      <v-flex>
        Welcome to firebase-login-nuxt !!
      </v-flex>

      <v-flex>
        <v-btn color="primary" @click="logout()">
          logout
        </v-btn>
      </v-flex>
    </template>

    <template v-else>
      <v-flex>
        <v-alert
          :value="$route.query.showMessage"
          color="warning"
          icon="priority_high"
          outline
        >
          <div>Please login and authenticate.</div>
          <div>ログイン認証してください。</div>
        </v-alert>
      </v-flex>

      <v-flex>
        <v-btn color="primary" :loading="loginProcessing" @click="login()">
          login
        </v-btn>
      </v-flex>

      <v-flex>
        <v-checkbox
          v-model="keepLogin"
          color="primary"
          label="Keep login status. ログイン状態を保持する。"
        />
      </v-flex>
    </template>
  </v-layout>
</template>

<script>
import { firebase } from '@/assets/script/firebase'

export default {
  data() {
    return {
      keepLogin: false,
      loginProcessing: false
    }
  },

  methods: {
    async login() {
      this.loginProcessing = true

      // If you want to keep the login status, change the authentication status persistence.
      // Please see https://firebase.google.com/docs/auth/web/auth-state-persistence?hl=en for details.
      // ログイン状態を保持する場合は認証状態の永続性を変更します。
      // 詳細は https://firebase.google.com/docs/auth/web/auth-state-persistence?hl=ja を参照してください。
      if (!this.keepLogin) {
        await firebase
          .auth()
          .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      }

      // Anonymous authentication.
      // 匿名認証します。
      firebase
        .auth()
        .signInAnonymously()
        .then(() => {
          this.loginProcessing = false
        })
    },

    logout() {
      firebase
        .auth()
        .currentUser.delete()
        .then(() => {
          firebase.auth().signOut()
        })
    }
  }
}
</script>
