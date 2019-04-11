export default ({ store, redirect, route }) => {
  // If you are not logged in, redirect to home.
  // ログインしていない場合ホームにリダイレクトします。
  if (!store.state.loggedIn) {
    return redirect({
      path: '/',
      query: {
        showMessage: true,
        redirect: route.path
      }
    })
  }
}
