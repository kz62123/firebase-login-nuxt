import firebase from 'firebase/app'
import 'firebase/auth'

if (!firebase.apps.length) {
  // Paste a snippet of your Firebase project.
  // あなたの Firebase プロジェクトのスニペットを張り付けてください。
  firebase.initializeApp({
    apiKey: 'AIzaSyAADC2T4ds6IJ3uw3DpCBszX9r9BUqeo0k',
    authDomain: 'fb-login-nuxt.firebaseapp.com',
    databaseURL: 'https://fb-login-nuxt.firebaseio.com',
    projectId: 'fb-login-nuxt',
    storageBucket: 'fb-login-nuxt.appspot.com',
    messagingSenderId: '696933745511'
  })
}

export { firebase }
