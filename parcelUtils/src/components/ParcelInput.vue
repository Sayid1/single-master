<template>
 <fieldset>
    <legend>parcel 区域</legend>
     <input type="text" placeholder="Hello sing-spa">
     {{user}}
  </fieldset>
</template>
<script>
export default {
  name: 'ParcelInput',
  data() {
    return {
      ...this.mapState('user'),
    }
  },
  mounted() {
    console.log(this)
  }
}
</script>