<template>
  <div id="es">
    es
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      // ...this.mapState('user')
    }
  },
  methods: {
    switchs() {
      this.$root.data.globalEventDistributor.dispatch({
        type: 'LOGIN',
        user: {
          id: 2,
          name: 'Jack'
        }
      })
    }
  }
}
</script>