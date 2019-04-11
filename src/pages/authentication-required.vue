<template>
  <v-layout column>
    <v-flex>
      It is a screen that requires authentication.
    </v-flex>

    <v-flex>
      認証が必要な画面です。
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  middleware: 'authenticated'
}
</script>
